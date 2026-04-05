"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    num: "01",
    title: "Software Engineering",
    tags: ["React.js", "Next.js", "Node.js", "TypeScript", "Express.js", "MERN Stack", "Firebase", "Redux"]
  },
  {
    num: "02",
    title: "AI & Data Science",
    tags: ["Python", "Computer Vision", "Deep Learning", "TensorFlow", "PyTorch", "Pandas", "Scikit-Learn"]
  },
  {
    num: "03",
    title: "Systems & DevOps",
    tags: ["IoT Gateway", "Embedded Systems", "Docker", "AWS", "GitHub Actions", "Arduino", "Node-RED"]
  },
  {
    num: "04",
    title: "Databases",
    tags: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Prisma"]
  },
  {
    num: "05",
    title: "Design & UI/UX",
    tags: ["Figma", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js", "RIVE"]
  },
  {
    num: "06",
    title: "Testing & Tools",
    tags: ["Jest", "Postman", "Git", "Linux", "NPM/BUN", "Cypress"]
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-skill", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section">
      <div className="section-label reveal-skill">Core Tech</div>
      <h2 className="section-title reveal-skill">
        Building with a <br />
        <strong className="gradient-text">Modern Tech Stack.</strong>
      </h2>

      <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[var(--border)] rounded-2xl overflow-hidden mt-12 bg-[#09090b]">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="skill-card group reveal-skill relative p-8 bg-[var(--bg-card)] border-r border-b border-[var(--border)] last:border-r-0 hover:bg-[var(--bg-card-hover)] transition-all duration-300"
          >
            {/* Top Shine Effect */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(139,92,246,0.6)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            
            <div className="skill-num font-body text-[0.6rem] tracking-[0.2em] text-[rgba(167,139,250,0.6)] mb-5">
              / {category.num}
            </div>
            
            <div className="skill-cat font-display text-[0.95rem] font-semibold text-[var(--fg)] mb-4">
              {category.title}
            </div>

            <div className="skill-tags flex flex-wrap gap-1.5">
              {category.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="skill-badge px-2.5 py-1 rounded-md text-[0.62rem] font-body text-[var(--fg-muted)] bg-[rgba(255,255,255,0.04)] border border-[var(--border)] hover:text-[var(--fg)] hover:border-[rgba(167,139,250,0.3)] transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
