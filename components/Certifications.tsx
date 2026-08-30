"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "March 2026",
    credentialId: "GCP-GENAI-2026-VERIFIED",
    badge: "☁️",
    link: "https://cloud.google.com/training",
  },
  {
    title: "AWS Generative AI Foundation",
    issuer: "AWS Academy",
    date: "April 2026",
    credentialId: "AWS-GENAI-FOUNDATION",
    badge: "🟧",
    link: "https://aws.amazon.com/training/",
  },
  {
    title: "MongoDB University Practitioner",
    issuer: "MongoDB Inc. (8+ Badges Completed)",
    date: "July 2025",
    credentialId: "MDB-UNIV-8BADGES",
    badge: "🍃",
    link: "https://university.mongodb.com/",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-full bg-[#f5f5f5] text-[#0a0a0a] py-20 border-t border-[#e8e8e8]">
      <div className="section-inner px-6 max-w-7xl mx-auto flex flex-col items-start w-full">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-3 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
        >
          — Industry Qualifications
        </motion.div>

        <h2 className="section-title text-4xl md:text-5xl font-display font-bold mb-10 text-[#0a0a0a] scroll-mt-28">
          Verified <strong>Certifications.</strong>
        </h2>

        {/* Responsive Container: Mobile horizontal scroll-snap (<768px), Desktop Grid (≥768px) */}
        <div className="flex md:grid md:grid-cols-3 gap-6 w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-6 md:pb-0">
          {certifications.map((cert, idx) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="shrink-0 md:shrink snap-start w-[85vw] max-w-[320px] md:w-auto p-6 bg-[#ffffff] rounded-2xl border border-[#e0e0e0] flex flex-col justify-between hover:border-[#FFD700] transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{cert.badge}</span>
                  <ExternalLink size={18} className="text-[#999999] hover:text-[#0a0a0a]" />
                </div>

                <h3 className="font-bold text-[#0a0a0a] text-lg mb-2">{cert.title}</h3>
                <p className="text-xs font-semibold text-[#FFD700] uppercase tracking-wider mb-1">{cert.issuer}</p>
                <p className="text-xs text-[#666666] font-mono mb-4">ID: {cert.credentialId}</p>
              </div>

              <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs text-[#666666]">
                <span>Issued {cert.date}</span>
                <span className="font-semibold text-[#0a0a0a] flex items-center gap-1">
                  <ShieldCheck size={14} className="text-[#FFD700]" /> Verified
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
