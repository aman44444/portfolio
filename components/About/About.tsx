"use client"
import React from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { AboutProps } from "../../types/about";
import Modal from "../Modal/Modal";

const About = ({ isOpen, onClose }: AboutProps) => {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="About"
      labelledBy="about-title"
    >
      <section className="flex flex-col gap-6 mt-6 px-4 md:px-8">
        <div className="flex gap-6">
          <Image
            src="/assets/images/Profile/Profile.jpg"
            alt="Profile pic"
            width={100}
            height={100}
            priority
            className="rounded-md"
          />
          <div>
            <h3 className="text-lg md:text-xl font-semibold ml-[2px]">Aman</h3>
            <div className="flex gap-3 mt-3 md:mt-4">
              <a
                href="https://github.com/aman44444"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-xl text-gray-500 hover:text-black"
              >
                <BsGithub />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-xl text-gray-500 hover:text-black"
              >
                <FaXTwitter />
              </a>
              <a
                href="mailto:amancorp04@gmail.com"
                aria-label="Email"
                className="text-2xl text-gray-500 hover:text-black"
              >
                <BiLogoGmail />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-8">
          <h3 className="text-lg md:text-xl font-semibold">Description</h3>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Frontend Developer focused on crafting modern, accessible, 
            and high-performance web experiences. 
            I build scalable applications using React.js, Next.js, TypeScript,
            and Tailwind CSS, with a strong emphasis on clean code and great user experience.
          </p>
        </div>
      </section>
    </Modal>
  );
};

export default About;
