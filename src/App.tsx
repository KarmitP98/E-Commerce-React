import React, { Component } from 'react';
import './App.css';
import { Homepage } from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import LoginPage from './pages/loginpage/login.page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}

	unsub: any;

	componentDidMount() {
		this.unsub = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef?.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}

			// this.setState({ currentUser: user });
			// console.log(user);
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
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/login' component={LoginPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
