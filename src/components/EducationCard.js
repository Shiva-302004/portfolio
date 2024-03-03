import React from 'react'
import { FaGraduationCap, FaRegCalendarDays } from "react-icons/fa6";
import { LuSchool2 } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import { useDark } from '../context/Darkmode';
const EducationCard = (props) => {
    const { dark} = useDark()
    return (
        <div className={`${!dark ? "bg-[#1F293E]  text-white" : "bg-[#b6b4b4] text-black font-medium"} w-[90vw]  sm:h-[200px] md:h-[220px]  md:w-[45vw] lg:w-[35vw] px-4 py-4 md:p-5 rounded-md text-sm space-y-2  text-center mt-3 md:mt-0 md:ml-3`}>
            <div className='flex justify-between'>
                <span className={`bg-[#181818] rounded-xl p-1 px-3 text-white text-[14px] flex `}><FaRegCalendarDays className='mt-1 mr-1' />
                    {props.year}</span>
                <span className={`bg-[#181818] rounded-xl p-1 px-3 text-white text-[14px] flex `}>{props.icon}
                    {props.type}</span>
            </div>
            <div className='flex '>
                <span className={`bg-[#181818] rounded-xl p-1 px-3 text-white text-[14px] flex `}>
                    {props.degree}</span>
                <span className={`bg-[#181818] rounded-xl p-1 px-3 text-white text-[14px] flex ml-3 `}>
                    {props.course}</span>
            </div>
            <div className='flex flex-col'>
                <div className='flex'>
                    <LuSchool2 className='bg-white rounded-full  text-black w-[35px] h-[35px] p-1' />
                    <span className='mt-1 text-[15px] ml-2'> {props.institute}</span>
                </div>
                <div className='flex mt-2'>
                    <IoLocation className='bg-white rounded-full  text-black w-[35px] h-[35px] p-1' />
                    <span className='mt-1 text-[15px] ml-2'>{props.location}</span>
                </div>
            </div>
        </div>
    )
}

export default EducationCard