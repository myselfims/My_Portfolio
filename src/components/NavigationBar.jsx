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
      className={`flex w-full max-sm:flex-col ${navExpand ? "max-sm:h-[300px]" : "max-sm:h-16"
        } transition-all duration-300 overflow-hidden justify-between items-center py-3`}
    >
      <div className="logo text-2xl max-sm:absolute left-0">
        <h1 id="logo-name" className="font-bold text-3xl tracking-wide bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">Shaikh Imran</h1>
      </div>

      <div className="links text-lg font-medium max-sm:flex-col flex max-sm:my-6 gap-8">
        {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative group py-1"
          >
            <span className="relative z-10">{item}</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="max-sm:absolute top-4 right-14">
          {darkMode ? (
            <CiLight
              onClick={() => setDarkMode(false)}
              className="w-7 h-7 cursor-pointer hover:text-yellow-400 transition-all duration-300"
            />
          ) : (
            <CiDark
              onClick={() => setDarkMode(true)}
              className="w-7 h-7 cursor-pointer hover:text-purple-600 transition-all duration-300"
            />
          )}
        </div>

        <div className="flex items-center gap-3 max-sm:hidden">
          <a target="_blank" rel="noreferrer" href="https://github.com/myselfims" className="hover:text-sky-500 transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>

          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shaikh-imran-855b69221/" className="hover:text-sky-500 transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-0.5"
            href="https://drive.google.com/file/d/1moca6KHuqO1hkvuGbJjN8I450Bz-lCeW/view?usp=sharing"
          >
            <FaFilePdf className="mr-2" /> Resume
          </a>
        </div>
      </div>

      <GiHamburgerMenu
        onClick={() => setNavExpand(!navExpand)}
        className={`absolute top-4 right-4 w-7 h-7 max-sm:flex hidden cursor-pointer transition-colors ${navExpand ? "text-sky-500" : ""
          }`}
      />
    </div>
  );
};

export default NavigationBar;
