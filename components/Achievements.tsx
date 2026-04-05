"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    medal: "#1",
    title: "Winner — E-Horyzon 2026",
    venue: "Idea Pitching Competition · Kongu Engineering College",
  },
  {
    medal: "#3",
    title: "2nd Runner-Up — HeisenHack 2025",
    venue: "24-Hour National Hackathon · SRM Institute of Science & Technology",
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ach-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="section-label">Recognition</div>
      <h2 className="section-title text-4xl font-display font-light mb-12 reveal">
        Awards &amp; <strong>Achievements.</strong>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((ach, i) => (
          <div key={i} className="ach-card glass p-10 rounded-[32px] border border-[var(--border-light)] hover:border-[var(--primary)]/30 transition-all duration-500 group relative">
            <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-5xl font-display font-light gradient-text mb-6">{ach.medal}</div>
            <h3 className="text-2xl font-display font-medium mb-3">{ach.title}</h3>
            <p className="text-[var(--fg-muted)] font-body tracking-wide">{ach.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
