"use client";

import { useState, useRef, useEffect } from "react";
import { X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoPlayerProps {
  videoUrl: string;
  isFullscreen: boolean;
  onClose: () => void;
}

const VideoPlayer = ({ videoUrl, isFullscreen, onClose }: VideoPlayerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isFullscreen && iframeRef.current) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFullscreen]);

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string): string => {
    // YouTube URL formats
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0`;
    }
    if (url.includes("youtube.com/embed/")) {
      return `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=0&controls=1&rel=0`;
    }

    // Google Drive URL formats
    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.split("/file/d/")[1]?.split("/")[0];
      return `https://drive.google.com/file/d/${fileId}/preview?autoplay=1`;
    }
    if (url.includes("drive.google.com/open?id=")) {
      const fileId = url.split("id=")[1]?.split("&")[0];
      return `https://drive.google.com/file/d/${fileId}/preview?autoplay=1`;
    }

    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  if (!isFullscreen) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-dark-lighter/90 hover:bg-accent-orange flex items-center justify-center transition-all duration-300 group"
          >
            <X
              size={24}
              className="text-white group-hover:rotate-90 transition-transform duration-300"
            />
          </button>

          {/* Video Container */}
          <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-accent-orange/30">
            <iframe
              ref={iframeRef}
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video Player"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoPlayer;

