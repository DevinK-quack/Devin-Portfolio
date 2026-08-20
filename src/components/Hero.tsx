"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 relative overflow-hidden bg-white">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#0052FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl"
      >
        <span className="px-4 py-1.5 rounded-full border border-[#0052FF]/20 bg-[#0052FF]/8 text-[#0052FF] text-xs font-semibold uppercase tracking-wider inline-block mb-6 font-[family-name:var(--font-outfit)]">
          Cardiff Metropolitan University Alumnus
        </span>

        <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-outfit)] font-extrabold text-[#0F172A] tracking-tight mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-[#0052FF] to-[#009BFF] bg-clip-text text-transparent">
            Devin Kulasekere
          </span>
        </h1>

        <p className="text-[#475569] text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Software Engineer specializing in scalable full-stack applications, enterprise database systems, and mobile architectures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0052FF] text-white font-semibold shadow-[0_4px_14px_rgba(0,82,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,82,255,0.35)] hover:bg-[#0043D1] transition-all font-[family-name:var(--font-outfit)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] font-semibold hover:bg-[#F8FAFC] transition-all font-[family-name:var(--font-outfit)]"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}