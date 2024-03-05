import { useState } from "react"
import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import resume from "../assets/resume.pdf"
import { MdSunny } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useDark } from "../context/Darkmode";
import logo from "../assets/logo.svg"
import logoblack from "../assets/logoblack.svg"
import menu from "../assets/menuicon.svg"
import cross from "../assets/cross.svg"
const Navbar = () => {
    const {dark,setdark}=useDark()
    const [click, setclick] = useState(false)
    const [navbar,setnavbar]=useState(false)
    const downloadFileURL=(url)=>{
        const aTag=document.createElement('a')
        aTag.href=url
        aTag.setAttribute("download","resume")
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
    // const navigation = useNavigate()
    const location=useLocation()
    const changeBackground=()=>{
        if(window.scrollY>="20"){
            setnavbar(true)
        }else{
            setnavbar(false)
        }
    }
    window.addEventListener("scroll",changeBackground)
    return (
        <>
            {/*Laptop view*/}
            <div className="max-sm:hidden md:block">
                <div className={`fixed w-[100vw] flex justify-around items-center h-[70px] pt-3 ${!navbar?"":"inset-0 backdrop-blur-md"} z-40`}>
                    <div className={`${!dark?"text-white":"text-black"}  max-md:text-[16px] text-xl flex`}>
                        {
                            dark?
                            <img src={logoblack} alt="" />                           
                        :
                            <img src={logo}></img>
                        }
                        <span className=" ml-2 font-semibold">Shiva Verma</span>
                    </div>
                    <div className={`${dark?"hiii":"hii"} flex w-[auto] mb-2 h-[60px] p-[2px] `} >
                        <Link to="/" className={`font-lg  ${dark?"text-black outt":"text-white out"} hover:text-[grey] ml-3  mt-2 mr-6 text-md lg:ml-10 lg:mr-8 lg:text-lg cursor-pointer ${location.pathname==="/"?"text-yellow-200":"text-black"} `} >Home</Link>
                        <Link to="about" className={` font-lg   ${dark?"text-black outt":"text-white out"} hover:text-[grey] mr-6  mt-2 text-md lg:mr-8 lg:text-lg cursor-pointer ${location.pathname==="/about"?"text-yellow-200":"text-black"}`} >About</Link>
                        <Link to="projects" className={` font-lg out  ${dark?"text-black outt":"text-white out"} hover:text-[grey] mr-6  mt-2 text-md lg:mr-8 lg:text-lg cursor-pointer ${location.pathname==="/projects"?"text-yellow-200":"text-black"}`}  >Projects</Link>
                        <Link to="contact" className={` font-lg out ${dark?"text-black outt":"text-white out"} hover:text-[grey] mr-6  mt-2 text-md lg:mr-8 lg:text-lg cursor-pointer ${location.pathname==="/contact"?"text-yellow-200":"text-black"}`}  >Contact </Link>
                    </div>
                    <div className="flex ">
                        <Link className="bg-gradient-to-l from-[#ffd49c] to-[#7a87fb] max-md:p-1 max-md:text-sm text-md p-2 rounded-full" onClick={()=>downloadFileURL(resume)}>Hire me</Link>
                        <Link className="bg-gradient-to-l from-[#ffd49c] to-[#7a87fb] p-2 rounded-full ml-2 hidden max-lg:hidden lg:block" to="mailto:shivaverma30july@gmail.com">Contact me</Link>
                        <div className="hidden md:block">
                        {
                            !dark?
                            <div className=" bg-white rounded-full w-[30px] h-[30px] ml-2 mt-2 p-1">
                                <MdSunny className="text-black " onClick={()=>setdark(!dark)}></MdSunny>
                            </div>
                            :
                            <div className=" bg-black rounded-full w-[30px] h-[30px] ml-2 mt-2 p-1">
                                <MdSunny className="text-white " onClick={()=>setdark(!dark)}></MdSunny>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile view */}
            <div className={`max-sm:block max-md:hidden md:hidden `}>
                <div className={`flex justify-between  h-[55px] w-[85vw] p-[2px] bg-[#292929] hi  z-40 mx-[7%]  mt-6  fixed ${!navbar?"":"inset-0 backdrop-brightness-50"}`}>
                    <span className="text-white  mt-1 ml-3   pt-1 flex">
                        <img src={logo} className="h-[35px] w-[35px]" alt="" />
                        <span className="mt-2 ml-2  sm:font-semibold text-sm">SHIVA VERMA</span>
                    </span>
                    <span className=" rounded-full p-[2px] mr-2 hii  my-1" onClick={() => setclick(!click)}>
                        {
                            click ? 
                                <img src={cross} className="bg-[#1f1d1d] rounded-2xl w-[50px] h-[35px] mt-[1px] text-white" alt="" />
                                :
                                <img src={menu}  className="bg-[#1f1d1d] rounded-2xl w-[50px] h-[35px] mt-[1px]" alt="" />
                        }

                    </span>
                </div>
            </div>
            <div className={`fixed w-[100vw] h-[100vh]  ${!click ? "left-[-100%]" : "left-0 "} bg-[#0F1624]
                z-10 max-sm:block max-md:hidden md:hidden `} style={{ transition: "ease-in 0.5s 0.2s" }}>
                <div className="flex flex-col justify-center items-center gap-12 mt-40">
                    <Link to="/" className=" font-bold out text-transparent hover:text-white text-5xl cursor-pointer" onClick={() => { setclick(!click) }} >Home</Link>
                    <Link to="/About" className=" font-bold out text-transparent hover:text-white text-5xl cursor-pointer" onClick={() => { setclick(!click) }} >About</Link>
                    <Link to="/Projects" className=" font-bold out text-transparent hover:text-white text-5xl cursor-pointer" onClick={() => { setclick(!click) }} >Projects</Link>
                    <Link to="/Contact" className=" font-bold out text-transparent hover:text-white text-5xl cursor-pointer" onClick={() => { setclick(!click) }} >Contact me</Link>
                </div>
            </div>
        </>
    )
}
export default Navbar