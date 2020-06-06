import React from 'react';
import './Item.css'
import {Container, Row, Col} from 'react-bootstrap';

const data = require("../models/fake-data");

class ItemPage extends React.Component
{
    constructor(props){

        super(props);
        this.state = {
          data: props.match.params
        };

        this.getDataFromDB = this.getDataFromDB.bind(this);
     }

    /* this will be replaced later by a database call to Postgres*/
    /* this function finds and pulls the record from the database */
    getDataFromDB()
    {
        /* first check to see what type of product it is */
        if (this.state.data.hasOwnProperty('shoeSKU')) 
        {
            /* then search for the exact match */
            var shoe;
            for(shoe of data.shoes)
            {
                if(shoe.sku === this.state.data.shoeSKU)
                {
                    this.setState({data: shoe});
                    break;
                }
            }
        } 
        else if (this.state.data.hasOwnProperty('tentSKU')) 
        {
            var tent;
            for(tent of data.tents)
            {
                if(tent.sku === this.state.data.tentSKU)
                {
                    this.setState({data: tent});
                    break;
                }
            }
        }
    }

    render()
    {
        console.log(this.state.data);
        this.getDataFromDB();
        return(
            <Container>
            <Row className="item-detail">
              <Col xs={1}></Col>
              <Col>
                <Row>
                  <Col>
                    <div className="item-image" style = {{backgroundImage: "url("+ this.state.data.image + ")" }}></div>
                  </Col>
                  <Col>
                    <div>
                        <h3>{this.state.data.name}</h3>
                        <h1>${this.state.data.price}</h1>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={1}></Col>
            </Row>
          </Container>
        );
    }
}

export default ItemPage;