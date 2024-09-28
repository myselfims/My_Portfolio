import React, { useEffect, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import movies_cover from '../assets/movies_cover.png'
import assigner_cover from '../assets/assigner_cover.png'
import ecommerce_cover from '../assets/ecommerce_cover.png'

const ViewProject = ({ setProject, project }) => {
  const modal = useRef();
  useEffect(() => {
    modal.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const covers = {
    1 : movies_cover,
    2 : assigner_cover,
    3 : ecommerce_cover
  }


  return (
    <div
      ref={modal}
      className="fixed top-0 py-10 z-30 group left-0 w-full h-full p-2 backdrop-blur-sm bg-[#00000065] flex justify-center items-center "
    >
      <div className="main my-6 transition-all w-6/12 max-sm:w-full border p-4 rounded-lg bg-white">
        <div className="head relative">
          <img src={covers[project?.id]} alt="" />
          <IoIosCloseCircle
            onClick={() => setProject(null)}
            className="absolute top-2 right-2 w-8 h-8 text-white transition-all bg-black rounded-full text-3xl hover:scale-125 cursor-pointer hover:text-sky-400"
          />
        </div>
        <div className="body my-4">
          <div className="flex justify-between">
            <h1 className="text-2xl">{project?.name}</h1>
            <div className="flex">
                {project.github_url.map((url)=>(
                    <a target="_blank" href={url}>
                    <FaGithub className="w-8 h-8 mx-2 cursor-pointer hover:text-sky-500 transition-all" />
                    </a>
                ))}
            </div>
          </div>
          <div className="skills flex flex-wrap">
            {project.skills.map((s) => (
              <div className="flex text-black my-1 border px-2 py-1 rounded items-center justify-center mx-1">
                <img className="w-5 mr-2 h-5" src={s.icon} alt="" />
                <h2>{s.name}</h2>
              </div>
            ))}
          </div>
          <p className="text-slate-500 my-4">{project?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
