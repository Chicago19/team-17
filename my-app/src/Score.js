import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';


export default class Score extends Component {
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
    alert("You will be emailed with a confirmation of your orientation.")
  }

  render() {
    return (
      <div>
      <Alert variant="primary">
      <a href="/"><img src = "/homeicon.png" align="right" height="50px" width="50px"/></a>
        <Alert.Heading>Orientation Scheduling</Alert.Heading>
      </Alert>
      <p>We have recorded your placement exam score. The next step is choosing an orientation date to come in and get started with the program.

<form onSubmit = {this.handleSubmit}>
<p>Please select your preferred orientation date:</p>
<div>
<input type="radio" id="contactChoice1"
name="contact" value="email"/>
<label for="contactChoice1">Monday September 23rd</label>
<br/>
<input type="radio" id="contactChoice2"
name="contact" value="phone"/>
<label for="contactChoice2">Wednesday September 25th</label>
<br/>
<br/>
</div>
<div>
<button type="submit">Confirm Registration</button>
</div>
</form>
      </p>
      </div>
    );
  }
}
