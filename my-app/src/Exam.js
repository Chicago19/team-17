import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Radiobox } from 'react-inputs-validation';

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
      <div>Hello World</div>
      
    );
  }
}
