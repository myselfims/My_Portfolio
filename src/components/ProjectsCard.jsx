import React from 'react'

const ProjectsCard = ({project, setProject}) => {
  return (
    <div onClick={()=>setProject(project)} className="w-[400px] rounded border p-2 max-sm:my-3 cursor-pointer hover:bg-sky-100 transition-all hover:scale-105">
        <div className="h-[185px]">
            <img src={project?.cover} alt="" />
        </div>
        <div className="my-2">
            <h1>{project?.name}</h1>
        </div>
      </div>
  )
}

export default ProjectsCard
