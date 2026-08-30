"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

interface NavbarProps {
  navLinks: { label: string; href: string }[];
}

export default function Navbar({ navLinks }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      setScrolled(window.scrollY > 40);

      const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/10 z-[100] pointer-events-none">
        <motion.div
          className="h-full bg-[#FFD700]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold tracking-wider uppercase text-white font-display flex items-center gap-2"
          >
            <span>RAVIBHARATHI V.</span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#FFD700]"></span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-xs font-semibold tracking-widest uppercase transition-colors py-1 ${
                    isActive ? "text-[#FFD700]" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FFD700]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            <a
              href="/Ravibharathi V - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-full bg-[#FFD700] text-[#0a0a0a] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#ffe033] transition-transform active:scale-95 shadow-md"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[80] bg-[#0a0a0a] text-white flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-bold uppercase tracking-wider flex items-center justify-between py-2 border-b border-white/10 ${
                      isActive ? "text-[#FFD700]" : "text-white/80"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="text-[#FFD700]">✦</span>}
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <a
                href="/Ravibharathi V - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-[#FFD700] text-[#0a0a0a] text-center font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Download size={18} />
                <span>Download Resume (PDF)</span>
              </a>
              <p className="text-center text-xs text-white/50">Madurai, Tamil Nadu · Open to Summer 2027 Internships</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
