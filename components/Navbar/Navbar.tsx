"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

import About from "../About/About";
import Project from "../Projects/Projects";
import { PROJECTS } from "../../data/projectsData";
import { ActiveModal } from "../../types/Modal";

const navItems = [
  { label: "About", modal: "about" as const },
  { label: "Projects", modal: "projects" as const },
];

const navLinkClass =
  "group relative text-lg text-gray-500 hover:text-gray-900";

const underlineClass =
  "absolute left-0 -bottom-1 h-[1px] w-0 bg-gray-900 " +
  "transition-all duration-700 ease-in-out group-hover:w-full";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [pendingModal, setPendingModal] = useState<ActiveModal>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = (modal: ActiveModal) => {
    setPendingModal(modal);
    closeMenu();
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <header className="relative">
      {/* Menu toggle */}
      <div className="absolute mt-10 flex w-full justify-center md:mt-16">
        <motion.div
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <IoIosArrowDown
              size={30}
              className="cursor-pointer text-gray-400 hover:text-gray-900"
            />
          </button>
        </motion.div>
      </div>

      {/* Navigation */}
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
            className="fixed left-0 top-0 z-40 flex w-full flex-col items-center"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <ul className="flex gap-10 pt-3 pb-[3px] md:py-4">
              {navItems.map(({ label, modal }) => (
                <li key={modal}>
                  <button
                    type="button"
                    onClick={() => openModal(modal)}
                    className={navLinkClass}
                  >
                    {label}
                    <span className={underlineClass} />
                  </button>
                </li>
              ))}

              <li>
                <a
                  href="mailto:amancorp04@gmail.com"
                  className={navLinkClass}
                >
                  Contact
                  <span className={underlineClass} />
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Modals */}
      <About
        isOpen={activeModal === "about"}
        onClose={closeModal}
      />

      <Project
        isOpen={activeModal === "projects"}
        onClose={closeModal}
        projects={PROJECTS}
      />
    </header>
  );
};

export default Navbar;

