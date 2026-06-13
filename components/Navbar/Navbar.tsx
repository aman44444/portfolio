"use client"
import React from "react"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import About from "../About/About";
import Project from "../Projects/Projects";
import { PROJECTS } from "../../data/projectsData";
import { ActiveModal } from "../../types/Modal"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ActiveModal>(null)
  const [pendingModal, setPendingModal] = useState<ActiveModal>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const openModal = (modal: ActiveModal) => {
      setPendingModal(modal);
    closeMenu();
  };

  const closeModal = () => setActiveModal(null);

  return (
    <header className="relative">
      <div className="absolute w-full flex justify-center mt-10 md:mt-16">
        <motion.div
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <button  onClick={toggleMenu} aria-label="Toggle menu">
             <IoIosArrowDown
              size={30}
              className="cursor-pointer text-gray-400 hover:text-gray-900"
             />
          </button>

        </motion.div>
      </div>

      <AnimatePresence
          onExitComplete={() => {
          if (pendingModal) {
            setActiveModal(pendingModal);
            setPendingModal(null);
          }
        }}
      >
        {isMenuOpen && (
          <motion.nav
            className="fixed top-0 left-0 z-40 w-full 
                       flex flex-col items-center"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <ul className="flex gap-10 pt-3 pb-[3px] md:py-4">
              <li>
                <button
                  onClick={() => openModal("about")}
                  className="text-lg text-gray-500 hover:text-gray-900"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => openModal("projects")}
                  className="text-lg text-gray-500 hover:text-gray-900"
                >
                  Projects
                </button>
              </li>

              <li>
                <a
                  href="mailto:amancorp04@gmail.com"
                  className="text-lg text-gray-500 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <About isOpen={activeModal === "about"} onClose={closeModal} />
      <Project
        isOpen={activeModal === "projects"}
        onClose={closeModal}
        projects={PROJECTS}
      />
    </header>
  );
};

export default Navbar;
