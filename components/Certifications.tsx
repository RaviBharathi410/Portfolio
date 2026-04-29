"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "March 2026",
    link: "#",
  },
  {
    title: "AWS Gen AI Foundation Course",
    issuer: "AWS Academy",
    date: "April 2026",
    link: "#",
  },
  {
    title: "MongoDB University",
    issuer: "8+ Badges Completed",
    date: "July 2025",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-full bg-[#e8e8e8] text-[#0a0a0a] py-32">
      <div className="section-inner px-6 max-w-7xl mx-auto flex flex-col items-start w-full">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="section-label mb-12 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
        >
          — Certifications
        </motion.div>

        <div className="w-full flex flex-col gap-4">
          {certifications.map((cert, idx) => (
            <motion.a
              href={cert.link}
              key={idx}
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              whileHover={{
                x: 4,
                borderLeft: "3px solid #FFD700",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-6 bg-[#f5f5f5] rounded-xl border-l-4 border-transparent hover:bg-[#fafafa] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <span className="text-[#FFD700] text-lg">✦</span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <h3 className="font-bold text-[#0a0a0a] text-lg">{cert.title}</h3>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <div className="flex gap-2 text-sm">
                    <span className="text-[#FFD700] font-semibold">{cert.issuer}</span>
                    <span className="text-[#999999]">· {cert.date}</span>
                  </div>
                </div>
              </div>
              
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#0a0a0a]/50 uppercase group-hover:text-[#FFD700] transition-colors mt-2 sm:mt-0 sm:ml-4">
                View →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
