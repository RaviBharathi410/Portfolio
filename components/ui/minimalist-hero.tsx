"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import HeroCodeVisual from '@/components/HeroCodeVisual';

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc?: string;
  imageHoverSrc?: string;
  imageAlt?: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  locationText: string;
  className?: string;
}

export const MinimalistHero = ({
  mainText,
  overlayText,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const yOffset = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#0a0a0a] text-white px-6 md:px-12 pt-28 md:pt-36 pb-12 font-sans',
        className
      )}
    >
      {/* Background Tech Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Split: Left Text vs Right Animated Code Terminal */}
      <motion.div
        style={{ y: yOffset, opacity }}
        className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto"
      >
        {/* Left Side: Headline & Bio CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col items-start text-left"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold text-[#FFD700] leading-none tracking-tight font-display mb-8">
            CODE
            <br />
            IS
            <br />
            ART.
          </h1>

          <p className="max-w-xl text-base md:text-lg text-white/80 leading-relaxed font-light mb-8">
            {mainText}
          </p>
        </motion.div>

        {/* Right Side: Interactive Animated Terminal Visual */}
        <div className="lg:col-span-6 w-full pt-6 lg:pt-0">
          <HeroCodeVisual />
        </div>
      </motion.div>

      {/* Footer Location & Status */}
      <footer className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between pt-8 border-t border-white/10 text-xs font-semibold text-white/60 uppercase tracking-widest">
        <div>Based in {locationText}</div>
        <div className="flex items-center gap-2 text-[#FFD700]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
          <span>Available Summer 2027</span>
        </div>
      </footer>
    </div>
  );
};
