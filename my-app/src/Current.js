import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';

export default class Current extends Component {
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
      <p>
        <Alert variant="primary">
        <a href="/"><img src = "/homeicon.png" align="right" height="50px" width="50px"/></a>
            <Alert.Heading>Current Students Landing Page</Alert.Heading>
        </Alert>
        <h1> Welcome Back! You have earned <b>1 Star</b> for logging in today! </h1>
          <h2>Find a list of resources <a href="/ResourcePage">here</a> <br/>
        Practice your english <a href="/Activity">here</a></h2>
        <h2>Track your progress <a href="/Tracker">here </a></h2>

      </p>
    );
  }
}
