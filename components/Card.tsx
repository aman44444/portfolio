import { useState } from 'react';

import { motion } from 'framer-motion';
import React from 'react';

const Card = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className={`relative w-full h-70 bg-white shadow-xl  transition-all duration-300  ${
        isExpanded ? 'h-full' : 'h-2/4'
      }`}
      whileHover={{ translateY: isExpanded ? 0 : -16 }}
      onMouseEnter={toggleExpansion}
      onMouseLeave={toggleExpansion}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {isExpanded && (
          <p className="text-gray-600 mt-2 rounded-t-xl">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;