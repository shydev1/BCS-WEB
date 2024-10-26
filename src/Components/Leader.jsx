import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import im from "./img/51.jpg"
import im1 from "./img/2 (2).jpg"
import im2 from "./img/52.jpg"
import { useState } from "react";
import bcs from "../Components/banner/aboutbcs.jpg"


const Leader =()=>{
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)

  
  const handleShow = () => {
    setShow(true)
  }
  const handleShow1 = () => {
    setShow1(true)
  }
  const handleShow2 = () => {
    setShow2(true)
  }
    return(

      <motion.nav
      className="md:pl-20 md:pr-20"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 2,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
      }}
      >
        <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
           <img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/CategoryImg%2F4.png?alt=media&token=e5c6ef7a-5eef-40b5-ae4a-beff881cddc8" style={{ width: '85%', marginTop: 0    }}/>
        </div>
           
{/* <h1 id="1" style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className=" text-center">LEADER OLUMBA OLUMBA OBU</h1> */}


{/* <div className="relative">
<div className='bg-white'>
      <div style={{width:"100%",}} className='bg-gradient-to-b opacity-90 from-white via-slate-50 md:pt-32 text-5xl to- text-center absolute p-2 z-20 w-[390px] pt-10 md:w-[] top-[] md:top-[] md:h-[600px] h-40'><span style={{fontSize:35, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className="text-center md:mt-28 mt-20">LEADER OLUMBA OLUMBA OBU</span></div>
      <div
             // style={{width: '100%'}}
             dangerouslySetInnerHTML={{
               __html: `<video  style="
               position: ;
               width: 100%;
               top: 0;
               // height: 100%;
               object-fit: cover;
               // z-index: -1;" 
               autoplay loop muted playsinline>
               <source src=${plays} type="video/mp4" />
               Your browser does not support the video tag.
               </video>`
              }}
              />
        <div style={{width:"100%"}} className='bg-gradient-to-t from-white via-slate-50 to- sm:bottom-[90px] mb-96 w-[390px] md:w-[] absolute top-[80%] md:top-[529px] h-48 
          '></div>
    </div> 
</div> */}


     <div className="grid justify-items-center">
      <div className="lg:w-[60%] p-5 shadow-lg text-center text-lg mt-20 ">
        <img src={bcs} alt="" className="lg:w-[50%] w-96 lg:ml-[25%] flex align-middle" />
        <h1 className="font-bold text-center text-xl mt-3">Leader Olumba Olumba Obu, The Sole Spiritual Head of the Universe,</h1>
            <h6 style={{ color: "#333", padding: 30, }}  className="pt-80 text-start">
            <p className="mt-2 p-2">
              Leader Olumba Olumba Obu, The Sole Spiritual Head of the Universe, is the Founder, Leader, 
            and Sustainer of the Brotherhood of the Cross and Star Kingdom. All decrees, decisions, policies, 
            edicts or resolutions are issued by Him for the Spiritual well-being and growth of the Kingdom. In Him, 
            Brotherhood of the Cross and Star starts and endures forever. Leader Olumba Olumba Obu reconciles all adversities, 
            atrocities and gives the Brotherhood Kingdom an unshakable spiritual foundation, erected on and made possible with the unblemished blood of our Lord Jesus Christ.
            </p>
            <p className="mt-2 p-2">
             His mission on earth is to do what nobody, angel or man has ever done in the world, to teach and lead man into God’s Kingdom, to sanctify humanity, to establish the Kingdom of God on Earth. 
             “I am not Jesus Christ or God. Who am I to be known as such? My name is Oluimba Olumba Obu. I have shown you love, mercy, humility and all Godly virtues. Jesus came to die for your salvation.
             I have come to give people the wages according to their work” – Leader Olumba Olumba Obu
             </p>
            </h6>
       {show2 ? (
            <h6 style={{ color: "#333", padding: 30, }}  className=" text-start">
            As humanity entered the dawn of the last chapter of the 20th century, a mysterious phenomenon made a surreptitious entry into the earth plane. A spiritual colossus and enigma; a phenomenon whose emergence has held mankind spell bound for close to a century.
            Since His Physical Manifestation on 30th December, 1918, in a little town of Biakpan, in Nigeria Leader Olumba Olumba Obu has remained energetic and the propelling forces behind the proliferation of the Brotherhood of the Cross and Star - The New Kingdom of God.
            </h6>
       ) : null}
            <button onClick={handleShow2} className="bg-green-500 hover:bg-red-600 mt-10 p-2 w-28 rounded-lg text-white text-lg self-center">see all</button>
      </div>

       <div className="lg:w-[60%] p-5 shadow-lg text-center text-lg mt-20 ">
       <img src={im} alt="" className="w-[90%] flex align-middle h-96" />
            <h6 style={{ color: "#333", padding: 30, }}  className="text-start">
            <p className="mt-2 p-2">
            From obscurity, this mysterious personality has become the central controversy and speculation. His identity and Charismatic qualities have generated a number of claims and counter-claims. Leader Olumba Olumba Obu, the sole spiritual Head of the universe is a reservoir of blessings to mankind with his unlimited sanctifying power, his humility, perfect divine teachings, exemplary leadership, He has effected marvelous changes among his Chosen Children and raised them to the highest level of intellectual, moral and spiritual standing.
            </p>
            <p className="mt-2 p-2">
His sense of mission emerged at an early age: he was only five when asked his father to address him as “Teacher” instead of his family nickname, and from then on he wasted no time in getting on with his Mission, starting with the spiritual education of the other children in the village. Regarding his formal education, it consisted of no more than two years at the local primary school: then at the age of eight, he went to Calabar to be apprentice to his uncle, who was in the cloth trade.
</p>
            </h6>
            {show1 ? (

            <h6 style={{ color: "#333", padding: 30, }}  className="text-start">
              <p className="mt-2 p-2">
            At eighteen, he set up his own stall in Calabar market and was remarkably successful unlike other traders; he was honest and gave value for money. He grew up into a good cloth trader shuttling with his wares from one market to another in the old Calabar province of Cross River State in Nigeria.
            </p>
            <p className="mt-2 p-2">
Young Olumba combined his trading activities with evangelism. He went round preaching, teaching and healing; he moved from house to house, preaching to people about the need for the brotherhood of man. To some, he would simply pray, others he would heal their infirmity, to the needy, he would give money.
</p>
<p className="mt-2 p-2">
 This great way of evangelism attracted an enviable number of followers set a terrific pace; also, as a result of this he was called “Owo Abasi” in Efik dialect (meaning “man of God”); others called him ‘Owo emem’ (meaning “man of peace”).
</p>
 </h6>
            ) : null}
 <button onClick={handleShow1} className="bg-green-500 hover:bg-red-600 p-2 w-28 rounded-lg text-white text-lg self-center">see all</button>
       </div>

        <div className="lg:w-[70%] p-5 shadow-lg text-center text-lg mt-20 ">
        <img src={im2} alt="" className="w-[90%] flex align-middle h-96" />
            <h6 style={{ color: "#333", padding: 30, }}  className="text-start">
            <p className="mt-2 p-2">
            At about the age of 26 he embarked upon his full time ministry. In less than no time he acquired tremendous local reputation as a spiritual teacher and above all a healer, the healing done simply by praying. As a result of this, the residents of 8 Eton street, Calabar. (Where Leader Olumba resided) requested that the prayers be conducted by the Leader in the midst of all the family members. Leader Olumba heed this request and the next prayer was conducted by the leader in the presence of all those who resided at No. 8 Eton Street, Calabar.
            </p>
            <p className="mt-2 p-2">
             Thus this marked the first Brotherhood of the Cross and Star congregation.
The spectacular spiritual feat spread far and wide like wild fire in the harmattan, many people started to come to No. 8 Eton street to participate in these activities particularly those he had preached to, Lead and rendered to during his evangelical days. The overwhelming influx of people into No. 8 Eton Street necessitated a search for bigger accommodation.
                </p>
                <p className="mt-2 p-2">
 His style was simple, but remarkably effective.
More and more people came flocking in, a plot of land, with a larger house on it was bought at 26 Mbukpa Road, and the stage of development began.
</p>
</h6>
      {show ? (
            <h6 style={{ color: "#333", padding: 30, }}  className="text-start">
              <p className="mt-2 p-2">
            Before the movement to 26 Mbukpa Road, he personally baptized all the brethren at Esuk-Okon-Ekpeme River, in Calabar. The first baptism of about sixty members took place on the 30 th July, 1958. The second baptism of about fifty members took place on the 7th August 1958, at the same river, after the brethren had confessed their sins as it is written in the book of Matthew 3:6. This was the last baptism he personally performed.
            </p>
            <p className="mt-2 p-2">
Then the evening of August 8th, 1958, the Leader at the head of the entire members marched from 8 Eton street to 26 Mbukpa Road, and later to 34 Ambo street in 1960, which had since remained the world headquarters of the New Kingdom of God-the Brotherhood of the Cross and Star.

</p>

<p className="mt-2 p-2">
  
From his childhood, Leader Olumba Olumba Obu’s behaviour has been pure, peaceful, loving and serious. Naturally, he dislikes cheating, quarreling and fighting. He demonstrates practical humility and simplicity in his daily life. He abhors servitude an exalts dignity of labour. He has expounded the attributes of Righteousness in such a way that the beauty, glory, greatness an majesty of Him as the God- Head now stamped in the minds of those who have come in contact with him.
</p>
<p className="mt-2 p-2">
 His personality has shown that man is endowed with infinity dynamic and glowing spiritual qualities which he developed by carefully following God’s divine teachings.
Leader Olumba Olumba Obu has established a complete code of moral principles and instituted a perfect mode of worship through which could man reunite with His Almighty God.
</p>
            </h6>
      ): null}
<button onClick={handleShow} className="bg-green-500 hover:bg-red-600 p-2 w-28 rounded-lg text-white text-lg self-center">see all</button>
        </div>
      </div> 

<div style={{marginTop: 0}} class="m-5 pt-10 md:pt-10 flex items-center justify-center ">
            {/* <a role='button' href='/About' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-blue-700">Learn More</a> */}
            <Link
               onClick={() => {
                window.scrollTo(0, 0);
              }}  
            role='button' to='/His' class="text-white text-center bg-red-600 shadow-lg hover:shadow-2xl px-3 py-2 rounded-md hover:bg-blue-500">Learn More</Link>

          {/* <a role='button' href='/His' class="text-white text-center px-3 py-1 rounded-md bg-gradient-to-r from-pink-400 to-purple-300 hover:from-pink-500 hover:to-blue-300 ">Learn More</a> */}
        </div>

        </motion.nav>
    )
}

export default Leader;