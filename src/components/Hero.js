import { Link } from "react-router-dom";
import {Image} from "./Image";
import { Typewriter } from "react-simple-typewriter";
import { useDark } from "../context/Darkmode";

const Hero = () => {
    const {dark}=useDark()
    const downloadFileURL=(url)=>{
        const aTag=document.createElement('a')
        aTag.href=url
        aTag.setAttribute("download","resume")
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
    return (
        <>
            {/* laptop view */}
            <div className="max-sm:hidden md:block">
                <div className="flex justify-around  h-[60vh] items-center">

                    <div>
                        <span className="flex flex-col justify-center gap-3  w-[300px] lg:w-[450px] text-xl lg:text-3xl line-clamp-4">
                            <h1 className={`${dark?"text-black":"text-[white]"} font-lg`}>Hello , I'm </h1>
                            <span className="text-2xl lg:text-4xl  font-bold bg-gradient-to-b from-[#00c0fd] to-[#e70faa] bg-clip-text text-transparent">Shiva Verma</span>
                            <span className={`${dark?"text-black":"text-[white]"}`}>
                                I'm <span className=" font-semibold"><Typewriter words={["   a Frontend Developer", "   a Backend Developer", "   an Engineer"]} typeSpeed={30} deleteSpeed={10} loop={"infinity"} /></span>
                            </span>
                        </span>
                    </div>
                    <Image></Image>
                </div>
            </div>
            {/* phone view */}
            <div className="max-sm:block max-md:hidden md:hidden mb-10">
                <div className="flex flex-col justify-center items-center mt-10">
                    <Image></Image>
                    <div className="flex flex-col justify-center gap-3 w-[90vw] max-sm:text-md sm:text-lg mt-7  items-center ">
                        <h1 className="text-[white] font-lg">Hello , I'm </h1>
                        <span className="text-xl   font-bold bg-gradient-to-l from-[#00c0fd] to-[#e70faa] bg-clip-text text-transparent ">Shiva Verma</span>
                        <span className="text-[white] ">
                            I'm <span className="text-[white]  font-bold"><Typewriter words={["   a Frontend Developer", "   a Backend Developer", "   an Engineer"]} typeSpeed={30} deleteSpeed={10} loop={"infinity"} /></span>
                        </span>
                        <span className="flex text-sm">
                            <Link className="bg-gradient-to-tr from-[#ffd49c] to-[#7a87fb]  p-[6px] rounded-full" onClick={() => downloadFileURL(resume)}>Hire me</Link>
                            <Link className="bg-gradient-to-tr from-[#ffd49c] to-[#7a87fb] p-[6px] rounded-full ml-2 h" to="mailto:shivaverma30july@gmail.com">Contact me</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Hero;