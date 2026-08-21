"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const projectList = [
  {
    title: "AgriLease Rental System",
    category: "Web Application",
    description: "Agricultural machinery leasing platform featuring rental tracking logic, equipment listings, and customer orders.",
    stack: ["CSS3", "PostgreSQL", "Bootstrap","HTML5", "JavaScript", "PHP"],
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
    stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "KMC Event Management",
    category: "Web Application",
    description: "Event scheduling, venue coordination, and user tracking platform built with structured role controls.",
    stack: ["ASP.NET Core", "SQL", "C#"],
  },
  {
    title: "Furniture Ordering System",
    category: "Inventory System",
    description: "Catalog display, custom quote requests, and order tracking system for bespoke furniture orders.",
    stack: ["C++","SQLite"],
  },
  {
    title: "Telco Customer Data Analysis",
    category: "Data Analysis",
    description: "R-based telecommunications analysis covering rigorous data cleaning, feature engineering, statistical assumption testing, and visual exploration of customer behavior.",
    stack: ["R"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#10243e] px-6 py-24 text-[#f4f8fc]">
      <div className="mx-auto max-w-6xl"><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="text-[11px] font-bold uppercase tracking-[.2em] text-[#49a6ff]">04 / Selected work</span><h2 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-bold md:text-5xl">Built to be <span className="text-[#49a6ff]">useful.</span></h2></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group relative flex flex-col justify-between border border-[#365578] bg-[#183454] p-6 transition-all hover:-translate-y-1 hover:border-[#49a6ff]/70 hover:shadow-[0_18px_35px_rgba(0,0,0,0.22)]"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-[family-name:var(--font-outfit)] font-semibold uppercase tracking-widest text-[#49a6ff]">
                  {p.category}
                </span>
                <Code2 size={18} className="text-[#91abc4] transition-colors group-hover:text-[#49a6ff]" />
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-outfit)] text-xl font-bold text-[#f4f8fc] transition-colors group-hover:text-[#49a6ff]">
                {p.title}
              </h3>
              <p className="mb-6 text-xs leading-relaxed text-[#c5d6e8]">
                {p.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-[#365578] pt-4">
              {p.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-[#496985] bg-[#10243e] px-2 py-0.5 text-[10px] font-medium text-[#c5d6e8]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div></div>
    </section>
  );
}