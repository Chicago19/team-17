import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

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
        Nombre: <input type="text" name="name"/><br/><br/>
        Código Postal: <input type="text" name="zipcode"/><br/><br/>
        Correo Electrónico: <input type="text" name="email"/><br/><br/>
        Cómo se enteró acerca de PODER? <br/>
        <input type="radio" name="referral" value="friendfam"/> Amigo o Familiar <br/>
        <input type="radio" name="referral" value="community"/> Organización Comunitaria <br/>
        <input type="radio" name="referral" value="church"/> Iglesia <br/>
        <input type="radio" name="referral" value="other"/> Otro <br/>
        <input type="radio" name="referral" value="volunteer"/> Voluntario <br/>
        <input type="radio" name="referral" value="internet"/> Internet <br/>
        <input type="radio" name="referral" value="pamphlet"/> Folleto <br/>
        <br/>
        Cual es la razón principal que usted tuvo para eligir PODER? <br/>
        <input type="radio" name="choose" value="english"/> Aprender Ingles <br/>
        <input type="radio" name="choose" value="job"/> Obtener un trabajo <br/>
        <input type="radio" name="choose" value="training"/> Entrenamiento/asistencia de empleo <br/>
        <input type="radio" name="choose" value="computer"/> Computadoras/tecnologia <br/>
        <input type="radio" name="choose" value="other"/> Otro <br/>
        <br/>
        Por favor seleccione el sitio del programa de PODER donde desea recibir las clases: <br/>
        <input type="radio" name="location" value="pulaski"/> Pulaski/Marquette Bank (6155 S. Pulaski) <br/>
        <input type="radio" name="location" value="kedzie"/> Kedzie/MFS (6422 S. Kedzie) <br/>
        <input type="radio" name="location" value="sawyer"/> Sawyer/St. Gall Parish (5533 S. Sawyer) <br/>
        <input type="radio" name="location" value="kostner"/> Stevenson/MFS (8010 S. Kostner) <br/>
        <br/>
        Por favor seccione el tiempo de clase preferida: <br/>
        <input type="radio" name="time" value="morning"/> Manana
        <input type="radio" name="time" value="night"/> Noches <br/>
        <br/>
        Cual es su principal medio de transporte? <br/>
        <input type="radio" name="transportation" value="walk"/> Caminar
        <input type="radio" name="transportation" value="bus"/> Bus <br/>
        <input type="radio" name="transportation" value="car"/> Carro
        <input type="radio" name="transportation" value="train"/> Tren <br/>
        <input type="radio" name="transportation" value="driven"/> Maneja un amigo o familiar <br/>
        <br/>
        Para uso de Oficina Solamente: <br/>
        Registration Date: <input type="text" name="date"/> <br/>
        Keyword: <input type="text" name="keyword"/> <br/>
        Placement exam score: <br/>
        Oral: <input type="text" name="oral"/> <br/>
        Written: <input type="text" name="written"/> <br/>
        Level: <input type="text" name="level"/> <br/>
        Testing date: <input type="text" name="testdate"/> <br/>
        BEST exam: <input type="text" name="best"/>
        ICCB intake form: <input type="text" name="iccb"/>
        Empowerment survey: <input type="text" name="empowerment"/>
      </form>
    );
  }
}
