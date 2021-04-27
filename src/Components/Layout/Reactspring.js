import { Spring } from "react-spring";
import { useSpring, animated, config } from "react-spring";
import { Parallax, ParallaxLayer } from "react-parallax";
import { useState, useCallback } from "react";
import img1 from "../Scrollytelling/assets/Avatars/1.png";
import img2 from "../Scrollytelling/assets/Avatars/2.png";
import img3 from "../Scrollytelling/assets/Avatars/3.png";
import img4 from "../Scrollytelling/assets/Avatars/4.png";
import img5 from "../Scrollytelling/assets/Avatars/5.png";
import img6 from "../Scrollytelling/assets/Avatars/6.png";

import VisibilitySensor from "react-visibility-sensor";

const Reactspring = () => {
  const prop1 = useSpring({
    from: { x: 0 },
    to: { x: -500, transform: "scale(0.9)" },
    config: { duration: 1000 }
  });

  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }));


  
  const onScrollFun = useCallback((e) => {
    let scrollValue;
    scrollValue = e.target.scrollTop / (window.innerHeight / 2);
    console.log("Setting ScrollValue to " + scrollValue);
    set({ scroll: scrollValue });
  }, [])

  return (
    <div onScroll={onScrollFun}>
      <animated.img style={{ ...prop1 }} src={img1} />
    </div>
  );
};

export default Reactspring;
