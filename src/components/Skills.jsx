import React from 'react'
import photo from '../images/skills.png'
import SkillBubble from './SkillBubble'
import skills from '../data/skills.json'

const Skills = () => {
  return (
    <div className='my-20 flex overflow-hidden h-[700px] max-sm:h-fit border-b'>
      <div className="relative max-sm:hidden flex flex-col items-center w-6/12  h-full bg--500">
        {/* <div className=" left-[-100px] bottom-[-200px] w-[700px] h-[700px] bg-sky-400 rotate-45 rounded-full"></div> */}
        <img className='z-10 cursor-pointer w-[1200px] transition-all mt-10' src={photo} alt="" />
      </div>
      <div className="skills  justify-center max-sm:py-10 h-fit w-6/12 max-sm:w-full flex flex-wrap ">
        {skills.map((skill) =>
          <SkillBubble key={skill.name} skill={skill} />
        )}
      </div>
    </div>
  )
}

export default Skills
