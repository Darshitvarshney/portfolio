import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer & AI Automation Intern",
    company: "Challan Save",
    companyUrl: "https://www.challansave.in",
    period: "June 2026 – Present (6 Months)",
    location: "Remote / Aligarh, UP",
    badge: "Internship",
    description:
      "Contributed to building core backend infrastructure and end-to-end automation pipelines for a high-growth traffic legal-assistance platform.",
    achievements: [
      "Engineered high-performance REST APIs and backend architecture using FastAPI and PostgreSQL for automated challan tracking and legal assistance workflows.",
      "Developed the complete Admin Portal (Frontend & Backend) using Next.js and FastAPI, enabling administrative oversight, case management, analytics, and operational tracking.",
      "Designed and deployed end-to-end WhatsApp Bot Automation via webhooks, allowing users to check challan status, upload violation slips, and receive real-time case updates.",
      "Integrated AI-driven customer support workflows and third-party REST services to streamline legal query resolution and reduce response times by over 60%.",
    ],
    tech: ["FastAPI", "Next.js", "PostgreSQL", "WhatsApp Cloud API", "AI Automation", "Python", "Tailwind CSS", "REST APIs"],
  },
];

export function ExperienceSection() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 px-6 sm:px-10 bg-[#14151b]/85 backdrop-blur-[2px] relative border-t border-white/[0.06]">
      <div ref={ref} className="max-w-6xl mx-auto transition-all duration-700">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
            // Career Track
          </span>
          <h2 className="font-['Anton'] text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white uppercase">
            Work <span className="text-slate-400">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-white mt-4" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company + exp.role}
              className="relative rounded-3xl bg-[#181920] border border-white/[0.08] p-6 sm:p-10 transition-all duration-300 hover:border-white/20 shadow-2xl group"
            >
              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white group-hover:text-slate-200 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
                      {exp.badge}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 mt-3">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline inline-flex items-center gap-1.5 transition-colors font-bold"
                    >
                      <Briefcase className="w-4 h-4 text-slate-300" />
                      <span>{exp.company}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-3 mb-8">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <div className="p-1 rounded bg-white/10 text-white shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/20 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
