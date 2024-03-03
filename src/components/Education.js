import React, { useState } from 'react'
import { useDark } from '../context/Darkmode'
import { FaGraduationCap, FaRegCalendarDays } from "react-icons/fa6";
import { LuSchool2 } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import EducationCard from './EducationCard';
// import { FcGraduationCap } from "react-icons/fc";
import { Link } from 'react-router-dom';
import resume from "../assets/resume.pdf"
const Education = () => {
    const { dark } = useDark()
    const downloadFileURL = (url) => {
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute("download", "resume")
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='relative flex  justify-center pb-2 mt-12'>
                <span className={`absolute text-center text-transparent ${!dark?"out":"outt"} font-extrabold text-3xl  opacity-30 md:text-4xl z-0`} >Education</span>
                <span className={`absolute text-center text-2xl md:text-3xl font-extrabold ${!dark ? "text-white" : "text-black"}  mt-1 ml-2 z-0`}>Education</span>
            </div>
            <div className='mt-16 flex flex-col md:flex-row justify-around items-center lg:w-[80vw] md:pb-6'>
                <EducationCard year={"2020-2022"} type={"School"} degree={"Secondary Education"} course={"12th (PCM)"} institute={"D.A.V Cantt Area Gaya"} location={"Gaya Bihar"} icon={< LuSchool2 className='mt-1 mr-1' />} />
                <EducationCard year={"2022-2026"} type={"Graduation"} degree={"Bachelor's Degree"} course={"B.tech (EE)"} institute={"NIT PATNA"} location={"Patna Bihar"} icon={< FaGraduationCap className='mt-1 mr-1' />} />
                <Link className="bg-gradient-to-l from-[#ffd49c] to-[#7a87fb] block md:hidden text-md px-2 mt-3 mb-3 rounded-full" onClick={() => downloadFileURL(resume)}>Hire me</Link>
            </div>
        </div>
    )
}

export default Education