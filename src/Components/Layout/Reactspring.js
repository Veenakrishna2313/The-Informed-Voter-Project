import { Spring } from "react-spring";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import img1 from "../Scrollytelling/assets/Avatars/1.png";
import img2 from "../Scrollytelling/assets/Avatars/2.png";
import img3 from "../Scrollytelling/assets/Avatars/3.png";
import img4 from "../Scrollytelling/assets/Avatars/4.png";
import img5 from "../Scrollytelling/assets/Avatars/5.png";
import img6 from "../Scrollytelling/assets/Avatars/6.png";


import VisibilitySensor from "react-visibility-sensor";

const Reactspring = () => {
  const [flip, set] = useState(false);
  const props = useSpring({
    
  });

  return (
    <div>
      <img src={img1} />
    </div>
  );
};

export default Reactspring;
