"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#000000] py-12 px-6 text-center border-t border-[#f0f0f0]">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-[#ffffff] text-sm tracking-wide"
      >
        © 2026 <span className="text-[#ffffff] font-medium">Ravibharathi V</span> · Madurai, Tamil Nadu
      </motion.p>
    </footer>
  );
}
