import React, {createRef, createClass} from "react";
import ReactDOM from "react-dom"; 

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"; 

class MyNav extends React.Component{
    constructor(props){
        super(props);
        this.state = { postcode: ''}; 
        this.state = { postcode2: ''}; 
        this.pInput1 = '';
        this.pInput2 = '';
        this.state = {submitted: ''};
        }
        handleChange = event => {
            this.setState({postcode: event.target.value}); 
        };
        handleChange2 = event => {
          this.setState({postcode2: event.target.value}); 
      };
      handleSubmit = event => {
        this.pInput1 = this.state.postcode;
        this.pInput2 = this.state.postcode2;
        this.setState({submitted: "Done"});
        event.submit();
        var hello = "jsjs;";
      };

      

        
    render(){
      
  return ( 
    <React.Fragment>
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">OptiMove</h1>
        <Form on onSubmit={this.handleSubmit}>
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
            <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Control type="textarea" 
            placeholder="Type another postcode here"
            componentClass="input"
            value={this.state.postcode2}
             onChange={this.handleChange2}
             />  
            </Form.Group>

            <Button variant="primary" type="submit"> 
    Submit
  </Button>
            </Form>

    <p>entered data test: {this.state.postcode}</p>
    <p>entered data test: {this.state.postcode2}</p>
    <p>{this.state.submitted}</p>
    
    
    </Jumbotron>
    
  </Container>
 </React.Fragment>
  )

    }
};
export default MyNav; 
