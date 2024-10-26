import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose, AiFillMail, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, } from "react-icons/ai"
import { FaBars, FaPhone, FaMailchimp } from "react-icons/fa"
import Logo from "../images/bcs.png"
import React from "react"


const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={` sm:mx-4 text-md hover:border-b-2 cursor-pointer text-white ${classProps}`}>
            <p style={{ fontSize: 12 }}>{title}</p>
        </li>
    )
}
const TopBar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav 
        // style={{backgroundImage: 'linear-gradient(104deg,  #ff9999 0%, #b30000 100%)'}}
         className="md:w-full w-0 md:p-5 p-0 flex justify-between bg-[#b30000] ">
            <div className="hidden sm:flex  flex-row justify-center items-center">
                <div className="flex flex-row justify-center items-center cursor-pointer">
                {/* <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center m-1 hover:animate-ping"> */}
                    <FaPhone color="#33cc33" size={15} />
                    {/* </div> */}
                    <p className="p-2 text-white text-md hover:text-green-500"   style={{ fontSize: 10 }}>+2347040520952</p>
                </div>
                <div className="hidden sm:flex flex-row justify-center items-center cursor-pointer">
                {/* <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center m-1 hover:animate-ping"> */}
                    <AiFillMail color="#0099ff" size={15} />
                    {/* </div> */}
                    <p className="p-2 text-white hover:text-[#0099ff]" style={{ fontSize: 10 }}>bcs-ict@ooonline.org</p>
                </div>
            </div>
            <div>
                <ul className="text-white md:flex  list-none flex-row justify-between items-center flex-initial m-3 ">
                    {["Gospels", "Apps", "Bethels"].map((item, index) => (
                        <NavbarItem key={item + index} title={item} />
                    ))}
                </ul>
            </div>
            <div>
                <div className="hidden sm:flex relative  flex-row justify-end items-center ">
                    <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center m-1 hover:animate-ping">
                        <AiFillFacebook color="#fff" className=" w-4  h-4" />
                    </div>
                    <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center m-1 hover:animate-ping">
                        <AiFillInstagram color="#fff" className=" w-4  h-4" />
                    </div>
                    <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center m-1 hover:animate-ping">
                        <AiFillTwitterCircle color="#fff" className="w-4  h-4" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopBar;

{/* <div className="sm:flex  flex-row justify-center items-center">
<div className="sm:flex  flex-row justify-center items-center">
    <FaPhone color="black" size={15} />
    <p className="p-2" style={{ fontSize: 10 }}>+2347040520952</p>
</div>
<div className="sm:flex  flex-row justify-center items-center">
    <AiFillMail color="black" size={15} />
    <p className="p-2" style={{ fontSize: 10 }}>bcs-ict@ooonline.org</p>
</div>
</div>
<ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
{["Sermon", "Gosples","Bethels"].map((item, index) => (
    <NavbarItem key={item + index} title={item} />
))}
<div className="sm:flex relative  flex-row justify-end items-center">
    <AiFillFacebook color="#1a75ff" className="hover:animate-bounce"/>
    <AiFillInstagram color="#ff751a" className="hover:animate-bounce"/>
    <AiFillTwitterCircle color="#00ccff" className="hover:animate-bounce"/>
</div>
</ul>
<div className="flex relative">

</div> */}