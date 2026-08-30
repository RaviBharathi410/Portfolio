"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, Zap, CheckCircle2 } from "lucide-react";

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Scribe AI",
    period: "SaaSathoN'26 — National Winner",
    type: "36-Hour Sprint / Production MVP",
    highlights: [
      "Engineered 5+ end-to-end AI-powered SaaS microservice endpoints using React.js, TypeScript, FastAPI, REST APIs, and WebSockets, cutting real-time workflow latency by 40%.",
      "Spearheaded backend performance optimization across sprint-driven Agile MVP cycles with zero post-launch rollbacks within a 36-hour lifecycle.",
      "Generated $100+ in product revenue and secured Rs. 40,000 first prize at a national-level SaaS hackathon through rapid MVP execution.",
    ],
    tech: ["React.js", "TypeScript", "FastAPI", "WebSockets", "NLP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-full bg-[#f5f5f5] text-[#0a0a0a] py-20">
      <div className="section-inner px-6 max-w-7xl mx-auto flex flex-col items-start w-full">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="section-label mb-6 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
        >
          — Featured Experience
        </motion.div>

        <h2 className="section-title text-4xl md:text-5xl font-display font-bold mb-12 text-[#0a0a0a]">
          Industry & Hackathon <strong>Impact.</strong>
        </h2>

        <div className="w-full flex flex-col gap-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#ffffff] rounded-2xl p-8 md:p-10 border border-[#e0e0e0] shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 px-6 py-2 bg-[#FFD700] text-[#0a0a0a] text-xs font-bold uppercase tracking-wider rounded-bl-xl flex items-center gap-1.5">
                <Trophy size={14} />
                <span>{exp.period}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-[#0a0a0a]" size={24} />
                    <h3 className="text-2xl font-bold text-[#0a0a0a]">{exp.role}</h3>
                    <span className="text-[#FFD700] font-bold">@ {exp.company}</span>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-[#666666] mt-1 font-semibold">{exp.type}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8 text-[#3a3a3a] text-sm md:text-base font-light">
                {exp.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#FFD700] shrink-0 mt-1" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#f0f0f0]">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#f5f5f5] text-[#0a0a0a] text-xs font-semibold uppercase tracking-wider rounded-md border border-[#e0e0e0]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
