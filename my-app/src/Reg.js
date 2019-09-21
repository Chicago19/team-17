import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

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

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Alert variant="primary">
          <Alert.Heading>Forma de Inscripción</Alert.Heading>
        </Alert>
        <Col sm={8}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Nombre y Apellido</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
            <FormControl />
          </InputGroup>
        </Col>
        <Col sm={8}>
          <InputGroup>
            <InputGroup.Prepend><InputGroup.Text>Fecha De Nacimiento</InputGroup.Text></InputGroup.Prepend>
            <FormControl />
          </InputGroup>
        </Col>
        <br/>
        <Col sm={8}>
          <InputGroup>
            <InputGroup.Prepend><InputGroup.Text>Correo Electrónico</InputGroup.Text></InputGroup.Prepend>
            <FormControl />
          </InputGroup>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>Estado Civil</Card.Body>
            <Card.Body>
              <Form.Check type="radio" label="Soltero/a"/>
              <Form.Check type="radio" label="Casado/a"/>
              <Form.Check type="radio" label="Viduo/a"/>
              <Form.Check type="radio" label="Divorciado/a"/>
              <input type="radio" name="Estado Civil" value=""/> Other <input type="text" name="Otro"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>Género</Card.Body>
            <Card.Body>
              <Form.Check type="radio" label="Masculino"/>
              <Form.Check type="radio" label="Femenino"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>Información de Contacto</Card.Body>
            <Card.Body>
              Domicilio: <FormControl/><br/>
              Ciudad: <FormControl/><br/>
              Estado: <FormControl/><br/>
              Código Postal: <FormControl/><br/>
              Número de celular:<FormControl/><br/>
              Número de telefono de casa: <FormControl/><br/>
              Nombre de Contacto de Emergencia: <FormControl/><br/>
              Número de celular: <FormControl/><br/>
              Parentesco: <FormControl/><br/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>¿Es Hispano o Latino?</Card.Body>
            <Card.Body>
              <Form.Check type="radio" label="Si"/>
              <Form.Check type="radio" label="No"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={8}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>País De Origen</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
          </InputGroup>
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
              <Form.Check type="radio" label="Pulaski/Marquette Bank (6155 S. Pulaski)"/>
              <Form.Check type="radio" label="Kedzie/MFS (6422 S. Kedzie)"/>
              <Form.Check type="radio" label="Sawyer/St. Gall Parish (5533 S. Sawyer)"/>
              <Form.Check type="radio" label="Stevenson/MFS (8010 S. Kostner)"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>Por favor seccione el tiempo de clase preferida</Card.Body>
            <Card.Body>
              <Form.Check type="radio" label="Mañana"/>
              <Form.Check type="radio" label="Noches"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Col sm={4}>
          <Card>
            <Card.Body>¿Cual es su principal medio de transporte?</Card.Body>
            <Card.Body>
              <Form.Check type="radio" label="Caminar"/>
              <Form.Check type="radio" label="Bus"/>
              <Form.Check type="radio" label="Carro"/>
              <Form.Check type="radio" label="Tren"/>
              <Form.Check type="radio" label="Maneja un amigo o familiar"/>
            </Card.Body>
          </Card>
        </Col>
        <br/>
        <Button variant="outline-primary"><a href="/Exam">Submit & Take Exam</a></Button>
      </form>
    );
  }
}
