import { Link } from "react-router-dom";
import '../index.css';
import { useState } from "react";
import { motion } from "framer-motion";
import MobileHero from "./Hero/MobileHero";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const PastEvents=()=>{
    return(
      <motion.nav
      className="text w-screen  md:pl-10 md:pr-10"
            initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 2,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
    }}
    >   


              {/* <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}  className=" text-center pt-28"> */}
              {/* <h1 style={{}} className="text-6xl pt-28 p-5  text-center font-bold bg-gradient-to-r from-pink-400 to-purple-300 hover:from-pink-500 text-transparent bg-clip-text"> */}
              <h1 style={{}} className="text-6xl pt-5 p-5  text-center bg-[#b30000] font-bold bg-gradient-to-r from-[#b30000]-400 via-purple-500 to-[#b30000]-800 text-transparent bg-clip-text">
PAST EVENTS
</h1>

<h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className=" text-center">BCS PAST MEGA EVENTS</h1>

<h6 style={{ color: "#333", padding: 30, }}  className="">
2000			-		-	Divine Coronation
                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2004			-		-	Eternal Dominion
                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2005			-		-	Eternal Redeeming Covenant
                                                </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2006			-		-	Talent Revelation
                                                </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2007			-		-	Seal of the Living God
                                                </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2008			-		-	March of the Redeemed/Golden Jubilee
                                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2009			-		-	Divine Anointing
                                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2010			-		-	My Redeemer Liveth
                                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2011			-		-	Overcomers’ Convention
                                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2012			-		-	Abba Father
                                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2013			-		-	Salt of the Earth
                                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2014			-		-	Hidden Manner
                                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2015			-		-	Powerful Remnant
                                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2016			-		-	Olumba’s Supreme Temple
                                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2018			-		-	The Centenary of the Ancient of Days
                                                        </h6>
<h6 style={{ color: "#333", padding: 30, }}  className="">
2019			-		-	Heavenly Father
                                                        </h6>

      

    </motion.nav>
    )
}

export default PastEvents;