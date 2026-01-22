import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  projectLink: string;
  githubLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  projectLink,
  githubLink,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full rounded-xl h-[160px] overflow-hidden shadow-xl ">
      <motion.div
        className="absolute -inset-[2px] bg-white "
        initial={{
          clipPath: "inset(0 100% 100% 0)",
        }}
        animate={{
          clipPath: isExpanded ? "inset(0 0 0 0 )" : "inset(0 100% 100% 0)",
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <div className="absolute mt-3 z-20">
        <div
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className="
            px-2 py-[2px]
            bg-white
            text-black
            text-xs
            font-semibold
            cursor-pointer
            select-none
            shadow-md
          "
        >
          {title}
        </div>
      </div>

      <motion.div
        className="
          relative
          z-10
          h-full
          px-6
          pt-12
          text-black
          flex
          flex-col
          justify-start
        "
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          y: isExpanded ? 0 : 8,
        }}
        transition={{
          duration: 0.3,
          delay: isExpanded ? 0.35 : 0,
        }}
      >
        <p className="text-xs text-gray-700 leading-relaxed">{description}</p>

        <div className="mt-2 flex gap-4">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm font-medium"
          >
            View Project
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm font-medium"
          >
            View Code
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
