"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { ExternalLink, Github, Droplets, Terminal, ShieldCheck, Cpu, Network, Monitor } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Net-Sentinel",
    description: "Architected a real-time AI-powered network monitoring platform using React.js, FastAPI, WebSockets, and AI/ML models, delivering sub-100ms anomaly detection and predictive analytics at scale.",
    tags: ["React.js", "FastAPI", "WebSockets", "AI/ML"],
    icon: Network,
    github: "https://github.com/RaviBharathi410/Net-Sentinel",
    link: "#",
  },
  {
    id: "02",
    title: "CollabBoard",
    description: "Engineered a real-time collaborative whiteboard using React.js, Yjs (CRDT), WebSockets, and Konva.js, achieving conflict-free multiplayer synchronization and low-latency collaboration at scale.",
    tags: ["React.js", "Yjs", "WebSockets", "GPT-4o"],
    icon: Monitor,
    github: "https://github.com/RaviBharathi410/CollabBoard",
    link: "#",
  },
  {
    id: "03",
    title: "CODE ARENA",
    description: "Real-time multiplayer coding arena with voice-to-code via Web Speech API, ELO ranking, AI matchmaking system, and OpenCV handwriting recognition for multi-input interaction.",
    tags: ["Node.js", "OpenCV", "ELO", "Real-Time"],
    icon: Terminal,
    github: "https://github.com/RaviBharathi410/Code-Arena",
    link: "#",
  },
  {
    id: "04",
    title: "SCRIBE",
    description: "AI-powered real-time transcription and smart note-generation system that converts speech into structured summaries using NLP. Supports voice input, keyword extraction, speaker identification, and auto-generated action items for easy access and collaboration.",
    tags: ["React", "Node.js", "NLP", "Real-Time"],
    icon: ShieldCheck,
    github: "https://www.usescribe.in/",
    link: "#",
  },
  {
    id: "05",
    title: "DriveOS",
    description: "Real-time V2X system using YOLOv8 and sensor fusion to detect road hazards. Firebase data mesh with CarPlay React dashboard and AES-256 end-to-end encryption.",
    tags: ["YOLOv8", "Flutter", "Firebase", "AES-256"],
    icon: Cpu,
    github: "https://github.com/RaviBharathi410/Drive-OS",
    link: "#",
  },
];

const headingWords = "Things I've Built.".split(" ");

const wordVariant = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);

  const { scrollXProgress } = useScroll({
    container: scrollRef,
  });

  useMotionValueEvent(scrollXProgress, "change", (latest) => {
    setActiveIndex(Math.round(latest * (projects.length - 1)));
    if (latest > 0.05 && showHint) {
      setShowHint(false);
    } else if (latest <= 0.05 && !showHint) {
      setShowHint(true);
    }
  });

  // Translate vertical scroll to horizontal scroll when hovering over the track
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let targetScroll = el.scrollLeft;
    let currentScroll = el.scrollLeft;
    let isScrolling = false;
    let animationFrameId: number;

    const smoothScroll = () => {
      // Linear interpolation (lerp) for buttery smooth movement
      currentScroll += (targetScroll - currentScroll) * 0.08; 
      el.scrollLeft = currentScroll;
      
      // Continue animation if we haven't reached the target
      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        animationFrameId = requestAnimationFrame(smoothScroll);
      } else {
        isScrolling = false;
        el.scrollLeft = targetScroll; // Snap to exact target at the end
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Allow native horizontal swipe gestures (trackpads)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      
      const isAtStart = targetScroll <= 0;
      const isAtEnd = targetScroll >= el.scrollWidth - el.clientWidth;

      // Allow page to scroll vertically if we are at the boundaries
      if (isAtStart && e.deltaY < 0) return;
      if (isAtEnd && e.deltaY > 0) return;

      e.preventDefault();
      
      // Update target scroll with a slight speed multiplier for better UX
      targetScroll += e.deltaY * 1.5; 
      
      // Clamp the target to prevent overshooting
      targetScroll = Math.max(0, Math.min(targetScroll, el.scrollWidth - el.clientWidth));

      // Start the animation loop if it's not already running
      if (!isScrolling) {
        isScrolling = true;
        currentScroll = el.scrollLeft;
        animationFrameId = requestAnimationFrame(smoothScroll);
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      el.removeEventListener("wheel", handleWheel);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="bg-[#ffffff] text-[#0a0a0a] py-32">
      <div className="flex flex-col justify-center">
        
        {/* Header Content */}
        <div className="px-6 max-w-7xl mx-auto w-full flex flex-col items-start">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="section-label mb-6 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
          >
            — Featured Work
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="section-title text-4xl md:text-5xl font-display font-bold mb-8 flex flex-wrap gap-x-3 gap-y-2 text-[#0a0a0a]"
          >
            {headingWords.map((word, idx) => (
              <span key={idx} className="overflow-hidden inline-block pb-1">
                <motion.span className="inline-block" variants={wordVariant}>
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          {/* Progress Indicator */}
          <div className="flex items-center gap-6 mb-16">
            <div className="w-[120px] h-[2px] bg-[#0a0a0a]/10 rounded-[2px] relative overflow-hidden">
              <motion.div 
                style={{ scaleX: scrollXProgress, transformOrigin: "left" }} 
                className="absolute inset-0 bg-[#FFD700] rounded-[2px]" 
              />
            </div>
            <motion.span style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-[#999] text-[12px] tracking-[0.1em]">
              0{activeIndex + 1} / 05
            </motion.span>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="w-full relative">
          <div 
            ref={scrollRef}
            className="relative flex gap-7 overflow-x-auto px-6 pb-12 pt-4 hide-scrollbar"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              // To align the first card with the text above, we calculate padding
              // Tailwind's max-w-7xl is 1280px.
            }}
          >
            {/* Spacer to push the first item to align with the max-w-7xl container */}
            <div className="shrink-0 w-0 md:w-[calc(50vw-40rem)]" />

            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial="inactive"
                whileInView="active"
                viewport={{ amount: 0.6, root: scrollRef }}
                variants={{
                  active: { scale: 1, opacity: 1 },
                  inactive: { scale: 0.96, opacity: 0.75 }
                }}
                transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
                  transition: { type: "spring", stiffness: 300, damping: 22 }
                }}
                className="shrink-0 bg-[#f5f5f5] rounded-[24px] p-8 md:p-10 flex flex-col justify-between border border-[#e8e8e8]"
                style={{ width: "480px", minWidth: "480px", minHeight: "440px", height: "auto" }}
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
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="text-[11px] px-3 py-1 uppercase tracking-wider font-semibold border border-[#0a0a0a]/20 rounded-full text-[#0a0a0a] cursor-default transition-colors hover:border-[#FFD700]"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.github}
                    className="flex-1 bg-[#0a0a0a] text-[#ffffff] py-3 rounded-xl flex items-center justify-center gap-2 transition-colors hover:bg-[#1a1a1a]"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">GitHub</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    className="w-12 h-12 border border-[#0a0a0a]/20 text-[#0a0a0a] rounded-xl flex items-center justify-center transition-colors hover:text-[#FFD700] hover:border-[#FFD700]"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}

            {/* Spacer to allow the last item to be centered/scrolled past */}
            <div className="shrink-0 w-6 md:w-[calc(50vw-40rem)]" />
          </div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showHint ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-16 right-8 flex items-center gap-2 pointer-events-none"
        >
          <span style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-[11px] tracking-[0.15em] text-[#999] uppercase">
            Drag or Scroll
          </span>
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#999] text-[12px]"
          >
            →
          </motion.span>
        </motion.div>

      </div>
    </section>
  );
}
