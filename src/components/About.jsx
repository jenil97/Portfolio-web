import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full cursor-default">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-violet-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Jenil Patel , nice to meet you. Please , take a look
              around my journey.
            </p>
          </div>
          <div>
            <p>
              I have always had a knack for technology and working with
              computers. In early 2022 I started working with HTML & CSS to make
              some edits on a small website that I was operating. What
              I thought was just a few small edits turned into a love for
              programming & than I started my self-thought developing journey. I
              am now passionate about building excellent websites that improves
              the lives around me. Now I'm spending my time building projects in
              <span className="font-bold"> Frontend</span> with ReactJS, NextJs
              and learning new technologies everyday.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
