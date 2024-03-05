import React from 'react'
import { useDark } from '../context/Darkmode'
import {RoundedBar2} from './RoundedBar'
import Form from './Form'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gmail from "../assets/gmail.svg"
import instagram from "../assets/instagram.svg"
import github from "../assets/github.svg"
import facebook from "../assets/facebook.svg"
import linkdin from "../assets/linkdin.svg"
const Contact = () => {
    const { dark } = useDark()
    return (
        <div className='pb-10'>
            <div className='relative flex  justify-center pb-2'>
                <span className={`absolute text-center text-transparent ${!dark ? "out" : "outt"} font-extrabold text-3xl  opacity-30 md:text-4xl z-0`} >Connect with me</span>
                <span className={`absolute text-center text-[1.785rem] md:text-3xl font-extrabold ${!dark ? "text-white" : "text-black"}  -mt-1 md:mt-1 ml-2 z-0`}>Connect with me</span>
            </div>
            <div className='flex justify-center items-center'>
            <ToastContainer />
            <div className=' mt-16 flex flex-wrap justify-center md:w-[60vw]'>
                <RoundedBar2 mt={2} ml={2} md={"lg"} icon={<img src={gmail}></img>} name={"Shivaverma30july@gmail.com"} to={"mailto:shivaverma30july@gmail.com"} text={"red"} />
                <RoundedBar2 mt={2} ml={2} md={"lg"} icon={<img src={instagram}></img>} name={"Instagram"} text={"pink"}  to={"https://www.instagram.com/shiva_verma_30?igsh=MTUyZXZzdjdwN3draw%3D%3D&utm_source=qr"}/>
                <RoundedBar2 mt={2} ml={2} md={"lg"} icon={<img src={linkdin}></img>} name={"Linkedin"} text={"blue"} to={"https://www.linkedin.com/in/shiva-verma-573002209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}/>
                <RoundedBar2 mt={2} ml={2} md={"lg"} icon={<img src={facebook}></img>} name={"facebook"} to={"https://www.facebook.com/profile.php?id=100085956841113"} text={"blue"} />
                <RoundedBar2 mt={2} ml={2} md={"lg"} icon={<img src={github}></img>} name={"Github"} to={"https://github.com/Shiva-302004/"} text={"black"} />
            </div>
            </div>
            <div className='mt-12 p-2 m-2 md:m-4 rounded-lg  flex justify-center items-center  '>
                <Form/>
            </div>
            <hr className='mt-16 bg-black' />
        </div>
    )
}

export default Contact