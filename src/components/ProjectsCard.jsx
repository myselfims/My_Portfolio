import React from 'react';
import movies_cover from '../assets/movies_cover.png'
import assigner_cover from '../assets/assigner_cover.png'
import ecommerce_cover from '../assets/ecommerce_cover.png'


const ProjectsCard = ({project, setProject, index}) => {

  const covers = {
    1 : movies_cover,
    2 : assigner_cover,
    3 : ecommerce_cover
  }

  return (
    <div onClick={()=>setProject(project)} className="w-[400px] rounded border p-2 max-sm:my-3 cursor-pointer hover:bg-sky-100 transition-all hover:scale-105">
        <div className="h-[185px]">
            <img src={covers[project?.id]} alt="" />
        </div>
        <div className="my-2">
            <h1>{project?.name}</h1>
        </div>
      </div>
  )
}

export default ProjectsCard
