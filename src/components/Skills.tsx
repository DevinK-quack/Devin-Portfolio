"use client";
import React from "react";
import Image from "next/image";

const skillCategories = [
  {
    title: "Backend & Systems",
    skills: [
      ["Java", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"],
      ["C++", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"],
      ["C#", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"],
      ["PHP", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"],
      ["ASP.NET Core", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"],
    ],
  },
  {
    title: "Frontend & UI",
    skills: [
      ["HTML5", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"],
      ["CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"],
      ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
      ["Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"],
      ["Tailwind CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"],
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      ["SQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"],
      ["SQLite", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"],
      ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"],
    ],
  },
];

export default function Skills() {
  return (
    <>
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
        <div><span className="text-[11px] font-bold uppercase tracking-[.2em] text-[#155eef]">01 / How I work</span><h2 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-bold leading-tight md:text-5xl">Curious by nature.<br /><span className="text-[#155eef]">Precise by craft.</span></h2></div>
        <p className="max-w-2xl self-end text-base leading-relaxed text-[#5c7189] md:text-lg">I enjoy turning complex requirements into reliable, human-friendly products. My toolkit spans the full journey: modeling data, shaping interfaces, and building the logic that makes everything work together.</p>
      </div>
    </section>
    <section id="skills" className="border-y border-[#365578] bg-[#10243e] px-6 py-24 text-[#f4f8fc]">
      <div className="mx-auto max-w-6xl"><div className="mb-12"><span className="text-[11px] font-bold uppercase tracking-[.2em] text-[#49a6ff]">02 / Capabilities</span><h2 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-bold md:text-5xl">Technical <span className="text-[#49a6ff]">toolkit.</span></h2><p className="mt-4 max-w-xl text-sm leading-relaxed text-[#c5d6e8]">A focused set of languages, frameworks, and database tools I use to turn ideas into dependable products.</p></div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {skillCategories.map((group, idx) => (
          <div
            key={idx}
            className="group border border-[#365578] bg-[#183454] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#49a6ff]/70 hover:shadow-[0_18px_35px_rgba(0,0,0,0.2)]"
          >
            <span className="text-xs font-bold text-[#49a6ff]">0{idx + 1}</span><h3 className="mb-4 mt-5 font-[family-name:var(--font-outfit)] text-lg font-bold text-[#f4f8fc]">
              {group.title}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {group.skills.map(([skill, logo]) => (
                <div
                  key={skill}
                  title={skill}
                  className="group/logo relative flex aspect-square items-center justify-center rounded-xl border border-[#496985] bg-[#f4f8fc] p-4 transition-all hover:-translate-y-1 hover:border-[#49a6ff] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                >
                  <Image src={logo} alt={`${skill} logo`} width={44} height={44} className="h-10 w-10 object-contain transition-transform group-hover/logo:scale-110" />
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#10243e] px-2 py-1 text-[10px] font-medium text-white opacity-0 shadow-lg transition-opacity group-hover/logo:opacity-100">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
    </>
  );
}