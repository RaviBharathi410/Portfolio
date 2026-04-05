"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[var(--border-light)] text-center">
      <p className="text-[var(--fg-muted)] mb-4">
        © 2026 <span className="text-[var(--fg)] font-medium">Ravibharathi V</span> · Dindigul, Tamil Nadu
      </p>
      <p className="text-[var(--fg-muted)] text-sm font-light tracking-widest uppercase">
        Built with <span className="text-[var(--primary)] mx-1">♥</span> and MERN
      </p>
    </footer>
  );
}
