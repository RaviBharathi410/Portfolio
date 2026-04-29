"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ExternalLink, Github, Droplets, Terminal, ShieldCheck, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "NIRAIVIZHI — HydroBot",
    description: "AI-powered autonomous water monitoring system using ESP32 sensors (pH, turbidity, TDS, temperature) with ML-based anomaly detection and React Native authority dashboards.",
    tags: ["React Native", "ESP32", "ML", "IoT"],
    icon: Droplets,
    github: "https://github.com/RaviBharathi410/NIRAIVIZHI-Hydrobot",
    link: "#",
  },
  {
    id: "02",
    title: "Code Arena — AI Coding Battles",
    description: "Real-time multiplayer coding arena with voice-to-code via Web Speech API, ELO ranking, AI matchmaking system, and OpenCV handwriting recognition for multi-input interaction.",
    tags: ["Node.js", "OpenCV", "ELO", "Real-Time"],
    icon: Terminal,
    github: "https://github.com/RaviBharathi410/Code-Arena",
    link: "#",
  },
  {
    id: "03",
    title: "SCRIBE",
    description: "AI-powered real-time transcription and smart note-generation system that converts speech into structured summaries using NLP. Supports voice input, keyword extraction, speaker identification, and auto-generated action items for easy access and collaboration.",
    tags: ["React", "Node.js", "NLP", "Real-Time"],
    icon: ShieldCheck,
    github: "https://github.com/RaviBharathi410/Scribe",
    link: "#",
  },
  {
    id: "04",
    title: "DriveOS — V2X Swarm Intelligence",
    description: "Real-time V2X system using YOLOv8 and sensor fusion to detect road hazards. Firebase data mesh with CarPlay React dashboard and AES-256 end-to-end encryption.",
    tags: ["YOLOv8", "Flutter", "Firebase", "AES-256"],
    icon: Cpu,
    github: "https://github.com/RaviBharathi410/Drive-OS",
    link: "#",
  },
];

const headingWords = "Things I've Built.".split(" ");

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Projects() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-split-word",
        { y: "110%" },
        {
          y: "0%",
          stagger: 0.035,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="section-full bg-[#ffffff] text-[#0a0a0a] py-32">
      <div className="section-inner px-6 max-w-7xl mx-auto flex flex-col items-start">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="section-label mb-6 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
        >
          — Featured Work
        </motion.div>

        <h2
          ref={headingRef}
          className="section-title text-4xl md:text-5xl font-display font-bold mb-16 flex flex-wrap gap-x-3 gap-y-2 text-[#0a0a0a]"
        >
          {headingWords.map((word, idx) => (
            <span key={idx} className="overflow-hidden inline-block pb-1">
              <span className="project-split-word inline-block">{word}</span>
            </span>
          ))}
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="bg-[#f5f5f5] rounded-[24px] p-8 md:p-10 flex flex-col justify-between border border-[#e8e8e8]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[#0a0a0a] p-3 rounded-full bg-[#e8e8e8]">
                    <project.icon size={32} strokeWidth={1.5} />
                  </span>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#FFD700] uppercase">
                    Project {project.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[#0a0a0a]">{project.title}</h3>
                <p className="text-[#3a3a3a] leading-relaxed font-light mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1 uppercase tracking-wider font-semibold border border-[#0a0a0a]/20 rounded-full text-[#0a0a0a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.github}
                  className="flex-1 bg-[#0a0a0a] text-[#ffffff] py-3 rounded-xl flex items-center justify-center gap-2 transition-colors hover:bg-[#1a1a1a]"
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.link}
                  className="w-12 h-12 border border-[#0a0a0a]/20 text-[#0a0a0a] rounded-xl flex items-center justify-center hover:bg-[#FFD700] hover:border-[#FFD700] transition-colors"
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
