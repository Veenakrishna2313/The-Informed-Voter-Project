import React from "react";
import { useState, useEffect, useRef } from "react";

function getCurrentFrame(index) {
  return require(`../Scrollytelling/assets/images/${index}.png`).default;
}

function loadImg(url) {
  const img = new Image();

  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.src = url;
    console.log("Setting img src to " + img.src);
  });
}

const ImageCanvas = ({ scrollHeight, numFrames, width, height }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  console.log("i am rendered");

  console.log("canvas ref is"+ canvasRef);
  console.log("inital use state array has" + images);

  const [frameIndex, setFrameIndex] = useState(0);

  const myStateRef = React.useRef(images);
  const setMyImages = (data) => {
    myStateRef.current = data;
    setImages(data);

 console.log("canvas ref is" + canvasRef);
 console.log("inital use state array has" + images);

  };

  function preloadImages() {
    const promises = [];

    for (let i = 1; i <= numFrames; i++) {
      const imgSrc = getCurrentFrame(i);
      console.log("Loading image " + imgSrc);
      const promise = loadImg(imgSrc);
      promises.push(promise);
    }

    Promise.all(promises).then(setMyImages);
  }

  const handleScroll = () => {
    const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
    const index = Math.min(
      numFrames - 1,
      Math.ceil(scrollFraction * numFrames)
    );

    console.log(
      `Inside Handle Scroll ${scrollFraction} ${window.scrollY} ${window.innerHeight} ${scrollHeight} ${index} ${myStateRef.current.length}`
    );

    // Animation sequence for index 0
    // only reduce the image size now and see if it works!

    if (
      canvasRef.current &&
      myStateRef.current.length >= index &&
      myStateRef.current.length > 0
    ) {
      const context = canvasRef.current.getContext("2d");
      let requestId;

      console.log(
        "Image dimensions are " +
          myStateRef.current[index].width +
          " " +
          myStateRef.current[index].height
      );

      // TODO: On Scroll down reduce width and height
      // TODO: On Scroll up increase width and height
      // TODO: Upper and lower bounds on img resizing.
      
      myStateRef.current[index].width *= 0.95;
      myStateRef.current[index].height *= 0.95;

      const imgrender = () => {
        context.drawImage(
          myStateRef.current[index],
          0,
          0,
          myStateRef.current[index].width,
          myStateRef.current[index].height
        );
        
        requestId = requestAnimationFrame(imgrender);
        cancelAnimationFrame(requestId);
      };

      imgrender();
    }

    setFrameIndex(index);
  };

  const renderCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;
  };

  useEffect(() => {
    console.log("useEffect 1");
    preloadImages();
    renderCanvas();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("useEffect 2");

    if (
      !canvasRef.current ||
      images.length < numFrames ||
      frameIndex < 0 ||
      frameIndex > numFrames
    ) {
      console.log(
        "Returning because frameIndex is " +
          frameIndex +
          " numFrames = " +
          numFrames
      );
      console.log(
        "Returning because canvasRef.current is " + canvasRef.current
      );
      console.log("Returning because images.length is " + images.length);

      return;
    }

    const context = canvasRef.current.getContext("2d");
    let requestId;

    const render = () => {
      context.drawImage(
        images[frameIndex],
        0,
        0,
        images[frameIndex].width,
        images[frameIndex].height
      );
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);

  return (
    <div style={{ height: scrollHeight }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

const applemobile = () => (
  <main>
    <ImageCanvas scrollHeight={4000} width={1158} height={770} numFrames={6} />
    <div className="content">
      <h1>Cras tincidunt lobortis</h1>
      <p>
        Gravida quis blandit turpis cursus in. Tellus in metus vulputate eu
        scelerisque felis. Sed vulputate mi sit amet mauris. Iaculis urna id
        volutpat lacus laoreet. Duis tristique sollicitudin nibh sit. Dui
        vivamus arcu felis bibendum ut tristique. Morbi tincidunt augue interdum
        velit. Diam phasellus vestibulum lorem sed risus ultricies tristique.
        Varius duis at consectetur lorem donec. Massa sed elementum tempus
        egestas sed. Tortor condimentum lacinia quis vel eros donec ac odio
        tempor. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.
        Nunc aliquet bibendum enim facilisis. Volutpat sed cras ornare arcu dui
        vivamus arcu. Faucibus a pellentesque sit amet. Senectus et netus et
        malesuada fames ac turpis egestas integer. Bibendum at varius vel
        pharetra vel. Non enim praesent elementum facilisis leo. Pharetra diam
        sit amet nisl suscipit. Egestas erat imperdiet sed euismod.
      </p>
      <p>
        Tortor aliquam nulla facilisi cras fermentum odio eu feugiat.
        Suspendisse ultrices gravida dictum fusce ut placerat. Semper risus in
        hendrerit gravida rutrum quisque non tellus orci. Sed adipiscing diam
        donec adipiscing tristique risus nec feugiat. Ultrices tincidunt arcu
        non sodales neque sodales ut etiam sit. Vitae proin sagittis nisl
        rhoncus mattis rhoncus urna. Ut etiam sit amet nisl purus in mollis
        nunc. Suspendisse faucibus interdum posuere lorem. Mauris commodo quis
        imperdiet massa. Pretium vulputate sapien nec sagittis aliquam. Lorem
        ipsum dolor sit amet consectetur adipiscing elit pellentesque. Auctor eu
        augue ut lectus arcu bibendum at varius.
      </p>
      <p>
        Commodo viverra maecenas accumsan lacus. Diam vel quam elementum
        pulvinar etiam non. Turpis egestas integer eget aliquet nibh. Cras
        tincidunt lobortis feugiat vivamus at augue. Ornare aenean euismod
        elementum nisi quis. Aliquet enim tortor at auctor urna nunc id cursus.
        Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Et
        odio pellentesque diam volutpat commodo. Euismod nisi porta lorem mollis
        aliquam ut porttitor leo a. Sollicitudin aliquam ultrices sagittis orci.
        Netus et malesuada fames ac turpis egestas maecenas pharetra convallis.
        Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Leo integer
        malesuada nunc vel risus commodo. Dapibus ultrices in iaculis nunc sed.
        Tellus pellentesque eu tincidunt tortor aliquam. Volutpat maecenas
        volutpat blandit aliquam etiam erat velit scelerisque.
      </p>
    </div>
  </main>
);

export default applemobile;
