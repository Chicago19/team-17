import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Reg from './Reg';
import Exam from './Exam';
import ResourcePage from './ResourcePage';
import Score from './Score'

function App() {
  return (
    <Router>
      <div>


        <Route exact path="/" component={Login} />
         <Route path="/reg" component={Reg} />
         <Route path="/exam" component={Exam} />
         <Route path="/ResourcePage" component={ResourcePage} />
         <Route path="/Score" component={Score} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/reg">Reg</Link>
      </li>
      <li>
        <Link to="/exam">Exam</Link>
      </li>
    </ul>
  );
}

export default App;
