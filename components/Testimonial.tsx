"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-dark-lighter/50 backdrop-blur-md rounded-2xl md:rounded-3xl p-8 md:p-12 border border-accent-orange/20 shadow-2xl hover:border-accent-orange/40 transition-all duration-300 hover:shadow-accent-orange/10"
        >
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <Quote size={60} className="text-accent-orange/50" />
          </motion.div>

          {/* Quote Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 font-body text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 italic"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </motion.p>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-gradient-orange p-0.5">
              <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center">
                  <span className="text-accent-orange font-heading text-xl">
                    SC
                  </span>
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div>
              <h4 className="text-white font-body font-semibold text-lg md:text-xl">
                Sarah Chen
              </h4>
              <p className="text-gray-400 font-body text-sm md:text-base">
                Business Owner
              </p>
            </div>
          </motion.div>

          {/* Glowing Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-orange opacity-0 hover:opacity-5 rounded-2xl md:rounded-3xl transition-opacity duration-500 -z-10 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;

