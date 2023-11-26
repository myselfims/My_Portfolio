import React from "react";
import photo from "../images/mypngphoto.png";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact2";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Fullstack Developer", "Frontend Developer", "Backend Developer"],
    loop: {},
  });

  return (
    <div className="">
      <div
        id="home"
        className="flex pt-28 border-b max-sm:h-fit max-sm:flex-col h-[700px] overflow-hidden items-center justify-between"
      >
        <div className="relative overflow-hidden max-sm:flex hidden  flex-col items-center w-6/12 max-sm:w-fit h-[300px]">
          <div className="group absolute right-[-80px] bottom-[-300px] w-[700px] h-[700px]  hover:w-[500px] hover:h-[500px] bg-sky-400 rotate-45 rounded-full max-sm:w-[500px] max-sm:h-[500px]"></div>
          <img
            className="z-10 group cursor-pointer w-[800px] transition-all "
            src={photo}
            alt=""
          />
        </div>

        <div className="flex w-6/12 max-sm:w-full justify-center h-full flex-col max-sm:my-20">
          <h1 className="text-7xl font-bold max-sm:text-4xl">
            I'M SHAIKH IMRAN
          </h1>
          <h2 className="text-2xl my-2 max-sm:text-xl">
            I am a
            <span className="text-cyan-700 px-1">
              {text}
              <Cursor />
            </span>
          </h2>
          <p className="text-xl">
            Highly skilled and motivated Full Stack Developer with expertise in
            Python, Django, Django Rest Framework, HTML, CSS, JavaScript, React,
            MySQL, , Bootstrap, REST API, and JSON. Demonstrated proficiency in
            developing and deploying web applications. Proven ability to work
            independently and collaboratively in fast-paced environments.
            Committed to delivering high-quality, scalable solutions.
          </p>

          <div className="flex mt-5">
            <a
              href="#contact"
              className="bg-sky-500 text-4xl text-white hover:bg-sky-600 transition-all px-4 py-1 rounded-md"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div className="relative max-sm:hidden flex flex-col items-center w-6/12 max-sm:w-fit h-full">
          <div className="group absolute right-[-100px] bottom-[-200px] w-[700px] h-[700px]  hover:w-[500px] hover:h-[500px] bg-sky-400 rotate-45 rounded-full max-sm:w-[500px] max-sm:h-[500px]"></div>
          <img
            className="z-10 group cursor-pointer w-[800px] transition-all "
            src={photo}
            alt=""
          />
        </div>
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        {/* <Contact/> */}
        <Contact />
      </div>
    </div>
  );
};

export default Home;
