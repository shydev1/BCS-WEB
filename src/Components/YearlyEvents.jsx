import { Link } from "react-router-dom";
import '../index.css';
import { motion } from "framer-motion";
import { useState } from "react";
import s1 from "../Components/banner/spiritual.jpg"
import s from "../Components/banner/holy spiroro.jpg"
import c1 from "../Components/banner/criown him.jpg"
import c from "../Components/banner/kingon.jpg"



const YearlyEvents=()=>{
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)

    const handleShow = () => {
        setShow(true)
      }
      const handleShow1 = () => {
        setShow1(true)
      }
  
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
        <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
       <img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fbcs-yearlyeventbanner.jpg?alt=media&token=18bb20aa-e588-493d-81bf-5543d8c3e535" style={{ width: '85%', marginTop: 0    }}/>
        </div>
        <div className='pt-2 md:pl-20 md:pr-20'>

           {/* <h1 style={{}} className="text-6xl pt-5 p-5  text-center bg-[#b30000] font-bold bg-gradient-to-r from-[#b30000]-400 via-purple-500 to-[#b30000]-800 text-transparent bg-clip-text">
EVENTS
</h1>            */}
      <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
      <div className="md:w-[40%] p-3 m-5  bg-white shadow-lg md:my-10">
<h6 style={{ color: "#333", padding: 30, }}  className="">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa.
</h6>
</div>
</div>
          <h1 style={{fontSize:28, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Out Pouring Of The Holy Spirit</h1>
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
  <div className="flex flex-col items-center mb-20">
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">On every Easter Monday of the year, it is a common practice in Brotherhood of the Cross and Star (BCS) that all faithful assemble before The Holy Father at the BCS World Headquarters, 34 Ambo Great Hall, to have The Holy Spirit in them revived by The Holy Spirit personified, Leader Olumba Olumba Obu Himself. This annual spiritual exercise is to reawaken their spirits and bodies, keeping them fit, emboldened, and empowered for the Great Commission. This is in fulfillment of the ancient scriptural prophecies and as practiced by our Lord Jesus Christ thus:
          
         </h6>
         {show ? 
        ( <div className="flex flex-col items-center">
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">On every Easter Monday of the year, it is a common practice in Brotherhood of the Cross and Star (BCS) that all faithful assemble before The Holy Father at the BCS World Headquarters, 34 Ambo Great Hall, 
          to have The Holy Spirit in them revived by The Holy Spirit personified,
           Leader Olumba Olumba Obu Himself. This annual spiritual exercise is to reawaken their spirits and bodies, 
           keeping them fit, emboldened, and empowered for the Great Commission. 
           This is in fulfillment of the ancient scriptural prophecies and as practiced by our Lord Jesus Christ thus:
</h6>
<img src={s1} alt=""  className=" w-auto  my-10 flex "/>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
          But this is that which was spoken by the prophet Joel, And it shall come to pass in the last days,
           saith God, “I will pour out of my Spirit upon all flesh: and your sons and your daughters shall 
           prophesy, and your young men shall see visions, and your old men shall dream dreams: And on my servants and on my handmaidens, I will pour out in those days of my Spirit; and they shall prophesy:”’ (Acts 2:16-18).
And, ‘… Then said Jesus to them again, “Peace be unto you: as my Father hath sent me, even so send I you.” 
And when he had said this, he breathed on them, and saith unto them, “Receive ye the Holy Ghost: Whose soever 
sins ye remit, they are remitted unto them; and whose soever sins ye retain, they are retained.”’ (John 20:21-23). Read also Joel 2:28-29 and Acts 2:1-4.
</h6>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
          The outpouring of the Holy Spirit is the high point of the April (Easter) Pentecostal period; thus, 
          its significance cannot be overemphasized. It is an event during which the brethren’s sins are cleansed, 
          their flesh mortified, and their souls infused with the Holy Spirit of God. It reminds the brethren of 
          their calling, duties, obligations, and mandates as ordained by the Most high. It is indeed a very 
          inspiring event, attracting brethren and on-lookers from far and wide.
</h6>
<img src={s} alt=""  className=" w-auto  my-10 flex "/>
         </div>) : null
        }
    <button className="bg-green-500 hover:bg-red-600 p-2 w-28 rounded-lg text-white text-lg self-center" onClick={handleShow}>see all</button>
  </div>
          <h1 style={{fontSize:28, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">The King of Kings And The Lord of lords Coronation</h1>
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

  <div className=" flex flex-col items-center">

          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
The coronation of the King of kings and Lord of lords, His Holiness Olumba Olumba Obu was a monumental event that took place in two strata. The detail of the events that led to, and occurred during both phases of the Divine Coronation are as follows;
</h6>
{show1 ? (
<div className="flex flex-col items-center">

          <h1 style={{fontSize:20, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">
IN THE HOLIEST OF HOLIES
            </h1>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
Sunday, the 26th day of November 2000; The Sole Spiritual Head of the Universe, Leader Olumba Olumba Obu revealed the greatest mystery in the Brotherhood. This was the identity of the Head of Administration, BCS Worldwide. Little did the brethren know that the entity in question was as well to be crowned King of kings and Lord of lords. 
</h6>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
The prayer which was offered by our Lord Jesus Christ was to be answered in which He said; ‘And now, O Father, glorify thou me with thine own self with the glory which I had before the world was.’ (John 17:5). This event also further went ahead to validate the scriptures in (Daniel 7:13-14); ‘I saw in the night visions, and behold, one like the Son of man came with the clouds of heaven, and came to the Ancient of Days, and they brought him near before him. And there was given him dominion, and glory, and a kingdom, that all people, nations, and languages, should serve him: his dominion is an everlasting dominion, which shall not pass away, and his kingdom that which shall never be destroyed.’
</h6>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
This glory was fulfilled when the Ancient of Days crowned His first begotten son, His Holiness Olumba Olumba Obu in the Holiest of Holies, after the historic homecoming visit of the King, tagged, ‘Home Mission 2000’.
</h6>
<img src={c1} alt=""  className=" w-auto  my-10 flex "/>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
The Supreme Father stated: ‘…He is the King of Kings. Nobody else can answer that name. do you know what the King of kings and Lord of lords mean? Refrain from sin, do that which is good, and have love, and you will see His glory. All those who practice righteousness, see Him and know Him, and they dwell with Him forever. All those who have love, humble themselves, they do not fornicate but are patient, and honest, and do not eat meat and fish; they are like Him and take after Him. All those who continue to eat meat and fish, kill and argue, are stubborn; they do not see Him and have no peace.’
</h6>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
This Coronation in the Holiest of Holies set the stage for the universal declaration of the Son of man and Son of God before the host in heaven and men on earth, thereby, activating the last dispensational phase of the Divine Master Plan of Jehovah God and His Christ in reclaiming the earth and all created life in love, peace, and unity in the bond of Eternal Brotherhood.
</h6>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
What hitherto had been a subject of discourse in spiritual and theological sessions became a physical reality. But as in the birth of the Messiah, the news of this information was availed to a very privileged few.
However, the exclusivity of this Divine Event coupled with the discontent of some of the supposedly high-ranking members of the Fold gave rise to some ruckus and upheaval. Consequently, the Holy Father in His infinite wisdom wasted no time in reiterating this feat before the whole world.
</h6>
<h1 style={{fontSize:20, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">
BEFORE THE ENTIRE UNIVERSE
  </h1>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
‘And again, when he bringeth in the first begotten into the world, he saith, And let the angels of God worship him.’ (Hebrew 1:6).
On Saturday, the 14th day of April 2001, this scripture was fulfilled, as the Holy Father crowned His First Begotten yet again, before the entire universe. The word of God is yes and amen!
</h6>
<img src={c} alt=""  className=" w-[600px] h-[800px]  my-10 flex "/>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
The promise of the kingdoms of this world becoming the Kingdom of our God and His Christ had been fulfilled. This could not come to pass without the unveiling and enthronement of Christ the King who sits upon the Throne to rule, judge, and make war in righteousness.
</h6>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
Commenting on the events that will herald the 21st Century, the Sole Spiritual Head of the Universe, Leader Olumba Olumba Obu stated: ‘In 2001, we shall pass into a new generation. The generation of the reign of Jehovah God and His Christ, where only righteousness dwells. That generation will not admit any bit of sin. There will be no more class distinction between men or women, children or adults, whites or blacks, all will be united into oneness in love…’.
</h6>
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">
The Divine Coronation of the King of kings and Lord of lords before the entire universe marked a crucial turning point in the affairs of the earth man, and the commencement of the Government of God on earth, Theocracy. Indeed, all Power had been given unto Him in heaven and on earth (St. Matthew 28:18).
</h6>
</div>
):null}
<button className="bg-green-500 hover:bg-red-600 p-2 w-28 rounded-lg text-white text-lg self-center" onClick={handleShow1}>see all</button>
  </div>
{/*    
          <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Dry Fasting & Pentecostal Period</h1>
          <div>
      <div className="flex items-center justify-center">
          <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
          {DryPen.map((item,index)=>(
              <div>
                  <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
              </div>
          ))}
          </div>
      </div>
  </div>
          <h6 style={{ color: "#333", padding: 30, }}  className="">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa.
</h6> */}
          <h1 style={{fontSize:28, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Supreme Signature</h1>
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
  <div className="flex flex-col items-center">
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">It marks the supreme authority of the King of Kings and Lord of Lords. He is the Chairman BCS Executive Council and Head of Administration, BCS worldwide. He is also the head of the Unified Universal Theocratic Government. Whatever He appends the signature remains sacrosanct. He is the highest authority every spirit submits to.
        </h6>
  </div>
          <h1 style={{fontSize:28, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Eton Day</h1>
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
  <div className="flex flex-col items-center">
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">The annual 8 Eton day celebration is of a very great significance.  Eton Street, Calabar, Cross River State is where Supreme Holy Father Leader Olumba Olumba Obu started BCS. On the 8th day of August, 1958, Brotherhood of the Cross and Star was revealed to the entire universe because it was the first day ever, the members of BCS dressed in the heavenly robe (soutane) and marched from the street of Eton to 26 Mbukpa Road, Calabar, Cross River State, signifying the movement of the kingdom to a greater height. 
</h6>
  </div>
          <h1 style={{fontSize:28, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Holy Mother’s Glorification	</h1>
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
  <div className="flex flex-col items-center">
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">The day the Holy Mother was transform will remain evergreen in the minds and souls of every true BCS member. The reason the day is remembered in BCS. Holy mother was the pillar, backbone and building rock of BCS. She is the reason the kingdom is spreading fast and wide. She is the epitome of blessedness, her love and mercy for humanity is incomparable.
</h6>
  </div>
          <h1 style={{fontSize:28, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Divine Manifestation of King of Kings And Lord of Lords</h1>
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
  <div className="flex flex-col items-center">
          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">Just like the Christmas day is celebrated to mark the birth of our Lord Jesus Christ, this day is celebrated and will always be celebrated forever in Brotherhood of the Cross and Star because it is the day which the glorious king of Heaven and the reincarnated Christ Great His Holiness Olumba Olumba Obu was brought into the earth again to rule and judge the entire universe. High points of the event are banquet on 19th November which is called “The feast of the Lamb” 
</h6>
  </div>
          <h1 style={{fontSize:28, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Divine Manifestation of the Ancient of Days</h1>
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
  <div className="flex flex-col items-center">

          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">Leader Olumba Olumba Obu, The Sole Spiritual Head of the Universe, is the Founder, Leader, and Sustainer of the Brotherhood of the Cross and Star Kingdom. His mission on earth is to do what nobody, angel or spirit has ever done in the world. He came to teach and lead man into God’s Kingdom, to sanctify humanity, to establish the Kingdom of God on Earth. His Physical Manifestation was on 30th December, 1918, in a little town of Biakpan, in Cross River State, Nigeria. Leader Olumba Olumba Obu has remained energetic and the propelling forces behind the proliferation of the Brotherhood of the Cross and Star. That is why every 30th day of December is very significant in Brotherhood of the Cross and Star.
</h6>
  </div>
          <h1 style={{fontSize:28, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="  text-center">Music & Merit Award Night</h1>
          <div>
      <div className="flex items-center justify-center">
          <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
          {Merit.map((item,index)=>(
              <div>
                  <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
              </div>
          ))}
          </div>
      </div>
  </div>
  <div className="flex flex-col items-center">

          <h6 style={{ color: "#333", padding: 30, }}  className="w-[80%]">Brotherhood of the Cross and Star is a global divine institution. It teaches and practices Universal love, peace, unity, truth and righteousness in the Holy Spirit. The World Headquarters (WHQ) of Brotherhood of the Cross and Star situates at No 34 Ambo Street Calabar, Nigeria West Africa.
</h6>
  </div>
     
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

export default YearlyEvents;