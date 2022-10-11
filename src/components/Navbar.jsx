import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import PDF from '../assets/Resume.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-5 bg-[#0a192f] text-gray-300">
      <div>
        <p className="text-5xl flex cursor-pointer ml-4">Jenil</p>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-gray-200 hover:font-semibold">Home</li>
        <li className="hover:text-gray-200 hover:font-semibold">About</li>
        <li className="hover:text-gray-200 hover:font-semibold">Skills</li>
        <li className="hover:text-gray-200 hover:font-semibold">Work</li>
        <li className="hover:text-gray-200 hover:font-semibold">Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/jenil-patel-425694214/" target='_blank' rel="noreferrer">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/jenil-patel97" target='_blank' rel="noreferrer">
              Github <FaGithub size={30}/>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400">
            <a className="flex justify-between items-center w-full text-white" href="https://jenilweb10@gmail.com" target='_blank' rel="noreferrer">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full text-gray-300" href={PDF} target='_blank' rel="noreferrer">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
