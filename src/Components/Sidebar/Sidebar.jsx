// import React from 'react';
import { GrFormClose } from "react-icons/gr";
import { RiArrowRightSLine, RiArrowDownSLine, RiGroupFill } from "react-icons/ri"
import { Navigate, useMatch, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useResolvedPath } from "react-router-dom"
import React, { useCallback, useEffect, useState } from "react"
import { AiOutlineClose, AiFillMail, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, } from "react-icons/ai"
import { FaBars, FaPhone, FaMailchimp, FaHome, FaPlus, FaPeopleArrows, FaMobile, FaImages, FaNewspaper, FaMinus, FaPlusCircle } from "react-icons/fa"
import { motion } from "framer-motion";
import { SiApplemusic } from "react-icons/si";
import son from '../Header/logo.png'


import { auth, db } from '../../firebase'; // Update this according to your Firebase configuration
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function Sidebar({ setOpenSidebar, openSidebar }) {
    const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'members', currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.error("User data not found!");
        }
      } else {
        setUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const navigate=useNavigate()
  // method to jump to the desired element by using the element's id
const jumpToReleventDiv = (id) => {
    const releventDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    releventDiv.scrollIntoView({behavior: "smooth"});
  }
  const EventData = [
      {
          name: "Standard Yearly Events",
          id: "1",
          link: "/YearlyEvents"
          
        },
        {
          name: "Upcoming Events",
          id: '2',
          link: "/UpcomingEvents"
          
        },
        {
            name: "Past Events",
            id: "0",
            link: "/PastEvents"
  
        }
     
  ]
  const About = [
      {
          name: "About Us",
          id: "0",
          link: "/About"

      },
      {
          name: "Leader Olumba Olumba Obu",
          id: "1",
          link: "/Leader"

      },
      {
          name: "His Holiness Olumba Olumba Obu",
          id: '2',
          link: "/His"

      },
      {
          name: "Doctrine",
          id: '3',
          link: "/Doctrine"

      },
      {
          name: "Sacrament",
          id: '4',
          link: "/Sacrament"

      },
  ]
  const Establishment = [
      {
          name: "Mother Elizabeth Redeemed Home",
          link: "/Redeem"
      },
      {
          name: "BookShop",
          link: "/BookShop"
      },
      {
          name: "Pool Of Life",
          link: "/Pool"
      },
      {
          name: "Royal Museum",
          link: "/Museum"
      },
  ]
  const Media = [
      {
          name: "StarCross",
          link: "/STV"
      },
      {
          name: "New Kingdom Trumpet",
          link: "NKT"
      },
      {
          name: "Everlasting Gospel",
          link: "/EGC"
      },
      {
          name: "BCS ICT",
          link: "/ICT"
      },
  ]
  const links = [
    {
      title: "Home"
    },
    {
      title: "About"
    },
    {
      title: "Contact"
    },
    {
      title: "Sermon"
    },
    {
      title: "Media"
    },

  ]
  const [hover, setHov] = useState(false)
  const [Events, setEvents] = useState(false)
  const [hoverA, setHovA] = useState(false)
  const [hovered, setHover] = useState(false)
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    openSidebar ? (
      <motion.nav className='transition-all animate-slide-in duration-1000 ease-in-out sidebar fixed top-0 bottom-0 p-2 w-72 overflow-y-auto  bg-white z-50 right-0'
     

      // layout
     
      // // initial={{ opacity: 0, scale: 0.5 }}
      // // animate={{ opacity: 1, scale: 1 }}
      // transition={{
      //     duration: 1,
      //     delay: 0.3,
      //     ease: [0, 0.71, 0.2, 1.01]
      // }}
      >
        <div className='flex justify-between items-center m-3'>
          <img 
                        src={son}
        //   src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Flogo.png?alt=media&token=e82fb645-e4b4-44cb-8eac-14298eb021da"}  
          className="h-20 w-40"/>
          <GrFormClose className='text-gray-500 text-2xl cursor-pointer' onClick={() => setOpenSidebar(false)} />
        </div>
        <div className='m-3'>
          {/* {links.map((link, index) => ( */}
          <ul className='mb-5 text-sm font-semibold text-[#003366]'>

            {/* <ul className="bg-white z-10 fixed top-0 -right-2 p-3 md:w-[25vw] w-screen sm: h-screen shadow-2xl  list-none
            flex flex-col justify-start items-start rounded-md  text-white animate-slide-in
            "> */}
                {/* <li className="text-xl w-full my-2">
                    <AiOutlineClose onClick={() => setToggleMenu(false)} color="red" size={15} />
                </li> */}
                <li className={`mx-1 mt-1 text-sm  `}>
                    <div className="mt-1 hover:text-blue-500" onClick={()=>setOpenSidebar(false)}>
                        
                        <Link   onClick={() => {
                            window.scrollTo(0, 0);
                        }}       
                        to="/" className="flex items-center">
                        <FaHome /> 
                            <p style={{ fontSize: 13 }}> &nbsp; Home</p></Link>
                    </div>
                    </li>



                
                    <li 
                            className={`mx-1 mt-1 text-sm  `}
                            >
                    <div onMouseEnter={() => setHovA(true)} onMouseLeave={() => setHovA(false)}>
                    <div className="mt-5 hover:text-blue-500" >

                        <Link to="/About"   onClick={() => {
                                window.scrollTo(0, 0);
                            }}       
                            className="flex items-center">
                        {hoverA ? <FaMinus /> : <FaPlus /> }
                            <p onClick={() => setHovA(true)} style={{ fontSize: 13, }}> &nbsp; About </p> 
                            </Link>
                        

                    </div>
                    
                        {hoverA ? (
                            <div>
                                {About.map((item, index) => (
                                    <li className="ml-4 animate-slide-in m-2 cursor-pointer">
                                        <div onClick={() => jumpToReleventDiv(item.id)} className="mt-1 hover:text-blue-500" >

                                        <p 
                                       onClick={() => {
                                        navigate(item.link);
                                        window.scrollTo(0, 0);
                                    }}  
                                        style={{ fontSize: 13 }}>{item.name}</p>
                                        </div>
                                    </li>
                                ))}
                            </div>          

                        ) : (
                            null
                        )}
                        </div>
                        </li>
                    <li 
                            className={`mx-1 mt-1 text-sm  `}
                            >
                    <div onMouseEnter={() => setEvents(true)} onMouseLeave={() => setEvents(false)}>
                    <div className="mt-5 hover:text-blue-500" >

                        <Link    onClick={() => {
                                window.scrollTo(0, 0);
                            }}   to="/Events" className="flex items-center">
                        {Events ? <FaMinus /> : <FaPlus /> }
                            <p onClick={() => setEvents(true)} style={{ fontSize: 13, }}> &nbsp; Events </p> 
                            </Link>
                        

                    </div>
                    
                        {Events ? (
                            <div>
                                {EventData.map((item, index) => (
                                    <li className="ml-4 animate-slide-in m-2 cursor-pointer">
                                        <div onClick={() => jumpToReleventDiv(item.id)} className="mt-1 hover:text-blue-500" >

                                        <p 
                                        onClick={() => {
                                            navigate(item.link);
                                            window.scrollTo(0, 0);
                                        }} 
                                        style={{ fontSize: 13 }}>{item.name}</p>
                                        </div>
                                    </li>
                                ))}
                            </div>
                        ) : (
                            null
                        )}
                        </div>
                        </li>


                {/* <li className={`mx-1 mt-1 text-sm  `}>
                    <div className="mt-5 hover:text-blue-500" onClick={()=>setOpenSidebar(false)}>
                        <Link to="/Events" className="flex items-center">
                        <FaPeopleArrows /> 
                            <p style={{ fontSize: 13 }}> &nbsp; Events</p></Link>
                    </div>
                    </li> */}

                <li className={`mx-1 mt-1 text-sm  `}>
                    <div className="mt-5 hover:text-blue-500" onClick={()=>setOpenSidebar(false)}>
                        <Link 
                           onClick={() => {
                            window.scrollTo(0, 0);
                          }}  
                        to="/Contact" className="flex items-center">
                        <FaPhone /> 
                            <p style={{ fontSize: 13 }}> &nbsp; Contact Us</p></Link>
                    </div>
                    </li>


                <li className={`mx-1 mt-1 text-sm  `}>
                    <div className="mt-5 hover:text-blue-500" onClick={()=>setOpenSidebar(false)}>
                        <Link
                           onClick={() => {
                            window.scrollTo(0, 0);
                          }}   
                         to="/EGC" className="flex items-center">
                        <FaNewspaper /> 
                            <p style={{ fontSize: 13 }}> &nbsp; Sermon</p></Link>
                    </div>
                    </li>
                <li className={`mx-1 mt-1 text-sm  `}>
                    <div className="mt-5 hover:text-blue-500" onClick={()=>setOpenSidebar(false)}>
                        <Link 
                           onClick={() => {
                            window.scrollTo(0, 0);
                          }}  
                        to="/Gallery" className="flex items-center">
                        <FaImages /> 
                            <p style={{ fontSize: 13 }}> &nbsp; Gallery</p></Link>  
                    </div>
                </li>
            
                {user && user.email === 'admin@ooobcs.org' && (
                <li className={`mx-1 mt-1 text-sm  `}>
                    <div className="mt-5 hover:text-blue-500" onClick={()=>setOpenSidebar(false)}>
                        <Link 
                           onClick={() => {
                            window.scrollTo(0, 0);
                          }}  
                        to="/post" className="flex items-center">
                        <FaPlusCircle /> 
                            <p style={{ fontSize: 13 }}> &nbsp;Create</p></Link>  
                    </div>
                </li>
                )}
                   

                    {/* <div className="mt-5 flex-row flex hover:text-blue-500" onClick={()=>setToggleMenu(false)}>
                    <Link to="/EGC"> <p style={{ fontSize: 13 }}>Everlasting Gospel</p></Link>
                    </div>
                    <div className="mt-5 flex-row flex hover:text-blue-500" onClick={()=>setToggleMenu(false)}>
                    <Link to="/Pool"> <p style={{ fontSize: 13 }}>Pool Of Life</p> </Link>
                    </div>
                    <div className="mt-5 flex-row flex hover:text-blue-500" onClick={()=>setToggleMenu(false)}>
                    <Link to="/Redeem">  <p style={{ fontSize: 13 }}>Mother Elizabeth Redeem Home</p> </Link>
                    </div>
                    <div className="mt-5 flex-row flex hover:text-blue-500" onClick={()=>setToggleMenu(false)}>
                    <Link to="/BookShop">   <p style={{ fontSize: 13 }}>Bookshop</p></Link>
                </div> */}
                <li className={`mx-1 mt-1 text-sm  `}>
                    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
                        <div 
                            // style={{ backgroundImage: 'linear-gradient(130deg, #ccc 0%, #ff9999 100%)'   }}
                            // className={`mt-5 flex-row flex hover:text-blue-500}`} 
                        className="bg-[#ff3333] w-auto h-10 p-4 flex justify-center items-center mt-5 rounded-md cursor-pointer" 

                        >
                        {/* <Link to="/Museum">  */}
                        <p onClick={() => setHov(true)} style={{ fontSize: 13, color: '#fff' }}>Media</p> 
                        {/* </Link> */}
                            {hover ? (
                                <RiArrowDownSLine className=" mr-2 -mt-0 text-white" />
                            ) : (
                                <RiArrowRightSLine className=" mr-2 -mt-0 text-white" />
                            )}

                        </div>
                            {hover ? (
                                <div>
                                {Media.map((item, index) => (
                                    <li onClick={() => setOpenSidebar(false)} className="ml-4 animate-slide-in m-2 cursor-pointer">
                                        <p onClick={() => {
                                    navigate(item.link);
                                    window.scrollTo(0, 0);
                                        }}  style={{ fontSize: 13 }}>{item.name}</p>
                                    </li>
                                ))}
                            </div>
                        ) : (
                            null
                        )}
                    </div>
                    </li>

                        
                            <li 
                            className={`mx-1 mt-1 text-sm  `}
                            >
                    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <div 
                            // style={{ backgroundImage: 'linear-gradient(104deg, #ff9999 0%, #ccc 100%)'   }}
                        // className={`mt-5 flex-row flex hover:text-blue-500}`} 
                        className="bg-[#ff3333] w-auto h-10 p-5 flex justify-center items-center mt-5 rounded-md cursor-pointer" 
                        >
                        <p onClick={() => setHover(true)} style={{ fontSize: 13, color: '#fff'}}>More</p> 
                            {hovered ? (
                                <RiArrowDownSLine className="mr-2 -mt-0 text-white " />
                            ) : (
                                <RiArrowRightSLine className="mr-2 -mt-0 text-white " />
                            )}

                        </div>
                        {hovered ? (
                            <div>
                                {Establishment.map((item, index) => (
                                    <li onClick={() => setOpenSidebar(false)} className="ml-4 animate-slide-in m-2 cursor-pointer">
                                        <p onClick={() => {
                                            navigate(item.link);
                                            window.scrollTo(0, 0);
                                        }}  style={{ fontSize: 13 }}>{item.name}</p>
                                    </li>
                                ))}
                            </div>
                        ) : (
                            null
                        )}
                        </div>
                        </li>


                    {/* <Link onClick={() => setToggleMenu(false)} to="/STV" 
                    className="mt-5 flex-row flex hover:text-blue-500"
                    // className="bg-[#b30000] w-full h-10 flex justify-center items-center mt-5 rounded-md cursor-pointer" 
                    >
                <div >
                    
                        <p onClick={() => setToggleMenu(false)}  style={{ fontSize: 13 }}>StarCross-TV</p>
                </div>
                        </Link> */}

<li className={`mx-1 mt-1 text-sm  `}>
                    <div className="mt-5 hover:text-blue-500" onClick={()=>setOpenSidebar(false)}>
                        <a target={"_blank"} href="https://asuclients.vercel.app/" className="flex items-center">
                        <SiApplemusic  /> 
                            <p style={{ fontSize: 13 }}> &nbsp; BCS Music</p></a>
                    </div>
                    </li>
<li className={`mx-1 mt-1 text-sm  `}>
                    <div className="mt-5 hover:text-blue-500" onClick={()=>setOpenSidebar(false)}>
                        <Link    onClick={() => {
                            window.scrollTo(0, 0);
                        }}   to="/Blog" className="flex items-center">
                        <FaMobile /> 
                            <p style={{ fontSize: 13 }}> &nbsp; Blog</p></Link>
                    </div>
                    </li>
                <li className={`mx-1 mt-1 text-sm  `}>
                    <div className="mt-5 hover:text-blue-500" onClick={()=>setOpenSidebar(false)}>
                        <Link
                           onClick={() => {
                            window.scrollTo(0, 0);
                          }}  
                         to="/Apps" className="flex items-center">
                        <FaMobile /> 
                            <p style={{ fontSize: 13 }}> &nbsp; Mobile Apps</p></Link>
                    </div>
                    </li>
                <li className={`mx-1 mt-1 text-sm  `}>
                    <div className="mt-5 hover:text-blue-500" onClick={()=>setOpenSidebar(false)}>
                        <Link target="_blank" to="https://www.uabcsp.org" className="flex items-center">
                        <RiGroupFill /> 
                            <p style={{ fontSize: 13 }}> &nbsp; UABCSP</p></Link>
                    </div>
                    </li>
            </ul>
          {/* ))} */}

        </div>
      </motion.nav>
    ) : null

  )
}
