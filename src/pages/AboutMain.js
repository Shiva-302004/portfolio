import React from 'react'
import About from '../components/About'
import Education from '../components/Education'
import TechnologiesUsed from '../components/TechnologiesUsed'

const AboutMain = () => {
  return (
    <div className='pt-24 '>
        <About/>
        <Education/>
        <TechnologiesUsed/>
    </div>
  )
}

export default AboutMain