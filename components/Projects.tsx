"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Network, Monitor, Terminal, ShieldCheck, Cpu } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "SCRIBE AI",
    subtitle: "AI Speech-to-Text & Automated Note Synthesizer",
    description: "Engineered 5+ end-to-end SaaS microservices converting speech into structured NLP summaries, speaker recognition, and instant action items under 36-hour hackathon conditions.",
    impact: "SaaSathoN'26 National 1st Prize Winner · $100+ MVP Revenue",
    image: "/scribe.png",
    tags: ["React.js", "TypeScript", "FastAPI", "WebSockets", "NLP"],
    icon: ShieldCheck,
    github: "https://www.usescribe.in/",
    link: "#",
  },
  {
    id: "02",
    title: "Distributed-Trace",
    subtitle: "Autonomous AI Ops & Network Trace Monitoring Platform",
    description: "Architected a real-time AI-powered network monitoring platform using React.js, FastAPI, WebSockets, and AI/ML models. Delivers sub-100ms anomaly detection across 10+ simulated network nodes with topology visualization.",
    impact: "Sub-100ms Anomaly Detection · 35% MTTR Reduction",
    image: "/distributed-trace.png",
    tags: ["React.js", "FastAPI", "WebSockets", "AI/ML", "Python"],
    icon: Network,
    github: "https://github.com/RaviBharathi410/Distributed-Trace",
    link: "#",
  },

  {
    id: "03",
    title: "CODE ARENA",
    subtitle: "Real-Time AI Coding Battles & Matchmaking Platform",
    description: "Built a horizontally scalable coding battle platform using React.js, Node.js, TypeScript, Socket.IO, and PostgreSQL. Features real-time ELO matchmaking, voice-assisted coding, and live leaderboards.",
    impact: "50+ Concurrent Sessions · +30% Retention Boost",
    image: "/code-arena.png",
    tags: ["React.js", "Node.js", "TypeScript", "Socket.IO", "PostgreSQL"],
    icon: Terminal,
    github: "https://github.com/RaviBharathi410/Code-Arena",
    link: "#",
  },
  {
    id: "04",
    title: "CollabBoard",
    subtitle: "AI-Powered Real-Time Collaborative Whiteboard",
    description: "Developed a real-time collaborative whiteboard using React.js, Yjs (CRDT), WebSockets, and Konva.js, supporting 20+ concurrent users with conflict-free synchronization and automated sketch-to-diagram flowcharts via GPT-4o Vision.",
    impact: "<50ms Latency · 70% Faster Diagramming Workflows",
    image: "/collabboard.png",
    tags: ["React.js", "Yjs (CRDT)", "WebSockets", "GPT-4o Vision", "Konva.js"],
    icon: Monitor,
    github: "https://github.com/RaviBharathi410/CollabBoard",
    link: "#",
  },

  {
    id: "05",
    title: "DriveOS",
    subtitle: "Real-Time V2X Telematics & Driver Assistance Mesh",
    description: "Real-time V2X system using YOLOv8 computer vision and sensor fusion to detect road hazards with a CarPlay dashboard mesh and AES-256 end-to-end telemetry encryption.",
    impact: "Sub - 50ms Road Hazard Detection & AES - 256 Mesh",
    image: "/driveOs.jpg",
    tags: ["YOLOv8", "Flutter", "Firebase", "AES-256", "Computer Vision"],
    icon: Cpu,
    github: "https://github.com/RaviBharathi410/Drive-OS",
    link: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showRightFade, setShowRightFade] = useState(true);
  const [showHint, setShowHint] = useState(true);

  // Handle scroll position detection for pagination & gradient fade
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      const scrollPercentage = el.scrollLeft / maxScroll;
      const index = Math.round(scrollPercentage * (projects.length - 1));
      setActiveIndex(Math.min(projects.length - 1, Math.max(0, index)));
      setShowRightFade(el.scrollLeft < maxScroll - 20);
    }

    if (el.scrollLeft > 30 && showHint) {
      setShowHint(false);
    }
  };

  // Section-scoped wheel event listener with escape hatch
  useEffect(() => {
    const sectionEl = sectionRef.current;
    const el = scrollRef.current;
    if (!sectionEl || !el) return;

    const handleWheel = (e: WheelEvent) => {
      // Determine primary scroll direction
      const isHorizontalGesture = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontalGesture ? e.deltaX : e.deltaY;

      if (delta === 0) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      const currentPos = el.scrollLeft;
      const isAtStart = currentPos <= 5;
      const isAtEnd = currentPos >= maxScroll - 5;

      // Escape hatch: if at the start and scrolling UP, or at the end and scrolling DOWN, let normal page scroll handle it
      if ((isAtStart && delta < 0) || (isAtEnd && delta > 0)) {
        return;
      }

      // Intercept wheel scroll to scroll horizontal projects container
      e.preventDefault();
      el.scrollLeft += delta * 1.5;
    };

    // Attach wheel event directly to section element
    sectionEl.addEventListener("wheel", handleWheel, { passive: false });
    return () => sectionEl.removeEventListener("wheel", handleWheel);
  }, []);

  // Mouse Drag to Scroll Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsMouseDown(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.8;
    el.scrollLeft = scrollLeft - walk;
  };

  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 480;
    el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="projects" className="bg-[#ffffff] text-[#0a0a0a] py-20 border-t border-[#f0f0f0]">
      <div className="flex flex-col justify-center">

        {/* Header Content */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-3 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
            >
              — Featured Work
            </motion.div>

            <h2 className="section-title text-4xl md:text-5xl font-display font-bold text-[#0a0a0a] scroll-mt-28">
              Things I've <strong>Built.</strong>
            </h2>
          </div>

          {/* Swipe / Drag Hint */}
          {showHint && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#666666] bg-[#f5f5f5] px-4 py-2 rounded-full border border-[#e0e0e0] mt-4 md:mt-0"
            >
              <span>Scroll or drag to explore</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div>
          )}
        </div>

        {/* Horizontal Scroll Track Container */}
        <div className="w-full relative group px-6 md:px-12">

          {/* Scroll Right Fade Mask Gradient */}
          <div
            className={`absolute top-0 bottom-0 right-12 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none transition-opacity duration-300 ${showRightFade ? "opacity-100" : "opacity-0"
              }`}
          />

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            tabIndex={0}
            aria-label="Projects horizontal scroll container. Use arrow keys, mouse wheel, or drag to scroll."
            className={`relative flex gap-6 overflow-x-auto pb-8 pt-2 hide-scrollbar focus:outline-none focus:ring-2 focus:ring-[#FFD700] ${isMouseDown ? "cursor-grabbing select-none" : "cursor-grab"
              }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="shrink-0 bg-[#f5f5f5] rounded-3xl overflow-hidden flex flex-col justify-between border border-[#e8e8e8] shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ width: "460px", maxWidth: "85vw" }}
              >
                {/* Visual Project Screenshot Preview */}
                <div className="relative h-52 w-full bg-[#0a0a0a] overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest text-[#FFD700] uppercase border border-[#FFD700]/30">
                    Project {project.id}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-semibold text-white/90 bg-[#FFD700]/20 px-3 py-1 rounded-md border border-[#FFD700]/40 backdrop-blur-sm">
                      {project.impact}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-[#0a0a0a]">{project.title}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#FFD700] mb-3">{project.subtitle}</p>
                    <p className="text-[#3a3a3a] text-sm leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-3 py-1 uppercase tracking-wider font-semibold border border-[#0a0a0a]/15 bg-white rounded-full text-[#0a0a0a]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#e0e0e0]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0a0a0a] text-[#ffffff] py-3 rounded-xl flex items-center justify-center gap-2 transition-colors hover:bg-[#222]"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">GitHub Repository</span>
                    </a>
                    <a
                      href={project.link}
                      className="w-11 h-11 border border-[#0a0a0a]/20 text-[#0a0a0a] rounded-xl flex items-center justify-center transition-colors hover:bg-[#FFD700] hover:border-[#FFD700]"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Dot Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-[#FFD700]" : "w-2 bg-[#0a0a0a]/20 hover:bg-[#0a0a0a]/40"
                }`}
              aria-label={`Scroll to project ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
