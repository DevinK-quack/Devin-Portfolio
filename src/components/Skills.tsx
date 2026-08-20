"use client";
import React from "react";

const skillCategories = [
  {
    title: "Backend & Systems",
    skills: ["Java", "C++", "C#", "PHP", "ASP.NET Core"],
  },
  {
    title: "Frontend & UI",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Databases & Storage",
    skills: ["SQL", "SQLite", "MySQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto bg-white">
      <div className="mb-12">
        <span className="text-[11px] font-[family-name:var(--font-outfit)] tracking-widest text-[#0052FF] font-semibold uppercase">
          Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-[#0F172A] mt-2">
          Technical <span className="text-[#0052FF]">Toolkit</span>
        </h2>
        <p className="text-[#475569] text-sm mt-2">
          Languages, frameworks, and database engines used across my systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((group, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:border-[#0052FF]/30 transition-all"
          >
            <h3 className="font-[family-name:var(--font-outfit)] font-bold text-lg text-[#0F172A] mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}