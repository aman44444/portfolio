import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import About from "./About";
import Project from "./Projects";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showProject, setShowProject] = useState(false);

  return (
    <div className="relative">
      <div className="w-full flex justify-center mt-8 absolute ">
        <IoIosArrowDown
          size={60}
          className={`cursor-pointer transition-transform duration-300 
            ${
              isOpen ? "rotate-180" : "rotate-0"
            } text-gray-400 hover:text-gray-900`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="  z-40 fixed top-0 left-0 h-1/7 w-full bg-white shadow-md overflow-y-auto flex items-center justify-center flex-col rounded-b-3xl"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <ul className="px-2 py-2 flex gap-10 mt-2">
              <li className=" text-xl font-semibold">
                <a
                  className="  text-gray-700 cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  About
                </a>
              </li>
              <li className=" text-xl font-semibold">
                <a
                  className=" text-gray-700 cursor-pointer"
                  onClick={() => setShowProject(true)}
                >
                  Projects
                </a>
              </li>

              <li className="text-xl font-semibold">
                <a
                  href="mailto:amancorp04@gmail.com"
                  className=" text-gray-700 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className=" m-2">
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: 180 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoIosArrowDown
                  size={30}
                  className="cursor-pointer text-gray-400 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <About isVisible={showModal} onClose={() => setShowModal(false)} />
      <Project
        isProjectVisible={showProject}
        onClose={() => setShowProject(false)}
      />
    </div>
  );
};

export default Navbar;
