"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "NIRAIVIZHI — HydroBot",
    description: "AI-powered autonomous water monitoring system using ESP32 sensors (pH, turbidity, TDS, temperature) with ML-based anomaly detection and React Native authority dashboards.",
    tags: ["React Native", "ESP32", "ML", "IoT"],
    emoji: "🌊",
    github: "#",
    link: "#",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.1), rgba(52, 211, 153, 0.08))"
  },
  {
    id: "02",
    title: "Code Arena — AI Coding Battles",
    description: "Real-time multiplayer coding arena with voice-to-code via Web Speech API, ELO ranking, AI matchmaking system, and OpenCV handwriting recognition for multi-input interaction.",
    tags: ["Node.js", "OpenCV", "ELO", "Real-Time"],
    emoji: "⚔️",
    github: "#",
    link: "#",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.1), rgba(52, 211, 153, 0.08))"
  },
  {
    id: "03",
    title: "Face Recognition Security",
    description: "Biometric authentication system combining facial recognition with traditional login. Real-time face detection, verification, and database-driven user access control.",
    tags: ["OpenCV", "Flask", "Python", "PostgreSQL"],
    emoji: "🔐",
    github: "#",
    link: "#",
    gradient: "linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.08))"
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-full">
      <div className="section-inner px-6 py-24">
        <div className="section-label">Featured Work</div>
        <h2 className="section-title text-4xl md:text-5xl font-display font-light mb-16 reveal">
          Things I&apos;ve <strong>Built.</strong>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group perspective-1000">
              <div className="relative w-full h-[450px] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden rounded-[32px] overflow-hidden glass border border-[var(--border-light)] p-8 flex flex-col">
                  <div className="h-48 w-full rounded-2xl relative overflow-hidden flex items-center justify-center mb-8">
                    <div 
                      className="absolute inset-0 opacity-40 group-hover:scale-110 transition-transform duration-700" 
                      style={{ background: project.gradient }}
                    />
                    <span className="text-6xl z-10 relative">{project.emoji}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-medium mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="skill-badge text-[10px] px-2 py-1 uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-[var(--fg-muted)] text-sm font-body uppercase tracking-[0.2em]">
                    Hover to flip →
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[32px] overflow-hidden glass border border-[var(--border-light)] p-8 flex flex-col justify-between bg-black/40">
                  <div>
                    <div className="text-xs font-body tracking-[0.3em] text-[var(--primary)] uppercase mb-4">Project {project.id}</div>
                    <h3 className="text-2xl font-display font-semibold mb-6 gradient-text">{project.title}</h3>
                    <p className="text-[var(--fg-muted)] leading-relaxed font-light mb-8">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.github} 
                      className="flex-1 glass py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a 
                      href={project.link} 
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
