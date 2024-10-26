import React from "react";
import { Collapse } from "react-collapse";
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

const AcordPast = ({open, toogle, question, answer, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, image, image1, image2, image3}) => {
    
    return (
        <div className="pt-[10px] ">
            <div className="bg-gray-200 py-[25px] px-[50px] flex justify-between items-center cursor-pointer
              hover:bg-blue-500 rounded hover:text-white" onClick={toogle} >
             <p className="text-[22px] font-semibold">{question}</p>
             <div className="text-[30px]">
                {open ? <IoIosArrowUp/> : <IoIosArrowDown />}
             </div>
            </div>

            <Collapse isOpened={open} >
            {/* <img src={image} className="w-[500%] h-[100%] p-10" /> */}
            <div className='grid grid-cols-4 mt-0 gap-0 ml-8  mb-5'>

            <img src={image} className={`flex items-center flex-col gap-4 h-20 w-20 mt-5 bg-[#eee] hover:scale-150 hover:w-96 hover:h-40 rounded-md`} />
            <img src={image1} className={`flex items-center flex-col gap-4 h-20 w-20 mt-5 bg-[#eee] hover:scale-150 hover:w-96 hover:h-40 rounded-md`} />
            <img src={image2} className={`flex items-center flex-col gap-4 h-20 w-20 mt-5 bg-[#eee] hover:scale-150 hover:w-96 hover:h-40 rounded-md`} />
            <img src={image3} className={`flex items-center flex-col gap-4 h-20 w-20 mt-5 bg-[#eee] hover:scale-150 hover:w-96 hover:h-40 rounded-md`} />
                 </div>
                 <div className="bg-white px-[50px] pb-[20px]">{answer}
                
                </div>
                {/* <div className="bg-white px-[50px] pb-[20px]">{answer}
                
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{a}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{b}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{c}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{d}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{e}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{f}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{g}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{h}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{i}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{j}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{k}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{l}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{m}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{n}
                </div>
                <div className="bg-white px-[50px] pb-[20px]">{o}
                </div> */}
            </Collapse>
        </div>
    )
}
export default AcordPast