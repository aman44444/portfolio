import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import About from "../About";
import Project from "../Projects";
import { PROJECTS } from "@/data/projects";

type ActiveModal = "about" | "projects" | null;

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
    <div className="relative">
      <div className="absolute w-full flex justify-center mt-8">
        <motion.div
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoIosArrowDown
            size={60}
            onClick={toggleMenu}
            className="cursor-pointer text-gray-400 hover:text-gray-900"
          />
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
            className="fixed top-0 left-0 z-40 w-full bg-white shadow-md
                       flex flex-col items-center"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <ul className="flex gap-10 py-4">
              <li>
                <button
                  onClick={() => openModal("about")}
                  className="text-xl font-semibold text-gray-700 hover:text-gray-900"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => openModal("projects")}
                  className="text-xl font-semibold text-gray-700 hover:text-gray-900"
                >
                  Projects
                </button>
              </li>

              <li>
                <a
                  href="mailto:amancorp04@gmail.com"
                  className="text-xl font-semibold text-gray-700 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>

            <button onClick={closeMenu} className="mb-3">
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: 180 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoIosArrowDown
                  size={30}
                  className="text-gray-400 hover:text-gray-900"
                />
              </motion.div>
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      <About isOpen={activeModal === "about"} onClose={closeModal} />
      <Project
        isOpen={activeModal === "projects"}
        onClose={closeModal}
        projects={PROJECTS}
      />
    </div>
  );
};

export default Navbar;
