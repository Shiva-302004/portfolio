import React from 'react'
import { useDark } from '../context/Darkmode'
import {Image2} from "../components/Image"
import { Link } from 'react-router-dom'
import resume from "../assets/resume.pdf"
import { FaDownload } from "react-icons/fa";

const CheckOut = () => {
    const { dark } = useDark()
    const downloadFileURL=(url)=>{
        const aTag=document.createElement('a')
        aTag.href=url
        aTag.setAttribute("download","resume")
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
    return (
        <div className='pb-16 '>
            <div className='relative flex  justify-center pb-5 mt-6'>
                <span className={`absolute text-center text-transparent ${!dark ? "out" : "outt"} font-extrabold text-3xl flex flex-col opacity-30 md:text-4xl z-0 `} ><span>Checkout My</span><span> Resume</span></span>
                <span className={`absolute text-center text-[1.65rem] md:text-[2rem] font-extrabold ${!dark ? "text-white" : "text-black"} flex flex-col  mt-1 md:-mt-1 ml-1 z-0`}><span className='-mt-1 md:mt-0'>Checkout My</span><span className='-mt-1 md:-mt-2'> Resume</span></span>
            </div>
            <div className="mt-16 md:mt-24 flex justify-center items-center">
                <div className={`${!dark ? "bg-[#1F293E] text-white" : "bg-[#b6b4b4] text-black font-medium"} w-[90vw] h-[auto] md:w-[750px] lg:w-[850px] p-2 md:p-8 rounded-md text-sm space-y-2  flex flex-col justify-center items-center`}>
                    <Image2/>
                    <span className="text-2xl lg:text-4xl  font-bold bg-gradient-to-b from-[#00c0fd] to-[#e70faa] bg-clip-text text-transparent">Shiva Verma</span>
                    <span className='md:text-xl'>Frontend Developer / Backend Developer</span>
                    <div className='mt-10 flex '>
                        <Link className={`${!dark?"bg-[#2F2816] border-white":"bg-white border-black"} py-2 px-3 rounded-full border  text-[12px] sm:text-lg flex`} onClick={()=>downloadFileURL(resume)}><FaDownload className='mr-2 mt-1'></FaDownload>Resume</Link>
                        <Link className={`${!dark?"bg-[#2F2816] border-white":"bg-white border-black"} py-2 px-3 rounded-full border border-white ml-3 text-[12px] sm:text-lg`} to={"mailto:shivaverma30july@gmail.com"}> Discuss project </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut