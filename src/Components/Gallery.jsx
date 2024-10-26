// import images from "../src/images/index.js";
import React, { useState } from "react";
import "./IM.css";
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseFill,} from "react-icons/ri"
import { motion } from "framer-motion";
import Appp from "./App.js";
import Slider from "./Slider.jsx";
import Bloger from "./Bloger.jsx";
import Son from "../img/GALLERY.jpg";
import Third from "./Third.jsx";
import Top from "./Top.jsx";



function App() {
  // const images = [
  //   require("../src/images/5.jpg"),
  //   require("../src/images/6.jpg"),
  //   require("../src/images/7.jpg"),
  //   require("../src/images/9.jpg"),
  //   require("../src/images/11.jpg"),
  //   require("../src/images/12.jpg"),
  //   require("../src/images/17.JPG"),
  //   require("../src/images/18.JPG"),
  //   require("../src/images/19.JPG"),
  // ];
  const YouVid = [
    {
        vidlink: "https://www.youtube.com/embed/vJbtojVt2uY"
    },
    {
        vidlink: "https://www.youtube.com/embed/vJbtojVt2uY"
    },
    {
        vidlink: "https://www.youtube.com/embed/EGWbyyUGJOo"
    },
    {
        vidlink: "https://www.youtube.com/embed/HEFH9NEQTrw"
    },
    {
        vidlink: "https://www.youtube.com/embed/vJbtojVt2uY"
    },
    {
        vidlink: "https://www.youtube.com/embed/X9uIBqYwK0g"
    },
]

const [data, setData] = useState({ img: "", i: 0 , });

const handleClick = (img, i) => {
  setData({ img, i });
};

// const imgAction = (action) => {
//   let i = data.i;
//   if(action === 'next-img'){
//     setData({img: images[i + 1], i: i + 1})
//   }
//   if(action === 'previous-img'){
//     setData({img: images[i - 1], i: i - 1})
//   }
//   if(!action){
//     setData({img: '', i: 0})
//   }
// }

  return (
    <>
    

    <section 
    // style={{padding: 30, width: "100%"}}
    className=" w-screen md:pl-20 md:pr-20  pt-2 pb-40">
        <motion.nav
      className=""
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 2,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
      }}
      >
        <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
                        <img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2FGALLERY.jpg?alt=media&token=f1513f86-9227-40bd-bcf1-843cf71cd0f3" style={{ width: '85%', padding: 0,  marginTop: 0    }}/>
        </div>

                  {/* <h1 style={{fontSize:48, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="pb-5  text-center">Gallery</h1> */}
                  </motion.nav>
{/* 
                  <>
      {data.img && 
        <div
        className="pt-32"
          style={{
            width: "100%",
            height: "100%",
            background: "milk",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            marginTop: '-273px',
            zIndex: 200,
            // marginLeft: '-15px'
            
        
          }}
        >
          <button onClick={() => imgAction()} 
                    className="z-50 absolute right-0 top-32"
          // style={{position: 'absolute', zIndex: 100, top: '150px', right: '80px',}}
          >
          <RiCloseFill size={50} color={'#fff'} />
          </button>
          <button onClick={() => imgAction('previous-img')}
          className="z-50 absolute left-0"
           >
          <RiArrowLeftSLine size={50} color={'#fff'} />
            </button>

          <img
            src={data.img}
            style={{width: "100%", maxWidth: "100%",  }}
            alt=""
          />

          <button onClick={() => imgAction('next-img')}
          className="z-50 absolute right-0"
          >
          <RiArrowRightSLine size={50} color={'#fff'} />
          </button>
        </div>
      }
      <section className="slider">
        <div className="slide-track">
          <div className="slide">
            {images.map((image, i, ) => (
              <img
                key={i}
                src={image}
                onClick={() => handleClick(image, i, )}
                alt=""
              />
            ))}
          </div>
        </div>
      </section>
    </> */}

  <div className="pt-20">
     <Top />
     
     <Bloger />
     
     <Third />
  </div>

       <Appp />



      <div className="flex items-center justify-center pt-10">
            <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
            {YouVid.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </section>

        </>
  );
}

export default App;