"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-item", {
        opacity: 0,
        y: 30,
        stagger: 0.04,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-full bg-[#f5f5f5] text-[#0a0a0a] py-32">
      <div className="section-inner px-6 flex flex-col items-start max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="section-label mb-6 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
        >
          — Core Tech
        </motion.div>

        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-title text-4xl md:text-5xl font-display font-bold mb-12 text-[#0a0a0a]"
        >
          Building with a Modern Tech Stack.
        </motion.h2>

        <div ref={gridRef} className="tech-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full pt-8">
          {techCategories.map((item, idx) => (
            <div key={idx} className="tech-item">
              <motion.div
                whileHover={{ y: -4, border: "1px solid #FFD700" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="h-full bg-[#e8e8e8] p-6 rounded-2xl border border-[#d1d1d1] flex flex-col items-center text-center shadow-sm"
              >
                <div className="flex flex-row items-center justify-start gap-3 mb-6 w-full">
                  <div className="w-2 h-2 rounded-full bg-[#FFD700]"></div>
                  <h3 className="text-[#0a0a0a] font-bold text-sm uppercase tracking-wider">
                    {item.category}
                  </h3>
                </div>
                <div className="flex flex-col gap-2 text-[#3a3a3a] font-medium text-sm leading-relaxed w-full items-center">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="block w-full border-b border-[#d1d1d1]/50 pb-2 last:border-0 last:pb-0">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
