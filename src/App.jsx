import React, { Component } from 'react';
import './App.css';
import { Homepage } from './pages/homepage/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import LoginPage from './pages/loginpage/login.page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

class App extends Component {
	unsub = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsub = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef?.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	/**
	 * Same a ngOnDestroy
	 */
	componentWillUnmount() {
		this.unsub();
	}

	render() {
		const {currentUser} = this.props;
		return (
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route
						exact
						path='/login'
						render={() => (currentUser ? <Redirect to='/' /> : <LoginPage />)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);