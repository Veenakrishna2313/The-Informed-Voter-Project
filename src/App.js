import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Landing from "./Components/Layout/Landing";
import Policing from "./Components/Scrollytelling/Policing";
import ThreePointVis from "./Components/ThreePointVis/ThreePointVis";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
      skip: false,
    };

    this.handleClick = this.handleClick.bind(this);

   
  }

 
  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Landing onClicking={this.handleClick} clicked={this.clicked} />
          {this.state.clicked && <Policing onskip={this.handledisappear} />}
        
          <Footer />
        </Router>

        
      </div>
    );
  }
}

export default App;
