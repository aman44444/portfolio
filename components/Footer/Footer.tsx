import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full bottom-4 flex items-center justify-center absolute">
      <a
        href="https://github.com/aman44444"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="m-2 text-gray-500 hover:text-black text-2xl"
      >
        <BsGithub />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="m-2 text-gray-500 hover:text-black text-2xl"
      >
        <FaXTwitter />
      </a>
      <a
        href="mailto:amancorp04@gmail.com"
        aria-label="Email"
        className="m-2 text-gray-500 hover:text-black text-3xl"
      >
        <BiLogoGmail />
      </a>
    </footer>
  );
};

export default Footer;
