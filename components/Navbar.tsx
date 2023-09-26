import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import About from './About'
import AboutMe from './AboutMe'
import Project from './Projects'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [showModal , setShowModal] =useState(false)
  const [showProject , setShowProject] =useState(false)

  
  return (
    <nav >
      <span className='text-3xl cursor-pointer m-6 absolute' onClick={()=> setToggle(!toggle)}>&#9776;</span>
      {toggle && (
      <motion.div 
      initial={{width:'0%'}}
      animate={{width:'100%'}}
      transition={{duration: 0.7, origin:1}}>
         <div className='bg-black text-white w-full h-30 flex items-center justify-center'>
       <ul className='flex justify-center items-center gap-4'>
        <li onClick={()=> setShowModal(true)}>
         About
        </li>
        <li onClick={()=>setShowProject(true)}>Projects</li>
        <li>Contact</li>
       </ul>
        <span className="absolute right-3 text-2xl top-0 cursor-pointer" onClick={()=>setToggle(false)}>&times;</span>
      </div>
      </motion.div>
      )}
      <About isVisible={showModal} onClose={()=> setShowModal(false)}/>
      <Project isProjectVisible={showProject} onClose={() => setShowProject(false)}/>
    </nav>

  )
}

export default Navbar

