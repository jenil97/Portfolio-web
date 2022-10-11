import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] cursor-default mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Hi, I'm Jenil
        </h1>
        <h2 className="text-4xl mt-3 sm:text-6xl font-bold text-[#8892b0]">
          A Frontend Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] font-medium">
          I’m a Frontend developer specializing in building exceptional digital
          experiences. <br /> Currently, I’m focused on building responsive
          Frontend web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-700 hover:border-violet-700">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
