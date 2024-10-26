import { HiMenuAlt4 } from "react-icons/hi"
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri"
import { Navigate, useMatch, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useResolvedPath } from "react-router-dom"
import React, { useCallback, useEffect, useState } from "react"
import { AiOutlineClose, AiFillMail, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, } from "react-icons/ai"
import { FaBars, FaPhone, FaMailchimp } from "react-icons/fa"




const NavbarItem = ({ title, classProps }) => {

    
    return (
        <li className={`mx-4 cursor-pointer text-sm ${classProps}`}>
            {title}
        </li>
    )
}

const NavBar = () => {
    const [scrolled, setScrolled] = useState(true)
    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    const [scrollDirection,setScrollDirection] = useState("you have not scrolled yet");

    const handleNavigation = useCallback((e) => {

        if (y > window.scrollY) {
            setScrollDirection("Scrolling Up");
            setScrolled(true)
        } else if (y < window.scrollY) {
            setScrollDirection("Scrolling Down");
           setScrolled(false)
        }
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {

        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    const navigate=useNavigate()
    const Establishment = [
        {
            name: "Mother Elizabeth Redeem Home",
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
    const Seter = () => {
        setHover(true)
    }
    const [hover, setHov] = useState(false)
    const [hovered, setHover] = useState(false)
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav class="bg-[rgba(255,255,255,0.6)] shadow-lg z-50 fixed w-full h-auto "
        // style={{position: 'fixed', zIndex: 100,}} 
        // className="w-full  flex md:justify-between  items-center p-2   shadow-lg md:-mt-10 -mt-24"
        >
             {scrolled?(
                <nav className="md:w-full w-0 md:p-2.5 p-0 flex justify-between bg-[#b30000] ">
                <div className="hidden sm:flex  flex-row justify-center items-center">
                    <a href="tel:+2347040520952" >
                        <div className="flex flex-row justify-center items-center cursor-pointer">
                        <FaPhone color="#33cc33" size={15} />
                        <p className="p-2 text-white text-md hover:text-green-500" style={{ fontSize: 10 }}>+2347040520952</p>
                    </div>
                    </a>
                    <a href = "mailto: bcsict2022@gmail.com">
                    <div className="hidden sm:flex flex-row justify-center items-center cursor-pointer">
                        <AiFillMail color="#0099ff" size={15} />
                        <p className="p-2 text-white hover:text-[#0099ff]" style={{ fontSize: 10 }}>bcs-ict@ooonline.org</p>
                    </div>
                    </a>
                </div>
                <div>
                    <ul className="hidden text-0.5xl text-white md:flex  list-none flex-row justify-between animate-pulse items-center flex-initial m-3 ">
                        <li>
                                <a target="_blank" href="https://bcs-egc.org" class="text-white"> Gospels &nbsp; &nbsp;</a>
                            </li>
                            <li>
                                <Link to={"/Apps"} class="text-white"> Apps &nbsp; &nbsp; </Link>
                            </li>
                            <li>
                                <a target="_blank" href="https://apps.apple.com/ng/app/bcs-hymnary/id1180460625" class="text-white"> Bethels</a>
                            </li>
                    </ul>
                </div>
                <div>
                    <div className="hidden sm:flex  flex-row justify-end items-center ">
                        <Link>
                        <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center m-1 hover:animate-ping">
                            <AiFillYoutube color="#fff" className=" w-3  h-3" />
                        </div>
                        </Link>
                        <Link>
                        <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center m-1 hover:animate-ping">
                            <AiFillInstagram color="#fff" className=" w-3  h-3" />
                        </div>
                        </Link>
                        <Link>
                        <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center m-1 hover:animate-ping">
                            <AiFillTwitterCircle color="#fff" className="w-3  h-3" />
                        </div>
                        </Link>
                    </div>
                </div>
            </nav>
            ):null}

{scrolled?(
                <nav className="w-full p-3 flex justify-between bg-[#b30000] md:hidden">
                <div className="flex  flex-row justify-center items-center">
                    <div className="flex flex-row justify-center items-center cursor-pointer">
                        <FaPhone color="#33cc33" size={15} />
                        <p className="p-2 text-white text-md hover:text-green-500" style={{ fontSize: 10 }}>+2347040520952</p>
                    </div>
                    <div className="flex flex-row justify-center items-center cursor-pointer">
                        <AiFillMail color="#0099ff" size={15} />
                        <p className="p-2 text-white hover:text-[#0099ff]" style={{ fontSize: 10 }}>bcs-ict@ooonline.org</p>
                    </div>
                </div>
                <div>
                    <ul className="hidden text-white md:flex  list-none flex-row justify-between animate-pulse items-center flex-initial m-3 ">
                      <li>
                                <a target="_blank" href="https://bcs-egc.org" class="text-white"> Gospels &nbsp; &nbsp;</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://apps.apple.com/ng/app/bcs-eva/id6443969454" class="text-white"> Apps &nbsp; &nbsp; </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://apps.apple.com/ng/app/bcs-hymnary/id1180460625" class="text-white"> Bethels</a>
                            </li>
                    </ul>
                </div>
                <div>
                    <div className="flex  flex-row justify-end items-center ">
                        <Link>
                        <div className="border-2 rounded-full h-6 w-6 flex items-center justify-center m-1 hover:animate-ping">
                            <AiFillYoutube color="#fff" className=" w-3  h-3" />
                        </div>
                        </Link>
                        <Link>
                        <div className="border-2 rounded-full h-6 w-6 flex items-center justify-center m-1 hover:animate-ping">
                            <AiFillInstagram color="#fff" className=" w-3  h-3" />
                        </div>
                        </Link>
                        <Link>
                        <div className="border-2 rounded-full h-6 w-6 flex items-center justify-center m-1 hover:animate-ping">
                            <AiFillTwitterCircle color="#fff" className="w-3  h-3" />
                        </div>
                        </Link>
                    </div>
                </div>
            </nav>
            ):null}

            {/* <div 
        className="
        w-full  
        flex md:justify-between  items-center p-2 pr-5   
        shadow-lg md:-mt-10 -mt-24
        "
            >
            <Link to="/">
            <div
            className="md:flex-[0.5] flex-initial  items-center mt-10">
                <img src={Logo} alt="logo" className="w-50 h-50  \ cursor-pointer" />
            </div>
            </Link>

            <div 
            // style={{marginLeft: '15'}}
            className="flex relative mt-10 ">
                {toggleMenu ? <AiOutlineClose fontSize={28} className='text-black cursor-pointer' onClick={() => setToggleMenu(false)} />

                    : <div className="border-2 rounded-md h-12 w-12 flex items-center justify-center ">
                        <FaBars fontSize={25} className='text-black cursor-pointer' onClick={() => setToggleMenu(true)} />
                    </div>
                } */}

<div class="mx-auto w-screen p-2">
                <div class="flex justify-between">
                    <div class="flex">
                        <div>

                            <Link to={"/"} class="flex items-start">
                                <img 
                                // style={{height: 50, width: 250}}
                                 src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fbcslogos.png?alt=media&token=78cd3b78-fd60-4c1f-b833-3345ec078b61"} alt="Logo" class="" />

                            </Link>
                        </div>
                    </div>

                    <div class="hidden md:flex items-center px-6 cursor-pointer">
                    {toggleMenu ? <AiOutlineClose fontSize={28} className='text-black cursor-pointer' onClick={() => setToggleMenu(false)} />

                    : <div className="border-2 rounded-md h-12 w-12 flex items-center justify-center cursor-pointer">
                        <FaBars fontSize={22} className='text-black cursor-pointer' onClick={() => setToggleMenu(true)} />
                    </div> }
                    </div>

                    <div class="md:hidden flex items-center pl-14 cursor-pointer">
                    {toggleMenu ? <AiOutlineClose fontSize={28} className='text-black cursor-pointer' onClick={() => setToggleMenu(false)} />

                    : <div className="border-2 rounded-md h-12 w-12 flex items-center justify-center cursor-pointer">
                        <FaBars fontSize={25} className='text-black cursor-pointer' onClick={() => setToggleMenu(true)} />
                    </div> }
                    </div>
                </div>
            {/* </div> */}

                
                {toggleMenu && (
                    <ul className="bg-white z-10 fixed top-0 -right-2 p-3 md:w-[25vw] w-screen sm: h-screen shadow-2xl  list-none
                    flex flex-col justify-start items-start rounded-md  text-white animate-slide-in
                    ">
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} color="red" size={15} />
                        </li>
                        <li className={`mx-1 mt-1 text-sm text-black `}>
                            <div className="mt-1 " onClick={()=>setToggleMenu(false)}>
                                <Link to="/"><p style={{ fontSize: 13 }}>Home</p></Link>
                            </div>
                            </li>


                        <li className={`mx-1 mt-1 text-sm text-black `}>
                            <div className="mt-5" onClick={()=>setToggleMenu(false)}>
                                <Link to="/About"><p style={{ fontSize: 13 }}>About Us</p></Link>
                            </div>
                            </li>


                        <li className={`mx-1 mt-1 text-sm text-black `}>
                            <div className="mt-5 hover:text-blue-500" onClick={()=>setToggleMenu(false)}>
                                <Link to="/Events"><p style={{ fontSize: 13 }}>Events</p></Link>
                            </div>
                            </li>

                        <li className={`mx-1 mt-1 text-sm text-black `}>
                            <div className="mt-5 hover:text-blue-500" onClick={()=>setToggleMenu(false)}>
                                <Link to="/Contact"><p style={{ fontSize: 13 }}>Contact Us</p></Link>
                            </div>
                            </li>

                        <li className={`mx-1 mt-1 text-sm text-black `}>
                            <div className="mt-5 hover:text-blue-500" onClick={()=>setToggleMenu(false)}>
                                <Link to="/Blog"><p style={{ fontSize: 13 }}>Blog</p></Link>
                            </div>
                            </li>

                        <li className={`mx-1 mt-1 text-sm text-black `}>
                            <div className="mt-5 hover:text-blue-500" onClick={()=>setToggleMenu(false)}>
                                <Link to="/Gallery"><p style={{ fontSize: 13 }}>Gallery</p></Link>
                            </div>
                            </li>

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
                        <li className={`mx-1 mt-1 text-sm text-black `}>
                            <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
                                <div 
                                    // style={{ backgroundImage: 'linear-gradient(130deg, #ccc 0%, #ff9999 100%)'   }}
                                    // className={`mt-5 flex-row flex hover:text-blue-500}`} 
                                className="bg-[#ff2250] w-auto h-10 p-4 flex justify-center items-center mt-5 rounded-md cursor-pointer" 

                                >
                                {/* <Link to="/Museum">  */}
                                <p onClick={() => setHov(true)} style={{ fontSize: 13, color: '#fff' }}>Media</p> 
                                {/* </Link> */}
                                    {hover ? (
                                        <RiArrowDownSLine className="absolute mr-2 -mt-0 right-2" />
                                    ) : (
                                        <RiArrowRightSLine className="absolute mr-2 -mt-0 right-2" />
                                    )}
 
                                </div>
                                    {hover ? (
                                        <div>
                                        {Media.map((item, index) => (
                                            <li onClick={() => setToggleMenu(false)} className="ml-4 animate-slide-in m-2 cursor-pointer">
                                                <p onClick={()=>navigate(item.link)}  style={{ fontSize: 13 }}>{item.name}</p>
                                            </li>
                                        ))}
                                    </div>
                                ) : (
                                    null
                                )}
                            </div>
                            </li>

                                
                                    <li 
                                    className={`mx-1 mt-1 text-sm text-black `}
                                    >
                            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                                <div 
                                    // style={{ backgroundImage: 'linear-gradient(104deg, #ff9999 0%, #ccc 100%)'   }}
                                // className={`mt-5 flex-row flex hover:text-blue-500}`} 
                                className="bg-[#ff2250] w-auto h-10 p-5 flex justify-center items-center mt-5 rounded-md cursor-pointer" 
                                >
                                <p onClick={() => setHover(true)} style={{ fontSize: 13, color: '#fff'}}>More</p> 
                                    {hovered ? (
                                        <RiArrowDownSLine className="absolute mr-2 -mt-0 right-2" />
                                    ) : (
                                        <RiArrowRightSLine className="absolute mr-2 -mt-0 right-2" />
                                    )}
 
                                </div>
                                {hovered ? (
                                    <div>
                                        {Establishment.map((item, index) => (
                                            <li onClick={() => setToggleMenu(false)} className="ml-4 animate-slide-in m-2 cursor-pointer">
                                                <p onClick={()=>navigate(item.link)}  style={{ fontSize: 13 }}>{item.name}</p>
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
                    </ul>

                )}

            {/* </div> */}
            </div>
        </nav>
    )
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
export default NavBar;

