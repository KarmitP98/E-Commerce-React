import React, { Component } from 'react';
import './App.css';
import { Homepage } from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import LoginPage from './pages/loginpage/login.page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

class App extends Component<any, any> {
	unsub: any;

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
		return (
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/login' component={LoginPage} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => ({
	setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
