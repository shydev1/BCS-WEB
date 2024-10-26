import React, { useState } from "react";
import "./Slider.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
const images = [
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/gallery%2F0.0.0.jpg?alt=media&token=2ce3e222-5506-407f-a350-8ce0452e1909' ,
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/gallery%2F1.jpg?alt=media&token=6686be68-b245-409a-a680-c1aa49fda2c3' ,
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fg010.jpg?alt=media&token=6527c8b4-eaee-44f6-9772-0410d5a67bbb',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Flovefeast.jpg?alt=media&token=04be7253-7ede-4fb8-ad70-6abb55b0e2a7',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fg06.jpg?alt=media&token=4bf45c88-5528-4d9e-99e5-811752279dd2',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_7167.JPG?alt=media&token=5ce33824-6848-474c-a5eb-b0f1ccbb69e2',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_5080.JPG?alt=media&token=34c76275-95b1-43ee-bb06-117007550e61',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_5079.JPG?alt=media&token=f3c0a3bd-bfc9-4214-aed3-7a9f7f81335e',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_4921.JPG?alt=media&token=bba651ff-3bde-4c96-9dd8-5785215042df',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_4673.JPG?alt=media&token=fdf87d95-50d1-47b8-86d2-564c3880a6ca ',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FPicture%20397.jpg?alt=media&token=45fc19a6-42c3-43e2-bc78-31e59f7dbe06',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_4666.JPG?alt=media&token=87d79e4b-ffd8-483e-988e-8532026f7dac',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_4491.JPG?alt=media&token=fd0fbbe9-2637-4def-92e5-f8e38d48cba1',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FCopy%20of%20KOK%20Coronation%20(5).bmp?alt=media&token=8c3e5ca1-a0d4-4c2b-8be7-2199430b1ba5',
];


function Third() {
  const [data, setData] = useState({ img: "", i: 0 });

  const handleClick = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === "previous-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      {data.img && (
        <div className="w-screen">
          <div
            style={{
              width: "80%",
              height: "80vh",
              // background: "#fff",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              marginTop: "-300px",
              zIndex: 200,
            }}
          >
            <AiOutlineCloseCircle
              onClick={() => imgAction()}
              className="cancles"
              class="cursor-pointer"
              style={{
                position: "absolute",
                top: "10px",
                color: "white",
                // background: "white",
                fontSize: 40,
                borderRadius: 40,
                marginLeft: "80%",
              }}
            />

            <HiArrowCircleLeft
                          class="cursor-pointer"
              style={{ color: "white", fontSize: 40 }}
              onClick={() => imgAction("previous-img")}
            />
            <img className="images" src={data.img} alt="" />
            <HiArrowCircleRight
                          class="cursor-pointer"
              style={{ color: "white", fontSize: 40 }}
              onClick={() => imgAction("next-img")}
            />
            <h1
              style={{
                marginTop: "470px",
                position: "absolute",
              }}
            >
              <a href="/Gallery" style={{ color: "cyan", textDecorationLine: "none" }}>
                See more in Gallery
              </a>
            </h1>
          </div>
        </div>
      )}
      <section className="sliders">
        <div className="slides-tracks">
          <div className="slides">
            {images.map((image, i) => (
              <img
                className="minis"
                key={i}
                src={image}
                onClick={() => handleClick(image, i)}
                alt=""
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Third;