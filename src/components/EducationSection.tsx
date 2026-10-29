import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar } from "lucide-react";

const timeline = [
  {
    period: "2024 – 2028",
    title: "B.Tech in Computer Science",
    institution: "Ajay Kumar Garg Engineering College, Ghaziabad",
    description: "Currently pursuing a Bachelor's degree in Computer Science with focus on backend development and AI/ML.",
  },
  {
    period: "2023",
    title: "Class XII — CBSE",
    institution: "Blue Bird Senior Secondary School, Aligarh",
    description: "Completed senior secondary education under the CBSE curriculum.",
  },
];

export function EducationSection() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-24 px-6 sm:px-10 bg-[#111216] relative border-t border-white/[0.06]">
      <div ref={ref} className="max-w-4xl mx-auto transition-all duration-700">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
            // Academic Background
          </span>
          <h2 className="font-['Anton'] text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white uppercase">
            My <span className="text-slate-400">Education</span>
          </h2>
          <div className="w-16 h-1 bg-white mt-4" />
        </div>

        <div className="relative pl-6 md:pl-0">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-white/20 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={item.period}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-8`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-[#111216] border-2 border-white shadow-lg z-10">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Content Card */}
                <div 
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] rounded-3xl bg-[#181920] border border-white/[0.08] p-7 transition-all duration-300 hover:border-white/25 shadow-2xl ${
                    i % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 mb-3 ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <h3 className="font-['Syne'] text-xl font-bold text-white mt-1">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-300 mt-1">
                    {item.institution}
                  </p>

                  <p className="text-sm text-slate-400 mt-3 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
