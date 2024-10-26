import React, { useEffect, useRef, useState } from 'react'
import '../../index.css';
import '../../index.css';
import { motion } from "framer-motion";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'


export default function Hero() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 6000;

  //for our slide show

  return (
      < >
      <div className=' flex-row relative hidden md:flex'>
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
      </div>

      {sliderData.map((slide, index) => {
        return (
          <div
            // class={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
    <div className='justify-start items-center   animate-slide-in  relative p-28 hidden md:flex'>
    {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >

        <img src={slide.image} className="" style={{height: 450, width: 600}} />
      </motion.div> */}

                <motion.div
                style={{borderRadius: 20, marginTop: 250}}
        className='w-2/5 h-60 bg-white mb-0  shadow-2xl'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 3,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
        }}
      >
                {/* <img src={slide.image} className="" style={{borderRadius: 20}} /> */}
        <div className='m-10'>
          <h1 className='text-[#808080] text-3xl font-extrabold uppercase text-center '> {slide.headings}</h1>
          <p className='text-[#999999] text-center mt-5 text-xs'>
           {slide.desc}
            </p>
          <Link to={'/About'} className='w-auto text-white hover:text-[#003366] border-[#003366] rounded-sm hover:border-2 mb sm:mt-5 h-10 bg-[#ff3333] hover:bg-white flex items-center justify-center cursor-pointer hover:'>
            <p  className='  font-semibold'>Learn More!</p>
          </Link>
        </div>
      </motion.div>
                {/* <motion.div
                                style={{borderRadius: 20}}
        className='w-2/5 h-60 bg-white mb-0 shadow-2xl mt-64'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 3,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div className='m-10'>
          <h1 className='text-[#808080] text-3xl font-extrabold uppercase text-center '> {slide.heading}</h1>
          <p className='text-[#999999] text-center mt-5 text-xs'>
           {slide.desc}
            </p>
          <a href='/About' className='w-auto text-white hover:text-[#003366] border-[#003366] rounded-sm hover:border-2 mb sm:mt-5 h-10 bg-[#ff3333] hover:bg-white flex items-center justify-center cursor-pointer hover:'>
            <p  className='  font-semibold'>Learn More!</p>
          </a>
        </div>
      </motion.div> */}
              </div>
            )}
          </div>
        );
      })}
      <div style={{paddingTop: 50}}/>
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

