import React, {Component} from 'react';
import './App.css';
import {Homepage} from './pages/homepage/homepage';
import {Redirect, Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/header';
import LoginPage from './pages/loginpage/login.page';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import checkout from './pages/checkout/CheckoutPage';

class App extends Component {
  unsub = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;
    
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
    
    // Add Collection Data ONCE
    // addCollectionAndDocuments('collections-overview', collectionsArray.map(({title, items}) => ({title, items})));
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
      <div className = 'App'>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {Homepage}/>
          <Route path = '/shop' component = {ShopPage}/>
          <Route path = '/checkout' component = {checkout}/>
          <Route path = '/login' render = {() => (currentUser ? <Redirect to = '/'/> : <LoginPage/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
