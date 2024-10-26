import { motion } from "framer-motion";
import egc1 from "../Components/img/egc banner.jpg"
import egc2 from "../Components/img/egc2.jpg"
import egc3 from "../Components/img/egc3.jpg"


const EGC=()=>{
    return(
        <motion.nav
        className="md:pl-20 md:pr-20 w-[100%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 2,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
        }}
        >
            <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
<img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fbcsegcbanner.jpg?alt=media&token=f90d1956-2556-44c6-a610-092b76b849a0" style={{ width: '80%', marginBottom: 10    }}/>
            </div>


            <div className="grid">

         
        {/* <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className=" cursor-pointer text-center">EVERLASTING GOSPEL</h1> */}
        
         <div className=" md:w-[60%] p-5 flex flex-col justify-self-center items-center hover:shadow-lg border-2 border-gray-200 mt-28">

        <img src={egc1} alt="" className="lg:w-[50%] w-96 lg:h-[50%] my-10 flex " />
    <div className="flex  items-center justify-center">
        <a target="_blank"  href="https://bcs-egc.org" class="text-[#006eff] text-center">Everlasting Gospel Official Website</a>
        </div>
        <h6 style={{ color: "#333", padding: 10, }}  className="">The Everlasting Gospel Centre was established  in the 80’s through our Holy Mother Esu Elizabeth Olumba Olumba Obu (Holy Mother of Love and Mercy). 
        The Centre witnessed since its establishment, lots of coordinators, script writers, managers, and directors, who contributed to the success and growth of the Centre as is seen today.
    </h6>
        <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop:  0 }}  className="  text-center">Mandate</h1>
        <h6 style={{ color: "#333", padding: 10, }}  className="">
        The Centre has the mandate to ensure the gospel of our Holy Father (be it print, audio or video) reaches all the inhabitants of the world with the following as her duties and responsibilities:

    </h6>
        <h6 style={{ color: "#333", padding: 10, }}  className="">
• Transcription of the Holy Father’s audio Gospels into text format.
    </h6>
        <h6 style={{ color: "#333", padding: 10, }}  className="">
• Compilation and printing of Holy Father’s gospels in Volumes.
    </h6>
        <h6 style={{ color: "#333", padding: 10, }}  className="">
• Preservation of all Holy Father’s Gospels be it print, video or audio for future reference.
    </h6>
        <h6 style={{ color: "#333", padding: 10, }}  className="">
• Editing Holy Father’s raw video gospel files from Starcross Camera for sale to members, upload to Starcross tv and preservation of the gospel in the archive.
    </h6>
        <h6 style={{ color: "#333", padding: 10, }}  className="">
• Reediting of Holy Father’s video gospels for upload to EGC youtube channel and website.
    </h6>
    <img src={egc3} alt="" className="lg:w-[50%] w-96 lg:h-[90%] my-10 flex " />
         </div>

    <div className=" md:w-[60%] p-5 flex flex-col justify-self-center items-center shadow-lg mt-11">
<h3 style={{fontSize:25, paddingLeft: 30, color: "#b30000", fontWeight: "bold", paddingTop: 10 }}  className="">Units and Job description : </h3>

<h6 style={{ color: "#333", padding: 10, }}  className="">
The Everlasting Gospel Centre Staff as at today is split into the following units:
                                                                        </h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
      S/N
      UNIT
      NUM. OF STAFF
      JOB DESCRIPTION  
               </h6>
<h6 style={{ color: "#333", padding: 10, }}  className="">
1
Managing Director
One (1)
Supervise the Activities of all Units.
Presents financial and administrative Reports to the Holy Father through the SGA’s office.
Oversee the day to day running of the Centre.
Develop policies and strategies of achieving the Centre’s mandate. 
               </h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
2
Reception
One (1)
Receive visitors.
Answer phone calls from customers.
Takes charge of Staff Time book, Movement Book and Visitors Book.
Other duties as assigned by the management.
               </h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
3
ICT (Sub-unit)
One (1)
Responsible for the Internet service provision of the office. 
Responsible for ensuring that uploads to the website are done properly.
Responsible for the technical maintenance of computer equipment of the office
               </h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
4
Administrative Officer
One (1)
Responsible for the management and circulation of information in the office.
Prepares Rosters for Prayer sessions in the office.
Receives and sends out office correspondence.
Collates daily reports from staff.
Supervises other staff in the absence of the Managing Director.
Performs other duties as assigned by the Managing Director.
               </h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
5
Video Editing Unit 
One (1)
Edit and upload video contents to EGC Youtube channel and EGC website.
Edit raw video Gospel files gotten from Starcross TV Cameras. 
Preserve all Video files of the Centre for future reference.
               </h6>

               <img src={egc2} alt="" className="lg:w-[50%] w-96 lg:h-[50%] my-10 flex " />
<h6 style={{ color: "#333", padding: 10, }}  className="">
6
Transcribers Unit
Four (4)
Transcription of the Holy Father’s audio Gospels into text format. They have a mandate to ensure that old and current Gospels are transcribed into text within the shortest possible time for archiving and possible publication.
Upload Everlasting Gospel Volume 1, 2 and 3 to EGC website.
Upload testimonies and illustrations to EGC website.
               </h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
7
Proof Reader
One (1)
Proof reads and edits all typed documents from the transcribers before they are uploaded to EGC website.
Responsible for compiling all Father’s mandates from His addresses.
               </h6>


<h6 style={{ color: "#333", padding: 10, }}  className="">
8
-Marketing Unit
-One (1)
-Handles all marketing needs of the Centre. Mans the sales outlet of EGC. 
-Liaise with States/National Administrators and EGO Coordinators to ensure that EGC sales outlets are established in States/Nations
               </h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
9
Finance (Cashier)
One (1)
Keeps records of all financial transactions.
Issues receipts 
Prepares quarterly financial reports. 
               </h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
10
General Service Officer
One (1)
Responsible for the day-to-day cleaning of the offices.
Responsible for the security of the office. Performs general duties as assigned by the management. 
               </h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
11
Audio Unit 
Two (2)

Provide Audio Services in the Great Hall (24/7).
Ensure all Audio Equipment are in good condition.
Record Holy Father’s Gospels, Addresses and Altar Briefs.
Edit and upload all audio gospels,
 altar briefs and Holy Father’s addresses to EGC website
               </h6>

<h6 style={{ color: "#333", padding: 10, }}  className="">
12
Archive/store
Contains Everlasting Gospel old manuscripts, Everlasting Gospels for sale, 
books not on display and the 24 terabyte storage device.
The Everlasting Gospel Center is also responsible for the management of the 
BCS Everlasting APP used for digital evangelism with features like, the Holy Fathers addresses 
Altar Briefs, Testimonies, Illustrations, Podcasts, etc.
               </h6>
    </div>
    </div>
    </motion.nav>
    )
}

export default EGC;