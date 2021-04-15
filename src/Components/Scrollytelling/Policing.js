/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Component } from "react";
import { Card } from "react-bootstrap";
import { Scrollama, Step } from "react-scrollama";
const narration = require("..\\Scrollytelling\\assets\\Data\\narration.json");

const narrativeStyle = css`
  img {
    max-width: 500px;
  }
  .main {
    padding: 10vh 2vw;
    display: flex;
    justify-content: space-between;
  }
  .graphic {
    flex-basis: 50%;
    position: sticky;
    top: 15vh;
    width: 100%;
    height: 75vh;
    align-self: flex-center;
  }
  .data {
    font-size: 5rem;
    text-align: center;
  }
  .scroller {
    flex-basis: 50%;
    position: sticky;
  }
  .card-text {
    font-size: 18px !important;
    line-height: 1.3;
  }
  .step {
    margin-right: 10px;
    padding-top: 300px;
    padding-bottom: 200px;
    "&:last-child": {
      margin-bottom: 0;
    }
    font-size: 20px;
  }
  .card {
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    padding: 10%;
    border:none;
  }
  .blurb {
    margin: 10%;
    margin-top: 3%;
    text-align: center;
    font-size: 24px;
    min-height: 100%;
  }
  .desc {
    margin-left: 20px;
    margin-right: 20px;
  }
  .btn {
    color: #575757;
  }
  .card-text-s {
    
    padding: 10%;
    font-size: 24px !important;

    
  }
`;
export default class Narrative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "1",
      progress: 0,
      src: "",
    };
  }

  onStepEnter = ({ element, data }) => {
    this.setState({ data });
    console.log(data);
    //this.update(data);
  };

  onStepExit = ({ element }) => {};

  onStepProgress = ({ element, progress }) => {
    this.setState({ progress });
  };

  update = (data) => {
    var src = "./assets/images/" + data + ".png";
    this.setState({ src });
  };

  render() {
    const { data } = this.state;
    console.log(data);
    const src = "./assets/images/" + data + ".png";
    console.log(src);

    return (
      <div id="Policing">
        <div css={narrativeStyle}>
          <div className="main ">
            <div className="graphic card-img">
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    require(`./assets/images/${this.state.data}.png`).default
                  }
                />
              </Card>
            </div>

            <div className="scroller card-text">
              <Scrollama
                onStepEnter={this.onStepEnter}
                onStepExit={this.onStepExit}
                progress
                onStepProgress={this.onStepProgress}
                offset={0.33}
              >
                {narration.map((narr) => (
                  <Step data={narr.key} key={narr.key}>
                    <div className="step">
                      <Card>
                        <Card.Body>
                          <Card.Title>{narr.description}</Card.Title>
                          <button>Skip</button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Step>
                ))}
              </Scrollama>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
