"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Terminal, Code2, Award, Rocket, CheckCircle } from "lucide-react";

const codeSnippet = `const developer = {
  name: "Ravibharathi V.",
  role: "Full-Stack & AI Specialist",
  stack: ["React", "Node.js", "Python", "OpenCV"],
  focus: "real-time systems, AI apps",
  status: "open to opportunities",
};`;

export default function HeroCodeVisual() {
  const [displayText, setDisplayText] = useState("");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(codeSnippet);
      return;
    }

    let currentIdx = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting && currentIdx <= codeSnippet.length) {
        setDisplayText(codeSnippet.slice(0, currentIdx));
        currentIdx++;
        timer = setTimeout(type, 35);
      } else if (!isDeleting && currentIdx > codeSnippet.length) {
        // Pause at the end before restarting
        timer = setTimeout(() => {
          isDeleting = true;
          type();
        }, 4000);
      } else if (isDeleting && currentIdx >= 0) {
        setDisplayText(codeSnippet.slice(0, currentIdx));
        currentIdx -= 2;
        timer = setTimeout(type, 15);
      } else if (isDeleting && currentIdx < 0) {
        isDeleting = false;
        currentIdx = 0;
        timer = setTimeout(type, 500);
      }
    };

    timer = setTimeout(type, 600);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      
      {/* Background Animated Yellow Glow & Dot Grid */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#FFD700]/20 to-amber-500/10 rounded-3xl blur-2xl opacity-70 pointer-events-none" />
      
      {/* Glassmorphic Code Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255,215,0,0.15)" }}
        className="relative bg-[#0d0d0d]/90 border border-white/15 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl group transition-all"
      >
        {/* macOS Traffic Lights Window Header */}
        <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>

          <div className="flex items-center space-x-2 text-xs text-white/50 font-mono">
            <Code2 size={13} className="text-[#FFD700]" />
            <span>ravibharathi.ts</span>
          </div>

          <div className="w-12 text-right text-[10px] text-white/30 font-mono">
            UTF-8
          </div>
        </div>

        {/* Code Content Body */}
        <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[220px] bg-black/40">
          <pre className="text-white/90">
            <code>
              {displayText.split("\n").map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell select-none pr-4 text-white/30 text-right">{idx + 1}</span>
                  <span className="table-cell">
                    {line.includes("const") && <span className="text-purple-400">const </span>}
                    {line.includes("developer") && <span className="text-yellow-300">developer </span>}
                    {line.includes("=") && <span className="text-white/60">= </span>}
                    {line.includes("{") && <span className="text-white">{'{'}</span>}
                    {line.includes("}") && <span className="text-white">{'}'};</span>}
                    
                    {line.includes(":") && !line.includes("{") && !line.includes("}") && (
                      <>
                        <span className="text-blue-300">{line.split(":")[0]}: </span>
                        <span className="text-amber-200">{line.split(":")[1]}</span>
                      </>
                    )}
                  </span>
                </div>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-[#FFD700] ml-1 align-middle"
              />
            </code>
          </pre>
        </div>
      </motion.div>

      {/* Floating Stat Cards around Code Editor */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#0a0a0a]/95 border border-[#FFD700]/40 p-3.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3 z-20 pointer-events-auto hover:scale-105 transition-transform"
      >
        <div className="p-2 rounded-lg bg-[#FFD700]/20 text-[#FFD700]">
          <Award size={18} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white">3× National Winner</span>
          <span className="text-[10px] text-white/60 uppercase font-semibold">Hackathons 2026</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -top-6 -right-2 sm:-right-6 bg-[#0a0a0a]/95 border border-white/20 p-3.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3 z-20 pointer-events-auto hover:scale-105 transition-transform"
      >
        <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
          <Rocket size={18} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white">3+ Production Apps</span>
          <span className="text-[10px] text-white/60 uppercase font-semibold">React & Microservices</span>
        </div>
      </motion.div>

    </div>
  );
}
