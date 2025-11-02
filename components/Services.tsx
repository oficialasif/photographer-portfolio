"use client";

import { motion } from "framer-motion";
import {
  Video,
  Camera,
  Film,
  Mic,
  Palette,
  Sliders,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Production",
      description:
        "Full-service video production from concept to final delivery. Professional equipment and cinematic storytelling.",
    },
    {
      icon: Camera,
      title: "Cinematography",
      description:
        "Expert cinematography services with attention to lighting, composition, and visual aesthetics.",
    },
    {
      icon: Film,
      title: "Video Editing",
      description:
        "Professional post-production with color grading, sound design, and seamless editing.",
    },
    {
      icon: Mic,
      title: "Audio Production",
      description:
        "High-quality audio recording, mixing, and sound design for your video projects.",
    },
    {
      icon: Palette,
      title: "Color Grading",
      description:
        "Professional color correction and grading to create the perfect mood and style.",
    },
    {
      icon: Sparkles,
      title: "Motion Graphics",
      description:
        "Custom motion graphics, animations, and visual effects to enhance your videos.",
    },
  ];

  const packages = [
    {
      name: "Basic",
      price: "৳110,000",
      features: [
        "Up to 4 hours of shooting",
        "Basic editing",
        "1080p delivery",
        "1 revision",
        "7-day turnaround",
      ],
    },
    {
      name: "Professional",
      price: "৳275,000",
      features: [
        "Up to 8 hours of shooting",
        "Professional editing",
        "4K delivery",
        "Color grading",
        "3 revisions",
        "14-day turnaround",
      ],
    },
    {
      name: "Premium",
      price: "৳550,000",
      features: [
        "Unlimited shooting",
        "Premium editing",
        "4K/8K delivery",
        "Full color grading",
        "Motion graphics",
        "Unlimited revisions",
        "Priority support",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider mb-4">
            Services
          </h2>
          <p className="text-gray-400 font-body text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive videography services to bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-dark-lighter/50 backdrop-blur-sm border border-accent-orange/20 hover:border-accent-orange/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-white mb-3 uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-body text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">
            Pricing Packages
          </h3>
          <p className="text-gray-400 font-body text-base md:text-lg">
            Choose the perfect package for your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                pkg.name === "Professional"
                  ? "bg-gradient-to-br from-accent-orange/20 to-accent-orangeLight/10 border-accent-orange scale-105"
                  : "bg-dark-lighter/50 border-accent-orange/20 hover:border-accent-orange/40"
              }`}
            >
              {pkg.name === "Professional" && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-orange rounded-full">
                  <span className="text-white font-body text-sm font-bold uppercase">
                    Popular
                  </span>
                </div>
              )}
              <h4 className="font-heading text-3xl text-white mb-2 uppercase">
                {pkg.name}
              </h4>
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-heading font-bold text-accent-orange">
                  {pkg.price}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-accent-orange mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-300 font-body text-sm md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-full font-body font-semibold text-lg transition-all duration-300 ${
                  pkg.name === "Professional"
                    ? "bg-gradient-orange text-white hover:shadow-lg hover:shadow-accent-orange/50"
                    : "bg-dark-lighter border-2 border-accent-orange text-white hover:bg-gradient-orange"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

