import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFilePdf } from "react-icons/fa";

const NavigationBar = ({ setDarkMode, darkMode }) => {
  const [navExpand, setNavExpand] = useState(false);

  return (
    <div
      className={`flex w-full max-sm:flex-col ${
        navExpand ? "max-sm:h-[250px]" : "max-sm:h-12"
      } transition-all overflow-hidden justify-between items-center py-2 border-b`}
    >
      <div className="logo text-2xl max-sm:absolute left-2 ">
        <h1 id="logo-name" className="font-bold text-3xl">Shaikh Imran</h1>
      </div>
      <div className="links text-xl max-sm:flex-col flex max-sm:my-10">
        <a href="#home" className="mx-4 hover:border-b-2 border-sky-200">
          Home
        </a>
        <a className="mx-4 hover:border-b-2 border-sky-200" href="#skills">
          Skills
        </a>
        <a className="mx-4 hover:border-b-2 border-sky-200" href="#projects">
          Projects
        </a>
        <a className="mx-4 hover:border-b-2 border-sky-200" href="#contact">
          Contact
        </a>
      </div>
      <div className="flex items-center">
        <div className="max-sm:absolute top-2 right-10">
          {darkMode ? (
            <CiLight
              onClick={() => setDarkMode(false)}
              className="w-8 h-8 mx-2 cursor-pointer hover:text-sky-500 transition-all"
            />
          ) : (
            <CiDark
              onClick={() => setDarkMode(true)}
              className="w-8 h-8 mx-2 cursor-pointer hover:text-sky-500 transition-all"
            />
          )}
        </div>

        <a target="_blank" href="https://github.com/myselfims">
          <FaGithub className="w-8 h-8 mx-2 cursor-pointer hover:text-sky-500 transition-all" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/shaikh-imran-855b69221/"
        >
          <FaLinkedin className="w-8 h-8 mx-2 cursor-pointer hover:text-sky-500 transition-all" />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCGvabwylVv8oZbM443LEHTg"
        >
          <FaYoutube className="w-8 h-8 mx-2 cursor-pointer hover:text-sky-500 transition-all" />
        </a>
        <a target="_blank" className="p-2 rounded-xl bg-sky-500 text-white ml-4 hover:opacity-70 text-nowrap" href="https://drive.google.com/file/d/1abcGwek1R9ASw3UKvlYLywXnsMTKSVMA/view?usp=sharing"><FaFilePdf className="inline w-5 h-5 mr-2"/>Resume</a>
      </div>
      <GiHamburgerMenu
        onClick={() => (navExpand ? setNavExpand(false) : setNavExpand(true))}
        className={`absolute top-2 right-2 w-8 h-8 max-sm:flex hidden ${
          navExpand ? "text-sky-500" : null
        }`}
      />
    </div>
  );
};

export default NavigationBar;
