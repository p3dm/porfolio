import { projects } from '@/data'
import React from 'react'

const RecentProjects = () => {
  return (
    <div className="py-20">
        <h1 className="heading text-center font-bold text-4xl">
            A small number of {' '} 
            <span className="text-cyan-200">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
            {projects.map((project) =>(
                <div>
                    {project.title}
                </div> 
            ))}

        </div>
    </div>
  )
}
export default RecentProjects