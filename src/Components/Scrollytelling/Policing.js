/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Component } from "react";
import { Card } from "react-bootstrap";
import { Scrollama, Step } from "react-scrollama";
import { Link, animateScroll as scroll } from "react-scroll";

const narration = require("..\\Scrollytelling\\assets\\Data\\narration.json");



const narrativeStyle = css`
  .transparent {
    background: rgba(0, 151, 19, 0);
  }
  .img {
    max-width: 500px;
  }

  .main {
    padding: 10vh 2vw;
    justify-content: space-between;
  }

  .graphic {
    flex-basis: 10%;
    position: sticky;
    top: 15vh;
    width: 90%;
    height: 50vh;
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
    padding: 20%;
    border: none;
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
      skip: true,
    };

     this.handledisappear = this.handledisappear.bind(this);
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };
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
  handledisappear() {
    console.log("i was clicked");
    
    this.setState({
      skip: !this.state.skip,
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="image-text" id="Policing">
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
                    <div className="step ">
                      <Card className="transparent">
                        <Card.Body>
                          <Card.Title >
                            {narr.description}
                          </Card.Title>

                          <button
                            className="button-default"
                            onClick={this.scrollToTop}
                            type="button"
                          >
                            Skip
                          </button>
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
