import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import * as ReactBootStrap from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Policing from "../Scrollytelling/Policing"

export default class Landing extends Component {

  
  render() {
    return (
      <div id="Landing">
        <Jumbotron
          style={{
            backgroundColor: "white",
          }}
        >
          <Container>
            <p align="justify" class="display-3 text-center ">
              Locally elected officials make decisions that directly affect your
              everyday life. Voting in local elections gives you the power to
              hurt or help the ones that you care about.
            </p>
          </Container>
        </Jumbotron>
        <Jumbotron
          style={{
            backgroundColor: "white",
          }}
        >
          <Container>
            <p align="justify" class="display-4 text-center">
              What's a topic you're passionate about? For each topic, we'll show
              you how local officials could affect your day to day experience.
            </p>
          </Container>

          <CardDeck id="container">
            <div className="divstyle" style={{ display: "flex", width: "30%" }}>
              <Card
                bg="dark"
                variant="dark"
                style={{
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Text>Law Enforcement</Card.Text>
                  <button
                    className="button-default"
                    onClick={this.props.onClicking}
                  >
                    <Card.Title>Policing</Card.Title>
                  </button>

                  <Card.Text>
                    Should police officers in King County receive mandatory
                    de-escalation training?
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div style={{ display: "flex", width: "30%" }}>
              <Card
                bg="primary"
                variant="primary"
                style={{
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Text>Housing</Card.Text>
                  <Card.Title>Rent Control</Card.Title>
                  <Card.Text>
                    Should there be a rental cap on all properties with Seattle
                    City Limits?
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div style={{ display: "flex", width: "30%" }}>
              <Card
                bg="success"
                variant="success"
                style={{
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Text>Environment</Card.Text>
                  <Card.Title>Parks and Rec</Card.Title>
                  <Card.Text>
                    Should King County increase taxes to fund recreational
                    aquatics, and wellness programs?
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </CardDeck>
        </Jumbotron>
      </div>
    );
  }
}

