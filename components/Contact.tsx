"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-contact", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 overflow-hidden px-6">
      <div className="contact-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="section-label mx-auto mb-8">Let&apos;s Talk</div>

        <h2 className="text-4xl md:text-6xl font-display font-light mb-8 reveal-contact leading-[1.1]">
          Ready to build <br />
          <strong className="gradient-text font-semibold tracking-tight">something remarkable?</strong>
        </h2>

        <p className="text-[var(--fg-muted)] text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto reveal-contact">
          Whether it&apos;s a full-stack platform, AI system, or IoT solution — I&apos;m always open to exciting collaborations and new opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-4 reveal-contact">
          <a href="mailto:ravibharathiv410@gmail.com" className="glass px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/5 transition-all">
            <Phone size={20} />
            <Mail size={20} />
            <span>Send Email </span>
          </a>
          <a href="tel:+917550068435" className="glass px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/5 transition-all">
            <Phone size={20} />
            <span>+91 755 006 8435</span>
          </a>
          <div className="flex gap-4 w-full justify-center md:w-auto">
            <a href="https://www.linkedin.com/in/ravibharathi-v/" target="_blank" rel="noopener noreferrer" className="glass w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-white/5 transition-all">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com/RaviBharathi410" target="_blank" rel="noopener noreferrer" className="glass w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-white/5 transition-all">
              <Github size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
