"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  // Add your YouTube or Google Drive video URLs here
  // YouTube format: https://www.youtube.com/watch?v=VIDEO_ID
  // Google Drive format: https://drive.google.com/file/d/FILE_ID/view
  const projects = [
    {
      id: 1,
      title: "Wedding Cinematic Film",
      category: "Wedding",
      description: "A breathtaking wedding film capturing every magical moment.",
      videoUrl: "https://youtu.be/YpOnMrDDsiM?si=pjDu93ZK01-HaTnR",
    },
    {
      id: 2,
      title: "Corporate Brand Video",
      category: "Corporate",
      description: "Professional brand story that connects with the audience.",
      // videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
      videoUrl: "https://youtu.be/YpOnMrDDsiM?si=pjDu93ZK01-HaTnR",
    },
    {
      id: 3,
      title: "Product Launch Campaign",
      category: "Commercial",
      description: "Dynamic product showcase with stunning visuals.",
      // videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
      videoUrl: "https://youtu.be/YpOnMrDDsiM?si=pjDu93ZK01-HaTnR",
    },
    {
      id: 4,
      title: "Music Video Production",
      category: "Entertainment",
      description: "Energetic music video with creative storytelling.",
      // videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
      videoUrl: "https://youtu.be/YpOnMrDDsiM?si=pjDu93ZK01-HaTnR",
    },
    {
      id: 5,
      title: "Documentary Series",
      category: "Documentary",
      description: "In-depth documentary exploring real stories.",
      // videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
      videoUrl: "https://youtu.be/YpOnMrDDsiM?si=pjDu93ZK01-HaTnR",
    },
    {
      id: 6,
      title: "Event Coverage",
      category: "Event",
      description: "Comprehensive event documentation and highlights.",
      // videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
      videoUrl: "https://youtu.be/YpOnMrDDsiM?si=pjDu93ZK01-HaTnR",
    },
  ];

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <p className="text-gray-400 font-body text-lg md:text-xl max-w-2xl mx-auto">
            Explore my latest work and creative videography projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

