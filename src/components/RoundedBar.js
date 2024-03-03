import React from 'react'
import { Link } from 'react-router-dom'
import { useDark } from '../context/Darkmode'

const RoundedBar = ({icon,name,ml,mt,text}) => {
  const {dark}=useDark()
  return (
    <div className={` flex mt-${mt} ${dark?"bg-[#b6b4b4]":"bg-white"} px-2 py-1 rounded-full ml-${ml}`}>
        <div className=' rounded-full  '>
            {icon}
        </div>
        <div className={`ml-1 mt-1 text-[12px] font-semibold capitalize text-${text}`}>{name}</div>
    </div>
  )
}
const RoundedBar2 = ({icon,name,ml,mt,text,to,md}) => {
  const {dark}=useDark()
  return (
    <div className={` flex mt-${mt} ${dark?"bg-[#b6b4b4]":"bg-white"} px-2 md:px-4 py-1 rounded-full ml-${ml}`}>
        <div className={` rounded-full md:mt-2 `}>
            {icon}
        </div>
        <Link to={`${to}`} className={`ml-1 mt-1 text-[12px] font-semibold capitalize md:text-${md}`} style={{color:`${text}`}}>{name}</Link>
    </div>
  )
}

export { RoundedBar,RoundedBar2}