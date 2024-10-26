import { Link } from "react-router-dom";
import STV2 from "./NKT";
import up from "../img/up.jpg";
import foot3 from '../images/foot3.jpg';
import foot4 from '../images/foot4.jpg';
import leader from "../Components/banner/leader .jpg"
import { motion } from "framer-motion";

const About=()=>{
  const YouVid = [
    {
        vidlink: "https://www.youtube.com/embed/vpbc2ZihpLU?si=ssACw-bav5PUuTbe"
    },
    {
        vidlink: "https://www.youtube.com/embed/vJbtojVt2uY"
    },
    {
        vidlink: "https://www.youtube.com/embed/EGWbyyUGJOo"
    },
    {
        vidlink: "https://www.youtube.com/embed/HEFH9NEQTrw"
    },
    {
        vidlink: "https://www.youtube.com/embed/gJTCR3UUmyw?si=dYIjrz1lca38mIZP"
    },
    {
        vidlink: "https://www.youtube.com/embed/X9uIBqYwK0g"
    },
]
    return(
      <motion.nav
      className="w-[100%]"

      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 2,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
      }}
      >
        <div className="md:pr-20 md:p-0 p- -ml-4 md:pl-20  justify-center grid">

          <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
                    <img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2FAboutusbanner.jpg?alt=media&token=b74cd1c6-b5e5-4e40-b352-7b09eeeba941" style={{ height:"85%", width:"85%", marginBottom: 0,}} className=""/>
            </div>


            {/* <h1 id="0" style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className=" text-center">About Us</h1> */}
            <div className="flex md:w-[60%] flex-wrap items-center justify-center mt-20 shadow-md p-3 gap-6">
              <img src={leader} alt="image" className="w-96 h-80" />
                  <h6 style={{ color: "#333", padding: 30, }}  className="lg:w-[40%] ">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa.
                </h6>
            </div>

            <div className="flex lg:flex-row-reverse justify-self-end md:w-[80%] flex-wrap align-middle items-center justify-center mt-32 shadow-md p-3 gap-6">
              <img src={foot4} className="w-96  h-60" alt="image" />
                  <h6 style={{ color: "#333", padding: 30, }}  className="lg:w-[40%]">
                  Brotherhood of the Cross and Star was registered as a corporate body with the Federal Republic of Nigeria on the 25th day of march 1964. Brotherhood of the Cross and Star is the proverbial biblical mustard seed, whose insignificant genesis in biakpan land, a backwater village in the remotest area of present Cross River State of Nigeria has metamorphosed into a universal movement with spiritual magnitude made possible by the charismatic personality, purposefulness and truthful consistency of its Founder and Leader, Olumba Olumba Obu.
                </h6>
            </div>

            <div className="flex flex-wrap md:w-[80%] items-center justify-center mt-28 shadow-md p-3 gap-6">
              <img src={foot3} alt="image" className="w-96 h-60" />
                  <h6 style={{ color: "#333", padding: 30, }}  className="lg:w-[40%] ">
                  The name “Brotherhood” means love, truth, good manner, mercy, patience, humility, meekness, unity as well as oneness of God’s creations. It is neither a political party, a secret society nor anything of this world. It is the New Kingdom of God instituted and Governed by God Himself. The Brotherhood of the Cross And Star upholds the doctrine of mutual dependence that binds everything created and uncreated together. It is the assemblage of the true children of God who have been redeemed by God Through the sinless blood of Our Lord Jesus Christ</h6>
            </div>

         <div class="m-5 flex items-center justify-center ">
            {/* <a role='button' href='/About' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-blue-700">Learn More</a> */}

            <Link 
               onClick={() => {
                window.scrollTo(0, 0);
              }}  
             role='button' to={'/Leader'} class="text-white text-center bg-red-600 shadow-lg hover:shadow-2xl px-5 py-2 rounded-md hover:bg-blue-500">Learn More</Link>
        </div>
{/* <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">HISTORY</h1> */}
{/* 
            <h6 style={{ color: "#333", fontWeight: "bold", padding: 30, }}  className="">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa.
</h6>
       
            <h6 style={{ color: "#333", fontWeight: "bold", padding: 30, }}  className="">
Brotherhood of the Cross and Star was registered as a corporate body with the Federal Republic of Nigeria on the 25th day of march 1964. Brotherhood of the Cross and Star is the proverbial biblical mustard seed, whose insignificant genesis in biakpan land, a backwater village in the remotest area of present Cross River State of Nigeria has metamorphosed into a universal movement with spiritual magnitude made possible by the charismatic personality, purposefulness and truthful consistency of its Founder and Leader, Olumba Olumba Obu.
</h6>
       
            <h6 style={{ color: "#333", fontWeight: "bold", padding: 30, }}  className="">
The name “Brotherhood” means love, truth, good manner, mercy, patience, humility, meekness, unity as well as oneness of God’s creations. It is neither a political party, a secret society nor anything of this world. It is the New Kingdom of God instituted and Governed by God Himself. The Brotherhood of the Cross And Star upholds the doctrine of mutual dependence that binds everything created and uncreated together. It is the assemblage of the true children of God who have been redeemed by God Through the sinless blood of Our Lord Jesus Christ
</h6> */}
 
        {/* <div className="flex justify-center items-center py-3">
           <div class="bg-white-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
      <div class="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img class="h-40 object-cover w-80 rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
        <div class="p-2">
          <h2 class="font-bold text-lg mb-2 text-center ">StarCross Television</h2>
          <p class="text-sm text-gray-600">. Subscribe to our Youtube channel Simple Yet Beautiful Card Design with Taiwlin forSimple Yet Beautiful Card Design with Taiwlin more ...</p>
        </div>
        <div class="m-2">
          <a role='button' href='https://www.youtube.com/channel/UCvSDd_EpEMWXPF6MvWwi8dA' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        </div>
      </div>
      <div class="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img class="h-40 w-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
        <div class="p-2">
          <h2 class="font-bold text-lg mb-2  text-center">Everlasting Gospel</h2>
          <p class="text-sm text-gray-600">Simple Yet Beautiful Card Design with Simple Yet Beautiful Card Design with Taiwlin TaiwlindCss. Subscribe to our Youtube channel for more ...</p>
        </div>
        <div class="m-2">
          <a role='button' href='#' class="text-white bg-sky-500 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        </div>
      </div>
      <div class="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img class="h-40 w-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
        <div class="p-2">
          <h2 class="font-bold text-lg mb-2 ">Heading</h2>
          <p class="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss.Simple Yet Beautiful Card Design with Taiwlin Subscribe to our Youtube channel for more ...</p>
        </div>
        <div class="m-2">
          <a role='button' href='#' class="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        </div>
      </div>
      <div class="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img class="h-40 w-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
        <div class="p-2">
          <h2 class="font-bold text-lg mb-2 ">Heading</h2>
          <p class="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss.Simple Yet Beautiful Card Design with Taiwlin Subscribe to our Youtube channel for more ...</p>
        </div>
        <div class="m-2">
          <a role='button' href='#' class="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        </div>
      </div>
            
     </div>
     
    </div> */}
     <div className="flex items-center justify-center pt-20">
            <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
            {YouVid.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
        </div>

    </motion.nav>
    )
}

export default About;