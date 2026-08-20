import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="border-y border-[#d5e2ef] bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[.2em] text-[#155eef]">
            03 / Education
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-bold md:text-5xl">
            The foundation behind the <span className="text-[#155eef]">work.</span>
          </h2>
        </div>

        <div className="group flex flex-col gap-6 border border-[#d5e2ef] bg-[#f4f8fc] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#49a6ff] hover:shadow-[0_16px_30px_rgba(16,36,62,0.1)] sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d5e2ef] bg-white text-[#155eef] transition-colors group-hover:border-[#49a6ff]">
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-[#155eef]">
                Qualification
              </p>
              <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[#10243e]">
                Higher Diploma in Computing and Software Engineering
              </h3>
              <p className="mt-2 text-sm text-[#5c7189]">
                Cardiff Metropolitan University
              </p>
            </div>
          </div>
          <span className="w-fit rounded-full border border-[#d5e2ef] bg-white px-4 py-2 text-xs font-semibold text-[#5c7189]">
            Software Engineering
          </span>
        </div>
      </div>
    </section>
  );
}
