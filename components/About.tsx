"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillChips = [
  "MERN Stack", "React Native", "Computer Vision", 
  "IoT / ESP32", "Real-Time Systems", "AI / ML", 
  "REST APIs", "Flask"
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-about", {
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
    <section id="about" ref={sectionRef} className="section-full bg-black/20">
      <div className="section-inner px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="section-label">About Me</div>
          <h2 className="section-title text-4xl md:text-5xl font-display font-light mb-8 reveal-about">
            Engineering the future, <strong>one stack at a time.</strong>
          </h2>
          
          <div className="about-body reveal-about space-y-6 text-[var(--fg-muted)] text-lg leading-relaxed font-light mb-10">
            <p>
              I am a Computer Science Engineering student at PSNA College of Engineering and Technology, Dindigul — graduating in 2027. I specialize in full-stack development with a sharp focus on AI-driven applications and real-time systems.
            </p>
            <p>
              From autonomous water monitoring bots to real-time AI coding arenas — I build end-to-end systems that solve real problems at the intersection of hardware, software, and intelligence.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 reveal-about">
            {skillChips.map(chip => (
              <span key={chip} className="chip glass px-4 py-2 rounded-full text-sm font-body tracking-wide border border-[var(--border-light)]">
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="about-photo-wrap relative hidden md:flex justify-center reveal-about">
          <div className="about-photo-bg absolute inset-[-30px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_70%)]" />
          <img
            src="/user-pfp.png" 
            alt="Ravibharathi"
            className="relative z-10 w-[280px] h-[350px] object-cover object-top rounded-[20px] border border-[var(--border-light)] saturate-[0.85] hover:saturate-[1.1] hover:scale-[1.01] transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}
