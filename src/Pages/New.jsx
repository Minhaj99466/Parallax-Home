import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import TextBlock from "./Text";
// import { useNavigate } from "react-router-dom";

import Fuana from "../assets/img.png";
import { Button } from "@material-tailwind/react";

function New() {

  return (
    <div className="App">
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="layer1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="layer2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="layer3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="layer4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="layer5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.43}>
          <div className="animation_layer parallax" id="layer6"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="layer7"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="layer8"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="layer9"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="layer10"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          {/* <TextBlock/> */}
          <div className="animation" id="stars">
            {/* main head*/}

            <div className="bg-[#ba48646f]  grid grid-cols-1 text-center h-screen place-items-center gap-4 md:grid-cols-2 md:text-left">
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
export default New;
