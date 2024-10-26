import React, { useEffect, useRef, useState } from 'react'
import '../../index.css';
import FatherAndSon from "../../img/fands.png";
import '../../index.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const sliderData = [
  {
    heading:
      "Peace  Be  Unto  You",
    desc: " BCS meaning brotherhood of the cross and star our beloveth ",
    // desc: " BCS meaning brotherhood of the cross and star our beloveth father has tought us all to have love for one another, so we don't fall into diverse temptation",
    image: FatherAndSon,
  },
  {
    heading: " Love  Faith  &  Hope",
    desc: " BCS meaning brotherhood of the cross and star our beloveth ",
    image: FatherAndSon,
  },
];
export default function MobileHero() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 6000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    < >
    <div className='relative md:hidden'>
      {/* <div 
              onClick={prevSlide}
      // onClick={() => setShow(!Show)}
      className='absolute left-0 m-3 w-14 h-14 mt-10 bg-white z-50 flex items-center justify-center cursor-pointer shadow-2xl hover:rounded-full' 
      // onClick={movePrev}
      >
        <RiArrowLeftSLine className='text-gray-600' />
      </div>
      <div 
              onClick={nextSlide}
      // onClick={() => setShow(!Show)}
      className='absolute w-14 h-14 m-3 mt-10 bg-white right-0 z-30 flex items-center justify-center cursor-pointer shadow-2xl hover:rounded-full' 
      // onClick={moveNext}
      >
        <RiArrowRightSLine className='text-gray-600' />
      </div> */}
    </div>

    {sliderData.map((slide, index) => {
      return (
        <div
          // class={index === currentSlide ? "slide current" : "slide"}
          key={index}
        >
          {index === currentSlide && (
  <div className=' animate-slide-in mt-96 md:hidden'>
  {/* <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >

      <img src={slide.image} className="" />
    </motion.div> */}

              <motion.div
      className='w-screen rounded-2xl mt-0  p-2 h-68 bg-white shadow-2xl  '
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 3,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
      }}
    >


      <div className='m-8'>
        <h1 className='text-[#808080] text-3xl font-extrabold uppercase text-center '> {slide.heading}</h1>
        {/* <h1 className='text-[#808080] text-3xl font-extrabold uppercase '> Peace &nbsp; Be &nbsp; Unto &nbsp; You</h1> */}
        <p className='text-[#999999] m-5 text-left text-xs'>
         {slide.desc}
          </p>
          <Link to={'/STV'} className='w-auto text-white hover:text-[#003366] border-[#003366] rounded-lg hover:border-2 mb sm:mt-5 h-10 bg-[#ff3333] hover:bg-white flex items-center justify-center cursor-pointer hover:'>
          <p  className='  font-semibold'>Join Us Live!</p>
        </Link>
      </div>
    </motion.div>
            </div>
          )}
        </div>
      );
    })}
  </>
);

//   return (
//     <>

//     {Show ? 
//     <div className='relative  md:hidden'  >
//     {showButtons ? (
//       <div className=' flex flex-row'>
//         <div 
//         onClick={() => setShow(!Show)}
//         className='absolute left-0 m-3 w-14 h-14 mt-10 bg-white z-50 flex items-center justify-center cursor-pointer shadow-2xl hover:rounded-full' 
//         // onClick={movePrev}
//         >
//           <RiArrowLeftSLine className='text-gray-600' />
//         </div>
//         <div 
//         onClick={() => setShow(!Show)}
//         className='absolute w-14 h-14 m-3 mt-10 bg-white right-0 z-30 flex items-center justify-center cursor-pointer shadow-2xl hover:rounded-full' 
//         // onClick={moveNext}
//         >
//           <RiArrowRightSLine className='text-gray-600' />
//         </div>
//       </div>
//     ) : null}
//     <div ref={carousel} className='justify-between items-center'>
     


//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           duration: 0.8,
//           delay: 0.5,
//           ease: [0, 0.71, 0.2, 1.01]
//         }}
//       >
//                  <img src={Son} className="" />

//         {/* <img src={FatherAndSon} className="" /> */}
//       </motion.div>
//       {/* <a href='/STV' className='w-auto text-white hover:text-[#003366] border-[#003366] rounded-sm hover:border-2 mb sm:mt-5 h-10 bg-[#ff3333] hover:bg-white flex items-center justify-center cursor-pointer hover:'>
//             <p className='  font-semibold'>Join Us Live!</p>
//           </a> */}
//           <motion.div
//         className='w-screen rounded-2xl mt-10  p-2 h-68 bg-white shadow-2xl  '
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//             duration: 2,
//             delay: 0.3,
//             ease: [0, 0.71, 0.2, 1.01]
//         }}
//       >
//         <div className='m-8'>
//           <h1 className=' text-[#808080] text-3xl font-extrabold uppercase '> Peace &nbsp; Be &nbsp; Unto You</h1>
//           <p className='text-[#999999] m-5 text-left text-xs'>
//             BCS meaning brotherhood of the cross and star our beloveth 
//             {/* father has tought us all to have love for one another, so we don't 
//             fall into diverse temptation */}
//             </p>
//           <a href='/STV' className='w-auto text-white hover:text-[#003366] border-[#003366] rounded-lg hover:border-2 mb sm:mt-5 h-10 bg-[#ff3333] hover:bg-white flex items-center justify-center cursor-pointer hover:'>
//             <p className='  font-semibold'>Join Us Live!</p>
//           </a>
//         </div>
//       </motion.div>

//     </div>
//   </div>
//     :



//     <div className='relative pt-10 md:hidden'  >
//     {showButtons ? (
//       <div className=' flex flex-row'>
//         <div className='absolute left-0 m-3 w-14 h-14 mt-10 bg-white z-50 flex items-center justify-center cursor-pointer shadow-2xl hover:rounded-full' 
//         // onClick={movePrev}
//         onClick={() => setShow(!Show)}
//         >
//           <RiArrowLeftSLine className='text-gray-600' />
//         </div>
//         <div className='absolute w-14 h-14 m-3 mt-10 bg-white right-0 z-30 flex items-center justify-center cursor-pointer shadow-2xl hover:rounded-full' 
//         // onClick={moveNext}
//         onClick={() => setShow(!Show)}
//         >
//           <RiArrowRightSLine className='text-gray-600' />
//         </div>
//       </div>
//     ) : null}

//     <div ref={carousel} className=''>
    


//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           duration: 0.8,
//           delay: 0.5,
//           ease: [0, 0.71, 0.2, 1.01]
//         }}
//       >
//                <img src={FatherAndSon} className="" />
//         {/* <img src={Son} className="mr-14"  /> */}
//       </motion.div>

//         <motion.div
//         className='w-screen rounded-2xl mt-5 p-2 h-68 bg-white shadow-2xl  '
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//             duration: 2,
//             delay: 0.3,
//             ease: [0, 0.71, 0.2, 1.01]
//         }}
//       >
//         <div className='m-8'>
//           <h1 className=' text-[#808080] text-3xl font-extrabold uppercase '> Love &nbsp; Faith &nbsp; & Hope</h1>
//           <p className='text-[#999999] m-5 text-left text-xs'>
//             BCS meaning brotherhood of the cross and star our beloveth 
//             {/* father has tought us all to have love for one another, so we don't 
//             fall into diverse temptation */}
//             </p>
//           <a href='/STV' className='w-auto text-white hover:text-[#003366] border-[#003366] rounded-lg hover:border-2 mb sm:mt-5 h-10 bg-[#ff3333] hover:bg-white flex items-center justify-center cursor-pointer hover:'>
//             <p className='  font-semibold'>Join Us Live!</p>
//           </a>
//         </div>
//       </motion.div>

//     </div>
//   </div> 
   
//    }



// {/*  */}


 
//     </>

//   )
}
