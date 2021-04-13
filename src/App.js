
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Landing from "./Components/Layout/Landing";
import Policing from "./Components/Scrollytelling/Policing";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react';


function App() {
  return (
    <React.Fragment className="App">
      <Router>
        <Navbar />        
        <Landing/>     
        <Policing/>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
