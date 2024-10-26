import React from 'react'
import { motion } from "framer-motion";



const BookShop = () => {
  return (
    <motion.nav
    className='pt-2 md:pl-20 md:pr-20'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 2,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
    }}
    >
      <div className="w-[100%] text-center rounded-md mt-5 md:p-5 flex justify-center">
      <img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fbookshopbanner.jpg?alt=media&token=594ff9b0-aba9-40ce-8e72-fda96b77f017" style={{ width: '70%', marginTop: 0    }} className='rounded-md'/>
      </div>
      <div     className="md:pl-20 grid md:pr-20"
>

<div className=" md:w-[70%] p-5 flex flex-col justify-self-center shadow-lg mt-10">


        {/* <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">BCS BOOKSHOP</h1> */}

<h6 style={{ color: "#333", padding: 10, }}  className="">
The BCS Bookshop was established in the early 1970s for the Sole purpose of distributing the Everlasting Gospels of the Supernatural Teacher, Great Leader Olumba Olumba obu.
</h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
Initially, those Gospels were typed on stencils and produced on cheap papers, for affordable distribution. The Bookshop also saw to the production and distribution of Pentecostal Assemblies Minutes as well as the Minutes of the Universal Spiritual Council of Churches and literature pertaining to the BCS Fold.
</h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
As the Holy Father was busy doling out words of life to humanity, some groups of dedicated workers of the Fold, mainly from the Senior Christ Servant Universal Natural Body, saw the need to chronicle those Words in Prints, for posterity and ensured that they were distributed all over the BCS formations. Now their concerted efforts have yielded tremendous results as we now have the sales of the Everlasting Gospels in print and other literature from the Kingdom at very affordable prices. 
</h6>
<h6 style={{ color: "#333", padding: 10, }}  className="">
The quality of books has helped many scholars to carry out successful research works to enable them to write meaningful books on comparable religions as well as understand the Brotherhood of the Cross and Star, its Leadership, doctrines, sacraments and practices.
</h6>
</div>
</div>

    </motion.nav>
  )
}

export default BookShop