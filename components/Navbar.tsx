"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "Projects", "Services", "Contact"];

  const handleDownloadResume = () => {
    // Download the resume PDF
    const link = document.createElement("a");
    link.href = "/Resume of Asif.pdf";
    link.download = "Resume of Asif.pdf";
    link.click();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setActiveLink(link);
    const sectionId = link.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => ({
        id: link.toLowerCase(),
        name: link,
      }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveLink(sections[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-accent-orange/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "Home")}
            whileHover={{ scale: 1.05 }}
            className="font-heading text-2xl md:text-3xl font-bold text-white cursor-pointer"
          >
            sifat.
          </motion.a>

          {/* Nav Links - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  activeLink === link
                    ? "bg-gradient-orange text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Download Resume Button */}
          <motion.button
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-600 hover:border-accent-orange text-gray-300 hover:text-white transition-all duration-300 bg-dark-lighter/50 hover:bg-dark-lighter"
          >
            <FileDown size={18} />
            <span className="hidden sm:inline text-sm font-medium">
              Download Résumé
            </span>
            <span className="sm:hidden text-sm font-medium">CV</span>
          </motion.button>
        </div>

        {/* Mobile Nav Menu */}
        <div className="md:hidden pb-4 flex items-center justify-center gap-4 flex-wrap">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link)}
              whileTap={{ scale: 0.95 }}
              className={`text-sm px-3 py-1.5 rounded-full transition-all duration-300 ${
                activeLink === link
                  ? "bg-gradient-orange text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

