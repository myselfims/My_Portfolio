import React, { useEffect, useRef } from 'react';
import { IoIosCloseCircle } from "react-icons/io";

const ViewProject = ({setProject,project}) => {
    const modal = useRef()
    useEffect(()=>{
        modal.current?.scrollIntoView({ behavior: 'smooth' });
    },[])
  return (
    <div ref={modal} className='absolute group left-0 w-full h-full top-[1600px] p-2 backdrop-blur-sm bg-[#00000065] flex justify-center items-center '>
        <div className="main transition-all w-6/12 max-sm:w-full border p-4 rounded-lg bg-white">
            <div className="head relative">
                <img src={project?.cover} alt="" />
                <IoIosCloseCircle onClick={()=>setProject(null)} className='absolute top-2 right-2 w-8 h-8 text-white transition-all bg-black rounded-full text-3xl hover:scale-125 cursor-pointer hover:text-sky-400'/>
            </div>
            <div className="body my-4">
                <h1 className='text-2xl'>{project?.name}</h1>
                <div className="skills flex flex-wrap">
                    {project.skills.map((s)=>
                    <div className='flex text-black my-1 border px-2 py-1 rounded items-center justify-center mx-1'>
                        <img className='w-5 mr-2 h-5' src={s.icon} alt="" />
                        <h2>{s.name}</h2>
                    </div>)}
                </div>
                <p className='text-slate-500 my-4'>{project?.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default ViewProject
