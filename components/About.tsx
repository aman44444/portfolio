import React from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const About = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
    >
      <div className="relative md:mt-10 w-11/12 md:w-3/4 h-3/5 md:h-3/4 bg-white rounded-xl overflow-auto">
        <div className="bg-gray-200 w-full h-1/4 rounded-t-xl text-2xl md:text-3xl flex items-center justify-between px-4 md:px-6 py-4">
          <h2 className="font-semibold">About</h2>
          <button
            className="text-black font-bold text-sm bg-white rounded-full h-8 w-8 flex items-center justify-center"
            onClick={() => onClose()}
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div className="flex flex-col items-start mt-4 md:mt-8 px-4 md:px-8">
          <Image
            src="/assets/images/profilepicture.jpg"
            alt="Profile pic"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Aman</h3>
            <p className="text-gray-400 text-xs md:text-sm flex items-center">
              <MdLocationOn className="text-black text-lg md:text-xl mr-1" />{" "}
              Bhopal, Madhya Pradesh
            </p>
            <div className="flex gap-3 mt-2 md:mt-4">
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
                <BsTwitter />
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
          <div className="mt-4 md:mt-8">
            <h3 className="text-lg md:text-xl font-semibold">Description</h3>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              I recently graduated with a Bachelor's degree in Electrical and
              Electronics Engineering. I am passionate about frontend
              development and have actively contributed to open-source projects,
              collaborating with developers worldwide. I'm excited to bring my
              skills to a dynamic role where I can continue to learn and grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
