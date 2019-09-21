import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default class Login extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <body style={{backgroundColor:'#2FABD6', height: '1000px'}}>

      <div align = "center">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <img src="poderlogo.png" width="600px" height="250px"/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      <Button variant="light" style={{height:'100px', width:'200px'}}> <a href = "/Reg">Prospective Students Get Started </a></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="light" style={{height:'100px', width:'200px'}}> <a href = "/ResourcePage">Current Students Click Here </a></Button>
      <br/>
      <br/>
      <Col sm={6}>
        <Card>
          <Card.Title>Si conoces a alguien, por favor refiéralos.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">If you know someone who would benefit, please refer them.</Card.Subtitle>
        </Card>
      </Col>
      <br/>
      <Col sm={6}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Nombre y Apellido</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup><br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Correo Electrónico</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Número de celular</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
        <Button variant="light">Refer!</Button>
      </Col>
      </div>
        </body>
    );
  }
}
