// components/Navbar.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import About from './About';
import Project from './Projects';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal , setShowModal] =useState(false)
  const [showProject , setShowProject] =useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      
      <span className='text-3xl cursor-pointer m-8 absolute text-gray-700' onClick={toggleNavbar}>&#9776;</span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 h-1/7 w-full bg-white shadow-md overflow-y-auto flex items-center justify-center"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{duration: 0.7}}
          >
            <button
              className="absolute  top-4 right-4 text-gray-500 bg-white rounded-full "
              onClick={toggleNavbar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="py-8 px-4 flex gap-10  ">
              <li className="mb-4 text-xl font-semibold">
                <a  className="  text-gray-700 cursor-pointer" onClick={()=> setShowModal(true)}>
                  About
                </a>
              </li>
              <li className="mb-4 text-xl font-semibold">
                <a className=" text-gray-700 cursor-pointer" onClick={()=>setShowProject(true)}>
                  Projects
                </a>
              </li>
             
              <li className="mb-4 text-xl font-semibold">
                <a className=" text-gray-700 cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <About isVisible={showModal} onClose={()=>setShowModal(false)}/>
      <Project isProjectVisible={showProject} onClose={() => setShowProject(false)}/>
    </div>
  );
};

export default Test;