import React from 'react';
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
    
      getDataFromDB(){
        if (this.state.data.hasOwnProperty('shoeSKU')) {
          var shoe;
          for(shoe of data.shoes){
            if(shoe.sku === this.state.data.shoeSKU){
              this.setState({data: shoe});
              break;
            }
          }
        } else if (this.state.data.hasOwnProperty('shirtSKU')) {
          var shirt;
          for(shirt of data.shirts){
            if(shirt.sku === this.state.data.shirtSKU){
              this.setState({data: shirt});
              break;
            }
          }
        }
      }

    render()
    {
        console.log(this.state.data);
        return(
            
            <p></p>
            
        );
    }
}

export default ItemPage;