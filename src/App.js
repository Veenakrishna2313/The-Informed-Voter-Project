
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Landing from "./Components/Layout/Landing";
import Policing from "./Components/Scrollytelling/Policing";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
          <Route exact path="/Landing" component={Landing}></Route>
          <Landing />
          <Policing/>
          <Footer />
       
      </Router>
    </div>
  );
}

export default App;
