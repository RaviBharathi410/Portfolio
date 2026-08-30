"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Winner — SaaSathoN'26",
    prize: "Rs. 40,000 First Prize",
    event: "36-hour National SaaS Hackathon",
    venue: "SSN College of Engineering",
    built: "Scribe AI: Engineered 5+ AI-powered SaaS microservices with real-time speech-to-text NLP note generation, cutting latency by 40% and generating $100+ MVP revenue.",
    featured: true,
  },
  {
    title: "Winner — E-Horyzon 2026",
    prize: "1st Place Pitching",
    event: "National Idea Pitching Competition",
    venue: "Kongu Engineering College",
    built: "Autonomous trace & telemetry intelligence concept with predictive node error analysis.",
    featured: false,
  },
  {
    title: "Winner — AURISTRA'26",
    prize: "1st Place Hackathon",
    event: "48-hour National Hackathon",
    venue: "Takshashila University",
    built: "CODE ARENA: Real-time multiplayer competitive coding platform with voice-assisted coding and OpenCV gesture interaction.",
    featured: false,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-full bg-[#e8e8e8] text-[#0a0a0a] py-20 relative overflow-hidden">
      <div className="section-inner px-6 max-w-7xl mx-auto flex flex-col items-start relative z-10">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-3 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
        >
          — National Recognition
        </motion.div>

        <h2 className="section-title text-4xl md:text-5xl font-display font-bold mb-10 text-[#0a0a0a] scroll-mt-28">
          3× Hackathon <strong>Victories.</strong>
        </h2>

        {/* Responsive Container: Mobile horizontal scroll-snap (<768px), Desktop Grid (≥768px) */}
        <div className="flex md:grid md:grid-cols-3 gap-8 w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-6 md:pb-0">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`shrink-0 md:shrink snap-start w-[85vw] max-w-[340px] md:w-auto rounded-2xl p-8 flex flex-col justify-between border shadow-sm ${
                item.featured
                  ? "bg-[#0a0a0a] text-white border-[#FFD700]"
                  : "bg-[#ffffff] text-[#0a0a0a] border-[#d1d1d1]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-full ${item.featured ? "bg-[#FFD700] text-[#0a0a0a]" : "bg-[#f5f5f5] text-[#0a0a0a]"}`}>
                    <Trophy size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full border border-[#FFD700]/30">
                    {item.prize}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${item.featured ? "text-white" : "text-[#0a0a0a]"}`}>{item.title}</h3>
                <p className="font-semibold text-xs uppercase tracking-wider text-[#FFD700] mb-1">{item.event}</p>
                <p className={`text-xs mb-6 ${item.featured ? "text-white/60" : "text-[#666666]"}`}>{item.venue}</p>

                <p className={`text-sm leading-relaxed font-light ${item.featured ? "text-white/80" : "text-[#3a3a3a]"}`}>
                  {item.built}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
