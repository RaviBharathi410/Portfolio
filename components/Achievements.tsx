"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Winner — SaaSathoN'26",
    event: "36-hour SaaS Hackathon",
    venue: "SSN College of Engineering",
  },
  {
    title: "Winner — E-Horyzon 2026",
    event: "Idea Pitching Competition",
    venue: "Kongu Engineering College",
  },
  {
    title: "Winner — AURISTRA'26",
    event: "48-hour Hackathon",
    venue: "Takshashila University",
  },
];

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 });

  return (
    <section ref={sectionRef} id="recognition" className="section-full bg-[#f5f5f5] text-[#0a0a0a] py-32 relative overflow-hidden">
      
      {/* Parallax Background Text */}
      <motion.div
        style={{ y: smoothY, willChange: "transform" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-bold text-[#f0f0f0] pointer-events-none z-0 select-none whitespace-nowrap"
      >
        WINS
      </motion.div>

      <div className="section-inner px-6 max-w-7xl mx-auto flex flex-col items-start relative z-10">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="section-label mb-16 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
        >
          — Recognition
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                borderColor: "#FFD700",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="bg-[#ffffff] rounded-2xl p-8 border border-[#e0e0e0] flex flex-col items-center text-center shadow-sm"
            >
              <div className="mb-6 p-4 rounded-full bg-[#f5f5f5] text-[#0a0a0a]">
                <Trophy size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">{item.title}</h3>
              <p className="font-bold text-[#FFD700] text-sm uppercase tracking-wide mb-3">{item.event}</p>
              <p className="text-[#666666] text-sm">{item.venue}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
