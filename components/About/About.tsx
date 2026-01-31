import React from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { AboutProps } from "@/types/about";
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
            src="/assets/images/profilepicture.jpg"
            alt="Profile pic"
            width={100}
            height={100}
            priority
            className="rounded-md"
          />
          <div>
            <h3 className="text-lg md:text-xl font-semibold ml-[2px]">Aman</h3>
            <p className="text-gray-400 text-xs md:text-sm flex items-center mt-[4px]">
              <MdLocationOn className="text-black text-lg md:text-xl" /> Bhopal,
              Madhya Pradesh
            </p>
            <div className="flex gap-3 mt-3 md:mt-4">
              <a
                href="https://github.com/aman44444"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-xl"
              >
                <BsGithub />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-xl"
              >
                <FaXTwitter />
              </a>
              <a
                href="mailto:amancorp04@gmail.com"
                aria-label="Email"
                className="text-xl"
              >
                <BiLogoGmail />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-8">
          <h3 className="text-lg md:text-xl font-semibold">Description</h3>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            I recently graduated with a Bachelor of Technology degree in
            Electrical and Electronics Engineering. I am passionate about
            frontend development and actively contribute to open-source
            projects, collaborating with developers around the world. I look
            forward to applying my skills in a meaningful role while continuing
            to learn and grow.
          </p>
        </div>
      </section>
    </Modal>
  );
};

export default About;
