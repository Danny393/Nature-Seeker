import React from 'react';
import {Nav, NavDropdown, Navbar, Form, Button, FormControl} from 'react-bootstrap';
import './Landing.css'
import image from '../../Assests/shoppingCart.png'

class LandingPage extends React.Component
{
    
    render()
    {
        return(
            <Navbar variant = "dark" expand="lg" className = "page">
                <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/hiking-products">Hiking</NavDropdown.Item>
                        <NavDropdown.Item href="/camping-products">Camping</NavDropdown.Item>
                        <NavDropdown.Item href="/fishing-products">Fishing</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Equipment</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Clothing</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="warning">Search</Button>
                    <Button style = {{backgroundColor: "#2f4f4f", outlineColor: "#2f4f4f", borderColor: "#2f4f4f"}}>
                        <img src={image} alt = "Cart"/>(0)
                    </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}

export default LandingPage;