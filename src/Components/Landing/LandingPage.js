import React from 'react';
//import {Nav, NavDropdown, Navbar, Form, Button, FormControl} from 'react-bootstrap';
import './Landing.css'
import {Link} from 'react-router-dom';

function LandingPage()
{
    return(
        <div className = "page">
            <Link to="/">Home</Link>
            <p>Hello World</p>
        </div>
    )
}

export default LandingPage;