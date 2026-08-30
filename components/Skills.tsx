"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Brain, Database, Terminal, CheckCircle2 } from "lucide-react";

const techCategories = [
  {
    category: "Languages",
    icon: Terminal,
    tags: [
      { name: "TypeScript", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "Python", level: "Proficient" },
      { name: "Java (OOP)", level: "Proficient" },
      { name: "SQL", level: "Proficient" },
    ],
  },
  {
    category: "Frontend & UI",
    icon: Code2,
    tags: [
      { name: "React.js", level: "Proficient" },
      { name: "Next.js", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "Vite", level: "Proficient" },
      { name: "Responsive Design", level: "Proficient" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: Server,
    tags: [
      { name: "Node.js", level: "Proficient" },
      { name: "Express.js", level: "Proficient" },
      { name: "FastAPI", level: "Proficient" },
      { name: "RESTful APIs", level: "Proficient" },
      { name: "WebSockets", level: "Proficient" },
    ],
  },
  {
    category: "AI/ML & CV",
    icon: Brain,
    tags: [
      { name: "OpenCV", level: "Proficient" },
      { name: "YOLOv8", level: "Proficient" },
      { name: "GPT-4o Vision", level: "Proficient" },
      { name: "LLM Integration", level: "Proficient" },
      { name: "ELK.js", level: "Proficient" },
    ],
  },
  {
    category: "Databases & DevOps",
    icon: Database,
    tags: [
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "Redis", level: "Proficient" },
      { name: "Git / Docker", level: "Proficient" },
    ],
  },
];

export default function Skills() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);

  return (
    <section id="skills" className="section-full bg-[#f5f5f5] text-[#0a0a0a] py-20 border-t border-[#e8e8e8]">
      <div className="section-inner px-6 flex flex-col items-start max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-3 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
        >
          — Core Competencies
        </motion.div>

        <h2 className="section-title text-4xl md:text-5xl font-display font-bold mb-10 text-[#0a0a0a] scroll-mt-28">
          Building with a <strong>Modern Tech Stack.</strong>
        </h2>

        {/* Responsive Container: Mobile horizontal scroll-snap (<768px), Desktop Grid (≥768px) */}
        <div className="flex md:grid md:grid-cols-5 gap-6 w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-6 md:pb-0">
          {techCategories.map((item, idx) => {
            const isActive = activeCardIndex === idx;
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveCardIndex(idx)}
                className={`shrink-0 md:shrink snap-start w-[85vw] max-w-[320px] md:w-auto p-6 rounded-2xl flex flex-col justify-between transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#0a0a0a] text-white border-[#FFD700] shadow-xl"
                    : "bg-[#ffffff] text-[#0a0a0a] border-[#e0e0e0] hover:border-[#FFD700]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${isActive ? "bg-white/10 text-[#FFD700]" : "bg-[#f5f5f5] text-[#0a0a0a]"}`}>
                      <Icon size={24} />
                    </div>
                    {isActive && <span className="text-[#FFD700] text-xs">✦ Active</span>}
                  </div>

                  <h3 className="text-lg font-bold mb-6 font-display uppercase tracking-wider">{item.category}</h3>

                  <div className="flex flex-col gap-3">
                    {item.tags.map((tag, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between pb-2 border-b text-xs font-medium ${
                          isActive ? "border-white/10 text-white/90" : "border-[#f0f0f0] text-[#3a3a3a]"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 size={12} className={isActive ? "text-[#FFD700]" : "text-[#999999]"} />
                          {tag.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
