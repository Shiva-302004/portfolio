
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
// import About from './components/About';
import AnimatedCursors from './components/AnimatedCursors';
import { useDark } from './context/Darkmode';
import AboutMain from './pages/AboutMain';
import ProjectMain from './pages/ProjectMain';
import ContactMain from './pages/ContactMain';
import Footer from './components/Footer';

function App() {
  const {dark,setdark}=useDark()
  return (
    <div className={` ${dark?"bg-[#ffffff]":"bg-[#0F1624]"} h-auto` }>
      <Navbar />
      <AnimatedCursors/>
      
      <Routes>
        <Route exact path="/" element={<Home  />}/>
        <Route exact path='/about' element={<AboutMain/>}/>
        <Route exact path='/projects' element={<ProjectMain/>}/>
        
        <Route exact path='/contact' element={<ContactMain/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
