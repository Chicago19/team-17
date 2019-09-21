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

        Nombre: <input type="text" name="name"/>
        Apellido:<input type="text" name="lastName"/>
      Segunda Nombre:<input type="text" name="middleName"/>
    <br></br>
      Fecha De Nacimiento:<input type="text" name="DOB"/><br/>
      Correo Electrónico: <input type="text" name="email"/><br/><br/>
      <text>Estado Civil:</text> <br></br>
      <input type="radio" name="Estado Civil" value="Soltero/a"/> Single<br/>
      <input type="radio" name="Estado Civil" value="Casado/a"/> Married<br/>
      <input type="radio" name="Estado Civil" value="Viduo/a"/> Widowed<br></br>
      <input type="radio" name="Estado Civil" value="Divorciado/a"/> Divorced<br></br>
      <input type="radio" name="Estado Civil" value=""/> Other<input type="text" name="Otro"/><br></br>
    <br></br>
      <text>Género:</text> <br></br>
      <input type="radio" name="Gender" value="Male"/> Male<br/>
      <input type="radio" name="Gender" value="Female"/> Female<br/><br/>
      Domicilio: <input type="text" name="Address"/><br/>
      Ciudad:<input type="text" name="City"/><br></br>
      Estado:<input type="text" name="State"/><br></br>
      Código Postal: <input type="text" name="Zipcode"/><br></br>

      Numero de celular: <input type="text" name="Zipcode"/><br></br>
      Numero de telefono de casa:<input type="text" name="lastName"/><br></br>
      <br></br>
      Nombre de Contacto de Emergencia:<input type="text" name="Emergency contact name"/><br></br>
      Numero de celular: <input type="text" name="Emergency cell"/><br></br>
      Parentesco:<input type="text" name="Relationship"/><br></br>

      <br></br>
        <text>¿Es Hispano o Latino?</text> <br></br>
        <input type="radio" name="Es Hispano o Latino?" value="Yes"/> Male<br/>
        <input type="radio" name="Es Hispano o Latino?" value="No"/> Female<br/>
      <br></br>
        País De Origen: <input type="text" name="Country of Origin"/>
      <br/><br/>
        <text>Are you from one or more of the following racial groups?</text> <br></br>
        <input type="checkbox" name="Race" value="American Indian or Alaska Native"/> American Indian or Alaska Native<br/>
        <input type="checkbox" name="Race" value="Asian"/> Asian<br/>
        <input type="checkbox" name="Race" value="Black or African American"/> Black or African American<br></br>
        <input type="checkbox" name="Race" value="Native Hawaiian or Pacific Islander"/> Native Hawaiian or Pacific Islander<br></br>
        <input type="checkbox" name="Race" value="White"/> Divorced<br></br>
        <input type="checkbox" name="Race" value="Hispanic or Latino"/> Hispanic<br></br>
      <br></br>
        <text>Identify your primary ethnic group:</text> <br></br>
        <input type="radio" name="Race" value="American Indian or Alaska Native"/> American Indian or Alaska Native<br/>
        <input type="radio" name="Race" value="Asian"/> Asian<br/>
        <input type="radio" name="Race" value="Black or African American"/> Black or African American<br></br>
        <input type="radio" name="Race" value="Native Hawaiian or Pacific Islander"/> Native Hawaiian or Pacific Islander<br></br>
        <input type="radio" name="Race" value="White"/> Divorced<br></br>
        <input type="radio" name="Race" value="Hispanic or Latino"/> Hispanic<br></br>
      <br></br>
        <text>Es inglés su segundo idioma?:</text> <br></br>
        <input type="radio" name="Second Language" value="Yes"/> Yes<br/>
        <input type="radio" name="Second Language" value="No"/> No<br/>
        ¿Cuál es tu primer idioma?: <input type="text" name="Native Language"/>
      <br/><br/>
        Tiempo pasado en los Estados Unidos: <input type="text" name="Time in the USA"/>
      <br/><br/>
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
