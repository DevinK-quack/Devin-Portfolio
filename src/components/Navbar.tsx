"use client";
import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About", "Skills", "Education", "Projects", "Contact"];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#d5e2ef] bg-[#f4f8fc]">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-[family-name:var(--font-outfit)] text-xl font-extrabold tracking-tight text-[#10243e] transition-transform hover:scale-[1.02]">
          Beyond<span className="text-[#49a6ff]">TheCode</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#5c7189] md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link group relative rounded-full px-3 py-2"
            >
              {link}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-[#49a6ff] transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
          <a href="#contact" className="nav-cta group flex items-center gap-1 rounded-full bg-[#10243e] px-4 py-2 text-white">Let&apos;s talk <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
        </nav>
        <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} className="menu-button text-[#10243e] md:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && <nav className="border-t border-[#d5e2ef]/40 px-6 py-5 md:hidden">{links.map((link) => <a onClick={() => setMenuOpen(false)} key={link} href={`#${link.toLowerCase()}`} className="block rounded-xl px-3 py-2 text-sm font-medium text-[#5c7189] transition-all hover:bg-[#e8f0f8] hover:pl-5 hover:text-[#155eef]">{link}</a>)}</nav>}
    </header>
  );
}