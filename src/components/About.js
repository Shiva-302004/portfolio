import React, { useEffect, useState } from 'react'
import { useDark } from '../context/Darkmode'
import { Image2 } from './Image'
import { Link } from 'react-router-dom'

const About = () => {
  const { dark, setdark } = useDark()
  let [count,setcount]=useState(0)
  let [count2,setcount2]=useState(0)

  useEffect(()=>{
    const inter=setInterval(()=>{
      
      if(count===11){
        clearInterval(inter)
        // setcount(10)
      }
      else{
        setcount(count)
        count=count+1
      }
      
    },600)
    const inter2=setInterval(()=>{
      
      if(count2===101){
        clearInterval(inter2)
        // setcount(10)
      }
      else{
        setcount2(count2)
        count2=count2+1
      }
      
    },100)
  },[])
  return (
    <div>
      <div className='relative flex  justify-center mb-16'>
        <span className='absolute text-center text-transparent out font-extrabold text-3xl  opacity-30 md:text-4xl z-0' >About Me</span>
        <span className={`absolute text-center text-2xl md:text-3xl font-extrabold ${!dark ? "text-white" : "text-black"}  mt-1 ml-2 z-0`}>About Me</span>
      </div>
      <div className='mt-16 flex flex-col justify-center items-center '>
        <div className={`${!dark?"bg-[#1F293E] text-white":"bg-[#b6b4b4] text-black font-medium"} w-[90vw] h-[auto] md:w-[70vw] p-2 md:p-8 rounded-md text-sm space-y-2  text-center`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus sunt quisquam deleniti eligendi quod odio cum libero nihil harum officia? Magni, commodi harum! Voluptatibus est quaerat magni, dicta alias reiciendis enim ipsum, obcaecati tempora minus ratione labore saepe! Natus ratione sapiente fuga incidunt repudiandae optio adipisci, laborum voluptas, eum minus ipsa, modi libero? Temporibus odit veritatis atque dolorum, voluptate impedit alias ut deleniti soluta sed molestiae amet assumenda earum a ad tenetur ipsam. Illum quidem minima expedita consequatur nostrum vel!</div>
        <div className='flex mt-2'>
          <div className={`w-[40vw] md:w-[30vw] h-[100px] ${!dark?"bg-[#1F293E]":"bg-[#b6b4b4] "}  flex flex-col rounded-md p-2`}>
            <span className='sm:text-2xl md:text-3xl text-yellow-200 font-bold'>{count} +</span>
            <span className={` ${dark?"text-black":"text-white"} text-[14px]  font-semibold md:text-lg `}>Projects Completed</span>
          </div>
          <div className={`w-[40vw] md:w-[30vw] h-[100px] ${!dark?"bg-[#1F293E]":"bg-[#b6b4b4] "}  ml-3 flex flex-col rounded-md p-2`}>
            <span className='sm:text-2xl md:text-2xl text-yellow-200 font-bold'>{count2} + </span>
            <span className={` ${dark?"text-black":"text-white"} text-[14px]  font-semibold md:text-lg  `}>Hours of coding</span>
          </div>
        </div>
          <Link className="bg-gradient-to-l from-[#ffd49c] to-[#7a87fb] p-2 rounded-full ml-2 block lg:hidden mt-5" to="mailto:shivaverma30july@gmail.com">Contact me</Link>
      </div>
    </div>
  )
}

export default About