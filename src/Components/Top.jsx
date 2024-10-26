import React, { useState } from "react";
import "./Slider.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
const images = [
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_4673.JPG?alt=media&token=fdf87d95-50d1-47b8-86d2-564c3880a6ca' ,
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_4921.JPG?alt=media&token=bba651ff-3bde-4c96-9dd8-5785215042df' ,
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_5079.JPG?alt=media&token=f3c0a3bd-bfc9-4214-aed3-7a9f7f81335e',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_5080.JPG?alt=media&token=34c76275-95b1-43ee-bb06-117007550e61',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_8470.JPG?alt=media&token=121a3009-68ec-475f-a37e-c92d27348ed1',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_8712.JPG?alt=media&token=2bb91c27-7cfa-459c-ac36-4d249aa8cd52',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_8711.JPG?alt=media&token=47d3f5f6-4d9a-4167-9110-f37e2400df41',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_8704.JPG?alt=media&token=26d9e6c1-9f33-414e-99a9-a5f2795221c8',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FKOK%20Coronation%20(4).bmp?alt=media&token=194cdd33-693c-4351-82a8-1bd0ab037996',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_8593.JPG?alt=media&token=a4cdd9bf-c960-42b9-867e-20d45510f7ab',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_8568.JPG?alt=media&token=5291101c-a1ba-4e47-8fc2-5bc36b7534dc',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_8567.JPG?alt=media&token=2bd9536b-2d89-423f-ab80-bc2db7fca97c',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_8566.JPG?alt=media&token=ed8b3ed8-8698-49fe-b457-63027ba0e146',
  'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/website%2FIMG_5079.JPG?alt=media&token=f3c0a3bd-bfc9-4214-aed3-7a9f7f81335e',
];


function Top() {
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

export default Top;