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
    github: "https://github.com/RaviBharathi410/",
    link: "https://www.usescribe.in/",
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
    link: "https://distributed-trace.vercel.app/",
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
    link: "https://code-arena-web-nine.vercel.app/login",
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
    link: "https://collab-board-two-delta.vercel.app/",
  },
  {
    id: "05",
    title: "DriveOS",
    subtitle: "Real-Time V2X Telematics & Driver Assistance Mesh",
    description: "Real-time V2X system using YOLOv8 computer vision and sensor fusion to detect road hazards with a CarPlay dashboard mesh and AES-256 end-to-end telemetry encryption.",
    impact: "Sub-50ms Road Hazard Detection & AES-256 Mesh",
    image: "/driveos.png",
    tags: ["YOLOv8", "Flutter", "Firebase", "AES-256", "Computer Vision"],
    icon: Cpu,
    github: "https://github.com/RaviBharathi410/Drive-OS",
    link: "#",
  },
];

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);   // the actual scrollable row
  const wrapperRef = useRef<HTMLDivElement>(null); // outer wrapper, captures wheel events

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragOriginX = useRef(0);
  const dragOriginScroll = useRef(0);

  const [showRightFade, setShowRightFade] = useState(true);
  const [showHint, setShowHint] = useState(true);

  // Whether the pointer is currently over the scroll wrapper
  const pointerOver = useRef(false);

  /* ── Dot pagination / fade update ── */
  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max > 0) {
      const idx = Math.round((el.scrollLeft / max) * (projects.length - 1));
      setActiveIndex(Math.min(projects.length - 1, Math.max(0, idx)));
      setShowRightFade(el.scrollLeft < max - 20);
    }
    if (el.scrollLeft > 30) setShowHint(false);
  };

  /* ── Velocity-based wheel scroll ── */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const el = trackRef.current;
    if (!wrapper || !el) return;

    // velocity accumulator
    let vel = 0;
    let rafId: number | null = null;

    const FRICTION = 0.86;   // lower = stops faster; higher = more coast
    const MAX_VEL = 80;      // px/frame cap — prevents rocket launch on fast scroll

    const tick = () => {
      vel *= FRICTION;
      const max = el.scrollWidth - el.clientWidth;

      // Clamp & bleed velocity at edges
      if (el.scrollLeft <= 0 && vel < 0) vel = 0;
      if (el.scrollLeft >= max && vel > 0) vel = 0;

      el.scrollLeft += vel;

      if (Math.abs(vel) > 0.3) {
        rafId = requestAnimationFrame(tick);
      } else {
        vel = 0;
        rafId = null;
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (!pointerOver.current) return; // only intercept when hovering track

      // Prefer horizontal gesture (trackpad two-finger swipe), fall back to vertical
      const raw = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(raw) < 1) return;

      const max = el.scrollWidth - el.clientWidth;
      const hitStart = el.scrollLeft <= 0 && raw < 0;
      const hitEnd = el.scrollLeft >= max - 1 && raw > 0;

      // ── Boundary escape hatch: hand control back to page ──
      if (hitStart || hitEnd) {
        vel = 0;
        return;
      }

      e.preventDefault(); // stop page from scrolling vertically

      // Accumulate velocity, capped so it can't go infinite
      vel += raw * 0.55;
      vel = Math.max(-MAX_VEL, Math.min(MAX_VEL, vel));

      if (rafId === null) rafId = requestAnimationFrame(tick);
    };

    const onEnter = () => { pointerOver.current = true; };
    const onLeave = () => {
      pointerOver.current = false;
      vel *= 0.4; // bleed speed when cursor leaves
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });
    wrapper.addEventListener("mouseenter", onEnter);
    wrapper.addEventListener("mouseleave", onLeave);

    return () => {
      wrapper.removeEventListener("wheel", onWheel);
      wrapper.removeEventListener("mouseenter", onEnter);
      wrapper.removeEventListener("mouseleave", onLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  /* ── Mouse drag to scroll ── */
  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    dragOriginX.current = e.pageX;
    dragOriginScroll.current = el.scrollLeft;
  };
  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = dragOriginScroll.current - (e.pageX - dragOriginX.current) * 1.5;
  };

  const scrollToCard = (i: number) => {
    trackRef.current?.scrollTo({ left: i * 484, behavior: "smooth" });
  };

  return (
    <section id="projects" className="bg-[#ffffff] text-[#0a0a0a] py-20 border-t border-[#f0f0f0]">
      <div className="flex flex-col justify-center">

        {/* ─── Header — always in normal vertical scroll zone ─── */}
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

          {showHint && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#666666] bg-[#f5f5f5] px-4 py-2 rounded-full border border-[#e0e0e0] mt-4 md:mt-0"
            >
              <span>Scroll over cards to explore</span>
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </motion.div>
          )}
        </div>

        {/* ─── Scroll track wrapper — wheel captured only here ─── */}
        <div ref={wrapperRef} className="w-full relative px-6 md:px-12">

          {/* Right fade overlay */}
          <div className={`absolute top-0 bottom-0 right-12 w-28 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none transition-opacity duration-300 ${showRightFade ? "opacity-100" : "opacity-0"}`} />

          {/* Scrollable cards row */}
          <div
            ref={trackRef}
            onScroll={onScroll}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            tabIndex={0}
            aria-label="Projects — scroll horizontally to explore"
            className={`relative flex gap-6 overflow-x-auto pb-8 pt-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700] ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", overscrollBehaviorX: "none" }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => project.link !== "#" && window.open(project.link, "_blank", "noopener,noreferrer")}
                className={`shrink-0 bg-[#f5f5f5] rounded-3xl overflow-hidden flex flex-col justify-between border border-[#e8e8e8] shadow-sm hover:shadow-lg transition-all duration-300 ${project.link !== "#" ? "cursor-pointer" : ""}`}
                style={{ width: "460px", maxWidth: "85vw" }}
              >
                {/* Screenshot */}
                <div className="relative h-52 w-full bg-[#0a0a0a] overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
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

                {/* Card body */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-[#0a0a0a]">{project.title}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#FFD700] mb-3">{project.subtitle}</p>
                    <p className="text-[#3a3a3a] text-sm leading-relaxed font-light mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-3 py-1 uppercase tracking-wider font-semibold border border-[#0a0a0a]/15 bg-white rounded-full text-[#0a0a0a]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#e0e0e0]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-[#0a0a0a] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#222] transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">GitHub Repository</span>
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                      onClick={(e) => e.stopPropagation()}
                      className="w-11 h-11 border border-[#0a0a0a]/20 text-[#0a0a0a] rounded-xl flex items-center justify-center hover:bg-[#FFD700] hover:border-[#FFD700] transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-[#FFD700]" : "w-2 bg-[#0a0a0a]/20 hover:bg-[#0a0a0a]/40"}`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
