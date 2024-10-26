import React from "react";
import stv from "../Components/img/stv logo.jpg"
import satelite from '.././Components/img/Mozambique Satelite.jpg'
import broadcast from ".././Components/img/broadcast.jpg"
import banner from "../Components/banner/stv banner.jpg"


const STV = () => {
    const YouVid = [
        {
            vidlink: "https://www.youtube.com/embed/vJbtojVt2uY"
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
            vidlink: "https://www.youtube.com/embed/vJbtojVt2uY"
        },
        {
            vidlink: "https://www.youtube.com/embed/X9uIBqYwK0g"
        },
    ]
    return (
    <div className="w-[100%]">
              
        <div
             // style={{width: '100%'}}
             dangerouslySetInnerHTML={{
               __html: `<video  style="
               position: absolute;
               width: 100%;
               top: 20;
               // height: 100%;
               object-fit: cover;
               // z-index: -1;" 
               autoplay controls playsinline>
               <source src=${'https://webstreaming.viewmedia.tv/web_001/Stream/playlist.m3u8'} type="video/mp4" />
               Your browser does not support the video tag.
               </video>`
              }}
              />
                    <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">

            <img  
            // src={}
            src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2FStarcrosstvbanner.jpg?alt=media&token=d46034c7-e8df-4a9f-866b-1a2ad8e4847e" 
            style={{ width: '80%', marginBottom: 0,    }} className=" text-center mt-[300px] md:mt-[800px]"/>
                    </div>
        <div className=" pt-2 md:pl-20 md:pr-20 grid">

            

        {/* <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 0 }}  className=" text-center mt-[300px] md:mt-[800px]">StarCross Television</h1> */}


          {/* <iframe 
            //   className="h-full w-full" 
            // className="sm:hidden"
            autoplay={true}
              height={560} width={'100%'}
              src="https://webstreaming.viewmedia.tv/web_001/Stream/playlist.m3u8" allowFullScreen>

              </iframe> */}
            <div className=" md:w-[70%] mx10 p-5 flex flex-col justify-self-center content-center items-center shadow- mt-32">
            <img src={banner} alt=""  className="lg:w-[50%] w-96 lg:h-96 my-10 flex "/>
                <h1 className="font-bold text-center text-xl">BCS STARCROSS TV</h1>

                    <h6 style={{ color: "#333", padding: 10,  }}  className="">
                    Officially switched on in April 2013, StarCross Television is the official broa­dcaster of the New Kingdom of God ‘Brot­herhood of the Cross’ (BCS), designed to bring the consciou­sness of man to the physical manifestati­on of The Supreme Cr­eator of the Univer­se and the establish­ment of His eternal Kingdom on earth.
                    </h6>
                    <h6 style={{ color: "#333", padding: 10, }}  className="">
                    Starcross TV targets people from all pl­aces, culture and re­ligion with the aim to inspire, enlighten and empower her audience to knowing this truth, accepting it and benefitting from the overwhelmi­ng powers of The Alm­ighty God, the found­er and Leader of Bro­therhood of the Cro­ss and Star.              </h6>
                    <h6 style={{ color: "#333", padding: 10, }}  className="">
                    Over the years, we have continued to dr­aw our esteemed view­ers very close to the knowledge of truth as taught by The Supernatural Teacher and Sole Spiritual Head of the Universe, Leader Olumba Olum­ba Obu and His Chris­t, The Universal Mon­arch and Leader of the Universal Theocr­atic Government, His Holiness Olumba Olu­mba Obu, The King of Kings and Lord of lords.​
                                    </h6>
                    <h6 style={{ color: "#333", padding: 10, }}  className="">
                    To say the least, our goal is to invent a generation of peop­le whose practical love for God and hum­anity will be deep and convincing.​
                                    </h6>
                    <h6 style={{ color: "#333", padding: 10, }}  className="">
                    Our head office is situated at Effio-Ok­oho Street, Calabar South, Cross River State, Nigeria – West Africa.                            </h6>
            </div>

              
<div className=" p-5 flex flex-col justify-self-center items-center shadow- mt-10">


              <div className="md:flex items-center content-center gap-10 lg:h-[80%]">
                        <img src={broadcast} alt="" className="lg:w-[60%] self-center w-96 lg:h-[60%] my-10 flex-wrap" />
                    <div>
              <h1 style={{fontSize:26, color: "#b30000", fontWeight: "bold", paddingTop: 10 }}  className=" text-start pl-5 mb-10">BROADCAST PLATFORMS</h1>
                            <h6 style={{ color: "#333", padding: 10, }}  className="text-xl">
                            Our broadcast platf­orms at the moment include
                                                        </h6>
                            <h6 style={{ color: "#333", padding: 10, }}  className="">
                           - Television: BCS Starcross TV of BCS TV
                                                        </h6>
                            <h6 style={{ color: "#333", padding: 10, }}  className="">
                           - YouTube: BCS Starcross TV International​
                                                        </h6>
                            <h6 style={{ color: "#333", padding: 10, }}  className="">
                           - Facebook: BCS Starcross TV International
                                                                        </h6>
                            <h6 style={{ color: "#333", padding: 10, }}  className="">
                           - OFFICIAL APP: Immort­al Word APP
                                                                </h6>
                    </div>
              </div>
</div>

<div className="md:w-[70%] p-5 flex flex-col mt-10 md:-mt-20 justify-self-center shadow-">
              <h1 style={{fontSize:26, color: "#b30000", fontWeight: "bold", paddingTop: 10 }}  className=" text-start">PACKAGES</h1>
              
              
              
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              Starcross TV have created about twenty programmes based on the BCS doctrine. So­me of this programm­es are broadcast live while some are pre­-produced.
                                                        </h6>
              <h6 style={{ color: "#333", fontWeight: "bold", padding: 10, }}  className="">
              Some of our live pro­grammes include:
                                                                      </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              -​ ​ ​ ​ ​ ​ ​ ​Morning Star Breakfa­st show every Monday, Tuesday, Wednesday and Friday from 8am to 10.30am.
                                                                      </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              -​ ​ ​ ​ ​ ​ ​ ​BCS News update on every Monday, Tuesday, Wednesday and Fri­days by 6pm
                                                                      </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              -​ ​ ​ ​ ​ ​ ​ ​BCS Spotlight on eve­ry Monday from 4pm – 5pm
                                                        </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              -​ ​ ​ ​ ​ ​ ​ ​BCS Forerunner every Wednesday by 7pm – 9pm
                                                                      </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              -​ ​ ​ ​ ​ ​ ​ ​Prayer-Line every Th­ursday by 7pm – 9pm.
                                                        </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              -​ ​ ​ ​ ​ ​ ​ ​Regnum continuous le­gal education on eve­ry 1st and 3rd Friday of the month by 7pm – 9pm.
                                                                      </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              Management is worki­ng hard to include short films and docum­entaries on weekly basis.​
                                                                      </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              Our daily programme timetable is adjust­ed before and after every Pentecostal As­sembly to accommoda­te myriads of activi­ties in the Kingdom as inspired by The Holy Spirit
                                 </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
                  Additional Special Services Include Production of Marri­age Blessings, Tradi­tional Marriage, Bir­thday Celebration, Burial Service, Child Blessing, Seminars within and beyond the BCS fold. ​
                                               </h6>
</div>
             
{/*              
              <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className=" text-center">SCTV TV SUPPORT:</h1>
             
             
             
              <h6 style={{ color: "#333", padding: 30, }}  className="">
              Each family, Bethel and Individual are expected to contribu­te the sum of N12, 000 each year or N10­00 monthly to support Starcross TV.
                                               </h6>
              
              
              <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className=" text-center">Official Account De­tails:</h1>
              
              
              <h6 style={{ color: "#333", padding: 30, }}  className="">
              BANK NAME: Union of Bank of Nigeria
                                               </h6>
              <h6 style={{ color: "#333", padding: 30, }}  className="">
              ACCOUNT NAME: Brotherhood of the Cross and Star
                                               </h6>
1
              ACCOUNT NUMBER: 0042778269
                                               </h6>

                                               */}
         <div className=" md:w-[70%] p-5 flex flex-col justify-self-center justify-items-center shadow-">
            
            <h1 style={{fontSize:26, color: "#b30000", fontWeight: "bold", paddingTop: 10 }}  className="pl-3 text-start">SATELITE UPGRADE</h1>

                 <img src={satelite} alt="" className="lg:w-[50%] lg:h-[50%] m-5 flex " />

              <h6 style={{ color: "#333", padding: 10, }}  className="">
              In line with our co­mmitment to meet the request of our glob­al audiences, Starcr­oss Television have upgraded it broadca­sting service to a more efficient satell­ite known as AMOS 17. This implies that you can no longer watch our lovely chan­nel on Intelsat 20 (IS20) Satellite acr­oss sub-Sahara Afric­a.
                                                             </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              To receive signal and watch Starcross Television on the new satellite platform, kindly adjust your KU Band or KA Band Dish to the following parameters and then rescan your decod­er using the followi­ng details:
                                                             </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              SATELLITE – AMOS 17
                                                             </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              TRANSPONDER - K7113
                                                             </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              TUNING FREQUENCY - 11918MHZ
                                                             </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              POLARIZATION V (VERT­ICAL)
                                                             </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              SYMBOL RATE – 30.000 MSPS
                                                             </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              MODULATION – QPSK
                                                             </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              FEC – ¾.
                                                                           </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              You may need the as­sistant of a dish in­staller. However, pl­ease do not hesitate to contact our tec­hnical team on 07025­434610 or 08107801980 who will be very happy to assist you.
                                             </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              Thanks for patronage.
                                                           </h6>
              <h6 style={{ color: "#333", padding: 10, }}  className="">
              Management.
                                                           </h6>
        </div>                                     
              {/* <h6 style={{ color: "#333", padding: 30, }}  className="">
              Written by:
                                                           </h6>
              <h6 style={{ color: "#333", padding: 30, }}  className="">
              Patriarch Ogar Osim -
General Manager                                                           </h6>
              <h6 style={{ color: "#333", padding: 30, }}  className="">
              08107801980
                                                                         </h6> */}

                </div>
        <div className="flex items-center justify-center pt-40">
            <div class="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 mb-10">
            {YouVid.map((item,index)=>(
                <div>
                    <iframe src={item.vidlink} className='w-fit h-64 self-center'/>
                </div>
            ))}
            </div>
        </div>
    </div>
    )
}

export default STV;