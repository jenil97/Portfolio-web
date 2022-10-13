import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] cursor-default mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Hi, I'm Jenil
        </h1>

        <Typed
          className="text-4xl mt-3 sm:text-[58px] font-bold text-[#8892b0]"
          strings={[
            "A Frontend Web Developer.",
            "Tech Enthusiast.",
            "Eat( ); Sleep( ); Code( ); Repeat( );",
          ]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />

        <p className="text-[#8892b0] py-4 max-w-[700px] font-medium">
          I’m a self-taught developer specializing in building exceptional
          digital experiences. <br /> Currently, I’m focused on building
          responsive Frontend web applications.
        </p>
        <div>
          <Link to="contact" smooth={true} duration={700} onClick={handleClick}>
            <button className="text-white font-semibold group border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-700 hover:border-violet-700">
              Get In Touch
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
