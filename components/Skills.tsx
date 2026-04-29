"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    tags: ["React.js", "React Native", "Tailwind CSS"],
  },
  {
    category: "Backend",
    tags: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    category: "AI/ML",
    tags: ["YOLOv8", "OpenCV", "Computer Vision", "TensorFlow"],
  },
  {
    category: "Databases",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    category: "Languages",
    tags: ["Python", "JavaScript", "Java", "SQL"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const wordVariant = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingWords = "Building with a Modern Tech Stack.".split(" ");

export default function Skills() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="section-full bg-[#f5f5f5] text-[#0a0a0a] py-32">
      <div className="section-inner px-6 flex flex-col items-start max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-label mb-6 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
        >
          — Core Tech
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.06 }}
          className="section-title text-4xl md:text-5xl font-display font-bold mb-12 text-[#0a0a0a] flex flex-wrap gap-x-3 gap-y-2"
        >
          {headingWords.map((word, idx) => (
            <span key={idx} style={{ overflow: "hidden", display: "inline-block", paddingBottom: "4px" }}>
              <motion.span style={{ display: "inline-block" }} variants={wordVariant}>
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="tech-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full pt-8"
        >
          {techCategories.map((item, idx) => {
            const isActive = activeCardIndex === idx;
            const isHovered = hoveredIndex === idx;
            const shouldDim = hoveredIndex !== null && !isHovered && !isActive;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                style={{ willChange: "transform" }}
                className="h-full"
              >
                <motion.div
                  onClick={() => setActiveCardIndex(idx)}
                  onHoverStart={() => setHoveredIndex(idx)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  animate={{
                    y: isActive ? -12 : 0,
                    scale: isActive ? 1.04 : (shouldDim ? 0.97 : 1),
                    opacity: shouldDim ? 0.55 : 1,
                    backgroundColor: isActive ? "#0a0a0a" : "#e8e8e8",
                    borderColor: isActive ? "#FFD700" : "transparent",
                    borderWidth: "1.5px",
                    borderStyle: "solid",
                    boxShadow: "none",
                  }}
                  transition={
                    isActive
                      ? { type: "spring", stiffness: 200, damping: 18 }
                      : { type: "spring", stiffness: 300, damping: 22 }
                  }
                  whileHover={
                    !isActive
                      ? {
                          y: -8,
                          scale: 1.02,
                          backgroundColor: "#ffffff",
                          borderColor: "#FFD700",
                          boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                          transition: { type: "spring", stiffness: 300, damping: 22 },
                        }
                      : undefined
                  }
                  style={{ willChange: "transform" }}
                  className="relative overflow-hidden h-full p-6 rounded-2xl flex flex-col items-center text-center shadow-sm cursor-pointer"
                >
                  {/* Shimmer on active card */}
                  {isActive && (
                    <motion.div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        background: "linear-gradient(135deg, rgba(255,215,0,0.07) 0%, transparent 60%)",
                        pointerEvents: "none",
                      }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}

                  <div className="flex flex-row items-center justify-start gap-3 mb-6 w-full relative z-10">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-[#FFD700]"
                      whileHover={{ scale: 1.5, transition: { type: "spring", stiffness: 400 } }}
                      animate={
                        isActive
                          ? { scale: [1, 1.4, 1] }
                          : { scale: 1 }
                      }
                      transition={
                        isActive
                          ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                          : {}
                      }
                    ></motion.div>
                    <h3
                      className={`text-sm uppercase font-bold tracking-wider ${isActive ? "text-[#ffffff]" : "text-[#0a0a0a]"}`}
                    >
                      {item.category}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 text-sm leading-relaxed w-full items-center relative z-10">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`block w-full border-b pb-2 last:border-0 last:pb-0 font-medium ${
                          isActive
                            ? "text-[#aaaaaa] border-[#333333]"
                            : "text-[#3a3a3a] border-[#d1d1d1]/50"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
