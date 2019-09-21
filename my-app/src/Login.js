import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <body>

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
        <img src="poderlogo.jpg" width="600px" height="200px"/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      <button style={{height:'100px', width:'200px', fontSize:'20px'}}> <a href = "/Reg">Prospective Students Get Started </a></button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{height:'100px', width:'200px', fontSize:'20px'}}> <a href = "https://poderworks.org/">Current Students Click Here </a></button>
          </div>
        </body>
    );
  }
}
