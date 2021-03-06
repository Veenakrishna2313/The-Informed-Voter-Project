import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Landing from "./Components/Layout/Landing";
import Policing from "./Components/Scrollytelling/Policing";
import Reactspring from "./Components/Layout/Reactspring";
import Scrolltrigger from "./Components/Layout/ScrolltriggerGSAP";

import Newanimation from "./Components/Layout/Newanimation";

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
        {/*  <Router>
          <Navbar />

          <Route exact path="">
            <Landing onClicking={this.handleClick} clicked={this.clicked} />
            {this.state.clicked && <Policing onskip={this.handledisappear} />}
          </Route>

          <Route exact path="/Policing">
            <Policing />
          </Route>
        </Router>
        <Reactspring />
        <Footer />*/}
        <Scrolltrigger/>
      </div>
    );
  }
}

export default App;
