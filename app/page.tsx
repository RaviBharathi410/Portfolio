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

            <div className="space-y-0 relative z-10">
              <Marquee />
              <div className="bg-background">
                <About />
                <div className="bg-secondary/50">
                  <Skills />
                </div>
                <Projects />
                <div className="bg-secondary/50">
                  <Achievements />
                </div>
                <Certifications />
                <Contact />
                <Footer />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
