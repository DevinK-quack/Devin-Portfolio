"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const projectList = [
  {
    title: "AgriLease Rental System",
    category: "Web Application",
    description: "Agricultural machinery leasing platform featuring rental tracking logic, equipment listings, and customer orders.",
    stack: ["PHP", "SQL", "Bootstrap"],
  },
  {
    title: "TechCare Tech Services",
    category: "Mobile App",
    description: "Native mobile application providing technical service management and on-demand customer booking workflows.",
    stack: ["Java", "Android Studio", "SQLite"],
  },
  {
    title: "Medicare Plus Hospitality",
    category: "Management System",
    description: "Comprehensive medical and hospitality management platform handling patient records and appointments.",
    stack: ["PHP", "MySQL", "JavaScript"],
  },
  {
    title: "KMC Event Management",
    category: "Enterprise System",
    description: "Event scheduling, venue coordination, and user tracking platform built with structured role controls.",
    stack: ["ASP.NET Core", "SQL", "C#"],
  },
  {
    title: "Furniture Ordering System",
    category: "E-Commerce",
    description: "Catalog display, custom quote requests, and order tracking system for bespoke furniture orders.",
    stack: ["PHP", "MySQL", "HTML/CSS"],
  },
  {
    title: "Bookshop & Library Systems",
    category: "Inventory Systems",
    description: "Dual inventory systems for tracking stock turnover, book borrowings, returns, and catalog classification.",
    stack: ["Java", "SQL", "C++"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto bg-white">
      <div className="mb-14">
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-[#0F172A]">
          Featured <span className="text-[#0052FF]">Projects</span>
        </h2>
        <p className="text-[#475569] text-sm mt-2">
          Systems and applications developed across web, desktop, and mobile platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group relative p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_10px_30px_rgba(0,82,255,0.1)] hover:border-[#0052FF]/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-[family-name:var(--font-outfit)] tracking-widest text-[#0052FF] font-semibold uppercase">
                  {p.category}
                </span>
                <Code2 size={18} className="text-[#475569]/50 group-hover:text-[#0052FF] transition-colors" />
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] font-bold text-xl text-[#0F172A] mb-2 group-hover:text-[#0052FF] transition-colors">
                {p.title}
              </h3>
              <p className="text-[#475569] text-xs leading-relaxed mb-6">
                {p.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E2E8F0]">
              {p.stack.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 rounded text-[10px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}