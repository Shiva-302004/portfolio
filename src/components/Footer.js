import React from 'react'
import { useDark } from '../context/Darkmode'
import { RoundedBar } from './RoundedBar'
// import blacklo from
import logo from "../assets/logo.svg"
import css from "../assets/css.svg"
import mongodb from "../assets/mongodb.svg"
import tailwindcss from "../assets/tailwindcss.svg"
import react from "../assets/react.svg"
import nodejs from "../assets/nodejs.svg"
const Footer = () => {
    const { dark } = useDark()
    return (
        <div className='pb-10'>
            <div className='relative flex  justify-center pb-2'>
                <span className={`absolute text-center text-transparent ${!dark ? "out" : "outt"} font-extrabold text-3xl  opacity-30 md:text-4xl z-0`} >Portfolio Made With</span>
                <span className={`absolute text-center text-[1.785rem] md:text-3xl font-extrabold ${!dark ? "text-white" : "text-black"}  -mt-1 md:mt-1 ml-2 z-0`}>Portfolio Made With</span>
            </div>
            <div className='mt-16 flex flex-wrap justify-center'>
                <RoundedBar ml={1} mt={2} name={"react js"} icon={<img src={react}></img>} />
                <RoundedBar ml={1} mt={2} name={"Node js"} icon={<img src={nodejs}></img>} />
                <RoundedBar ml={1} mt={2} name={"tailwind css"} icon={<img src={tailwindcss}></img>} />
                <RoundedBar ml={1} mt={2} name={"mongo db"} icon={<img src={mongodb}></img>} />
                <RoundedBar ml={1} mt={2} name={"cSS"} icon={<img src={css}></img>} />
            </div>
            <div className='flex justify-center'>
                <div className={`${dark ? "hiii" : "hii"} p-[2px] h-[60px] mt-16 mx-2 flex justify-between w-[90vw] md:w-[80vw] lg:w-[60vw]`}>
                    <div className='flex mx-2 mt-2'>
                        <img src={logo} className='h-[35px] w-[35px]' alt="" />
                        <div className='ml-3 text-white mt-1 hidden md:block '>
                            Shiva  <span className='ml-1 font-bold'>Verma</span>
                        </div>
                    </div>
                    <div className={`mr-2 mt-4 md:mt-2 ${dark ? "text-black" : "text-white"} `}>Made By <span className='bg-gradient-to-b from-[#00c0fd] to-[#e70faa] bg-clip-text text-transparent font-bold max-sm:text-md sm:text-xl'>Shiva Verma</span></div>
                </div>
            </div>
        </div>
    )
}

export default Footer