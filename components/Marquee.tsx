"use client";

const techTags = [
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", 
  "Python", "Computer Vision", "OpenCV", "TensorFlow",
  "React Native", "Tailwind CSS", "GSAP", "Three.js",
  "IoT Systems", "Embedded C", "Docker", "AWS"
];

export default function Marquee() {
  return (
    <div className="marquee-wrap relative z-10 border-y border-[var(--border)] py-5 overflow-hidden bg-[#09090b]/60">
      <div className="marquee-track flex whitespace-nowrap animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        {/* Double the list for seamless loop */}
        {[...techTags, ...techTags].map((tag, i) => (
          <div key={i} className="marquee-item inline-flex items-center gap-8 px-8 flex-shrink-0">
            <span className="marquee-text font-display text-[0.82rem] font-light tracking-[0.08em] text-[var(--fg-muted)] uppercase">
              {tag}
            </span>
            <div className="marquee-gem w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[var(--grad-from)] to-[var(--grad-via)] flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
