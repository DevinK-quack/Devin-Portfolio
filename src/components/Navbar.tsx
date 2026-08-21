"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", id: "top" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.15, 0.5, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="solid-navbar fixed left-3 right-3 top-3 z-50 sm:left-5 sm:right-5 lg:left-10 lg:right-10">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-3" aria-label="Beyond The Code home">
          <span className="font-[family-name:var(--font-outfit)] text-lg font-extrabold tracking-tight text-[#10243e]">
            Beyond<span className="text-[#155eef]">TheCode</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 text-[13px] font-semibold text-[#5c7189] md:flex" aria-label="Primary navigation">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setActiveSection(link.id)}
              className={`nav-link ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </a>
            );
          })}
        </nav>
        <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="menu-button flex h-10 w-10 items-center justify-center rounded-lg border border-[#d5e2ef] bg-white text-[#10243e] md:hidden">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && <nav className="border-t border-[#d5e2ef] bg-white px-5 py-3 md:hidden" aria-label="Mobile navigation">{links.map((link) => { const isActive = activeSection === link.id; return <a onClick={() => { setActiveSection(link.id); setMenuOpen(false); }} key={link.id} href={`#${link.id}`} aria-current={isActive ? "page" : undefined} className={`mb-1 block rounded-lg px-3 py-3 text-sm font-semibold transition-colors ${isActive ? "bg-[#e8f0f8] text-[#155eef]" : "text-[#5c7189] hover:bg-[#f4f8fc] hover:text-[#155eef]"}`}>{link.label}</a>; })}</nav>}
    </header>
  );
}