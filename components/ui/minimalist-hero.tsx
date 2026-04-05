"use client";

import React, { useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageHoverSrc?: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  locationText: string;
  className?: string;
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-white/60 transition-colors hover:text-white"
  >
    {children}
  </a>
);

// Helper component for social media icons


// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageHoverSrc,
  imageAlt,
  overlayText,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: -300, y: -300 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setMouse({ x: -300, y: -300 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll animations
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const yOffset = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex h-screen w-full flex-col items-start justify-between overflow-hidden bg-black text-white p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-white"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-5 bg-white"></span>
        </motion.button>
      </header>
      {/* Background Yellow Circle & Image Layers — scroll-synced with text */}
      <motion.div
        style={{ y: yOffset, opacity }}
        className="absolute inset-0 flex justify-center items-end z-10"
      >
        <div
          style={{ marginLeft: '-33px' }}
          className="relative h-[350px] w-[350px] md:h-[500px] md:w-[500px] lg:h-[650px] lg:w-[650px]"
        >
          {/* Yellow circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute inset-0 rounded-full bg-yellow-400/90"
          />

          {/* Portrait Image Layers — centered over circle using FM x for translate */}
          <motion.div
            ref={wrapperRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 70, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="absolute bottom-0 left-1/2 z-10 w-[500px] h-[90vh] md:w-[750px] md:h-[95vh] lg:w-[900px] lg:h-[100vh] cursor-crosshair transform-gpu pointer-events-auto"
          >
            {/* Layer 1 (bottom): Full color image — always visible underneath */}
            <img
              src="/photo-color.png"
              alt="Ravibharathi V - Color"
              className="absolute inset-0 w-full h-full object-contain object-bottom"
            />

            {/* Layer 2 (top): B&W image — mouse hover reveals color through radial hole */}
            <img
              src="/photo-bw.png"
              alt="Ravibharathi V"
              className="absolute inset-0 w-full h-full object-contain object-bottom transition-none"
              style={{
                maskImage: `radial-gradient(circle 130px at ${mouse.x}px ${mouse.y}px, transparent 0%, transparent 50%, black 80%)`,
                WebkitMaskImage: `radial-gradient(circle 130px at ${mouse.x}px ${mouse.y}px, transparent 0%, transparent 50%, black 80%)`,
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        style={{ y: yOffset, opacity }}
        className="relative flex flex-col md:flex-row w-full flex-grow items-center justify-between z-20 pointer-events-none"
      >
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="z-20 order-2 md:order-none text-left w-full md:w-1/3 mt-8 md:mt-0"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-white/80 md:mx-0 pointer-events-auto">{mainText}</p>
          <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-white underline underline-offset-4 decoration-1 hover:text-white/80 transition-colors pointer-events-auto">
            Read More
          </a>
        </motion.div>



        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="z-20 order-3 md:order-none flex items-center justify-center md:justify-end w-full md:w-1/3"
        >
          <h1 className="text-6xl font-extrabold text-white md:text-8xl lg:text-[10rem] leading-none text-center md:text-right pointer-events-auto">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </motion.div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center space-x-4"
        >

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-sm font-medium text-white/80 uppercase tracking-widest"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
