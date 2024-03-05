import React from 'react'
import {RoundedBar} from './RoundedBar'
// import { useDark } from '../context/Darkmode'

import { Link } from 'react-router-dom'
import { IoMdLink } from "react-icons/io";
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import nodejs from "../assets/nodejs.svg"
import css from "../assets/css.svg"
import mongodb from "../assets/mongodb.svg"
import tailwindcss from "../assets/tailwindcss.svg"
import github from "../assets/github.svg"
import git from "../assets/git.svg"
const ProjectCard = ({back,backimg}) => {
    // const {dark,setdark}=useDark()
    return (
        <div className={` w-[90vw] flex flex-col  justify-center sm:justify-between  rounded-lg sm:flex-row pb-2 lg:w-[1000px]`} style={{background:`${back}`}}>
            
            <div className={` w-[80vw] h-[320px] rounded-lg text-center max-sm:mx-5 sm:mx-6 md:mx-2 mt-2 flex justify-center items-center sm:w-[400px]`} style={{background:`${backimg}`}}>

            </div>
            <div className='flex flex-col mt-2 p-4 sm:py-2 sm:px-2 '>
                <div className='flex justify-between'>
                    <div className='text-white'>Project Name</div>
                    <div className='w-[30px] h-[30px] bg-white rounded-full text-center font-bold italic '>i</div>
                </div>
                <div className='flex flex-col mt-2'>
                    <div className='text-white text-md'>Worked On</div>
                    <div className='flex text-white mt-1'>
                        <span className='text-sm font-bold text-center px-2 py-1 bg-[#405281] rounded-full'>Website</span>
                        <span className='max-sm:text-[14px] sm:text-sm font-bold text-center px-2 py-1 bg-[#405281] rounded-full ml-2'>Admin Panel</span>
                    </div>
                </div>
                <div className='flex flex-col mt-2'>
                    <div className='text-white max-sm:text-sm sm:text-md'>Technologies i have Used</div>
                    <div className='flex flex-col mt-2'>
                        <div className='flex flex-wrap'>
                            <RoundedBar ml={1} mt={2} name={"javascript"} icon={<img src={js} className='rounded full'></img>} />
                            <RoundedBar ml={1} mt={2} name={"react js"} icon={<img src={react}></img>} />
                            <RoundedBar ml={1} mt={2} name={"Node js"} icon={<img src={nodejs}></img>} />
                            <RoundedBar ml={1} mt={2} name={"cSS"} icon={<img src={css}></img> } />
                            <RoundedBar ml={1} mt={2} name={"mongo db"} icon={<img src={mongodb}></img> } />
                            <RoundedBar ml={1} mt={2} name={"tailwind css"} icon={<img src={tailwindcss}></img> } />
                            <RoundedBar ml={1} mt={2} name={"git"} icon={<img src={git}></img> } />
                            <RoundedBar ml={1} mt={2} name={"github"} icon={<img src={github}></img>} />
                        </div>
                        <Link className='bg-[#283D72] p-2 rounded-full mt-2 w-[250px] text-white flex justify-center  lg:w-[250px]'><IoMdLink className='mt-1 mr-2'></IoMdLink>Go to application</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard