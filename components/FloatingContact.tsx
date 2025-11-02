"use client";

import { motion } from "framer-motion";
import { MessageCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

const FloatingContact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="https://oficialasif.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-orange rounded-full flex items-center justify-center shadow-2xl shadow-accent-orange/50 hover:shadow-accent-orange/70 transition-all duration-300 group cursor-pointer"
      aria-label="Contact Developer"
    >
      <motion.div
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <MessageCircle
          size={28}
          className="text-white md:block hidden"
        />
        <MessageCircle
          size={24}
          className="text-white md:hidden block"
        />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
        transition={{ duration: 0.2 }}
        className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-dark-lighter/95 backdrop-blur-md px-4 py-2 rounded-lg border border-accent-orange/30 pointer-events-none"
      >
        <div className="flex items-center gap-2">
          <span className="text-white font-body text-sm font-medium">
            Contact Developer
          </span>
          <ExternalLink size={14} className="text-accent-orange" />
        </div>
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-dark-lighter/95 border-b-8 border-b-transparent"></div>
        </div>
      </motion.div>
    </motion.a>
  );
};

export default FloatingContact;

