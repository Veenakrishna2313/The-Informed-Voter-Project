import React, { Component }from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";



class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <ReactBootStrap.Navbar
        sticky="top"
        expand="md"
        className="color-nav"
        variant="light"
      >
        <ReactBootStrap.Navbar.Brand onClick={this.scrollToTop}>
          The Informed Voter Project
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav class="navbar-nav ml-auto">
            <Link to="/Landing">
              <ReactBootStrap.Nav.Link href="#Landing">
                Home
              </ReactBootStrap.Nav.Link>
            </Link>
            <ReactBootStrap.Nav.Link href="#Mission">
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