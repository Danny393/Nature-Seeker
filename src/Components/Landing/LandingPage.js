import React from 'react';
import './Landing.css'
import {Link} from 'react-router-dom';
import { Container, Col, Row} from 'react-bootstrap';

const data = require("../models/fake-data");

class LandingPage extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            shoes: data.shoes,
            tents: data.tents
        };
    }

    render()
    {
        console.log("Nice");
       return(
           <Container>
               <Col>
               <Row className = "item-rows">
                   {this.state.shoes.map((shoe) => (
                   <Link key = {shoe.sku} to={{
                       pathname: "store/shoe/"+shoe.sku,
                       state: {sku: shoe.sku}
                    }}>
                        <div className="item-card" style = {{backgroundImage: "url("+ shoe.image + ")" }}>
                        </div>
                        <p>{shoe.name}</p>
                   </Link>
                   ))}
               </Row>
               <Row className = "item-rows">
                   {this.state.tents.map((tent) => (
                   <Link key = {tent.sku} to={{
                       pathname: "store/tent/"+tent.sku,
                       state: {sku: tent.sku}
                    }}>
                        <div className="item-card" style = {{backgroundImage: "url("+ tent.image + ")" }}>
                        </div>
                        <p>{tent.name}</p>
                   </Link>
                   ))}
               </Row>
               </Col>
           </Container>
       );
    }
}

export default LandingPage;