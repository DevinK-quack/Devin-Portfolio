import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contacts";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-8 border-t border-[#E2E8F0] text-center text-xs text-[#475569]">
        © {new Date().getFullYear()} Devin Kulasekere. All rights reserved.
      </footer>
    </main>
  );
}