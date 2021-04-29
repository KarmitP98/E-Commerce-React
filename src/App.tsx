import React from 'react';
import './App.css';
import { Homepage } from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';

function App() {
    return (
        <div className = "App">
            <Switch>
                <Route exact path = "/" component = {Homepage}/>
                <Route exact path = "/shop" component = {ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
