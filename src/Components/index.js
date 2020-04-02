import React from 'react';
import LandingPage from './Landing/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main(){
    return(

        <Router>
            <LandingPage/>
            <p>Under the nav bar</p>
            <Switch>
                <Route path = "/" exact Component = {LandingPage}/>
            </Switch>
        </Router>
        
    )
}

export default Main;