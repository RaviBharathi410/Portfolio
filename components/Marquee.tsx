"use client";

import { motion } from "framer-motion";

const techTags = [
  "REACT.JS", "NODE.JS", "PYTHON", "MONGODB", "EXPRESS.JS", "REACT NATIVE", 
  "COMPUTER VISION", "YOLOV8", "OPENCV", "FLASK", "REST APIs", "POSTGRESQL", 
  "TAILWIND CSS", "TYPESCRIPT", "FIREBASE", "ESP32/IoT"
];

export default function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="ticker relative z-10 py-8 overflow-hidden bg-[#3a3a3a] border-y border-[var(--border)] group"
    >
      {/* Left Gradient Mask */}
      <div className="absolute left-0 top-0 bottom-0 w-[80px] z-10 pointer-events-none bg-gradient-to-r from-[#3a3a3a] to-transparent" />
      {/* Right Gradient Mask */}
      <div className="absolute right-0 top-0 bottom-0 w-[80px] z-10 pointer-events-none bg-gradient-to-l from-[#3a3a3a] to-transparent" />

      <div className="ticker-inner flex whitespace-nowrap animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
        {/* Double the list for seamless loop */}
        {[...techTags, ...techTags].map((tag, i) => (
          <div key={i} className="inline-flex items-center gap-16 px-8 flex-shrink-0">
            <span className="font-display text-[0.82rem] font-light tracking-[0.08em] text-[#e8e8e8] uppercase">
              {tag}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] flex-shrink-0" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
