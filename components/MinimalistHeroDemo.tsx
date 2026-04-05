import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { MinimalistHero } from './ui/minimalist-hero';

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <MinimalistHero
      logoText="RAVIBHARATHI V."
      navLinks={navLinks}
      mainText="Engineering the future through minimalist design and intelligent systems. A Full-Stack Developer & AI Specialist crafting high-performance digital experiences."
      readMoreLink="#about"
      imageSrc="/hero-portrait.png"
      imageAlt="RAVIBHARATHI V. Portrait"
      overlayText={{
        part1: 'code is',
        part2: 'art.',
      }}
      socialLinks={socialLinks}
      locationText="Dindigul, Tamil Nadu"
    />
  );
};

export default MinimalistHeroDemo;
