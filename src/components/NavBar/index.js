import React, {createRef, createClass} from "react";
import ReactDOM from "react-dom"; 

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"; 

import Geocode from "react-geocode";
import { func } from "prop-types";




class MyNav extends React.Component{
    constructor(props){
        super(props);
        this.state = { postcode: ''}; 
        }
        handleChange = event => {
            this.setState({postcode: event.target.value}); 
        };

        
    render(){
  return ( 
    <React.Fragment>
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">OptiMove</h1>
        <Form>
          <h3>Enter your locations</h3>
            <Form.Group controlId="exampleForm.ControlTextarea1">
             <Form.Control 
             type="textarea" 
             placeholder="Type a postcode here" 
             componentClass="input"
             value={this.state.postcode}
             onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control type="textarea" placeholder="Type another postcode here" />  
            </Form.Group>

            <Button variant="primary" type="submit">
    Submit
  </Button>
    </Form>
    <p>entered data test: {this.state.postcode}</p>
    
    
    </Jumbotron>
    
  </Container>
 </React.Fragment>
  )

    }
};
export default MyNav; 