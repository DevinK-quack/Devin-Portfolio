import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contacts";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f8fc] text-[#10243e]">
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Contact />

      <footer className="border-t border-[#d5e2ef] px-6 py-8 text-center text-xs text-[#5c7189]">
        © {new Date().getFullYear()} Devin Kulasekere <span className="mx-2 text-[#49a6ff]">•</span> All Rights Reserved.
      </footer>
    </main>
  );
}