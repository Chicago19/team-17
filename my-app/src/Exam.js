import React, { Component } from "react";
import { Button} from "react-bootstrap";
import $ from 'jquery';
import Alert from 'react-bootstrap/Alert';

export default class Exam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      job: {},
      grade: 0
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
    var score = 0
    var total = 20
    var arr = []; // take an array to store values
    $('input[type="radio"]:checked').each(function () {
      arr.push($(this).val());  //push values in array
    });


    var answers = ['b', 'b', 'a', 'c', 'b', 'd', 'b', 'b', 'c', 'c', 'b', 'c', 'a', 'd', 'b', 'd', 'c', 'a', 'b', 'c'];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === answers[i]){
        score++;
    }
    }

    alert("Final Score: " + (score/total)*100 + "%");
    this.state.grade = (score/total)*100;
    return score;

  }

  render() {
    return (

      <form onSubmit={this.handleSubmit} action="/score">
        <Alert variant="primary">
        <a href="/"><img src = "/homeicon.png" align="right" height="50px" width="50px"/></a>
          <Alert.Heading>Placement Exam</Alert.Heading>
        </Alert>
        <h6>Use the picture below to answer Questions 1-3</h6>
        <img src="1stExamPic.jpg" width="600px" height="200px" />
        <h3>1. What's the mother's name? </h3>
        <input type="radio" name="q1" value="a" /> His name is Pilar.<br />
        <input type="radio" name="q1" value="b" /> Their name is Pilar.<br />
        <input type="radio" name="q1" value="c" /> Her name is Pilar.<br />
        <input type="radio" name="q1" value="d" /> Your name is Pilar.
      <hr></hr>
      <h3>2. There are three ___ on the table.</h3>
        <input type="radio" name="q2" value="a" /> cup<br />
        <input type="radio" name="q2" value="b" /> cake<br />
        <input type="radio" name="q2" value="c" /> cups<br />
        <input type="radio" name="q2" value="d" /> plate
      <hr></hr>
      <h3>3. Is Ramona happy?</h3>
        <input type="radio" name="q3" value="a" /> Yes, she is<br />
        <input type="radio" name="q3" value="b" /> Yes, he is<br />
        <input type="radio" name="q3" value="c" /> Yes, we are.<br />
        <input type="radio" name="q3" value="d" /> Yes, they are. <br />
      <hr></hr>
        <h6>Use the picture below to answer Question 4</h6>
        <img src="2ndExamPic.jpg" width="600px" height="200px" />

        <h3>4. Carmina's Restaurant is open ___.</h3>
        <input type="radio" name="q4" value="a" /> on Sunday<br />
        <input type="radio" name="q4" value="b" /> on Saturday<br />
        <input type="radio" name="q4" value="c" /> on Tuesday<br />
        <input type="radio" name="q4" value="d" /> on Monday <br />
      <hr></hr>
        <h6>Use the picture below to answer Question 5-6</h6>
        <img src="3rdExamPic.jpg" width="600px" height="200px" />

        <h3>5. How many people work at the day-care center?</h3>
        <input type="radio" name="q5" value="a" /> three<br />
        <input type="radio" name="q5" value="b" /> five<br />
        <input type="radio" name="q5" value="c" /> four<br />
        <input type="radio" name="q5" value="d" /> six
      <hr></hr>
      <h3>6. Who works until 8:00 p.m. on Tuesday and Thursday?</h3>
        <input type="radio" name="q6" value="a" /> Dan<br />
        <input type="radio" name="q6" value="b" /> Megan<br />
        <input type="radio" name="q6" value="c" /> Juan<br />
        <input type="radio" name="q6" value="d" /> Sally<br />
      <hr></hr>
        <h6>Use the picture below to answer Question 7</h6>
        <img src="4thExamPic.jpg" width="350px" height="350px" />

        <h3>7. The post office is ___ the parking lot</h3>
        <input type="radio" name="q7" value="a" /> on<br />
        <input type="radio" name="q7" value="b" /> on the corner of<br />
        <input type="radio" name="q7" value="c" /> across from<br />
        <input type="radio" name="q7" value="d" /> next to
      <hr></hr>
      <h3>8. A. What are Katia and Sara doing?<br />
          B. They ___.</h3>
        <input type="radio" name="q8" value="a" /> talking<br />
        <input type="radio" name="q8" value="b" /> is talking<br />
        <input type="radio" name="q8" value="c" /> are talking<br />
        <input type="radio" name="q8" value="d" /> talk
      <hr></hr>
      <h3>9. Does Lee ___ a fever?</h3>
        <input type="radio" name="q9" value="a" /> had<br />
        <input type="radio" name="q9" value="b" /> have<br />
        <input type="radio" name="q9" value="c" /> has<br />
        <input type="radio" name="q9" value="d" /> having
      <hr></hr>
      <h3>10. A. When do you eat lunch?<br />
          B. ___ 12:30
      </h3>
        <input type="radio" name="q10" value="a" /> In<br />
        <input type="radio" name="q10" value="b" /> At<br />
        <input type="radio" name="q10" value="c" /> On<br />
        <input type="radio" name="q10" value="d" /> From
      <hr></hr>
      <h3>11. A How many ___ do we have?<br />
          B Three.</h3>
        <input type="radio" name="q11" value="a" /> tea<br />
        <input type="radio" name="q11" value="b" /> milk<br />
        <input type="radio" name="q11" value="c" /> onions<br />
        <input type="radio" name="q11" value="d" /> bread
      <hr></hr>
      <h3>12. Yoldanda is a teacher now. She ____ a teacher's assistant before.</h3>
        <input type="radio" name="q12" value="a" /> is<br />
        <input type="radio" name="q12" value="b" /> was<br />
        <input type="radio" name="q12" value="c" /> are<br />
        <input type="radio" name="q12" value="d" /> were
      <hr></hr>
      <h3>13. Yesterday, Dan ___ groceries after work.</h3>
        <input type="radio" name="q13" value="a" /> bought<br />
        <input type="radio" name="q13" value="b" /> buy<br />
        <input type="radio" name="q13" value="c" /> buying<br />
        <input type="radio" name="q13" value="d" /> buys <br />
      <hr></hr>
      <h6>Use the picture below to answer Question 14-15</h6>
        <img src="5thExamPic.jpg" width="450px" height="200px" />

        <h3>14. What will you learn in Ms. Cuevas's class?</h3>
        <input type="radio" name="q14" value="a" /> math<br />
        <input type="radio" name="q14" value="b" /> computer repair<br />
        <input type="radio" name="q14" value="c" /> TV repair<br />
        <input type="radio" name="q14" value="d" /> American history
      <hr></hr>
      <h3>15. Which course meets on Mondays and Tuesdays?</h3>
        <input type="radio" name="q15" value="a" /> GED<br />
        <input type="radio" name="q15" value="b" /> Introduction to Computers<br />
        <input type="radio" name="q15" value="c" /> TV and DVD repair<br />
        <input type="radio" name="q15" value="d" /> Citizenship
      <hr></hr>
      <h3>16. A what did Joe buy Sylvia?</h3>
        <input type="radio" name="q16" value="a" /> to her<br />
        <input type="radio" name="q16" value="b" /> she<br />
        <input type="radio" name="q16" value="c" /> them<br />
        <input type="radio" name="q16" value="d" /> her
      <hr></hr>
      <h3>17. Leon has a test tomorrow. He ___ study tonight</h3>
        <input type="radio" name="q17" value="a" /> is<br />
        <input type="radio" name="q17" value="b" /> will<br />
        <input type="radio" name="q17" value="c" /> them<br />
        <input type="radio" name="q17" value="d" /> her
      <hr></hr>
      <h3>18. A When do Mr. and Mrs. Yamada usually eat dinner?</h3>
        <input type="radio" name="q18" value="a" /> eat<br />
        <input type="radio" name="q18" value="b" /> ate<br />
        <input type="radio" name="q18" value="c" /> eats<br />
        <input type="radio" name="q18" value="d" /> eating
      <hr></hr>
      <h3>19. Marcia's back is hurting. She ___ to see a doctor.</h3>
        <input type="radio" name="q19" value="a" /> have<br />
        <input type="radio" name="q19" value="b" /> having<br />
        <input type="radio" name="q19" value="c" /> has<br />
        <input type="radio" name="q19" value="d" /> had
      <hr></hr>
      <h3> 20. A How long does it take to drive to Philadelphia?<br />
          B It takes ___.</h3>
        <input type="radio" name="q20" value="a" /> every day<br />
        <input type="radio" name="q20" value="b" /> about two hours<br />
        <input type="radio" name="q20" value="c" /> often<br />
        <input type="radio" name="q20" value="d" /> twice a month <br />
        <br />

        <Button type="submit" variant="outline-primary">Submit</Button>
        <br />
        <br />
      </form>




    );
  }
}
