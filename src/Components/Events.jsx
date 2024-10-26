import { motion } from "framer-motion";



const Events=()=>{
  const Merit = [
    // {
    //     vidlink: "https://youtube.com/embed/spJkVrd8208"
    // },
    {
        vidlink: "https://youtube.com/embed/dMZNtCY3bhk"
    },
    {
        vidlink: "https://youtube.com/embed/sItfPG6WB-Y"
    },
]
  const Holy = [
    {
        vidlink: "https://youtube.com/embed/SOJhRqd3rUE"
    },
    {
        vidlink: "https://www.youtube.com/embed/b-ZNTAZYp2Q?si=-xUY-j5Z_k2ZfhRO"
    },
    {
        vidlink: "https://www.youtube.com/embed/EwNWoPhc394?si=5uwG8vBWKB7UK09H"
    },
]
  const Dad = [
    {
        vidlink: "https://youtube.com/embed/rG8viOhTQ_Y"
    },
    {
        vidlink: "https://www.youtube.com/embed/jHiSF-M9vmI?si=owKG0TOSnfkrCb3-"
    },
    {
        vidlink: "https://www.youtube.com/embed/gnT50sv_rvU?si=Niibkpp-WrI4u86k"
    },
]
  const Eton = [
    {
        vidlink: "https://youtube.com/embed/9e08oSB_cvc"
    },
    {
        vidlink: "https://www.youtube.com/embed/EGrSa16xmMM?si=r32YqY4OOsVnbkxX"
    },
    {
        vidlink: "https://youtube.com/embed/ye1Yn7lP3mk"
    },
]

  const Sign = [
    {
        vidlink: "https://www.youtube.com/embed/YXEzm7_BCCo?si=WdCyAqASF9R3VTUf"
    },
    {
        vidlink: "https://youtube.com/embed/Xh_IeWwFPYA"
    },
    {
        vidlink: "https://www.youtube.com/embed/jubWIsAcMIM?si=2vLKek7SuxIPkgvF"
    },
]
  const Mother = [
    {
        vidlink: "https://youtube.com/embed/2aKFJIoQe7k"
    },
    {
        vidlink: "https://www.youtube.com/embed/aU0T-DDvhkM?si=KV-dJgFeO18lIUD0"
    },
    {
        vidlink: "https://youtube.com/embed/7RUhLO1AxTc"
    },
]
  const HolySpirit = [
    {
        vidlink: "https://youtube.com/embed/0BeUsKOBBtE"
    },
    {
        vidlink: "https://youtube.com/embed/mMRk3k0E1sM"
    },
    {
        vidlink: "https://www.youtube.com/embed/cU37NVnyelQ?si=V0lYrjgi1Pi8wSGR"
    },
]
  const Crown = [
    {
        vidlink: "https://youtube.com/embed/zW8exoPzKQs"
    },
    {
        vidlink: "https://www.youtube.com/embed/ulgzz59TZow?si=ikYpVZ4YePuW56Kt"
    },
    {
        vidlink: "https://www.youtube.com/embed/v4gGyg6ogko?si=C7kedIPBZuhAsBI4"
    },
]
  const DryPen = [
    {
        vidlink: "https://youtube.com/embed/FQVSrVSkbC4"
    },
    // {
    //     vidlink: "https://youtube.com/embed/h1NGVoDPMVA"
    // },
    // {
    //     vidlink: "https://youtube.com/embed/DrVFTMoVn0o"
    // },
]
  const YouVid = [
    {
        vidlink: "https://www.youtube.com/embed/Yo6QUXWmb3c"
    },
    {
        vidlink: "https://www.youtube.com/embed/rF-zfYQAoDA"
    },
    {
        vidlink: "https://www.youtube.com/embed/EGWbyyUGJOo"
    },
]
    return(
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
         <img  src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2FEvents.jpg?alt=media&token=0ad28858-9abb-4aa2-9b23-0f3512217159"} style={{ width: '100%', marginTop: 0    }}/>
          <div className='pt-2 md:pl-20 md:pr-20'>

             {/* <h1 style={{}} className="text-6xl pt-5 p-5  text-center bg-[#b30000] font-bold bg-gradient-to-r from-[#b30000]-400 via-purple-500 to-[#b30000]-800 text-transparent bg-clip-text">
 EVENTS
</h1>            */}
 <h6 style={{ color: "#333", padding: 30, }}  className="">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa.
</h6>
            <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Out Pouring Of The Holy Spirit</h1>
            <div>
        <div className="flex items-center justify-center">
            <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
            {HolySpirit.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </div>
            <h6 style={{ color: "#333", padding: 30, }}  className="">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa.
</h6>
            <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">The King of Kings And The Lord of lords Coronation</h1>
            <div>
        <div className="flex items-center justify-center">
            <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
            {Crown.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </div>
            <h6 style={{ color: "#333", padding: 30, }}  className="">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa.
</h6>
            {/* <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Anger Free Day</h1>
            <div>
        <div className="flex items-center justify-center">
            <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
            {YouVid.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </div>
            <h6 style={{ color: "#333", fontWeight: "bold", padding: 30, }}  className="">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa.
</h6> */}
            <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Dry Fasting & Pentecostal Period</h1>
            <div>
        <div className="flex items-center justify-center">
            <div class="grid sm:grid-cols- grid-cols-1 mt-10 gap-5 mb-10">
            {DryPen.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </div>
            <h6 style={{ color: "#333", padding: 30, }}  className="">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa.
</h6>
            <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Supreme Signature</h1>
            <div>
        <div className="flex items-center justify-center">
            <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
            {Sign.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </div>
            <h6 style={{ color: "#333", padding: 30, }}  className="">It marks the supreme authority of the King of Kings and Lord of Lords. He is the Chairman BCS Executive Council and Head of Administration, BCS worldwide. He is also the head of the Unified Universal Theocratic Government. Whatever He appends the signature remains sacrosanct. He is the highest authority every spirit submits to.
</h6>
            <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Eton Day</h1>
            <div>
        <div className="flex items-center justify-center">
            <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
            {Eton.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </div>
            <h6 style={{ color: "#333", padding: 30, }}  className="">The annual 8 Eton day celebration is of a very great significance.  Eton Street, Calabar, Cross River State is where Supreme Holy Father Leader Olumba Olumba Obu started BCS. On the 8th day of August, 1958, Brotherhood of the Cross and Star was revealed to the entire universe because it was the first day ever, the members of BCS dressed in the heavenly robe (soutane) and marched from the street of Eton to 26 Mbukpa Road, Calabar, Cross River State, signifying the movement of the kingdom to a greater height. 
</h6>
            <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Holy Mother’s Glorification	</h1>
            <div>
        <div className="flex items-center justify-center">
            <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
            {Mother.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </div>
            <h6 style={{ color: "#333", padding: 30, }}  className="">The day the Holy Mother was transform will remain evergreen in the minds and souls of every true BCS member. The reason the day is remembered in BCS. Holy mother was the pillar, backbone and building rock of BCS. She is the reason the kingdom is spreading fast and wide. She is the epitome of blessedness, her love and mercy for humanity is incomparable.
</h6>
            <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Divine Manifestation of King of Kings And Lord of Lords</h1>
            <div>
        <div className="flex items-center justify-center">
            <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
            {Dad.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </div>
            <h6 style={{ color: "#333", padding: 30, }}  className="">Just like the Christmas day is celebrated to mark the birth of our Lord Jesus Christ, this day is celebrated and will always be celebrated forever in Brotherhood of the Cross and Star because it is the day which the glorious king of Heaven and the reincarnated Christ Great His Holiness Olumba Olumba Obu was brought into the earth again to rule and judge the entire universe. High points of the event are banquet on 19th November which is called “The feast of the Lamb” 
</h6>
            <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Divine Manifestation of the Ancient of Days</h1>
            <div>
        <div className="flex items-center justify-center">
            <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
            {Holy.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </div>
            <h6 style={{ color: "#333", padding: 30, }}  className="">Leader Olumba Olumba Obu, The Sole Spiritual Head of the Universe, is the Founder, Leader, and Sustainer of the Brotherhood of the Cross and Star Kingdom. His mission on earth is to do what nobody, angel or spirit has ever done in the world. He came to teach and lead man into God’s Kingdom, to sanctify humanity, to establish the Kingdom of God on Earth. His Physical Manifestation was on 30th December, 1918, in a little town of Biakpan, in Cross River State, Nigeria. Leader Olumba Olumba Obu has remained energetic and the propelling forces behind the proliferation of the Brotherhood of the Cross and Star. That is why every 30th day of December is very significant in Brotherhood of the Cross and Star.
</h6>
            <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Music & Merit Award Night</h1>
            <div>
        <div className="flex items-center justify-center">
            <div class="grid sm:grid-cols-2 grid-cols-1 mt-10 gap-5 mb-10">
            {Merit.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </div>
            <h6 style={{ color: "#333", padding: 30, }}  className="">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa.
</h6>
       
    {/* <div style={{paddingBottom: 80}}
         className="flex justify-center items-center py-3">
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
              </div>
    </motion.nav>
    )
}

export default Events;