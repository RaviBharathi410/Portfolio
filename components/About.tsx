"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeroCodeVisual from "@/components/HeroCodeVisual";

gsap.registerPlugin(ScrollTrigger);

const skillChips = [
  "MERN Stack", "React Native", "Computer Vision",
  "Real-Time Systems", "AI / ML",
  "REST APIs", "Flask"
];

const headingWords = "Engineering the future, one stack at a time.".split(" ");

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".split-word",
        { y: "110%" },
        {
          y: "0%",
          stagger: 0.035,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }, headingRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.05,
      },
    },
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section id="about" className="section-full bg-[#e8e8e8] text-[#0a0a0a]">
      <div className="section-inner px-6 py-20 max-w-7xl mx-auto text-left">
        <div className="w-full flex flex-col">
          
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="section-label mb-6 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold"
          >
            — About Me
          </motion.div>

          <h2
            ref={headingRef}
            className="section-title text-4xl md:text-5xl font-display font-bold mb-10 flex flex-wrap gap-x-3 gap-y-2 text-[#0a0a0a]"
          >
            {headingWords.map((word, idx) => (
              <span key={idx} className="overflow-hidden inline-block pb-1">
                <span className="split-word inline-block">{word}</span>
              </span>
            ))}
          </h2>

          {/* Grid Layout: Left Bio vs Right Circular Floating Portrait with Subtle Ambient Glow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            
            {/* Left Bio Text */}
            <div className="lg:col-span-7 space-y-6 text-[#3a3a3a] text-lg leading-relaxed font-light">
              <motion.p
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I am a Computer Science Engineering student at PSNA College of Engineering and Technology, Dindigul — graduating in 2027. I specialize in full-stack development with a sharp focus on AI-driven applications and real-time microservices.
              </motion.p>
              <motion.p
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                From autonomous network trace monitoring to real-time AI coding battle arenas — I build end-to-end scalable systems that combine real-time WebSockets, computer vision, and modern web architectures.
              </motion.p>
            </div>

            {/* Right Side: Circular Floating Portrait (No Frame Outline) with Subtle Yellow Glow & Floating Animation */}
            <div className="lg:col-span-5 flex justify-center items-center py-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                animate={{
                  y: [0, -10, 0],
                }}
                /* Gentle floating animation cycle */
                // @ts-ignore
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative flex items-center justify-center group cursor-pointer"
              >
                {/* Very Low Soft Ambient Yellow Glow behind circle (No hard border/frame outline) */}
                <div className="absolute -inset-4 bg-[#FFD700]/25 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Circular Mask Frame */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/LinkedIn Profile.png"
                    alt="Ravibharathi V. Portrait"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

          </div>

          {/* Quick Metrics Strip for Recruiters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-10 p-6 rounded-2xl bg-[#ffffff] border border-[#d1d1d1]"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-[#0a0a0a] font-display">3×</span>
              <span className="text-xs uppercase font-semibold text-[#FFD700] tracking-wider">National Hackathon Winner</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-[#0a0a0a] font-display">3+</span>
              <span className="text-xs uppercase font-semibold text-[#666666] tracking-wider">Production Apps Shipped</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-[#0a0a0a] font-display">150+</span>
              <span className="text-xs uppercase font-semibold text-[#666666] tracking-wider">LeetCode Solved</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-[#0a0a0a] font-display">7.69</span>
              <span className="text-xs uppercase font-semibold text-[#666666] tracking-wider">B.E. Computer Science CGPA</span>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-wrap justify-start gap-3"
          >
            {skillChips.map((chip) => (
              <motion.span
                key={chip}
                variants={pillVariants}
                whileHover={{ scale: 1.05, borderColor: "#FFD700" }}
                className="px-4 py-2 rounded-full text-sm font-medium tracking-wide border border-[#0a0a0a]/20 bg-[#f5f5f5] text-[#0a0a0a] shadow-sm cursor-default"
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
