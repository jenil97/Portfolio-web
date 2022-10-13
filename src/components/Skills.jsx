import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Java from "../assets/javascript.png";
import Bootstrap from "../assets/Bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import ReactJs from "../assets/react.png";
import Typscript from "../assets/ts.png";
import NextJS from "../assets/nextjs.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-[110vh] md:h-[120vh] bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-violet-700 cursor-default">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 cursor-pointer">
          <div className="shadow-md bg-slate-300 rounded-xl shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-10' src={HTML} alt="html" />
            <p className="my-4 text-black font-bold">HTML</p>
          </div>
          <div className="shadow-md bg-slate-300 rounded-xl shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-10' src={CSS} alt="html" />
            <p className="my-4 text-black font-bold">CSS</p>
          </div>
          <div className="shadow-md bg-slate-300 rounded-xl shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-10' src={Java} alt="html" />
            <p className="my-4 text-black font-bold">Javascript</p>
          </div>
          <div className="shadow-md bg-slate-300 rounded-xl shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-10' src={ReactJs} alt="html" />
            <p className="my-4 text-black font-bold">ReactJs</p>
          </div>
          <div className="shadow-md bg-slate-300 rounded-xl shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-[110px] mx-auto mt-10' src={Bootstrap} alt="html" />
            <p className="my-4 text-black font-bold">Bootstrap</p>
          </div>
          <div className="shadow-md bg-slate-300 rounded-xl shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-10' src={Tailwind} alt="html" />
            <p className="my-4 text-black font-bold">TailwindCSS</p>
          </div>
          <div className="shadow-md bg-slate-300 rounded-xl shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-10' src={Typscript} alt="html" />
            <p className="my-4 text-black font-bold">Typscript</p>
          </div>
          <div className="shadow-md bg-slate-300 rounded-xl shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-10' src={NextJS} alt="html" />
            <p className="my-4 text-black font-bold">NextJS</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
