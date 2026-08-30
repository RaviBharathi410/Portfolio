"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#home" className="text-xl font-bold font-display uppercase tracking-wider text-white mb-2">
            RAVIBHARATHI V. <span className="text-[#FFD700]">✦</span>
          </a>
          <p className="text-xs text-white/60 font-light">
            Full-Stack & AI Developer · Madurai, Tamil Nadu, India
          </p>
          <p className="text-xs text-white/40 mt-1">
            © {new Date().getFullYear()} Ravibharathi V. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase font-semibold tracking-widest text-white/70">
          <a href="#about" className="hover:text-[#FFD700] transition-colors">About</a>
          <a href="#experience" className="hover:text-[#FFD700] transition-colors">Experience</a>
          <a href="#skills" className="hover:text-[#FFD700] transition-colors">Tech Stack</a>
          <a href="#projects" className="hover:text-[#FFD700] transition-colors">Projects</a>
          <a href="#achievements" className="hover:text-[#FFD700] transition-colors">Recognition</a>
          <a href="#certifications" className="hover:text-[#FFD700] transition-colors">Certifications</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RaviBharathi410"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full bg-white/10 hover:bg-[#FFD700] hover:text-[#0a0a0a] transition-colors text-white"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ravibharathi-v/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full bg-white/10 hover:bg-[#FFD700] hover:text-[#0a0a0a] transition-colors text-white"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 rounded-full bg-[#FFD700] text-[#0a0a0a] hover:bg-white transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
}
