"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    name: "Python for Beginners",
    issuer: "Microsoft Learn",
    date: "Mar 2026",
    icon: "🐍",
  },
  {
    name: "IBM Skills Network / Cognitive Class",
    issuer: "IBM",
    date: "Oct 2025",
    icon: "🧠",
  },
  {
    name: "MongoDB University — 8+ Badges",
    issuer: "MongoDB University",
    date: "Jul 2025",
    icon: "🍃",
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cert-row", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.15,
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
    <section id="certs" ref={sectionRef} className="section-full">
      <div className="section-inner px-6 py-24">
        <div className="section-label">Certifications</div>
        <h2 className="section-title text-4xl font-display font-light mb-12 reveal">
          What I&apos;ve <strong>Earned.</strong>
        </h2>

        <div className="flex flex-col gap-4">
          {certifications.map((cert, i) => (
            <div 
              key={i} 
              className="cert-row glass p-6 md:p-8 rounded-2xl border border-[var(--border-light)] flex items-center gap-6 hover:bg-white/5 transition-all group"
            >
              <div className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500">
                {cert.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-medium text-[var(--fg)]">{cert.name}</h3>
                <div className="text-[var(--fg-muted)] text-sm mt-1">{cert.issuer}</div>
              </div>
              <div className="text-sm font-body text-[var(--fg-muted)] opacity-60">
                {cert.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
