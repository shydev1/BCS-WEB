import React, { useState } from "react";
import "./slide.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
const images = [
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Flovefeast.jpg?alt=media&token=04be7253-7ede-4fb8-ad70-6abb55b0e2a7' ,
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fknockingofhead.jpg?alt=media&token=e1def84b-faa9-454c-939b-4c054d94b8be' ,
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fpapaetonday.jpg?alt=media&token=561d84e9-0e24-4d63-b6c5-ec0b4e062399',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fpapasupremesignature.jpg?alt=media&token=88dbbc57-3530-4a16-9557-8d798bfce564',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Flovefeast.jpg?alt=media&token=04be7253-7ede-4fb8-ad70-6abb55b0e2a7',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fmarriageblessing.jpg?alt=media&token=e6ac182b-f08f-4f9c-a658-48c2c5836356',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fg07.JPG?alt=media&token=60dd6f09-8c6a-4cd3-a83c-799ad55c52ca',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Flovefeast.jpg?alt=media&token=04be7253-7ede-4fb8-ad70-6abb55b0e2a7' ,
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fknockingofhead.jpg?alt=media&token=e1def84b-faa9-454c-939b-4c054d94b8be' ,
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fpapaetonday.jpg?alt=media&token=561d84e9-0e24-4d63-b6c5-ec0b4e062399',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fpapasupremesignature.jpg?alt=media&token=88dbbc57-3530-4a16-9557-8d798bfce564',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_7205.JPG?alt=media&token=40575aa4-38d5-4fe9-9bae-b6a49c5cccb9',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Flovefeast.jpg?alt=media&token=04be7253-7ede-4fb8-ad70-6abb55b0e2a7',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fmarriageblessing.jpg?alt=media&token=e6ac182b-f08f-4f9c-a658-48c2c5836356'
];

function Slider() {
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
              <a style={{ color: "cyan", textDecorationLine: "none" }} href="#">
                See more in Gallery
              </a>
            </h1>
          </div>
        </div>
      )}
      <section className="liders">
        <div className="tracks">
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

export default Slider;