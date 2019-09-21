import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Reg from './Reg';
import Exam from './Exam'

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/login" component={Login} />
         <Route path="/reg" component={Reg} />
         <Route path="/exam" component={Exam} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

//function Reg() {
  //return <h2>Reg</h2>;
//}

// function Topic({ match }) {
//   return <h3>Requested Param: {match.params.id}</h3>;
// }

// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Route path={`${match.path}/:id`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

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
