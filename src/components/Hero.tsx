"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#10243e] px-6 pb-20 pt-36 text-[#f4f8fc] md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border-[70px] border-[#49a6ff]/20" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 bg-[#155eef] opacity-40 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-end gap-14 md:grid-cols-[1.2fr_.8fr]">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-[#49a6ff]"><Code2 size={15} />Fullstack Developer / Data analyst</div>
          <h1 className="max-w-4xl font-[family-name:var(--font-outfit)] text-5xl font-extrabold leading-[.95] tracking-tight md:text-8xl">Digital products with <span className="text-[#49a6ff]">purpose.</span></h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#c5d6e8] md:text-lg">I&apos;m Devin Kulasekere, a software engineering graduate crafting thoughtful full-stack systems, mobile experiences, and the infrastructure behind them.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="action-button flex items-center gap-2 rounded-full bg-[#49a6ff] px-6 py-3.5 text-sm font-bold text-[#10243e]">Explore my work <ArrowUpRight size={17} /></a>
            <a href="#contact" className="action-button rounded-full border border-[#c5d6e8]/40 px-6 py-3.5 text-sm font-semibold text-[#f4f8fc] hover:bg-white/10">Start a conversation</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25, duration: .7 }} className="float-slow border-l border-[#c5d6e8]/25 pl-6 md:mb-2">
          <div className="relative mb-8 h-56 w-56 overflow-hidden rounded-full border-8 border-[#49a6ff]/30 bg-[#155eef]/30 shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:h-64 sm:w-64">
            <Image
              src="/profile.jpg"
              alt="Devin Kulasekere"
              fill
              priority
              sizes="(max-width: 640px) 224px, 256px"
              className="object-cover"
            />
          </div>
          <div className="mb-8 flex items-center gap-2 text-sm text-[#c5d6e8]"><MapPin size={16} className="text-[#49a6ff]" /> Colombo, Sri Lanka</div>
          <div className="grid grid-cols-2 gap-8 border-t border-[#c5d6e8]/25 pt-7"><div><strong className="block font-[family-name:var(--font-outfit)] text-4xl text-[#f4f8fc]">06</strong><span className="text-xs text-[#c5d6e8]">Selected systems</span></div><div><strong className="block font-[family-name:var(--font-outfit)] text-4xl text-[#f4f8fc]">3+</strong><span className="text-xs text-[#c5d6e8]">Core disciplines</span></div></div>
        </motion.div>
      </div>
      <a href="#about" className="action-link mx-auto mt-16 flex w-fit items-center gap-2 text-xs uppercase tracking-[.18em] text-[#c5d6e8]"><ArrowDown size={15} /> Scroll to discover</a>
    </section>
  );
}