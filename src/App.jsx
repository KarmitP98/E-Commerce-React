import React, {Component} from 'react';
import './App.css';
import {Homepage} from './pages/homepage/homepage';
import {Redirect, Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/header';
import LoginPage from './pages/loginpage/login.page';
import {checkUserSession} from './redux/user/user.actions';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import checkout from './pages/checkout/CheckoutPage';

class App extends Component {
  
  componentDidMount() {
    const {checkUserSession} = this.props
    checkUserSession()
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
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
