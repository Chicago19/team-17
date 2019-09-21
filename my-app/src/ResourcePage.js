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
      <p> Here are the resources:
          Teddy Bear Day Care Center
          Little Scholars Club          
      </p>
    );
  }
}
