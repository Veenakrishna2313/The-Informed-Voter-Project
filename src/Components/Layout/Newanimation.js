import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import imag1 from "../Scrollytelling/assets/Avatars/1.png"
import imag2 from "../Scrollytelling/assets/Avatars/2.png";
import imag3 from "../Scrollytelling/assets/Avatars/3.png";
import imag4 from "../Scrollytelling/assets/Avatars/4.png";
import imag5 from "../Scrollytelling/assets/Avatars/5.png";
import imag6 from "../Scrollytelling/assets/Avatars/6.png";


const Newanimation = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
          <img style={{ fontSize: ".5em" }} src={imag1} />
          <h1>Hello from the other s</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <img style={{ fontSize: "3em" }} src={imag2} />
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3em" }}>I'm FadeUp ⛅️</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <div>
          <span style={{ fontSize: "3em" }}>
            <Animator animation={MoveIn(-500, 0)}>
              <img style={{ fontSize: "3em" }} src={imag4} />
            </Animator>
            <Animator animation={MoveIn(500, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Seonghyeok -
            <Animator animation={MoveOut(500, 0)}>
              <img style={{ fontSize: "3em" }} src={imag6} />
            </Animator>
            <Animator animation={MoveOut(-500, 0)}>See you 💛</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "3em" }}>Done</span>
          <span style={{ fontSize: "3em" }}>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};


export default Newanimation;