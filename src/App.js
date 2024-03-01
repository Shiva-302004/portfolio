
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import AnimatedCursors from './components/AnimatedCursors';
import { useDark } from './context/Darkmode';
function App() {
  const {dark,setdark}=useDark()
  return (
    <div className={` ${dark?"bg-[#ffffff]":"bg-[#0F1624]"}`}>
      <Navbar />
      <AnimatedCursors/>
      <Routes>
        <Route exact path="/" element={<Home  />}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
