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
    <section id="experience" className="py-24 px-6 bg-surface/50">
      <div ref={ref} className="max-w-5xl mx-auto opacity-0">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-teal rounded-full mb-12" />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company + exp.role}
              className="relative rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {exp.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-1">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-teal hover:underline inline-flex items-center gap-1 group"
                    >
                      <Briefcase className="w-4 h-4 text-teal" />
                      <span>{exp.company}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements list */}
              <div className="space-y-2.5 mb-6">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-teal font-medium"
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
