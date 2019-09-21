import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import $ from 'jquery';
const axios = require('axios');


export default class Reg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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

  handleSubmit(event){
    event.preventDefault();
    let msg = $('form').serializeArray();
     var dataArray = $('form').serializeArray(),
       dataObj = {};
     $(dataArray).each(function(i, field){
       dataObj[field.name] = field.value;
     })
     console.log(dataObj);

     axios.post('http://localhost:3001/api/putData', {
       id: 0,
       message: dataObj,
     });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Alert variant="primary">
        <a href="/"><img src = "/homeicon.png" align="right" height="50px" width="50px"/></a>
          <Alert.Heading>Forma de Inscripción</Alert.Heading>
        </Alert>
        <Col sm={8}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Nombre y Apellido</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name = "First Name"/>

            <FormControl name = "Last Name"/>
          </InputGroup>
        </Col>
        <Col sm={8}>
          <InputGroup>
            <InputGroup.Prepend><InputGroup.Text>Fecha De Nacimiento</InputGroup.Text></InputGroup.Prepend>
            <FormControl name = 'Birth date'/>
          </InputGroup>
        </Col>
        <br/>
        <Col sm={8}>
          <InputGroup>
            <InputGroup.Prepend><InputGroup.Text>Correo Electrónico</InputGroup.Text></InputGroup.Prepend>
            <FormControl name = 'Email'/>
          </InputGroup>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>Estado Civil</Card.Body>
            <Card.Body>
              <Form.Check type="radio" label="Soltero/a" name = "Marital Status" value = 'Soltero/a'/>
              <Form.Check type="radio" name = "Marital Status" label="Casado/a" value = 'Casado/a'/>
              <Form.Check type="radio" name = "Marital Status" label="Viduo/a" value = 'Viduo/a'/>
              <Form.Check type="radio" name = "Marital Status" label="Divorciado/a" value = 'Divorciado/a'/>
              <input type="radio" name="Estado Civil" value=""/> Other <input type="text" name="Marital Status"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>Género</Card.Body>
            <Card.Body>
              <Form.Check type="radio" label="Masculino" name = 'Gender'/>
              <Form.Check type="radio" label="Femenino" name = 'Gender'/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>Información de Contacto</Card.Body>
            <Card.Body>
              Número de telefono de casa: <FormControl name = 'Home Phone Number'/><br/>
            Nombre de Contacto de Emergencia: <FormControl name = 'Emergency Number'/><br/>
          Número de celular: <FormControl name = 'Cell Number'/><br/>
        Parentesco: <FormControl name = 'Relationship to You'/><br/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>¿Es Hispano o Latino?</Card.Body>
            <Card.Body>
              <Form.Check type="radio" name='Hispanic' value = 'Yes'label="Si"/>
              <Form.Check type="radio" name='Hispanic' value = 'No'label="No"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>Are you from one or more of the following racial groups?</Card.Body>
            <Card.Body>
              <Form.Check type="checkbox" label="American Indian or Alaska Native"/>
              <Form.Check type="checkbox" label="Asian"/>
              <Form.Check type="checkbox" label="Black or African American"/>
              <Form.Check type="checkbox" label="Native Hawaiian or Pacific Islander"/>
              <Form.Check type="checkbox" label="White"/>
              <Form.Check type="checkbox" label="Hispanic or Latino"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>¿Es inglés su segundo idioma?</Card.Body>
            <Card.Body>
              <Form.Check type="radio" label="Si"/>
              <Form.Check type="radio" label="No"/>
              ¿Cuál es tu primer idioma? <input type="text" name="Native Language"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={8}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Tiempo pasado en los Estados Unidos</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
          </InputGroup>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>¿Cómo se enteró acerca de PODER?</Card.Body>
            <Card.Body>
              <Form.Check type="radio" label="Amigo o Familiar"/>
              <Form.Check type="radio" label="Organización Comunitaria"/>
              <Form.Check type="radio" label="Iglesia"/>
              <Form.Check type="radio" label="Otro"/>
              <Form.Check type="radio" label="Voluntario"/>
              <Form.Check type="radio" label="Internet"/>
              <Form.Check type="radio" label="Folleto"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>¿Cual es la razón principal que usted tuvo para eligir PODER?</Card.Body>
            <Card.Body>
              <Form.Check type="radio" label="Aprender Ingles"/>
              <Form.Check type="radio" label="Obtener un trabajo"/>
              <Form.Check type="radio" label="Entrenamiento/asistencia de empleo"/>
              <Form.Check type="radio" label="Computadoras/tecnologia"/>
              <Form.Check type="radio" label="Otro"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>Por favor seleccione el sitio del programa de PODER donde desea recibir las clases</Card.Body>
            <Card.Body>
              <Form.Check type="radio" label="Pulaski/Marquette Bank (6155 S. Pulaski)" name="place" value="pulaski"/>
              <Form.Check type="radio" label="Kedzie/MFS (6422 S. Kedzie)" name="place" value="kedzie"/>
              <Form.Check type="radio" label="Sawyer/St. Gall Parish (5533 S. Sawyer)" name="place" value="sawyer"/>
              <Form.Check type="radio" label="Stevenson/MFS (8010 S. Kostner)" name="place" value="kostner"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
          <Col sm={4}>
            <Card>
              <Card.Body>Por favor seccione el tiempo de clase preferida</Card.Body>
              <Card.Body>
                <Form.Check type="radio" name = "Time Preference" label="Mañana" value = "Mañana"/>
                <Form.Check type="radio" name = "Time Preference" label="Noches" value = "Noches"/>
              </Card.Body>
            </Card>
          </Col>
          <br/>
          <Col sm={4}>
            <Card>
              <Card.Body>¿Cual es su principal medio de transporte?</Card.Body>
              <Card.Body>
                <Form.Check type="radio" label="Caminar" name = "Primary Transportation" value = "Walking"/>
                <Form.Check type="radio" name = "Primary Transportation" label="Bus" value = "Bus"/>
                <Form.Check type="radio" name = "Primary Transportation" label="Carro" value = "Car"/>
                <Form.Check type="radio" name = "Primary Transportation" label="Tren" value = "Train"/>
                <Form.Check type="radio" name = "Primary Transportation"label="Maneja un amigo o familiar" value = "Carpool"/>
              </Card.Body>
            </Card>
          </Col>
        <br/>
        <Card>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>País De Origen</Form.Label>
              <Form.Control type="Text" placeholder="Enter country of origin" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Número de celular</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control />
            </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Código Postal</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
        </Card>

        <br/>
        <Button type="submit" variant="outline-primary">Submit & Take Exam</Button>
        //<a href="/Exam"></a>
      </form>
    );
  }
}
