import React from 'react'
import { useDark } from '../context/Darkmode'
import ProjectCard from './ProjectCard'
// import { Link } from 'react-router-dom'

const Projects = () => {
    const { dark } = useDark()
    return (
        <div >
            <div className='relative flex  justify-center pb-5 pt-6'>
                <span className={`absolute text-center text-transparent ${!dark ? "out" : "outt"} font-extrabold text-3xl flex flex-col opacity-30 md:text-4xl z-0 `} ><span>Projects I've</span><span> Worked On</span></span>
                <span className={`absolute text-center text-[1.65rem] md:text-[2rem] font-extrabold ${!dark ? "text-white" : "text-black"} flex flex-col  mt-1 md:-mt-1 ml-1 z-0`}><span className='-mt-1 md:mt-0'>Projects I've</span><span className='-mt-1 md:-mt-2'> Worked On</span></span>
            </div>
            <div className='mt-24 p-2 flex flex-col justify-center items-center gap-8'>
                <ProjectCard back={"#102762"} backimg={"#0257D9"}/>
                <ProjectCard back={"#3F031B"} backimg={"#801741"}/>
                <ProjectCard back={"#830332"} backimg={"#D98FAA"}/>
                <ProjectCard back={"#830332"} backimg={"#D98FAA"}/>
                <ProjectCard back={"#830332"} backimg={"#D98FAA"}/>
            </div>
        </div>
    )
}

export default Projects