"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Download, Send, CheckCircle2, Lock } from "lucide-react";

export default function Contact() {
  const [showPhone, setShowPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-full bg-[#ffffff] text-[#0a0a0a] py-20 border-t border-[#f0f0f0]">
      <div className="section-inner px-6 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 px-4 py-2 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/40 text-[#0a0a0a] text-xs font-bold uppercase tracking-wider flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
          <span>Open for Full-Stack / AI Internships — Summer 2027</span>
        </motion.div>

        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-4 text-[#0a0a0a] border-[#0a0a0a] uppercase tracking-widest text-xs font-bold text-center"
        >
          — Direct Inquiry
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-center text-[#0a0a0a]">
          Let's build <strong>something remarkable.</strong>
        </h2>

        <p className="text-[#666666] text-base md:text-lg font-light mb-16 max-w-xl text-center">
          Whether you have an internship opportunity, a production project, or a technical inquiry — feel free to drop a message.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          
          {/* Left Column: Direct Links & Phone Protection */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a
              href="mailto:ravibharathiv410@gmail.com"
              className="p-6 rounded-2xl border border-[#e0e0e0] bg-[#f5f5f5] hover:border-[#FFD700] transition-colors flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-[#0a0a0a] text-white group-hover:bg-[#FFD700] group-hover:text-[#0a0a0a] transition-colors">
                <Mail size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-semibold text-[#666666]">Email Directly</span>
                <span className="font-bold text-[#0a0a0a] text-sm md:text-base">ravibharathiv410@gmail.com</span>
              </div>
            </a>

            <div className="p-6 rounded-2xl border border-[#e0e0e0] bg-[#f5f5f5] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#0a0a0a] text-white">
                  <Phone size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-semibold text-[#666666]">Phone Contact</span>
                  <span className="font-bold text-[#0a0a0a] text-sm md:text-base">
                    {showPhone ? "+91 755 006 8435" : "+91 755 ••• ••••"}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowPhone(!showPhone)}
                className="text-xs font-bold uppercase tracking-wider text-[#FFD700] hover:underline flex items-center gap-1"
              >
                {showPhone ? "Hide" : "Reveal"}
              </button>
            </div>

            {/* Social & Resume Download Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="/Ravibharathi V - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-[#FFD700] text-[#0a0a0a] font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-md hover:bg-[#ffe033] transition-colors"
              >
                <Download size={18} />
                <span>Download Official Resume (PDF)</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/ravibharathi-v/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="py-3 rounded-xl border border-[#e0e0e0] bg-[#f5f5f5] hover:border-[#FFD700] flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a0a0a]"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/RaviBharathi410"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="py-3 rounded-xl border border-[#e0e0e0] bg-[#f5f5f5] hover:border-[#FFD700] flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a0a0a]"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Recruiter Contact Form */}
          <div className="lg:col-span-7 bg-[#f5f5f5] p-8 rounded-3xl border border-[#e0e0e0]">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <CheckCircle2 size={48} className="text-[#FFD700]" />
                <h3 className="text-2xl font-bold text-[#0a0a0a]">Message Sent Successfully</h3>
                <p className="text-sm text-[#666666]">Thank you for reaching out! I will respond to your inquiry shortly.</p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-bold uppercase text-[#0a0a0a] underline mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">Send a Direct Message</h3>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                    className="w-full px-4 py-3 rounded-xl border border-[#d1d1d1] bg-[#ffffff] text-[#0a0a0a] text-sm focus:outline-none focus:border-[#FFD700]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#d1d1d1] bg-[#ffffff] text-[#0a0a0a] text-sm focus:outline-none focus:border-[#FFD700]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-1">Message / Inquiry</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Ravibharathi, we loved your projects and would like to discuss an internship role..."
                    className="w-full px-4 py-3 rounded-xl border border-[#d1d1d1] bg-[#ffffff] text-[#0a0a0a] text-sm focus:outline-none focus:border-[#FFD700]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0a0a0a] text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-[#222] transition-colors mt-2"
                >
                  <Send size={16} />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
