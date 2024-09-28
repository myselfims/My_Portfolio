import React, { useState } from "react";
import projects from "../data/projects.json";
import ProjectsCard from "./ProjectsCard";
import ViewProject from "./ViewProject";


const Projects = () => {
  const [viewProject, setProject] = useState(null);

  return (
    <div className=" focus:bg-red-200">
      <div className="head my-8">
        <h1 className="text-4xl">My projects</h1>
      </div>
      <div className="flex justify-between flex-wrap">
        {projects.map((p, i) => (
          <ProjectsCard index={i} key={p.name} setProject={setProject} project={p} />
        ))}
      </div>
      {viewProject ? (
        <ViewProject project={viewProject} setProject={setProject} />
      ) : null}
      <hr className="my-10" />
    </div>
  );
};

export default Projects;
