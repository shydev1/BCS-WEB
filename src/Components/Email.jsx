import React from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Email = ({ open, toogle, question, emails, image }) => {
  return (
    <div className="pt-[10px]">
      <div
        className="bg-gray-200 py-[25px] px-[50px] flex justify-between items-center cursor-pointer
              hover:bg-blue-500 rounded hover:text-white"
        onClick={toogle}
      >
        <p className="text-[22px] font-semibold">{question}</p>
        <div className="text-[30px]">
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-white px-[50px] pb-[20px] md:w-[800px] mt-5">
          {/* Map through the emails and display them */}
          <ul>
      
            {emails.map((email, index) => (
                <li key={email} className="font-bold mt-2">
                {email.name}:{" "}{" "}{" "}
                <a className="text-blue-400 ml-8 font-normal" href={`mailto:${email.address}`}>{email.address}</a>
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default Email;
