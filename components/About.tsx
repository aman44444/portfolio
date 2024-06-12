/* eslint-disable react/no-unescaped-entities */
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
      <div className=" realtive w-3/4 h-3/4 bg-white rounded-xl">
        <div className="bg-gray-200 w-full h-1/4 rounded-t-xl text-3xl flex items-center justify-between px-6 py-4">
          <h2 className="text-3xl font-semibold">About</h2>
          <button
            className="text-black font-bold  text-sm bg-white top-3 rounded-full h-8 w-8  flex items-center justify-center"
            onClick={() => onClose()}
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div className="flex flex-col items-start mt-8 px-8">
          <Image
            src="/assets/images/front.jpg"
            alt="Profile pic"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <div>
            <h3 className="text-xl font-semibold">Aman</h3>
            <p className="text-gray-400 text-xs flex">
              
              <MdLocationOn className="text-black text-xl mr-1" /> Bhopal ,Madhaya
              Pradesh
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/aman44444"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-xl"
              >
                <BsGithub />
              </a>
              <BsTwitter />
              <a href="mailto:amancorp04@gmail.com"
              aria-label="Email"
              className="text-xl">
                <BiLogoGmail />
              </a>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Description</h3>

            <p className="text-gray-400  mt-2 ">
             
            I am a recent graduate with a Bachelor's degree in Electrical and Electronics Engineering, driven by a profound passion for technology and a keen aptitude for problem-solving. My commitment to advancing the field is demonstrated through active contributions to open-source projects, where I collaborate with a diverse community of developers from around the globe. I am eager to bring my skills and enthusiasm to a dynamic role, where I can continue to learn, grow, and make impactful contributions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
