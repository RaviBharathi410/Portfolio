"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const duration = 2.0; 
    const interval = 20;
    const totalSteps = (duration * 1000) / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextPercent = Math.min(100, Math.floor((currentStep / totalSteps) * 100));
      setPercent(nextPercent);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        
        // Premium exit animation
        const tl = gsap.timeline({
          onComplete: onComplete
        });

        tl.to(".loader-text", {
          y: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in"
        })
        .to("#loader", {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.8,
          ease: "expo.inOut"
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      id="loader" 
      className="fixed inset-0 z-[9000] bg-black flex flex-col items-center justify-center gap-8"
      style={{ clipPath: "inset(0 0 0% 0)" }}
    >
      <div className="loader-text flex flex-col items-center gap-4">
        <div className="text-white font-bold text-4xl tracking-tighter uppercase">
          RAVIBHARATHI V.
        </div>
        <div className="w-[300px] h-[1px] bg-white/10 overflow-hidden relative">
          <div 
            className="h-full bg-yellow-400 transition-[width] duration-300 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="text-white/30 text-[0.6rem] tracking-[0.4em] uppercase font-medium">
          Personal Portfolio — {percent}%
        </div>
      </div>
    </div>
  );
}
