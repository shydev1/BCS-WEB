import React from "react";
import { FaGithub, FaLinkedin, FaTv, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          TV <FaTv size={30} />
        </>
      ),
      href: "https://linkedin.com/in/oku-akpabio-08baaa222",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Live <FaYoutube size={30} />
        </>
      ),
      href: "https://github.com/blacckoscar",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:okuakpabio0@gmail.com",
            style: "rounded-br-md",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: `https://firebasestorage.googleapis.com/v0/b/universe-ff7ed.appspot.com/o/Private%2Fcv.png?alt=media&token=546740af-d230-4a7c-a7d3-597825de4b49`,
    //   style: "rounded-br-md",
    // },
  ];

  return (
    <div>

    <div className="hidden lg:flex flex-col top-[45%] left-0 z-50 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
          key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[rgba(255,255,255,0.6)]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-[#b30000]"
              download={download}
              target="_blank"
              rel="noreferrer"
              >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
    {/* <div className="flex flex-col top-[65%] z-50 left-0 fixed md:hidden">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
          key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#b30000]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-[#fff]"
              download={download}
              target="_blank"
              rel="noreferrer"
              >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div> */}
    </div>
  );
};

export default SocialLinks;
