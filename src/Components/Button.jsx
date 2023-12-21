import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "./Text";
// import { useNavigate } from "react-router-dom";
import MainImg from '../Images/Rocket/mainImage2.jpeg'

import Fuana from "../Images/FAÜNA.png";
import { Button } from "@material-tailwind/react";
import CardDefault from "./Card";
import FooterWithSocialLinks from "./Footer";

function MyComponent() {
  return (
    <div className="App">
      <Parallax
        pages={3.7}
        style={{ top: "0", left: "0",backgroundColor:'#deb887af'}}
        className="animation"
      >
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.43}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.48}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.22}>
          {/* <TextBlock/> */}
          <div className="animation" id="stars">
            {/* main head*/}

            <div className="bg-[#deb887af]  grid grid-cols-1 text-center h-screen place-items-center gap-4 md:grid-cols-2 md:text-left">
              <div>
                <div>
                  <h1 className=" text-4xl leading-relaxed tracking-wider font-serif ">
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
                    className=" text-black hover:text-white hover:bg-[#bdab94af] mr-2"
                  >
                    Hire Artist
                  </Button>

                  <Button
                    variant="outlined"
                    className=" text-black hover:text-white hover:bg-[#bdab94af] "
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
          
        {/* </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.2}
          style={{
            backgroundColor: "#dab391",
          }}
        > */}
          <div className="w-screen bg-[#ded9d384] my-10">
            <div className="flex justify-center py-7">
              <h1 className="text-4xl   font-serif font-semibold ">
                Explore With Us
              </h1>
            </div>
            <div>
              <div className="ss flex justify-around ">
                <CardDefault />
              </div>
            </div>
          </div>

          {/* </ParallaxLayer> */}
          {/* <ParallaxLayer offset={3} speed={0.2}> */}
          <div className="bg-[#e5e5e5] grid grid-cols-1 text-center h-96 place-items-center gap-4 md:grid-cols-2 md:text-left">
          <div className="hidden sm:block">
            <div>
              <img className="h-96" src={MainImg} alt="" />
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-4xl leading-relaxed tracking-wider font-serif">
                ART IS FUTURE <br /> OF (kriːeɪˈtɪvɪti)
              </h1>
            </div>
            <div className="py-5">
              <p className="font-serif ">
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br /> Lorem Ipsum has been the Industrys{" "} */}
                Art goes beyond limits and opens up new worlds of imagination.<br/> In the world of creativity, art is the guiding force,<br/> paving the way for new ideas and endless possibilities.
              </p>
            </div>
          </div>
        </div>

          </div>
        </ParallaxLayer>
          <ParallaxLayer offset={3} style={{ height:'50px'}} speed={0.20}>
        
          <div className="h-28 w-screen bg-white">
            <FooterWithSocialLinks />
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}
export default MyComponent;
