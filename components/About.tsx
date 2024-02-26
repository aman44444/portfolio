/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

function About({ isVisible, onClose }) {
  if (!isVisible) return null;

  // const handleClick = (e: { target: { id: string } }) => {
  //     if(e.target.id === 'wrapper') onClose()
  // }
  const style = {
    borderRadius: "50%",
    marginInline: "2.5rem",
    marginTop: "2rem",
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
    >
      <div className="w-3/4 h-3/4 bg-white  rounded-xl absolute">
        <div className="bg-gray-200 w-full h-1/4 rounded-t-xl text-3xl flex items-center ">
          <h2 className="absolute left-12 font-semibold">About</h2>
          <button
            className="text-black text-sm place-self-end absolute right-3 font-bold bg-white top-3 rounded-full h-8 w-8"
            onClick={() => onClose()}
          >
            X
          </button>
        </div>
        <div className="bg-white rounded">
          <Image
            src="/assets/images/front.jpg"
            alt="Profile pic"
            width={100}
            height={100}
            style={style}
          />
          <div className="m-8 font-semibold">
            <h3>Aman</h3>
            <p className="text-gray-400 text-xs flex">
              {" "}
              <MdLocationOn className="text-black text-xl" /> Bhopal ,Madhaya
              Pradesh
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/aman44444"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
              <BsTwitter />
              <a href="mailto:amancorp04@gmail.com">
                <BiLogoGmail />
              </a>
            </div>
          </div>
          <div className="m-8 font-extralight ">
            <h3>Description</h3>

            <p className="text-gray-400 ">
              I'm a recent graduate with a Bachelor's degree in Electrical and
              Electronics Engineering. Passionate about technology and
              problem-solving, I actively contribute to open-source projects,
              collaborating with developers globally. Eager to leverage my
              skills and enthusiasm in a dynamic role where I can continue to
              learn and make meaningful contributions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
