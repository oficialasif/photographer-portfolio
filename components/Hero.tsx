"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Camera, Video, Film, Mic, Palette, Sliders } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const floatingIcons = [
    { icon: Camera, delay: 0, position: { top: "10%", left: "15%" } },
    { icon: Video, delay: 0.2, position: { top: "20%", right: "10%" } },
    { icon: Film, delay: 0.4, position: { top: "40%", left: "5%" } },
    { icon: Mic, delay: 0.6, position: { bottom: "30%", left: "12%" } },
    { icon: Play, delay: 0.8, position: { bottom: "20%", right: "15%" } },
    { icon: Palette, delay: 1, position: { top: "60%", right: "8%" } },
    { icon: Sliders, delay: 1.2, position: { bottom: "50%", right: "5%" } },
  ];

  const handleBookNow = () => {
    // Scroll to contact section or trigger booking modal
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Play video when hover popup appears
  useEffect(() => {
    if (showTrailer && videoRef.current) {
      videoRef.current.play().catch((e) => {
        // Handle autoplay restrictions
        console.log("Autoplay prevented:", e);
      });
    } else if (!showTrailer && videoRef.current) {
      videoRef.current.pause();
    }
  }, [showTrailer]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-accent-orange font-body text-lg md:text-xl font-medium"
            >
              Hey, I am Sifat
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-wider leading-tight"
            >
              Videographer
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-300 font-body text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0"
            >
              Capturing moments that matter most. Bringing your vision to life
              through cinematic storytelling and professional videography.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleBookNow}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 122, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-orange text-white font-body font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
              >
                Book Now
                <Play size={20} fill="white" />
              </motion.button>

              <div className="relative">
                <motion.div
                  className="relative"
                  onMouseEnter={() => setShowTrailer(true)}
                  onMouseLeave={() => setShowTrailer(false)}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-body font-semibold text-lg hover:border-accent-orange hover:bg-accent-orange/10 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Play size={20} />
                    Trailer
                  </motion.button>

                  {/* Circular Video Popup on Hover */}
                  <AnimatePresence>
                    {showTrailer && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setShowTrailer(true)}
                        onMouseLeave={() => setShowTrailer(false)}
                        // className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-orange shadow-2xl shadow-accent-orange/50 z-50"
                        // style={{ clipPath: "circle(50% at 50% 50%)" }}

//                         className="absolute left-full top-1/2 transform -translate-y-4/8 translate-x-4 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-orange shadow-2xl shadow-accent-orange/50 z-50"
// style={{ clipPath: "circle(50% at 50% 50%)" }}
// className="absolute left-full top-1/3 transform -translate-y-1/2 translate-x-6 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-orange shadow-2xl shadow-accent-orange/50 z-50"
// style={{ clipPath: "circle(50% at 50% 50%)" }}

// className="absolute left-full top-0 transform -translate-y-2/3 translate-x-6 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-orange shadow-2xl shadow-accent-orange/50 z-50"
// style={{ clipPath: "circle(50% at 50% 50%)" }}
className="absolute left-full top-[-300%] transform -translate-y-1/2 translate-x-8 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-orange shadow-2xl shadow-accent-orange/50 z-50"
style={{ clipPath: "circle(50% at 50% 50%)" }}

                      >
                        <video
                          ref={videoRef}
                          src="/trailer.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 rounded-full ring-4 ring-accent-orange/30 pointer-events-none"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Character & Floating Icons */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Cameraman Character Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full h-full max-w-md md:max-w-lg lg:max-w-xl">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-accent-orangeLight/10 rounded-full blur-3xl -z-10"></div>
                {/* Character Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/cameraman-character.png"
                    alt="Videographer character"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Icons */}
            {floatingIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: item.delay,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className={`absolute z-20 w-12 h-12 md:w-14 md:h-14 bg-dark-lighter/80 backdrop-blur-sm rounded-xl border-2 border-accent-orange/30 flex items-center justify-center cursor-pointer hover:border-accent-orange hover:bg-accent-orange/10 transition-all duration-300`}
                  style={item.position}
                >
                  <IconComponent
                    size={24}
                    className="text-accent-orange"
                    strokeWidth={2}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Abstract Shapes Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-orange/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orangeLight/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;

