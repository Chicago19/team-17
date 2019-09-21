import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';

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
      <p>
        <Alert variant="primary">
        <a href="/"><img src = "/homeicon.png" align="right" height="50px" width="50px"/></a>
            <Alert.Heading>Resource Page</Alert.Heading>
        </Alert>
          <h5>Click on the first link listed to take you to the websites of the associated resource. <br/>
          Click on the second link listed to take you to where the the resource is located on google maps. <br/> <br/>
          </h5>
          <strong>Day Care Near 6155 S. Pulaski Rd Chicago, IL 60629: </strong><br /> <br />
          <a href = "http://teddybeardaycare.com/"> Teddy Bear Day Care Center </a> <br /> <a href="https://maps.google.com/?q=6401 S Pulaski Rd, Chicago, IL 60629">Address: 6401 S Pulaski Rd, Chicago, IL 60629</a> <br />
          Phone Number: (773) 284-2292 <br /> <br />

          <strong>Day Care Near 6422 S. Kedzie Ave Chicago, IL 60629: </strong><br /> <br />
          <a href = "http://teddybeardaycare.com/"></a>  PathWays to Learning Infants <br/><a href="https://maps.google.com/?q=6541 S Kedzie Ave, Chicago, IL 60629 ">Address:  6541 S Kedzie Ave, Chicago, IL 60629 </a>
          <br/> Phone Number: (312) 747-0639 <br /> <br />

          <strong>Day Care Near 5533 S. Sawyer Ave Chicago, IL 60629: </strong><br /> <br />
          <a href = "http://brilliantbeginningsinc.com/"> Brilliant Beginnings Bilingual </a> <br/> <a href="https://maps.google.com/?q=5000 W 31st St, Cicero, IL 60804">Address:  5000 W 31st St, Cicero, IL 60804</a>
          <br/> Phone Number: (708) 656-9054 <br/><br/>

          <strong>Library Near 6155 S. Pulaski Rd Chicago, IL 60629: </strong><br /> <br />
          <a href = "https://www.chipublib.org/locations/77/"> West Lawn Branch, Chicago Public Library</a> <br /><a href="https://maps.google.com/?q=4020 W 63rd St, Chicago, IL 60629"> Address: 4020 W 63rd St, Chicago, IL 60629 </a><br />
          Phone Number: (312) 747-7381 <br /> <br/>

          <strong>Library Near 6422 S. Kedzie Ave Chicago, IL 60629: </strong><br /> <br />
          <a href = "https://www.chipublib.org/locations/19/">Chicago Lawn Branch, Chicago Public Library </a> <br/> <a href="https://maps.google.com/?q= 6120 S Kedzie Ave, Chicago, IL 60629">Address:  6120 S Kedzie Ave, Chicago, IL 60629 </a>
          <br/> Phone Number: (773) 737-7810

      </p>
    );
  }
}
