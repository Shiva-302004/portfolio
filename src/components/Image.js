import React from 'react'
import Shiva from "../assets/Shiva.jpg"
export  const Image = () => {
  return (
    <div>
        <img src={Shiva} className={`w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full img`} alt="" />
    </div>
  )
}
export const Image2=()=>{
  return (
    <div>
        <img src={Shiva} className={`w-[70px] h-[70px]  rounded-full img`} alt="" />
    </div>
  )
}
