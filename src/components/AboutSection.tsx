import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Mail, GraduationCap, Briefcase } from "lucide-react";

export function AboutSection() {
  const ref = useScrollReveal();

  const details = [
    { label: "Location", value: "Aligarh, Uttar Pradesh", icon: MapPin },
    { label: "Email", value: "darshitvarshney1928@gmail.com", icon: Mail, isEmail: true },
    { label: "Education", value: "B.Tech CS (2024 – 2028)", icon: GraduationCap },
    { label: "Experience", value: "Intern @ Challan Save (6 Mos)", icon: Briefcase },
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-10 bg-[#111216]/85 backdrop-blur-[2px] relative border-t border-white/[0.06]">
      <div ref={ref} className="max-w-6xl mx-auto transition-all duration-700">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
            // Profile & Bio
          </span>
          <h2 className="font-['Anton'] text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white uppercase">
            About <span className="text-slate-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-white mt-4" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Narrative Bio Card */}
          <div className="md:col-span-7 rounded-3xl bg-[#181920] border border-white/[0.08] p-8 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div className="space-y-5 text-slate-300 leading-relaxed font-normal">
              <p className="text-base sm:text-lg text-slate-200">
                I'm a detail-oriented and self-driven <span className="text-white font-semibold underline decoration-white/30 underline-offset-4">B.Tech Computer Science student</span> at Ajay Kumar Garg Engineering College, Ghaziabad. I specialize in backend architecture, multimodal AI systems, and intelligent workflow automations.
              </p>
              <p className="text-sm sm:text-base text-slate-400">
                Currently working as a <span className="text-white font-medium">Backend Developer & AI Automation Intern</span> at Challan Save (6 months), where I architected FastAPI backend services, developed full-stack Next.js admin portals, and deployed end-to-end WhatsApp bot automations. I'm also deeply immersed in fine-tuning multimodal vision-language models (Qwen2-VL, LoRA) and building agentic workflows with LangGraph.
              </p>
            </div>
          </div>

          {/* Quick Details Chips */}
          <div className="md:col-span-5 flex flex-col gap-3">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[#181920] border border-white/[0.07] hover:border-white/20 p-4 flex items-center gap-3.5 transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white group-hover:scale-105 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    {item.isEmail ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-sm font-semibold text-slate-100 hover:text-white transition-colors truncate"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-slate-100 truncate">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
