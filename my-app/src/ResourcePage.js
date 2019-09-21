import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default class ResourcePage extends Component {
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
      <body style={{backgroundColor:'#FFF99A', height: '1000px'}}>
      <p> <strong><u>RESOURCE PAGE</u></strong>
          <br /> <br/> 

          <strong>Day Care Near 6155 S. Pulaski Rd Chicago, IL 60629: </strong><br /> <br />   
          Teddy Bear Day Care Center <br /> Address: 6401 S Pulaski Rd, Chicago, IL 60629 <br /> 
          Phone Number: (773) 284-2292 <br /> <br /> 

          <br /> 
          <strong>Day Care Near 6422 S. Kedzie Ave Chicago, IL 60629: </strong><br /> <br />  
          PathWays to Learning Infants <br/>Address:  6541 S Kedzie Ave, Chicago, IL 60629 
          <br/> Phone Number: (312) 747-0639 <br /> <br />
          
          <strong>Day Care Near 5533 S. Sawyer Ave Chicago, IL 60629: </strong><br /> <br />  
          Brilliant Beginnings Bilingual <br/>Address:  5000 W 31st St, Cicero, IL 60804
          <br/> Phone Number: (708) 656-9054 <br/><br/>

          <strong>Library Near 6155 S. Pulaski Rd Chicago, IL 60629: </strong><br /> <br />   
          West Lawn Branch, Chicago Public Library <br /> Address: 4020 W 63rd St, Chicago, IL 60629 <br /> 
          Phone Number: (312) 747-7381 <br /> <br/>

          <strong>Library Near 6422 S. Kedzie Ave Chicago, IL 60629: </strong><br /> <br />  
          Chicago Lawn Branch, Chicago Public Library <br/>Address:  6120 S Kedzie Ave, Chicago, IL 60629 
          <br/> Phone Number: (773) 737-7810
          
      </p>
    </body>
    );
  }
}
