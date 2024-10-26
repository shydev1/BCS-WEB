import React from 'react'
import { AiOutlinePhone, AiOutlineTwitter } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebookF, FaInstagram, FaBookMedical } from 'react-icons/fa'
import { BiPlus } from "react-icons/bi";
import { Link } from 'react-router-dom';



export default function TopHeader() {
    const ai = "https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Flogo.png?alt=media&token=e82fb645-e4b4-44cb-8eac-14298eb021da";
    return (
        <div className='hidden sm:flex justify-between items-center relative z-30 p-10 -mb-36' >
            {/*Left Links*/}
            <div className='flex flex-row space-x-3 text-[#003366]'>
                <Link to="tel:+2348141225457" className='flex items-center text-xs font-semibold space-x-6 cursor-pointer' style={{ fontSize: 13 }}>
                    <AiOutlinePhone className='mr-2 ' />
                    (+234) 814 122 5457
                </Link>
                <Link to = "mailto: bcsict2022@gmail.com" className='flex items-center text-xs font-semibold space-x-6 cursor-pointer' style={{ fontSize: 13 }}>
                    <HiOutlineMail className='mr-2 ' />
                    bcsict2022@gmail.com
                </Link>
            </div>

            {/*center links*/}
            <ul className='flex flex-row space-x-5 items-center uppercase text-xs text-[#003366] font-semibold'>
                <li className='flex flex-row items-center cursor-pointer'>
                    <Link to='/Events'>

                    Events
                    </Link>
                    <BiPlus />
                </li>
                <li className='flex flex-row items-center cursor-pointer'>
                    <Link to='/EGC'>

                    Sermon
                    </Link>

                    <BiPlus />
                </li>
                <li className='flex flex-row items-center cursor-pointer'>
                    <Link to="/Gallery">

                    Media
                    </Link>

                    <BiPlus />
                </li>

            </ul>

            {/*Right link*/}
            <div className='flex flex-row space-x-4 items-center  text-lg text-[#003366]'>
                <Link to='/STV' className='flex flex-row items-center space-y-3 font-bold cursor-pointer'>
                    <div className='bg-[#ff3333] animate-pulse h-2 w-2 rounded-full mr-2' />
                    LIVE
                </Link>
                <a target="_blank" to='https://www.facebook.com/WAHQBCS'>

                <FaFacebookF className='cursor-pointer hover:text-[#0066ff]' />
                </a>

                <a >

                <AiOutlineTwitter className='cursor-pointer hover:text-[#66ccff]' />
                </a>
                <a>

                <FaInstagram className='cursor-pointer hover:text-[#ff9933]' />
                </a>
                <a>

                <img src={ai} className='w-8 h-8 rounded-full cursor-pointer' />
                </a>
            </div>
        </div>
    )
}
