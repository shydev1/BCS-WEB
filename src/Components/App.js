import React, { useEffect, useState } from "react";
import images from "./data";
import { motion } from "framer-motion";





function Appp() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
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

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <>
    
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <TagButton
                name="all"
                tagActive={tag === "all" ? true : false}
                handleSetTag={setTag}
              />
              <TagButton
                name="Holy Father"
                tagActive={tag === "Holy Father" ? true : false}
                handleSetTag={setTag}
                />
              <TagButton
                name="KOK"
                tagActive={tag === "KOK" ? true : false}
                handleSetTag={setTag}
                />
              <TagButton
                name="Bcs Members"
                tagActive={tag === "Bcs Members" ? true : false}
                handleSetTag={setTag}
                />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="galleryContainer">
          {filteredImages.map((image) => (
            <motion.div
            layout
            key={image.id}
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              // animate={{ x: 30 }}
              className="galleryItem"
              // onClick={handleClick}
              >
              <img src={image.imageUrl} alt="" />

            </motion.div>
          ))}
        </div>
      </div>
    </div>
              </>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Appp;
