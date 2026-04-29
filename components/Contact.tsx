"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const buttonContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const buttonVariants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="section-full bg-[#ffffff] text-[#0a0a0a] py-32">
      <div className="section-inner px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="section-label mb-12 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold self-start sm:self-center"
        >
          — Let's Talk
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.1] text-[#0a0a0a]">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            Ready to build
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#FFD700]"
          >
            something remarkable?
          </motion.div>
        </h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#666666] text-lg md:text-xl font-light mb-16 max-w-2xl"
        >
          Whether it's a full-stack platform, AI system, or IoT solution — I'm always open to exciting collaborations and new opportunities.
        </motion.p>

        <motion.div
          variants={buttonContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            variants={buttonVariants}
            whileHover={{ scale: 1.04, borderColor: "#FFD700" }}
            whileTap={{ scale: 0.96 }}
            href="mailto:ravibharathiv410@gmail.com"
            className="px-8 py-4 rounded-2xl flex items-center gap-3 border border-[#e0e0e0] bg-[#f5f5f5] text-[#0a0a0a] font-medium transition-colors"
          >
            <Mail size={20} />
            <span>Send Email</span>
          </motion.a>
          
          <motion.a
            variants={buttonVariants}
            whileHover={{ scale: 1.04, borderColor: "#FFD700" }}
            whileTap={{ scale: 0.96 }}
            href="tel:+917550068435"
            className="px-8 py-4 rounded-2xl flex items-center gap-3 border border-[#e0e0e0] bg-[#f5f5f5] text-[#0a0a0a] font-medium transition-colors"
          >
            <Phone size={20} />
            <span>+91 755 006 8435</span>
          </motion.a>
          
          <div className="flex gap-4 w-full justify-center md:w-auto">
            <motion.a
              variants={buttonVariants}
              whileHover={{ scale: 1.1, color: "#FFD700", borderColor: "#FFD700" }}
              whileTap={{ scale: 0.96 }}
              href="https://www.linkedin.com/in/ravibharathi-v/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl flex items-center justify-center border border-[#e0e0e0] bg-[#f5f5f5] text-[#0a0a0a] transition-colors"
            >
              <Linkedin size={22} />
            </motion.a>
            
            <motion.a
              variants={buttonVariants}
              whileHover={{ scale: 1.1, color: "#FFD700", borderColor: "#FFD700" }}
              whileTap={{ scale: 0.96 }}
              href="https://github.com/RaviBharathi410"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl flex items-center justify-center border border-[#e0e0e0] bg-[#f5f5f5] text-[#0a0a0a] transition-colors"
            >
              <Github size={22} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
