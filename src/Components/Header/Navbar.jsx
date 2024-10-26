import React, { useEffect, useRef, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { BiPlus } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";
import "../../index.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { getPosts } from "../DUM";
import "./style.css";
import son from "./logo.png";
import Register from "./Register";
import { Button } from "antd";
import Login from "./Login";
import { IoIosCloseCircle } from "react-icons/io";

export default function Navbar({ setOpenSidebar, openSidebar, blogs }) {
  const navigate = useNavigate();
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverMedia, setHoverMedia] = useState(false);
  const [posts, setPosts] = useState([]);
  const [register, setRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfileImage, setUserProfileImage] = useState("");
  const newsRef = useRef(null);

  useEffect(() => {
    // Check local storage for authentication token
    const token = localStorage.getItem("authToken");
    const profileImage = localStorage.getItem("profileImage");
    
    if (token) {
      setIsLoggedIn(true);
      setUserProfileImage(profileImage || "defaultProfileImageURL"); // Use a default image if not set
    } else {
      setIsLoggedIn(false);
    }
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    // Check local storage for authentication status and profile image
    const token = localStorage.getItem('authToken');
    const profileImage = localStorage.getItem('profileImage');
    
    if (token) {
      setIsLoggedIn(true);
      setUserProfileImage(profileImage || 'defaultProfileImageURL'); // Use a default image if not set
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleRegister = () => {
    setRegister(!register);
  };

  const links = [
    { title: "Home" },
    { title: "About" },
    { title: "Contact" },
    { title: "Sermon" },
    { title: "Media" },
    { title: "Establishment" },
  ];

  const HomeLinks = [
    { title: "Geo Locations" },
    { title: "Register" },
    { title: "Sign-In" },
    { title: "Sign-Out" },
  ];

  const MediaLinks = [
    { name: "About Us", id: "0", link: "/About" },
    { name: "Leader Olumba Olumba Obu", id: "1", link: "/Leader" },
    { name: "His Holiness Olumba Olumba Obu", id: "2", link: "/His" },
    { name: "Doctrine", id: "3", link: "/Doctrine" },
    { name: "Sacrament", id: "4", link: "/Sacrament" },
  ];

  return (
    <div>
      <motion.nav
        className="z-30 md:p-10 p-9 md:mt-12 mt-12 bg-white relative h-10 w-[100%] md:w-auto shadow-2xl md:mr-10 md:ml-10 rounded-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex justify-between relative items-center h-1 m-0 md:-mt-1">
          {/* Left Links */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="">
            <img
              src={son}
              className="h-14 w-32 -ml-2"
            />
          </Link>

          {/* Center Links */}
          <ul className="hidden md:flex flex-row space-x-5 uppercase items-center text-xs text-[#003366] font-semibold">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={"/"}
              className="flex flex-row items-center cursor-pointer"
            >
              Home
              <BiPlus />
            </Link>
            <li className="flex flex-row items-center cursor-pointer">
              <a
                onClick={() => setHoverMedia(true)}
                className="flex flex-row items-center cursor-pointer"
                onMouseEnter={() => setHoverMedia(true)}
                onMouseLeave={() => setHoverMedia(false)}
              >
                About
                <BiPlus />
                {hoverMedia ? (
                  <div
                    className="absolute w-56 h-56 z-50 animate-[wiggle_1s_ease-in-out_infinite] shadow-2xl 
                            mt-60 bg-white navlinks"
                    onMouseLeave={() => setHoverMedia(false)}
                  >
                    <div className="mt-3 m-5">
                      {MediaLinks.map((link, index) => (
                        <ul className="mb-3" key={index}>
                          <a onClick={() => {
                              navigate(link.link);
                              window.scrollTo(0, 0);
                            }}
                            className="flex flex-row items-center"
                          >
                            <BiPlus />
                            <li>{link.name}</li>
                          </a>
                        </ul>
                      ))}
                    </div>
                  </div>
                ) : null}
              </a>
            </li>

            <li>
              <Link
                to={"/EGC"}
                className="flex flex-row items-center cursor-pointer"
              >
                Sermon
                <BiPlus />
              </Link>
            </li>

            <li
              className="flex flex-row items-center cursor-pointer"
              onMouseEnter={() => setHoverHome(true)}
              onMouseLeave={() => setHoverHome(false)}
            >
              Bethels
              {hoverHome ? (
                <div
                  style={{ flex: 1 }}
                  className="absolute w-44 h-36 z-50 transition-all duration-700 ease-in-out shadow-2xl
                             mt-40 bg-white navlinks"
                  onMouseLeave={() => setHoverHome(false)}
                >
                  <div className="mt-3 m-5">
                    {HomeLinks.map((link, index) => (
                      <ul className="mb-3" key={index}>
                        <div className="flex flex-row items-center">
                          <BiPlus />
                          <li>{link.title}</li>
                        </div>
                      </ul>
                    ))}
                  </div>
                </div>
              ) : null}
              <BiPlus />
            </li>

            

            {isLoggedIn ? (
              <img
                src={userProfileImage}
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer"
                onClick={() => {
                  // Handle profile image click (e.g., open profile dropdown)
                }}
              />
            ) : (
              <h1 onClick={handleRegister} className="bg-[#173c61] p-2 text-white font-bold rounded cursor-pointer">
              SignIn
              </h1>
            )}
          </ul>

          <h1 onClick={handleRegister} className="bg-[#173c61] p-2 md:hidden text-white font-bold rounded cursor-pointer">
            SignIn
          </h1>

          {register ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex-col backdrop-blur-sm flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded shadow-lg h-96 w-96">
                 <IoIosCloseCircle size={30} color="gray" className="shadow-lg rounded-full" onClick={handleRegister} />
                <Register />
                <Login />
              </div>
            </div>
          ) : null}

          {/* Right link */}
          <div className="hidden md:flex flex-row space-x-4 items-center text-lg">
            <a target={"_blank"} href="https://asuclients.vercel.app/">
              <SiApplemusic className="text-[#ff3333] hover:text-[#999999] cursor-pointer" />
            </a>
            <CgMenuGridR
              className="h-10 w-10 text-[#ff3333] cursor-pointer hover:text-[#999999] hover:transition-all duration-700 ease-in-out"
              onClick={() => setOpenSidebar(true)}
            />
          </div>

          <CgMenuGridR
            className="md:hidden h-10 w-10 text-[#ff3333] cursor-pointer hover:text-[#999999]"
            onClick={() => setOpenSidebar(true)}
          />
        </div>
      </motion.nav>
    </div>
  );
}
