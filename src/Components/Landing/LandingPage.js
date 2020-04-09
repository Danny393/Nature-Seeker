import React from 'react';
import './Landing.css'
import {Link} from 'react-router-dom';
import { Container, Col, Row, Image} from 'react-bootstrap';

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
       return(
           <Container>
               <Col>
               <Row className = "item-rows">
                   {this.state.shoes.map((shoe) => (
                   <Link to={{
                       pathname: "store/shoe/"+shoe.sku,
                       state: {sku: shoe.sku}
                    }}>
                        <div className="item-card">
                            <Image className ="display-grid-img" src={shoe.image} style = {{resizeMode: "contain"}}>   
                            </Image>
                            <p>{shoe.name}</p>
                        </div>
                   </Link>
                   ))}
               </Row>
               </Col>
           </Container>
       );
    }
}

export default LandingPage;