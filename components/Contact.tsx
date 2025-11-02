"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sifat@videographer.com",
      href: "mailto:sifat@videographer.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01613782804",
      href: "tel:+8801613782804",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "DSC, Ashulia, Savar",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/hasibur.rahman.shefat.2025", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/your_shefu/", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@hasiburrahmanshefat7891?si=8dwCrEJG7SfVng2c", label: "YouTube" },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider mb-4">
            Contact
          </h2>
          <p className="text-gray-400 font-body text-lg md:text-xl max-w-2xl mx-auto">
            Let&apos;s discuss your project and bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-400 font-body text-base md:text-lg mb-8">
                Ready to create something amazing together? Reach out and let&apos;s
                start the conversation.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-6 rounded-xl bg-dark-lighter/50 backdrop-blur-sm border border-accent-orange/20 hover:border-accent-orange/40 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 font-body text-sm uppercase tracking-wide mb-1">
                        {info.label}
                      </p>
                      <p className="text-white font-body text-base md:text-lg font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-gray-400 font-body text-sm uppercase tracking-wide mb-4">
                Follow Me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-dark-lighter/50 border border-accent-orange/20 hover:border-accent-orange flex items-center justify-center transition-all duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} className="text-accent-orange" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-body text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl bg-dark-lighter/50 backdrop-blur-sm border border-accent-orange/20 focus:border-accent-orange focus:outline-none text-white font-body placeholder-gray-500 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-body text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl bg-dark-lighter/50 backdrop-blur-sm border border-accent-orange/20 focus:border-accent-orange focus:outline-none text-white font-body placeholder-gray-500 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-body text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 rounded-xl bg-dark-lighter/50 backdrop-blur-sm border border-accent-orange/20 focus:border-accent-orange focus:outline-none text-white font-body placeholder-gray-500 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 122, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 rounded-full bg-gradient-orange text-white font-body font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
            >
              Send Message
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

