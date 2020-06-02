import React from 'react';
import LandingPage from './Landing/LandingPage';
import NavBar from './Navbar/NavBar';
import ItemPage from './ItemDetails/ItemPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main(){
    return(

        <Router>
            <NavBar/>
            <Switch>
                <Route path = "/" exact component = {LandingPage}/>
                <Route path = "/about-us" exact />
                <Route path = '/store/shoe/:shoeSKU' component = {ItemPage} />
                <Route path = '/store/tent/:tentSKU' component = {ItemPage} />
                <Route path = "/backpacks" exact />
                <Route path = "/sleeping-bags" exact />
                <Route path = "/apparel" exact />
            </Switch>
        </Router>
        
    )
}

export default Main;