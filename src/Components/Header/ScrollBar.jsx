import React, { useEffect, useRef, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { BiPlus } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";
import "../../index.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { getPosts } from "../DUM";
import "./style.css";
import son from './logo.png'

function ScrollBar({blogs}) {
    const Logo = "https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Flogo.png?alt=media&token=e82fb645-e4b4-44cb-8eac-14298eb021da";
  const navigate = useNavigate();
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverMedia, setHoverMedia] = useState(false);
  const [posts, setPosts] = useState([]);
  const newsRef = useRef(null);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const { posts } = await getPosts();
  //     setPosts(posts);
  //   };

  //   fetchPosts();
  // }, []);
  
  // const handleClick = {

  // }

  return (
    <div  className="flex  z-50 relative justify-start mt-1 news-container ">
    <div className="text-white font-semibold bg-red-600 h-14 p-4 title  md:ml-0">
      <h1>UPDATES</h1>
    </div>
    <ul className="flex  w-full ">
      {blogs.slice(0, 4).map((blog) => (
        <Link to={`/blog/${blog.id}`}
          className="text-sm whitespace-nowrap text-white flex items-center h-14 right-44 p-2 -mt-2 "
          key={blog.id}
        >
          <span className="relative mr-2 h-2 ">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-96"></span>
            <span className="relative inline-flex h-2 mb-2 w-2  animate-bounce3 rounded-full bg-red-600"></span>
          </span>
          {blog.title}
        </Link>
      ))}
    </ul>
  </div>
    )
}

export default ScrollBar