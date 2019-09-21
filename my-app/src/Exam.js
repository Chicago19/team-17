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
      
      <form onSubmit={this.handleSubmit}>
      <h3>Question 1</h3>
      <input type="radio" name="q1" value="male"/> A<br/>
      <input type="radio" name="q1" value="female"/> B<br/>
      <input type="radio" name="q1" value="female"/> C<br/>
      <input type="radio" name="q1" value="other"/> D

      <h3>Question 2</h3>
      <input type="radio" name="q2" value="male"/> A<br/>
      <input type="radio" name="q2" value="female"/> B<br/>
      <input type="radio" name="q2" value="female"/> C<br/>
      <input type="radio" name="q2" value="other"/> D

      <h3>Question 3</h3>
      <input type="radio" name="q3" value="male"/> A<br/>
      <input type="radio" name="q3" value="female"/> B<br/>
      <input type="radio" name="q3" value="female"/> C<br/>
      <input type="radio" name="q3" value="other"/> D

      <h3>Question 4</h3>
      <input type="radio" name="q4" value="male"/> A<br/>
      <input type="radio" name="q4" value="female"/> B<br/>
      <input type="radio" name="q4" value="female"/> C<br/>
      <input type="radio" name="q4" value="other"/> D

      <h3>Question 5</h3>
      <input type="radio" name="q5" value="male"/> A<br/>
      <input type="radio" name="q5" value="female"/> B<br/>
      <input type="radio" name="q5" value="female"/> C<br/>
      <input type="radio" name="q5" value="other"/> D

      <h3>Question 6</h3>
      <input type="radio" name="q6" value="male"/> A<br/>
      <input type="radio" name="q6" value="female"/> B<br/>
      <input type="radio" name="q6" value="female"/> C<br/>
      <input type="radio" name="q6" value="other"/> D

      <h3>Question 7</h3>
      <input type="radio" name="q7" value="male"/> A<br/>
      <input type="radio" name="q7" value="female"/> B<br/>
      <input type="radio" name="q7" value="female"/> C<br/>
      <input type="radio" name="q7" value="other"/> D

      <h3>Question 8</h3>
      <input type="radio" name="q8" value="male"/> A<br/>
      <input type="radio" name="q8" value="female"/> B<br/>
      <input type="radio" name="q8" value="female"/> C<br/>
      <input type="radio" name="q8" value="other"/> D

      <h3>Question 9</h3>
      <input type="radio" name="q9" value="male"/> A<br/>
      <input type="radio" name="q9" value="female"/> B<br/>
      <input type="radio" name="q9" value="female"/> C<br/>
      <input type="radio" name="q9" value="other"/> D

      <h3>Question 10</h3>
      <input type="radio" name="q10" value="male"/> A<br/>
      <input type="radio" name="q10" value="female"/> B<br/>
      <input type="radio" name="q10" value="female"/> C<br/>
      <input type="radio" name="q10" value="other"/> D

      <h3>Question 11</h3>
      <input type="radio" name="q11" value="male"/> A<br/>
      <input type="radio" name="q11" value="female"/> B<br/>
      <input type="radio" name="q11" value="female"/> C<br/>
      <input type="radio" name="q11" value="other"/> D

      <h3>Question 12</h3>
      <input type="radio" name="q12" value="male"/> A<br/>
      <input type="radio" name="q12" value="female"/> B<br/>
      <input type="radio" name="q12" value="female"/> C<br/>
      <input type="radio" name="q12" value="other"/> D

      <h3>Question 13</h3>
      <input type="radio" name="q13" value="male"/> A<br/>
      <input type="radio" name="q13" value="female"/> B<br/>
      <input type="radio" name="q13" value="female"/> C<br/>
      <input type="radio" name="q13" value="other"/> D

      <h3>Question 14</h3>
      <input type="radio" name="q14" value="male"/> A<br/>
      <input type="radio" name="q14" value="female"/> B<br/>
      <input type="radio" name="q14" value="female"/> C<br/>
      <input type="radio" name="q14" value="other"/> D

      <h3>Question 15</h3>
      <input type="radio" name="q15" value="male"/> A<br/>
      <input type="radio" name="q15" value="female"/> B<br/>
      <input type="radio" name="q15" value="female"/> C<br/>
      <input type="radio" name="q15" value="other"/> D

      <h3>Question 16</h3>
      <input type="radio" name="q16" value="male"/> A<br/>
      <input type="radio" name="q16" value="female"/> B<br/>
      <input type="radio" name="q16" value="female"/> C<br/>
      <input type="radio" name="q16" value="other"/> D

      <h3>Question 17</h3>
      <input type="radio" name="q17" value="male"/> A<br/>
      <input type="radio" name="q17" value="female"/> B<br/>
      <input type="radio" name="q17" value="female"/> C<br/>
      <input type="radio" name="q17" value="other"/> D

      <h3>Question 18</h3>
      <input type="radio" name="q18" value="male"/> A<br/>
      <input type="radio" name="q18" value="female"/> B<br/>
      <input type="radio" name="q18" value="female"/> C<br/>
      <input type="radio" name="q18" value="other"/> D

      <h3>Question 19</h3>
      <input type="radio" name="q19" value="male"/> A<br/>
      <input type="radio" name="q19" value="female"/> B<br/>
      <input type="radio" name="q19" value="female"/> C<br/>
      <input type="radio" name="q19" value="other"/> D

      <h3>Question 20</h3>
      <input type="radio" name="q20" value="male"/> A<br/>
      <input type="radio" name="q20" value="female"/> B<br/>
      <input type="radio" name="q20" value="female"/> C<br/>
      <input type="radio" name="q20" value="other"/> D <br/>
      </form>
      
    );
  }
}
