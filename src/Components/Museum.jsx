import React from 'react'
import { motion } from "framer-motion";



const Museum = () => {
  return (
<motion.nav
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 2,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
        }}className='pt-2 md:pl-20 md:pr-20'>
          <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
          <img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Froyalmusiumbanner.jpg?alt=media&token=6e085af1-9e07-4e2b-abb8-de5ab3595d9a" style={{ width: '80%', marginBottom: 0    }}/>
          </div>
<div className='grid'>

<div className=" md:w-[70%] p-5 flex flex-col justify-self-center shadow-lg mt-10">
                {/* <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">THE BCS MUSEUM</h1> */}

<h6 style={{ color: "#333", padding: 10, }}  className="">
The BCS Museum came into being in the early 1970s when the Vestry Staff saw that the artefacts which the BCS members and Worldly people/organizations who recognised the Supreme Deity of the Holy Spirit personified and were frequently presenting gifts which were symbols of His authority and power had filled many rooms. They started to preserve those artefacts in a larger room and label them for posterity.
</h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
The first Curator of the modern BCS Museum was the late SCS Nsan Takon. He arranged and labelled the items in their classes. Today, the BCS Museum has very many historical items that not only provide the antique antecedents but also form a pool of objects where brethren and teaming visitors find succour and solution to their spiritual problems whenever they visit the museum. In order words, The BCS Museum has more spiritual potency than ordinary Museums in the world.
</h6>
</div>
</div>

    </motion.nav>
  )
}

export default Museum