import React, { useEffect, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import movies_cover from '../assets/movies_cover.png'
import assigner_cover from '../assets/assigner_cover.png'
import ecommerce_cover from '../assets/ecommerce_cover.png'
import { IoOpenOutline } from "react-icons/io5";

const ViewProject = ({ setProject, project }) => {
  const modal = useRef();

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const covers = {
    1: movies_cover,
    2: assigner_cover,
    3: ecommerce_cover
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={() => setProject(null)}
    >
      <div
        ref={modal}
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain glass-scrollbar bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-300"
      >
        {/* Close Button */}
        <button
          onClick={() => setProject(null)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors duration-200 z-10"
        >
          <IoIosCloseCircle className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        <div className="flex flex-col gap-6">
          {/* Header Image */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg group">
            <img
              src={covers[project?.id]}
              alt={project?.name}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              {/* Optional overlay content on hover */}
            </div>
          </div>

          {/* Content Body */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                {project?.name}
              </h1>

              <div className="flex items-center gap-3">
                {project.github_url.map((url, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    href={url}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-black transition-all duration-200 text-gray-700"
                    title="View Code"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                ))}
                {project.link && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project?.link}
                    className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-200 text-blue-500"
                    title="Live Demo"
                  >
                    <IoOpenOutline className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {project.skills.map((s, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  <img className="w-4 h-4 object-contain" src={s.icon} alt="" />
                  <span>{s.name}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p>{project?.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
