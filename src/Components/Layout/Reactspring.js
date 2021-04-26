import { Spring } from "react-spring";
import { useSpring, animated, animate } from "react-spring";
import {Parallax} from "react-parallax"
import { useState } from "react";
import img1 from "../Scrollytelling/assets/Avatars/1.png";
import img2 from "../Scrollytelling/assets/Avatars/2.png";
import img3 from "../Scrollytelling/assets/Avatars/3.png";
import img4 from "../Scrollytelling/assets/Avatars/4.png";
import img5 from "../Scrollytelling/assets/Avatars/5.png";
import img6 from "../Scrollytelling/assets/Avatars/6.png";


import VisibilitySensor from "react-visibility-sensor";

const Reactspring = () => {

  const prop1 = useSpring({
    from:{x:0},
    to:{x:-1000}

        
  });
  const onScroll = () => {
  animate({ x: 100, delay: 500 })
  }
  return (
    <div>
   
      <animated.img style={{ ...prop1 }} src={img1} />
    </div>
  );
};

export default Reactspring;
