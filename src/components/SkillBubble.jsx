import React from 'react'

const SkillBubble = ({skill}) => {

  return (
    <div className='rounded-full m-4 hover:scale-125 transition-all cursor-default flex flex-col
    justify-center shadow-inner border-sky-100 shadow-sky-200 items-center border-2 w-[110px] h-[110px]'>
        <img className='w-10' src={skill.icon} alt="" />
        <h1 className='text-center'>{skill.name}</h1>
    </div>
  )
}

export default SkillBubble
