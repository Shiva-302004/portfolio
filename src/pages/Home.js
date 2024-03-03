import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import TechnologiesUsed from '../components/TechnologiesUsed'
import Projects from '../components/Projects'
import CheckOut from '../components/CheckOut'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='pt-[11vh] lg:pt-32 h-[fit-content]'>
        <Hero/>
        <About/>
        <Education/>
        <Projects/>
        <TechnologiesUsed/>
        <CheckOut/>
        <Contact/>
    </div>
  )
}

export default Home