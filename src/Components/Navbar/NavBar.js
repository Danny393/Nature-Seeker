import React from 'react';
import {Nav, NavDropdown, Navbar, Form, Button, FormControl, Col} from 'react-bootstrap';
import './NavBar.css'
import image from '../../Assests/shoppingCart.png'

class NavBar extends React.Component
{
    
    render()
    {
        return(
            <Navbar variant = "dark" expand="lg" className = "page">
                <Navbar.Brand href="/">Nature Seeker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item>
                        <NavDropdown.Item href="/backpacks">Backpacks</NavDropdown.Item>
                        <NavDropdown.Item href="/tents">Tents</NavDropdown.Item>
                        <NavDropdown.Item href="/sleeping-bags">Sleeping Bags</NavDropdown.Item>
                        <NavDropdown.Item href="/apparel">Apparel</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <button type="button" className="Nav_Button">Search</button>
                        <Col>
                        <Button style = {{backgroundColor: "#2f4f4f", outlineColor: "#2f4f4f", borderColor: "#2f4f4f"}}>
                            <img src={image} alt = "Cart"/> (0)
                        </Button>
                        </Col>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}

export default NavBar;