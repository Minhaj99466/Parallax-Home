import img from '../../../src/assets/img.png';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import MainContent from 'path-to-your-first-code/MainContent';

function Hello() {
  return (
    <div>
      {/* Render the MainContent component here */}
      {/* <MainContent /> */}

      {/* Your existing Parallax code */}
      <Parallax
        pages={3}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover'
        }}
      >
        <ParallaxLayer
          offset={0}
          style={{
            backgroundImage: `url('https://miro.medium.com/v2/resize:fit:1400/1*HtouKgQBL-ZjROumsUOkWQ.gif')`,
            backgroundSize: "cover",
            opacity: "20%",
          }}
          className="center"
        >
          <div>Page 1</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLt-useKbhjgnYvesC4ZgaY_Jl03fw9MdnPMfYHm7nLhvqDo7o0oG-Jes5PzVid79oR_g&usqp=CAU')`,
            backgroundSize: "cover",
            opacity: "20%",
          }}
          className="center "
        >
          <div>Page 2</div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} className="center">
          <div
            className="w-screen h-screen opacity-50"
            style={{
              backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/003/417/422/non_2x/parallax-background-design-vector.jpg')`,
              backgroundSize:'cover',
              opacity:'20%'
            }}
          >
            Page 3
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Hello;
