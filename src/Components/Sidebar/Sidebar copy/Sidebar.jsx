import React from 'react';
import { GrFormClose } from "react-icons/gr";
import Logo from "../../../img/logo.png";
import { BiPlus } from "react-icons/bi";

export default function Sidebar({ setOpenSidebar, openSidebar }) {

  const links = [
    {
      title: "Home"
    },
    {
      title: "About"
    },
    {
      title: "Contact"
    },
    {
      title: "Sermon"
    },
    {
      title: "Media"
    },
    {
      title: "Establishment"
    },

  ]

  return (
    openSidebar ? (
      <div className='transition-all duration-1000 ease-in-out sidebar fixed top-0 bottom-0 p-2 w-72 overflow-y-auto  bg-white z-50 right-0'>
        <div className='flex justify-between items-center m-3'>
          <img src={Logo} />
          <GrFormClose className='text-gray-500 text-2xl cursor-pointer' onClick={() => setOpenSidebar(false)} />
        </div>
        <div className='m-3'>
          {links.map((link, index) => (
            <ul className='mb-5 text-sm font-semibold text-[#003366]'>
              <div className='flex flex-row items-center cursor-pointer'>
                <BiPlus />
                <li>{link.title}</li>
              </div>

            </ul>
          ))}
        </div>
      </div>
    ) : null

  )
}
