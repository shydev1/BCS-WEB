import React, { useState } from "react";
import "./Slider.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const images = [
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Flovefeast.jpg?alt=media&token=04be7253-7ede-4fb8-ad70-6abb55b0e2a7',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/gallery%2F0.0.0.jpg?alt=media&token=2ce3e222-5506-407f-a350-8ce0452e1909' ,
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/gallery%2F1.jpg?alt=media&token=6686be68-b245-409a-a680-c1aa49fda2c3' ,
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fg010.jpg?alt=media&token=6527c8b4-eaee-44f6-9772-0410d5a67bbb',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fg05.jpg?alt=media&token=875c3747-326e-47a4-abac-3fe114c5a360',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fg06.jpg?alt=media&token=4bf45c88-5528-4d9e-99e5-811752279dd2',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fg07.JPG?alt=media&token=60dd6f09-8c6a-4cd3-a83c-799ad55c52ca',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fg08.jpg?alt=media&token=ca078ea2-9dad-4a91-afc2-3ad4c2c93ab4',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fg09.JPG?alt=media&token=cbc94dbe-2aba-45bf-9574-4cee467c5765',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fgalaery03.JPG?alt=media&token=3cfb4a06-ace3-41a7-adb4-cbb385be9f0e',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fgalery02.JPG?alt=media&token=8a811c86-3027-4591-9ed4-0460355a22fd',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fgalery04.JPG?alt=media&token=a0c9f8fc-8323-4598-8974-12f0cc72bf17',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fgallery01.jpg?alt=media&token=18a61501-ef31-4c5c-926d-865c9ac91656',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fpapaetonday.jpg?alt=media&token=561d84e9-0e24-4d63-b6c5-ec0b4e062399'
];
// const images = [
//   require("../src/images/3.jpg"),
//   require("../src/images/4.jpg"),
//   require("../src/images/5.jpg"),
//   require("../src/images/6.jpg"),
//   require("../src/images/7.jpg"),
//   require("../src/images/9.jpg"),
//   require("../src/images/21.JPG"),
//   require("../src/images/11.jpg"),
//   require("../src/images/13.JPG"),
//   require("../src/images/14.JPG"),
//   require("../src/images/15.JPG"),
//   require("../src/images/16.JPG"),
//   require("../src/images/17.JPG"),
//   require("../src/images/18.JPG"),
//   require("../src/images/19.JPG"),
//   require("../src/images/20.JPG"),
//   require("../src/images/22.JPG"),
//   require("../src/images/23.JPG"),
//   require("../src/images/24.JPG"),
//   require("../src/images/25.JPG"),
//   require("../src/images/26.JPG"),
//   require("../src/images/27.JPG"),
//   require("../src/images/28.JPG"),
//   require("../src/images/29.JPG"),
//   require("../src/images/30.JPG"),
// ];

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
              <Link to={"/Gallery"} style={{ color: "cyan", textDecorationLine: "none" }}>
                See more in Gallery
              </Link>
            </h1>
          </div>
        </div>
      )}
      <section className="sliders">
        <div className="slides-tracks">
          <div className="slides">
            {images.map((image, i) => (
              <img
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