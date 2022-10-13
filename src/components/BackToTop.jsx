import React, { useState, useEffect } from "react";

import { BiUpArrowAlt } from "react-icons/bi";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="bg-violet-600 w-16 h-16 rounded-full fixed right-5 bottom-[350px]  md:right-[100px] md:bottom-[170px] flex justify-center items-center transition-all text-white hover:scale-110 duration-500"
      >
        <BiUpArrowAlt className="w-8 h-8" />
      </button>
    )
  );
};

export default BackToTop;
