import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import TextBlock from "./Text";
// import { useNavigate } from "react-router-dom";

import Fuana from "../assets/To the stars-cuate (1).png";
import { Button } from "@material-tailwind/react";

function Rocket() {

  return (
    <div className="App">
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="a"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="aa"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.11}>
          <div className="animation_layer parallax" id="b"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="animation_layer parallax" id="c"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="d"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="e"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="f"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="g"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="h"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="i"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.30}>
          <div className="animation_layer parallax" id="j"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.32}>
          <div className="animation_layer parallax" id="k"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.34}>
          <div className="animation_layer parallax" id="l"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.23}>
          <div className="animation_layer parallax" id="m"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="n"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.90}>
          <div className="animation_layer parallax" id="o"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.20}>
          <div className="animation_layer parallax" id="p"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          {/* <TextBlock/> */}
          <div className="animation" id="stars">
            {/* main head*/}

            <div className="bg-[#f0ac46a4]  grid grid-cols-1 text-center h-screen place-items-center gap-4 md:grid-cols-2 md:text-left">
              <div>
                <div>
                  <h1 className=" text-4xl leading-relaxed tracking-wider font-serif text-white">
                    THE ART OF <br /> HIRING
                  </h1>
                </div>
                <div className="h py-5">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. <br /> Lorem Ipsum has been the
                    Industrys{" "}
                  </p>
                </div>
                <div className="pt-5">
                  <Button
                    variant="outlined"
                    className="border-white text-white hover:text-black hover:bg-white mr-2"
                  >
                    Hire Artist
                  </Button>

                  <Button
                    variant="outlined"
                    className="border-white text-white hover:text-black hover:bg-white"
                  >
                    Are you An ARTIST
                  </Button>
                </div>
              </div>
              <div className="hidden sm:block">
                <div>
                  <img className="img h-screen" src={Fuana} alt="" />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
export default Rocket;
