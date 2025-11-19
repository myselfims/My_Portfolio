import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-slate-800 flex justify-center">
      <div className="body p-10 text-white">
        <div className="links flex justify-between">
          <a target="_blank" href="https://github.com/myselfims">
            <FaGithub className="w-8 h-8 mx-2 cursor-pointer hover:text-sky-500 transition-all" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shaikh-imran-855b69221/"
          >
            <FaLinkedin className="w-8 h-8 mx-2 cursor-pointer hover:text-sky-500 transition-all" />
          </a>
          {/* <a
            target="_blank"
            href="https://www.youtube.com/channel/UCGvabwylVv8oZbM443LEHTg"
          >
            <FaYoutube className="w-8 h-8 mx-2 cursor-pointer hover:text-sky-500 transition-all" />
          </a> */}
        </div>
        <div className="my-10 text-xl">
          <h1 className="text-center">Made with ❤️ By Shaikh Imran</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
