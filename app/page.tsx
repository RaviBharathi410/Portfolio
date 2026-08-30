"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import MinimalistHeroDemo from "@/components/MinimalistHeroDemo";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'TECH', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'RECOGNITION', href: '#achievements' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-background relative selection:bg-accent selection:text-accent-foreground">
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <CustomCursor />
          <Navbar navLinks={navLinks} />

          <div className="relative">
            <section id="home">
              <MinimalistHeroDemo />
            </section>

            <div className="relative z-10 flex flex-col">
              <About />
              <Experience />
              <Marquee />
              <Skills />
              <Projects />
              <Achievements />
              <Certifications />
              <Contact />
              <Footer />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
