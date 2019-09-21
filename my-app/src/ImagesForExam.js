import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default class Exam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      job:{}
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
        <img src="1stExamPic.jpg" width="600px" height="200px"/>
        <img src="2ndExamPic.jpg" width="600px" height="200px"/>
        <img src="3rdExamPic.jpg" width="600px" height="200px"/>
        <img src="4thExamPic.jpg" width="600px" height="200px"/>
        <img src="5thExamPic.jpg" width="600px" height="200px"/>
        <img src="6thExamPic.jpg" width="600px" height="200px"/>
      
      
    );
  }
}