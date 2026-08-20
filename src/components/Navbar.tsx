"use client";
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-[family-name:var(--font-outfit)] font-bold text-xl tracking-tight text-[#0F172A]">
          DEVIN<span className="text-[#0052FF]">.</span>
        </a>
        <nav className="flex gap-6 text-sm font-medium text-[#475569]">
          <a href="#about" className="hover:text-[#0052FF] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#0052FF] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#0052FF] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#0052FF] transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}