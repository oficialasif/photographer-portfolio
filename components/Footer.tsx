"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-accent-orange/20 bg-dark-bg/50 backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 font-body text-sm md:text-base"
        >
          <span>© {currentYear} All rights reserved.</span>
          <span className="hidden sm:inline">•</span>
          <a
            href="https://github.com/oficialasif"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 transition-colors duration-300"
          >
            <span>Developed by</span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#FF7A00" }}
              className="font-semibold text-white cursor-pointer transition-colors"
            >
              Asif Mahmud
            </motion.span>
            <Github size={18} className="text-accent-orange" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

