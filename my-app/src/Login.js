import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

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

      <button style={{height:'100px', width:'200px', fontSize:'20px', boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',backgroundColor:'#ffffff'}}> <a href = "/Reg">Prospective Students Get Started </a></button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{height:'100px', width:'200px', fontSize:'20px',boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',backgroundColor:'#ffffff'}}> <a href = "/ResourcePage">Current Students Click Here </a></button>
          </div>
        </body>
    );
  }
}
