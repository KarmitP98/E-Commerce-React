import React from 'react';
import './App.css';
import { Homepage } from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import LoginPage from './pages/loginpage/login.page';

function App() {
    return (
        <div className = "App">
            <Header/>
            <Switch>
                <Route exact path = "/" component = {Homepage}/>
                <Route exact path = "/shop" component = {ShopPage}/>
                <Route exact path = "/login" component = {LoginPage}/>
            </Switch>
        </div>
    );
}

export default App;
