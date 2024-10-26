import React, { useEffect, useRef, useState } from 'react'
import '../../index.css';
import '../../index.css';
import { motion } from "framer-motion";


export default function Hero() {
  const transition = {
    duration: 0.8,
    type: "spring",
  };

  //for our slide show

  return (
    <>
       {/* <div className=' flex-row relative hidden md:flex'>
        <div 
                onClick={prevSlide}
        // onClick={() => setShow(!Show)}
        className='absolute left-0 m-3 w-14 h-14 mt-40 bg-white z-50 flex items-center justify-center cursor-pointer shadow-2xl hover:rounded-full' 
        // onClick={movePrev}
        >
          <RiArrowLeftSLine className='text-gray-600' />
        </div>
        <div 
                onClick={nextSlide}
        // onClick={() => setShow(!Show)}
        className='absolute w-14 h-14 m-3 mt-40 bg-white right-0 z-30 flex items-center justify-center cursor-pointer shadow-2xl hover:rounded-full' 
        // onClick={moveNext}
        >
          <RiArrowRightSLine className='text-gray-600' />
        </div>
      </div> */}
    <div className="mt-[30%] w-[100%] h-fit gap-10 justify-center mb-10 hidden md:flex">
        <motion.div
        // style={{borderWidth: 2, borderColor: 'red'}} 
          initial={{ top: "-10rem", left: "50rem" }}
          whileInView={{ left: "0rem", top: "0rem" }}
          transition={transition}
          className="md:w-[43%] xl:w-80 w-80 md:h-64 h-80 pr-5 p-1.5 xl:h-80 rounded-full bg-gray-300 overflow-hidden relative hover:z-50 hover:scale-110 hover:animate-pulse duration-500 shadow-2xl"
        >
          {/* <img
            src={gng}
            alt=""
            className="w-[100%] h-[100%] rounded-full shadow-lg"
          />
          <p className="bg-gradient-to-t from-slate-200 via-white to- absolute text-black shadow-2xl top-[37%] bg-transparent rounded-full w-[80%] text-xs font-serif p-5 h-[57%] left-[10%]">
            <p className="text-red-700 font-bold text-xl">PEACE BE UNTO YOU</p>
            Love feast is sacrament introduced by the Holy Spirit in Brotherhood
            of the Cross and Star. It is to commemorate the Passover last
            supper, during which our God and savior changed bread to his living
            Body...
          </p> */}
        </motion.div>
        <motion.div
        // style={{borderWidth: 2, borderColor: 'red'}} 
          initial={{ top: "0rem", left: "10rem" }}
          whileInView={{ left: "0rem", top: "0rem" }}
          transition={transition}
          className="md:w-[43%] xl:w-80 w-80 md:h-64 pr-5 p-1.5 relative h-80 xl:h-80 rounded-full overflow-hidden bg-gray-300 hover:z-50 hover:scale-110 hover:animate-pulse duration-500 shadow-2xl"
        >
          {/* <img
            src={gng}
            alt=""
            className="w-[100%] h-[100%] rounded-full shadow-lg"
          />
          <p className="bg-gradient-to-t from-slate-200 via-white to- absolute shadow-2xl top-[37%] bg-transparent rounded-full w-[80%] text-xs font-serif p-5 h-[57%] left-[10%]">
            <p className="text-red-700 font-bold text-xl">PEACE BE UNTO YOU</p>
            Love feast is sacrament introduced by the Holy Spirit in Brotherhood
            of the Cross and Star. It is to commemorate the Passover last
            supper, during which our God and savior changed bread to his living
            Body...
          </p> */}
        </motion.div>
        <motion.div
                // style={{borderWidth: 2, borderColor: 'red'}} 
          initial={{ bottom: "1rem", left: "10rem" }}
          whileInView={{ left: "0rem", top: "0rem" }}
          transition={transition}
          className="md:w-[43%] xl:w-80 w-80 md:h-64 pr-5 p-1.5 relative h-80 xl:h-80 rounded-full overflow-hidden bg-gray-300 hover:z-50 hover:scale-110 hover:animate-pulse duration-500 shadow-2xl"
        >
          {/* <img
            src={gng}
            alt=""
            className="w-[100%] h-[100%] rounded-full shadow-lg"
          />
          <p className="bg-gradient-to-t from-slate-200 via-white to- absolute shadow-2xl top-[37%] bg-transparent rounded-full w-[80%] text-xs font-serif p-5 h-[57%] left-[10%]">
            <p className="text-red-700 font-bold text-xl">PEACE BE UNTO YOU</p>
            Love feast is sacrament introduced by the Holy Spirit in Brotherhood
            of the Cross and Star. It is to commemorate the Passover last
            supper, during which our God and savior changed bread to his living
            Body...
          </p> */}
        </motion.div>
      </div>
    </>
  );
};













  // return (
  //   <>

  //   {/* <div className='relative p-10 hidden md:flex'  > */}
  //     <div className=' flex flex-row'>
  //       <div 
  //       // onClick={() => setShow(!Show)}
  //       className='absolute left-0 m-3 w-14 h-14 mt-10 bg-white z-50 flex items-center justify-center cursor-pointer shadow-2xl hover:rounded-full' 
  //       // onClick={movePrev}
  //       >
  //         <RiArrowLeftSLine className='text-gray-600' />
  //       </div>
  //       <div 
  //       // onClick={() => setShow(!Show)}
  //       className='absolute w-14 h-14 m-3 mt-10 bg-white right-0 z-30 flex items-center justify-center cursor-pointer shadow-2xl hover:rounded-full' 
  //       // onClick={moveNext}
  //       >
  //         <RiArrowRightSLine className='text-gray-600' />
  //       </div>
  //     </div>





  //   <div className='justify-between items-center relative p-10 hidden md:flex'>
     


  //     <motion.div
  //       initial={{ opacity: 0, scale: 0.5 }}
  //       animate={{ opacity: 1, scale: 1 }}
  //       transition={{
  //         duration: 0.8,
  //         delay: 0.5,
  //         ease: [0, 0.71, 0.2, 1.01]
  //       }}
  //     >
  //                {/* <img src={Son} className="ml-28 pb-36" style={{height: 600, flex: 1, width: 400}} /> */}

  //       <img src={FatherAndSon} className="" style={{height: 450, width: 600}} />
  //     </motion.div>
  //     <motion.div
  //       className='w-2/5 h-64 bg-white mb-28 shadow-2xl mr-20 '
  //       initial={{ opacity: 0, scale: 0.5 }}
  //       animate={{ opacity: 1, scale: 1 }}
  //       transition={{
  //           duration: 2,
  //           delay: 0.3,
  //           ease: [0, 0.71, 0.2, 1.01]
  //       }}
  //     >
  //       <div className='m-12'>
  //         <h1 className='text-[#808080] text-3xl font-extrabold uppercase '> Peace &nbsp; Be &nbsp; Unto &nbsp; You</h1>
  //         <p className='text-[#999999] mt-5 text-left text-xs'>
  //           BCS meaning brotherhood of the cross and star our beloveth father has tought us all to have love for one another, so we don't fall into diverse temptation</p>
  //         <a href='/STV' className='w-auto text-white hover:text-[#003366] border-[#003366] rounded-sm hover:border-2 mb sm:mt-5 h-10 bg-[#ff3333] hover:bg-white flex items-center justify-center cursor-pointer hover:'>
  //           <p  className='  font-semibold'>Join Us Live!</p>
  //         </a>
  //       </div>
  //     </motion.div>

  //   </div>
  // {/* </div> */}


  //   {/* <div className='relative p-10 hidden md:flex'  > */}
  
  //   {/* <div  className=' justify-between items-center relative p-10 hidden md:flex'>
  //     <motion.div
  //       className='w-2/5 h-64 bg-white mb-28 shadow-2xl ml-20 '
  //       initial={{ opacity: 0, scale: 0.5 }}
  //       animate={{ opacity: 1, scale: 1 }}
  //       transition={{
  //           duration: 2,
  //           delay: 0.3,
  //           ease: [0, 0.71, 0.2, 1.01]
  //       }}
  //     >
  //       <div className='m-12'>
  //         <h1 className='text-[#808080] text-3xl font-extrabold uppercase '> Love &nbsp; Faith &nbsp; & &nbsp; Hope</h1>
  //         <p className='text-[#999999] mt-5 text-left text-xs'>
  //           BCS meaning brotherhood of the cross and star our beloveth father has tought us all to have love for one another, so we don't fall into diverse temptation</p>
  //         <a href='/STV' className='w-auto text-white hover:text-[#003366] border-[#003366] rounded-sm hover:border-2 mb sm:mt-5 h-10 bg-[#ff3333] hover:bg-white flex items-center justify-center cursor-pointer hover:'>
  //           <p className='  font-semibold'>Join Us Live!</p>
  //         </a>
  //       </div>
  //     </motion.div>


  //     <motion.div
  //       initial={{ opacity: 0, scale: 0.5 }}
  //       animate={{ opacity: 1, scale: 1 }}
  //       transition={{
  //         duration: 0.8,
  //         delay: 0.5,
  //         ease: [0, 0.71, 0.2, 1.01]
  //       }}
  //     >
  //              <img src={FatherAndSon} className="" style={{height: 450, width: 600}} />
  //     </motion.div>
  //   </div> */}
  // {/* </div>  */}
   



 
  //   </>

  // )

