"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import MinimalistHeroDemo from "@/components/MinimalistHeroDemo";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-background relative selection:bg-accent selection:text-accent-foreground">
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <CustomCursor />

          <div className="relative">
            <section id="home">
              <MinimalistHeroDemo />
            </section>

            <div className="relative z-10 flex flex-col">
              <About />
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
