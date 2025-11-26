import React from 'react'
import photo from '../images/skills.png'
import skills from '../data/skills.json'

const Skills = () => {
  return (
    <div className='py-20 relative overflow-hidden'>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image Section - Hidden on mobile, visible on large screens */}
          <div className="hidden lg:block w-5/12 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img
              className='relative z-10 w-full h-auto object-contain drop-shadow-2xl transform transition-transform duration-500 hover:scale-105'
              src={photo}
              alt="Skills Illustration"
            />
          </div>

          {/* Skills Grid Section */}
          <div className="w-full lg:w-7/12">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Technical Proficiency
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-500">
                A showcase of the technologies and tools I use to build scalable applications.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 mb-3 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-sky-500 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
