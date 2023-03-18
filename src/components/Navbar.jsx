import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-5 bg-[#0a192f] text-gray-300">
      <div>
        <p className="text-3xl flex cursor-pointer ml-4 md:text-[45px]">
          <AiOutlineLeft size={35} className="md:w-[55px]" /> j{" "}
          <AiOutlineRight size={35} className="md:w-[55px]" />{" "}
        </p>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-7">
        <li className="hover:text-gray-200 hover:font-semibold">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-gray-200 hover:font-semibold">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-gray-200 hover:font-semibold">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-gray-200 hover:font-semibold">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-gray-200 hover:font-semibold">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full font-semibold text-gray-300"
              href="https://www.linkedin.com/in/jenil-patel-425694214/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1d1c1c]">
            <a
              className="flex justify-between items-center w-full font-semibold text-gray-300"
              href="https://github.com/jenil-patel97"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a
              className="flex justify-between items-center w-full font-semibold text-white"
              href="https://jenilweb10@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
