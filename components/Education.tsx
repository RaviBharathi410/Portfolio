"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "B.E. in Computer Science",
    institution: "PSNA College of Engineering and Technology, Dindigul",
    period: "2023 - 2027",
    details: "Current CGPA: 7.7",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary",
    institution: "PSY Matriculation Higher Secondary School, Madurai",
    period: "2022 - 2023",
    details: "90.33% in Final Boards",
    icon: "🏫",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-row", {
        opacity: 0,
        x: 20,
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
    <section id="education" ref={sectionRef} className="section-full">
      <div className="section-inner px-6 py-24">
        <div className="section-label">Education</div>
        <h2 className="section-title text-4xl font-display font-light mb-12 reveal">
          Academic <strong>Journey.</strong>
        </h2>

        <div className="flex flex-col gap-6">
          {educationData.map((edu, i) => (
            <div
              key={i}
              className="edu-row glass p-6 md:p-8 rounded-2xl border border-[var(--border-light)] flex items-start gap-6 hover:bg-white/5 transition-all group"
            >
              <div className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-500 mt-1">
                {edu.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-display font-medium text-[var(--fg)]">{edu.degree}</h3>
                  <span className="text-sm font-body text-[var(--primary)] font-medium tracking-wider">{edu.period}</span>
                </div>
                <div className="text-[var(--fg-muted)] text-lg mb-2">{edu.institution}</div>
                <div className="text-sm font-body text-[var(--fg-muted)] opacity-80 bg-white/5 inline-block px-3 py-1 rounded-full border border-white/10">
                  {edu.details}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
