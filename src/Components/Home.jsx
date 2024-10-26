import { Link } from "react-router-dom";
import Hero from "./Hero/Hero";
import '../index.css';
import { useState } from "react";
import { motion } from "framer-motion";
import MBHero from "./Hero/MBHero";
import GbVid from '../Components/Header/bcs.mp4';
import Uni from '../images/uni.jpg';
import Knonk from '../images/knk.jpg';
import ftt from '../images/ftt.jpg';
import foot3 from '../images/foot3.jpg';
import foot4 from '../images/foot4.jpg';
import foot1 from '../images/foot1.jpg';
import do3 from '../images/do.jpg';
import do33 from "./img/14.jpg"
import gg3 from '../images/gg3.jpeg';
import bap from '../images/bap.jpg';
import cb from '../images/cb.jpg';
import wed from '../images/wed.jpg';




const Home=()=>{
  // const GbVid = "https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/videos%2Fbcs.mp4?alt=media&token=79e3d7f7-62b1-414b-8ace-00339659a0dc"

  const [open, setOpen] = useState(false);

  const toogle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };


    const transition = {
      duration: 0.8,
      type: "spring",
    };
    const aboutData = [
      {
          title: "Baptism",
          i: bap
      },
      {
          title: "Child Blessing",
          i: cb

      },
      {
          title: "Marriage Blessing",
          i: wed
      },
      {
          title: "Love Feast",
          i: do33
      },
  ]
    const aboutus = [
      {
          title: "BAPTISM",
          i: foot1
      },
      {
          title: "CHILD BLESSING",
          i:foot3

      },
      {
          title: "MARRIAGE BLESSING",
          i:foot4

      },
      {
          title: "LOVE FEAST",
          i: do33
      },
  ]
  // const GbVid = 'https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/videos%2Fbackgroundvideo.mp4?alt=media&token=5591dd8b-0b26-4f55-9f15-8952c52a33a4'
    return(
        <div className="text w-[100%]">
    <div className="">
    <div
             // style={{width: '100%'}}
             dangerouslySetInnerHTML={{
               __html: `<video  style="
               position: absolute;
               width: 100%;
               top: 0;
               height: 100%;
               object-fit: cover;
               // z-index: -1;" 
               autoplay loop muted playsinline>
               <source src=${GbVid} type="video/mp4" />
               Your browser does not support the video tag.
               </video>`
              }}
              />
      
      <Hero />
      <MBHero />
      {/* <MobileHero /> */}
    </div>


        <div className="w-[100%]">


        <div className=" pt-0">
        <div className="sm:hidden md:pt-40"></div>
        <div className="lg:pt-0"></div>
        <div className="sm:hidden pt-0"></div>




        <div className="md:pr-20 md:pl-20">
       
           
<section class="bg-white w-[90%]">
            <div class="gap-0 items-center py-8 px-4 mx-auto lg:grid lg:grid-cols-2  lg:py-16 lg:px-6">

                <div class=" relative mb-64">
                    {/* <div className='hidden md:flex'>
                        <img class="relative  top-0 left-0 w-24 sm:5" src={F} alt="office content 1" />
                    </div> */}
                    <div className='hidden md:flex'>
                        <img class="absolute top-0 left-28 object-cover w-64 h-80" src={ftt} alt="office content 2" />
                    </div>
                    {/* <div className='hidden md:flex'>
                        <img class="absolute top-60 left-72 h-32 w-24 bottom-0 sm:5" src={F} alt="office content 2" />
                    </div> */}
                </div>
                <div class=" sm:mt-10">
                    <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900">Know more about us</h2>
                    <div className='grid grid-cols-4 mt-0 gap-8  mb-5'>
                        {aboutus.map((card, index) => (
                            <img src={card.i} className={`flex items-center flex-col gap-4 h-36 w-24 p-0 bg-[#eee] rounded-md`} />
                        ))}
                    </div>
                    <p class="mb-4 text-gray-500 text-sm">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa...</p>
                    <div>
                        <Link 
                           onClick={() => {
                            window.scrollTo(0, 0);
                          }}  
                         to="/About" className='text-xs bg-red-600 text-white p-3 rounded-md'>Learn more</Link>
                    </div>
                    {/* <div className="pt-10">
                        <a href="/Doctrine" className='text-xs  bg-red-600 text-white p-3 rounded-md  text-center md:'>Learn more</a>
                    </div> */}
                </div>
            </div>
        </section>

      </div>



<div className="xl:flex relative w-[90%] md:mb-[44%]">
        <div className="xl:text-start xl:w-[35%] xl:ml-[5%] p-3 xl:p-5">
        <h1 style={{fontSize:30, fontWeight: "bold", paddingTop: 0, paddingLeft: 10, paddingRight: 10 }}  className=" text-center text-gray-900 ">
        Doctrines</h1>
          <p className="font-serif text-gray-500 mt-[5%]">
          Brotherhood Of The Cross And Star (BCS) Derives all her doctrines 
              from the Supernatural Teachings and Doctrines Of Our Lord and Saviour, Our 
              Lord Jesus Christ (Isa. 2:2-4; John 16:12-15; 1Cor. 13:10-12)    
          </p>
          <div className="pt-10">
                        <Link 
                           onClick={() => {
                            window.scrollTo(0, 0);
                          }}  
                         to="/Doctrine" className='text-xs  bg-red-600 text-white p-3 rounded-md  text-center md:'>Learn more</Link>
                    </div>
        </div>
        <div class="bg-white-100 w-full m-5 gap-4 flex-wrap flex justify-center items-center">
        {/* <div className=" gap-4 flex-wrap flex justify-center items-center"> */}
          <motion.div
            initial={{ left: "40rem" }}
            whileInView={{ left: "30rem" }}
            transition={transition}
            className="xl:absolute xl:w-[25%] text-center w-[90%] cursor-pointer rounded-xl md:mt-[40%] xl:right-[50%] h-[110%] pr-5 pt-2 pb-5 shadow-2xl xl:hover:translate-x-9 duration-500"
          >
            <Link
               onClick={() => {
                window.scrollTo(0, 0);
              }}  
             to="/Doctrine">

            
            <img class="h-40 w-[100%] object-cover rounded-xl" 
src={Uni}/>
<div class="p-2 text-center items-center">
<h3 style={{fontSize:20,  color: "#b30000", fontWeight: "bold", paddingTop: 10 }}  className="">BCS Uniform
</h3>
<p class="text-sm ml-4 text-gray-600">
The official uniform of the Brotherhood of the Cross and Star is white garment with cape known officially as the “soutane” in conformity with what is recorded in revelation of John the Divine...</p>
</div>
{/* <div class="m-5 text-center items-center">
<a role='button' href='/Doctrine' class="text-white text-center bg-blue-400 shadow-lg hover:shadow-2xl px-3 py-1 rounded-md hover:bg-blue-500">Learn More</a>
</div> */}
            </Link>
          </motion.div>
          <motion.div
            initial={{ left: "30em", top: "rem" }}
            whileInView={{ left: "38rem", top: "0rem" }}
            transition={transition}
            className="xl:absolute xl:w-[25%] w-[90%] cursor-pointer text-center rounded-xl mt-[2%] xl:ml-[24%] h-[110%] pr-5 pt-2 pb-5 shadow-2xl xl:hover:translate-x-[-28%] duration-500"
          >
                        <Link
                           onClick={() => {
                            window.scrollTo(0, 0);
                          }}   
                         to="/Doctrine">

                        <img class="h-40 w-80 object-cover rounded-xl" 
src={Knonk}/>
<div class="p-2 text-center items-center">
<h3 style={{fontSize:20,  color: "#b30000", fontWeight: "bold", paddingTop: 10 }}  className="">Knocking Of Head
</h3>
<p class="text-sm ml-4 text-gray-600">
BCS members knock (bow) their head three times in reverence to the Holy Trinity God, before and after prayers or that any time, place or occasion whenever the spirit directs...</p>
</div>
{/* <div class="m-5 text-center items-center">
<a role='button' href='/Doctrine' class="text-white text-center bg-blue-400 shadow-lg hover:shadow-2xl px-3 py-1 rounded-md hover:bg-blue-500">Learn More</a>
</div> */}
            </Link>
          </motion.div>
          <motion.div
            initial={{ top: "-5rem", left: "50rem" }}
            whileInView={{ left: "40rem", top: "7rem" }}
            transition={transition}
            className="xl:absolute xl:w-[25%] w-[90%] cursor-pointer text-center rounded-xl xl:mt-[30%] xl:ml-[18%] h-[110%] pr-5 pt-2 pb-0 shadow-2xl xl:hover:translate-x-24 duration-500"
          >
                                    <Link 
                                       onClick={() => {
                                        window.scrollTo(0, 0);
                                      }}  
                                    to="/Doctrine">
                                    <img class="h-40 w-80 object-cover rounded-xl" 
src={gg3}/>
<div class="p-5 text-center items-center">
<h3 style={{fontSize:20, color: "#b30000", fontWeight: "bold", paddingTop: 10 }}  className="">Wearing Of Shoes
</h3>
<p class="text-sm ml-4 text-gray-600">
It is the doctrine of the Brotherhood of the Cross and Star not to wear shoes into the Bethels or the house of worship, In recognition and reverence of the holiness and presence of God...</p>
</div>
{/* <div class="m-5 text-center items-center">
<a role='button' href='/Doctrine' class="text-white text-center bg-blue-400 shadow-lg hover:shadow-2xl px-3 py-1 rounded-md hover:bg-blue-500">Learn More</a>

</div> */}
            </Link>
          </motion.div>
        </div>
        </div>



        <motion.nav
    className="md:pl-16 pb-10 md:pr-16"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 2,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
    }}
    >
      <Link 
         onClick={() => {
          window.scrollTo(0, 0);
        }}  
      to="/Sacrament">
      <h1 style={{fontSize:30, fontWeight: "bold", padding: 30, paddingLeft: 10, paddingRight: 10 }}  className=" text-center text-gray-900 ">
      Sacraments</h1>

                  {/* <img  src={Sonn} style={{ width: '50%', height: 100, marginBottom: 0    }}/> */}
                  </Link>

      {/* <div className="">

       <h1 style={{fontSize:60, fontWeight: "bold", paddingTop: 0, }}  className=" text-gray-900 pl-5">
              Sacrament</h1>
            <img  src={Son} style={{ width: '100%', marginBottom: 0    }}/>
            <h6 style={{ color: "#333", }}  className="p-5">
In Brotherhood Of The Cross And Star Certain rites are performed according
to the directives of The Holy Spirit. These include Baptism, Child Blessing, 
Love Feast and Marriage Blessing...
</h6>
      </div> */}
    <section class="bg-white items-center">
                <div class="font-light  sm:text-lg dark:text-gray-400 sm:mt-10">
                    <div className='mb-5 bg-white-100 w-full p-0 md:gap-32 flex-wrap flex justify-center items-center'>
                        {aboutData.slice(0, 2).map((card, index) => (
                          <Link 
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}  
                          to="/Sacrament"  className="cursor-pointer">
                            <img src={card.i} className={`flex items-center md:flex-col gap-4 h-80 w-96 p-3 bg-[#eee] rounded-md`} />
       <p style={{fontSize:20, color: "#b30000", fontWeight: "bold", padding: 10 }}  className=" text-center ">
              {card.title}</p>
                          </Link>
         ))}
                    </div>
                    {/* <p class="mb-4 text-black text-sm">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa...</p> */}
                    
                </div>
        </section>

    <section class="bg-white items-center">
                <div class="font-light  sm:text-lg dark:text-gray-400 sm:mt-10">
                    <div className='mb-5 bg-white-100 w-full p-0 md:gap-32 flex-wrap flex justify-center items-center'>
                        {aboutData.slice(2, 4).map((card, index) => (
                          <Link 
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}  
                          to="/Sacrament"  className="cursor-pointer">
                            <img src={card.i} className={`flex items-center md:flex-col gap-4 h-80 w-96 p-3 bg-[#eee] rounded-md`} />
       <p style={{fontSize:20, color: "#b30000", fontWeight: "bold", padding: 10 }}  className=" text-center ">
              {card.title}</p>
                          </Link>
         ))}
                    </div>
                    {/* <p class="mb-4 text-black text-sm">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa...</p> */}
                    
                </div>
        </section>
    
    </motion.nav>

 

   

 
    </div>
    </div>
    </div>
    )
}

export default Home;