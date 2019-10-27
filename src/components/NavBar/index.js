import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"; 

// import "./NavBar.css";

const ExampleToast = () => {
//   const [show, toggleShow] = useState(true);

  return (
    <>
     
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Enter your locations</h1>

      {/* <ExampleToast className="toast"> */}
        {/* We now have Toasts */}
        {/* <span role="img" aria-label="tada">
          🎉
        </span> */}
      {/* </ExampleToast> */}

        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Type a postcode here" />
                <Form.Text className="text-muted">
                 Enter a location to be commuted from.
                 </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Type another postcode here" />
                <Form.Text className="text-muted">
                 Enter another location to be commuted from.
                 </Form.Text>
            </Form.Group>
        </Form>

    </Jumbotron>
  </Container>
);

export default App;
