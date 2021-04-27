import React from 'react';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardImg } from "react-bootstrap";

import img1 from "../Scrollytelling/assets/Avatars/1.png";
import img2 from "../Scrollytelling/assets/Avatars/2.png";
import img3 from "../Scrollytelling/assets/Avatars/3.png";
import img4 from "../Scrollytelling/assets/Avatars/4.png";
import img5 from "../Scrollytelling/assets/Avatars/5.png";
import img6 from "../Scrollytelling/assets/Avatars/6.png";

export default function ScrolltriggerGSAP() {

 
  const ref = useRef(null);
   gsap.registerPlugin(ScrollTrigger); 

  useEffect(() => {

   
    gsap
      .timeline()
      .to("#img1", {
        x: 300,
        duration: 2,
        scale: 0.5,
        delay: 2,
        ScrollTrigger: {
          trigger: "img1",
          marker: true,
        },
      })
      .fromTo(
        "#img2",
        { x: 0, y: 0, duration: 3, opacity: 0 },
        { x: 500, y: -350, duration: 3, opacity: 1 }
      )
      .to("#img2", { scale: 0.5, duration: 1 })
      .fromTo(
        "#img3",
        { x: 0, y: 0, duration: 1, opacity: 0 },
        { x: 250, y: -700, duration: 3, opacity: 1 }
      )
      .to("#img3", { scale: 0.5, duration: 1 });
    

    
  }, []);

  


  return (
    <div className="mainContainer">
      <Card>
        <CardImg ref={ref} id="img1" src={img1} />
        <CardImg ref={ref} id="img2" src={img2} />
        <CardImg ref={ref} id="img3" src={img3} />
      </Card>
     
     
    </div>
  );
}
