import React from 'react';
import LandingPage from './Landing/LandingPage';
import NavBar from './Navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main(){
    return(

        <Router>
            <NavBar/>
            <Switch>
                <Route path = "/" exact Component = {LandingPage}/>
                <Route path = "/about-us" exact />
                <Route path = "/shoes" exact />
                <Route path = "/backpacks" exact />
                <Route path = "/tents" exact />
                <Route path = "/sleeping-bags" exact />
                <Route path = "/apparel" exact />
            </Switch>
        </Router>
        
    )
}

export default Main;