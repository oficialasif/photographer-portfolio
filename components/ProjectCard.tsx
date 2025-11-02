"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  videoUrl?: string; // YouTube or Google Drive URL
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  // Convert YouTube/Google Drive URL to embed format
  const getEmbedUrl = (url: string, autoplay: boolean = false): string => {
    // YouTube URL formats
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      if (videoId) {
        const baseUrl = `https://www.youtube.com/embed/${videoId}`;
        const params = new URLSearchParams({
          autoplay: autoplay ? "1" : "0",
          mute: "1",
          controls: "0",
          rel: "0",
          loop: autoplay ? "1" : "0",
          ...(autoplay && { playlist: videoId }), // Required for loop to work
        });
        return `${baseUrl}?${params.toString()}`;
      }
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      if (videoId) {
        const baseUrl = `https://www.youtube.com/embed/${videoId}`;
        const params = new URLSearchParams({
          autoplay: autoplay ? "1" : "0",
          mute: "1",
          controls: "0",
          rel: "0",
          loop: autoplay ? "1" : "0",
          ...(autoplay && { playlist: videoId }),
        });
        return `${baseUrl}?${params.toString()}`;
      }
    }
    if (url.includes("youtube.com/embed/")) {
      const baseUrl = url.split("?")[0];
      const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        mute: "1",
        controls: "0",
        rel: "0",
        loop: autoplay ? "1" : "0",
      });
      const videoId = baseUrl.split("/embed/")[1];
      if (autoplay && videoId) {
        params.append("playlist", videoId);
      }
      return `${baseUrl}?${params.toString()}`;
    }

    // Google Drive URL formats
    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.split("/file/d/")[1]?.split("/")[0];
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview?autoplay=${autoplay ? 1 : 0}`;
      }
    }
    if (url.includes("drive.google.com/open?id=")) {
      const fileId = url.split("id=")[1]?.split("&")[0];
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview?autoplay=${autoplay ? 1 : 0}`;
      }
    }

    return url;
  };

  const handleCardClick = () => {
    if (project.videoUrl) {
      setIsFullscreen(true);
    }
  };

  const embedUrl = project.videoUrl ? getEmbedUrl(project.videoUrl, isHovered) : null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        className="group relative overflow-hidden rounded-2xl bg-dark-lighter/50 backdrop-blur-sm border border-accent-orange/20 hover:border-accent-orange/40 transition-all duration-300 cursor-pointer aspect-video"
      >
        {/* Video Container - Auto aspect ratio (16:9) */}
        {embedUrl ? (
          <>
            <iframe
              ref={videoRef}
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={project.title}
            />
            {/* Fullscreen Icon Overlay */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-accent-orange/90 backdrop-blur-sm flex items-center justify-center">
                <Maximize2 size={28} className="text-white" />
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-accent-orangeLight/10 flex items-center justify-center">
            <p className="text-gray-400 font-body text-sm text-center">
              Add video URL
            </p>
          </div>
        )}
      </motion.div>

      {/* Fullscreen Video Modal */}
      {project.videoUrl && (
        <VideoPlayer
          videoUrl={project.videoUrl}
          isFullscreen={isFullscreen}
          onClose={() => setIsFullscreen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;

