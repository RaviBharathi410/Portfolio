import React from 'react';
import { MinimalistHero } from './ui/minimalist-hero';

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'TECH', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'RECOGNITION', href: '#achievements' },
    { label: 'CERTIFICATIONS', href: '#certifications' },
    { label: 'CONTACT', href: '#contact' },
  ];



  return (
    <MinimalistHero
      logoText="RAVIBHARATHI V."
      navLinks={navLinks}
      mainText="Engineering the future through minimalist design and intelligent systems. A Full-Stack Developer & AI Specialist crafting high-performance digital experiences."
      readMoreLink="#about"
      imageSrc="/hero-portrait.png"
      imageHoverSrc="/hero-circuit.png"
      imageAlt="RAVIBHARATHI V. Portrait"
      overlayText={{
        part1: 'code is',
        part2: 'art.',
      }}

      locationText="Madurai, Tamil Nadu"
    />
  );
};

export default MinimalistHeroDemo;
