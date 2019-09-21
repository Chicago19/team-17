import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Radiobox } from 'react-inputs-validation';

export default class Exam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  // validateForm() {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();
  // }

  render() {
    return (
      <div >
                <Radiobox
          //tabIndex={2} // Optional.[String or Number].Default: none.
          id="job" // Optional.[String].Default: "".  Input ID.
          name="job" // Optional.[String].Default: "". Input name.
          value={job} // Optional.[String].Default: "".
          optionList={[
            { id: 'engineer', name: 'engineer' },
            { id: 'teacher', name: 'teacher' },
            { id: 'student', name: 'student' }
          ]}
          customStyleContainer={{
            display: 'flex',
            justifyContent: 'flex-start'
          }} // Optional.[Object].Default: {}.
          customStyleOptionListItem={{ marginRight: '20px' }} // Optional.[Object].Default: {}.
          onChange={(job, e) =>{
            this.setState({ job });
            console.log(e);
          }} // Required.[Func].Default: () => {}. Will return the value.
          onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none.
          validationOption={{
            name: 'job', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your .
            check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
            required: true // Optional.[Bool].Default: true. To determin if it is a required field.
          }}
        />
        {/* <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form> */}
      </div>
    );
  }
}
