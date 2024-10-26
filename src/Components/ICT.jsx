
import { motion } from "framer-motion";
import banner from "../Components/banner/ict banner.jpg"

const ICT=()=>{
    return(
     

        <motion.nav
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 2,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
        }}
        
        
        className="justify-center w-[100%] grid items-center pt-2 md:pl-20 md:pr-20">

            <div className=" md:w-[60%] p-5 flex flex-col justify-self-center items-center shadow-lg mt-14">
            <img src={banner} alt="" className="lg:w-[50%] w-96 lg:h-72 my-0 flex " />

            
                        <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className=" text-center pt-40">BCS ICT</h1>

            {/* <h1>we are under construction</h1> */}
            <h6 style={{ color: "#333", padding: 10, }}  className="">
            The BCS information communication technology department (ICT) is responsible for the architectural solutions in Brotherhood of the Cross and Star, such as programming, website updates, Database Management 
            System and technical support. 
                    </h6>

            <h6 style={{ color: "#333", padding: 10, }}  className="">
         The department is responsible for creating programs that are specific and tailored to the needs of the organization. The department creates and maintains the organization’s official website and all social media platforms. It manages the data of the organization by providing users access to files stored in a database. The department enables the sharing of data in the database among multiple applications or users to providing users with a single all-encompassing data repository, allowing different data sets to relate to one another. 
                    </h6>

            <h6 style={{ color: "#333", padding: 10, }}  className="">
The department also provides support to computer users in the organization. This can include installing new software, repairing hardware problems, installing new hardware, troubleshooting problems and training employees how to use new software programs.                    </h6>
                    
        </div>
            
            {/* <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"/> */}
        </motion.nav>
    )
}

export default ICT;