import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-[100vh] md:h-[130vh] bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/05f72e47-8973-4b77-8e20-76db1faadc34"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-6  py-[100px]">
          <p className="text-4xl font-bold inline border-b-4 border-violet-700 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 mt-2">
            Have a project or question ? &nbsp; Send me a message.
          </p>
        </div>
        <input
          className="bg-[#bdc9f0] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#bdc9f0]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#bdc9f0] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-violet-700 hover:border-violet-700 px-14 py-3 my-10 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
