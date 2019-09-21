import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default class Summary extends Component {
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
      <p> You got a 18/20 on the Entrance Exam!

<form>
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
    );
  }
}
