import React, { useState } from 'react'
import { useDark } from '../context/Darkmode'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"
const defaultState={
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:""
}
const Form = () => {
    const { dark } = useDark()
    const [userinput,setuserinput]=useState(defaultState)
    const onChange=(e)=>{
        console.log(userinput)
        setuserinput({...userinput,[e.target.name]:e.target.value})
    }
    const onClick=()=>{
        fetch("https://backend-portfolio-phyj.onrender.com/api/v1/contactuser",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userinput)
        }).then(res=>res.json()).then((data)=>{
            if(data.success){
                toast.success(data.msg)
                setuserinput(defaultState)
            }else{
                toast.error(data.msg)
            }
        })
    }
    return (
        <div className={`w-[90vw] md:w-[700px] lg:w-[800px] ${!dark?"bg-[#1F293E] text-white":"bg-[#b6b4b4] text-black font-medium"} rounded-lg `}>
            <div className='relative flex  justify-center pb-2 mt-6'>
                <span className={`absolute text-center text-transparent ${!dark ? "out" : "outt"} font-extrabold text-3xl  opacity-30 md:text-4xl z-0`} >Contact me</span>
                <span className={`absolute text-center text-[1.785rem] md:text-3xl font-extrabold ${!dark ? "text-white" : "text-black"}  -mt-1 md:mt-1 ml-2 z-0`}>Contact me</span>
            </div>
            <div className='flex flex-col  justify-center items-center mt-16'>
                <div className='flex flex-col md:flex-row'>
                <input type="text" name='name' value={userinput.name} placeholder='Full Name' onChange={onChange} className='mt-2 w-[80vw] px-2 h-[40px] md:w-[300px] text-black rounded-md'/>
                <input type="email" name='email' value={userinput.email} placeholder='Email'  onChange={onChange} className='mt-2 w-[80vw] px-2 h-[40px] md:ml-2 md:w-[300px] text-black rounded-md'/>
                </div>
                <div className='flex flex-col md:flex-row '>
                <input type="number" name="phone" value={userinput.phone} placeholder='Phone'  onChange={onChange} className='mt-2 w-[80vw] px-2 h-[40px] md:w-[300px] text-black rounded-md'/>
                <input type="text" name='subject' value={userinput.subject} placeholder='Subject'  onChange={onChange} className='mt-2 w-[80vw] px-2 h-[40px] md:ml-2 md:w-[300px] text-black rounded-md' />
                </div>
                <textarea cols={10} rows={100}   name='message' value={userinput.message} placeholder='Message'  onChange={onChange} className='mt-2 text-black w-[80vw] px-2 h-[200px] md:w-[606px] rounded-md'/>
                <Link className="bg-gradient-to-l from-[#ffd49c] to-[#7a87fb] px-2 rounded-full ml-2 mt-3 mb-3 text-black" onClick={onClick}>Contact me</Link>
            </div>
        </div>
    )
}

export default Form