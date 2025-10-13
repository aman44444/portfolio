import { useState } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

const Card = ({ title, description,projectLink , githubLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className={`relative w-full h-20 bg-white shadow-xl transition-all duration-300 ${
        isExpanded ? 'h-full' : 'h-20'
      }`}
      whileHover={{ translateY: isExpanded ? 0 : -16 }}
      onMouseEnter={toggleExpansion}
      onMouseLeave={toggleExpansion}
      role="button"
      aria-expanded={isExpanded}
    >
      <div className="p-6">
        <h2 className="text-base font-semibold">{title}</h2>
        {isExpanded && (
          <div className="mt-2 text-xs md:text-sm">
          <p className="text-gray-600 text-xs">{description}</p>
          <div className="mt-4">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 no-underline mr-2"
            >
              View Project
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 no-underline"
            >
              View Code
            </a>
          </div>
        </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

