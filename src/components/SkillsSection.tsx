import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BrainCircuit, Server, Smartphone, Database, Bot, Award, CheckCircle } from "lucide-react";

const skillGroups = [
  {
    category: "AI, LLMs & Vision",
    icon: BrainCircuit,
    skills: [
      "Qwen2-VL",
      "LoRA / QLoRA Fine-tuning",
      "LangGraph",
      "Multimodal AI",
      "Agentic AI Workflows",
      "Computer Vision",
      "NLP & TF-IDF",
      "Scikit-Learn",
      "Machine Learning",
    ],
  },
  {
    category: "Backend & Systems",
    icon: Server,
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Flask",
      "RESTful APIs",
      "Webhooks & Async Services",
      "Socket.io",
      "Microservices",
    ],
  },
  {
    category: "Frontend & Mobile",
    icon: Smartphone,
    skills: [
      "Next.js",
      "React",
      "Flutter",
      "Dart",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "State Management",
    ],
  },
  {
    category: "Databases & DevOps",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Git & GitHub",
      "Linux",
      "CI/CD Pipelines",
      "Cloud Deployment",
    ],
  },
  {
    category: "Automation & Integrations",
    icon: Bot,
    skills: [
      "WhatsApp Cloud API",
      "Bot Automation",
      "AI-Powered Support Agents",
      "Web Scraping (Selenium / BS4)",
      "Automated Reporting",
    ],
  },
];

export function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6 sm:px-10 bg-[#14151b]/85 backdrop-blur-[2px] relative border-t border-white/[0.06]">
      <div ref={ref} className="max-w-6xl mx-auto transition-all duration-700">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
            // Core Competencies
          </span>
          <h2 className="font-['Anton'] text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white uppercase">
            Technical <span className="text-slate-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-white mt-4" />
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="rounded-3xl bg-[#181920] border border-white/[0.08] p-7 flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:-translate-y-1 shadow-2xl group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-['Syne'] text-base font-bold text-white group-hover:text-slate-200 transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:border-white/20 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Card */}
        <div className="mt-8 rounded-3xl bg-[#181920] border border-white/20 p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-white shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                  Verified Credential
                </span>
              </div>
              <h3 className="font-['Syne'] text-lg font-bold text-white">
                Machine Learning with Python
              </h3>
              <p className="text-sm text-slate-400">
                Issued by <span className="text-white font-medium">Froyo Technologies (P) Ltd.</span>
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Completed & Certified</span>
          </div>
        </div>

      </div>
    </section>
  );
}
