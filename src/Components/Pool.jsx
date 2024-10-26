import React from 'react'
import { motion } from "framer-motion";



const Pool = () => {
  return (
<motion.nav
        className='pt-2 md:pl-20 md:pr-20'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 2,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
        }}>
          <div className="w-[100%] text-center rounded-md mt-5 md:p-5 flex justify-center">
                <img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fpooloflivebanner.jpg?alt=media&token=943a8278-f8e7-4e96-bdcc-b6113ca07597" style={{ width: '80%', marginTop: 0    }}/>
                </div>
          <div className='pt-2 md:pl-20 grid md:pr-20'>
          <div className=" md:w-[70%] p-5 flex flex-col justify-self-center shadow-lg mt-14">
                      {/* <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">POOL OF LIFE</h1> */}

<h6 style={{ color: "#333", padding: 10, }}  className="">
The Pool of Life (BCS Baptismal Pool) was constructed by the Holy Father in Akwa Ibom State Brethren as their appreciation for God’s love for the Akwa Ibomites in calling them gratis into His Kingdom. It was built from 2010 to 2012 (when it was commissioned) during the Administration of (now) His Grace Archbishop Archibong Archibong. 
</h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
The Pool of Life came in handy at a period when the leadership of the BCS sought to alleviate the stress of seeking befitting waters to baptize the teaming personalities that thronged the BCS WHQs, Calabar. 
</h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
The pool, situated within the premises of BCS WHQs has more potent power than a mere stream because the Holy Father has assigned unique angels and spirits to cleanse spiritually and physically, the body and soul of anybody that takes a dip in the body of water. This explains the name, “THE POOL OF LIFE”.
</h6>
</div>
</div>
    </motion.nav>
  )
}

export default Pool