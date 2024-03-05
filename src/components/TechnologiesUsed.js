import React from 'react'
import { useDark } from '../context/Darkmode'
import html from "../assets/htmltech.svg"
import css from "../assets/csstech.svg"
import js from "../assets/jstech.svg"
import react from "../assets/reacttech.svg"
import redux from "../assets/reduxtech.svg"
import git from "../assets/gittech.svg"
import github from "../assets/githubtech.svg"
import tailwind from "../assets/tailwindtech.svg"
import java from "../assets/javatech.svg"
import bs from "../assets/bstech.svg"
import vscode from "../assets/vscodetech.svg"
import nodejs from "../assets/nodetech.svg"
import gitlight from "../assets/githublight.svg"
const TechnologiesUsed = () => {
    const { dark } = useDark()
    return (
        <div className='flex flex-col pb-4 '>
            <div className='relative flex  justify-center pb-2 mt-12'>
                <span className={`absolute text-center text-transparent ${!dark ? "out" : "outt"} font-extrabold text-2xl  opacity-30 md:text-4xl z-0 flex`} ><span>Technologies </span><span className='ml-3'>Used</span></span>
                <span className={`absolute text-center text-xl md:text-3xl font-extrabold ${!dark ? "text-white" : "text-black"}  mt-1 ml-2 z-0 flex`}><span>Technologies </span><span className='ml-6 md:ml-10'>Used</span></span>
            </div>
            <div className='flex flex-col md:flex-row md:mt-16 md:items-center md:justify-center '>
                <div className='mt-16 md:mt-10 flex flex-col md:flex-row    md:pb-6 px-3'>
                    <div className='flex justify-around'>
                        <img className="ml-3" src={html} alt="html" />
                        <img className="md:ml-6 lg:ml-12" src={css} alt="css" />
                        <img className="md:ml-6 lg:ml-12" src={js} alt="js" />
                    </div>
                </div>
                <div className='mt-10 flex flex-col md:flex-row   md:pb-6 px-3'>
                    <div className='flex justify-around'>
                        <img className="md:ml-6 lg:ml-12" src={react} alt="react" />
                        <img className="md:ml-6 lg:ml-12" src={redux} alt="redux" />
                        <img className="md:ml-6 lg:ml-12" src={tailwind} alt="tailwind" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:items-center md:justify-center'>
                <div className='mt-10 flex flex-col md:flex-row   md:pb-6 px-3'>
                    <div className='flex justify-around'>
                        <img className="md:ml-3" src={java} alt="java" />
                        <img className="md:ml-6 lg:ml-12" src={git} alt="git" />
                        {
                            dark ?
                                <img className="md:ml-6 lg:ml-12" src={github} alt="github" />
                                :
                                <img className="md:ml-6 lg:ml-12" src={gitlight} alt="github" />
                        }
                    </div>
                </div>
                <div className='mt-10 flex flex-col md:flex-row   md:pb-6 px-3'>
                    <div className='flex justify-around'>
                        <img className="md:ml-6 lg:ml-12 h-[80px] w-[80px]" src={nodejs} alt="node" />
                        <img className="md:ml-6 lg:ml-12" src={bs} alt="bs" />
                        <img className="md:ml-6 lg:ml-12" src={vscode} alt="vscode" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologiesUsed