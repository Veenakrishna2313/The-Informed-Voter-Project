import React, { Component }from 'react';
import * as ReactBootStrap from "react-bootstrap";



class Navbar extends Component {
  render() {
    return (
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="md"
        bg="info"
        variant="light"
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          The Informed Voter Project
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav class="navbar-nav ml-auto">
            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#mission">
              Mission
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#about">
              About
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#seattle">
              Seattle
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    );
  }
}

export default Navbar;