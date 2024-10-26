import React from 'react'
import { motion } from "framer-motion";



const 
Redeem = () => {
  return (
    <motion.nav
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 2,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
        }}className='pt-2 md:pl-20 md:pr-20'>
          <div className="w-[100%] text-center mt-5 md:p-5 flex flex-wrap justify-center">
<img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fmredeemhomebanner.jpg?alt=media&token=28ede298-f2b2-461a-b946-94912c20b432" style={{ width: '80%', marginBottom: 0    }}/>

<img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fmredeemhomesponsorshipbanner.jpg?alt=media&token=235212ea-7471-4b10-880b-7e0304687d39" style={{ width: '70%', height: '70%', marginTop: 40, marginBottom: 10    }} className='flex justify-self-center self-center'/>
          </div>

<div className='grid'>

      {/* <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">MOTHER ELIZABETH OBU REDEEMED HOME </h1> */}
<div className=" md:w-[60%] p-5 flex flex-col justify-self-center shadow-lg mt-10">

<h6 style={{ color: "#333", padding: 10, }}  className="">
The Home was established by the Holy Mother, Esu-Elizabeth Olumba Obu during the Nigerian civil war of 1967 – 1970. At that time, they were very many children who were abandoned by parents who had died in the course of the war or had fled their homes. The Holy Mother took in all such children under Her care and gave them succour care and love, she fed them, protected them from the vagaries of the war and gave them new life. 
</h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
Those children lived with the Holy family till, after the war. They were sent to school and were treated to the good life as members of the Holy family. Many of them were even sent to higher institutions outside the country, especially to the United States of America where other children of the Royal family were educated.
</h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
The nucleus of that humble beginning of mercy works by the Holy Mother is what we have today as Mother Elizabeth Obu Redeemed Home of love, and is registered with the Federal Government of Nigeria at the Cooperate Affairs Commission (CAC), with seven members of the registered trustees. The Home is also registered with Cross River State humanity and Social Welfare. Now, the Holy Father, His Holiness Olumba Olumba Obu, is the Sole sponsor of this legacy of the Holy Mother. Today very many vulnerable children from BCS and outside the Fold are taken care of, at the Home.
</h6>
</div>
</div>

    </motion.nav>
  )
}

export default Redeem