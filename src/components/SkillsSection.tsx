import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BrainCircuit, Server, Smartphone, Database, Bot, Award } from "lucide-react";

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
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto opacity-0">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-teal rounded-full mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-teal">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-secondary text-foreground text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
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
        <div className="mt-8 rounded-xl border border-border bg-card p-6 flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-teal/10 text-teal shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-teal mb-1">
              Professional Certification
            </h3>
            <p className="text-foreground text-sm font-medium">
              Machine Learning with Python —{" "}
              <span className="text-muted-foreground">Froyo Technologies (P) Ltd.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
