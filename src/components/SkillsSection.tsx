import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillGroups = [
  {
    category: "Languages & Frameworks",
    skills: ["Python", "Node.js", "FastAPI", "Flask", "Socket.io"],
  },
  {
    category: "Data & ML",
    skills: ["Scikit-Learn", "NLP", "TF-IDF", "Data Analysis", "Machine Learning"],
  },
  {
    category: "Databases & Tools",
    skills: ["MongoDB", "Web Scraping", "Automation", "Git", "REST APIs"],
  },
  {
    category: "Deployment & DevOps",
    skills: ["Software Deployment", "Docker", "Linux", "CI/CD"],
  },
];

export function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto opacity-0">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Tech <span className="text-primary">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-teal rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-teal mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <h3 className="font-heading text-lg font-semibold text-teal mb-2">
            🏆 Certificate
          </h3>
          <p className="text-foreground">
            Machine Learning with Python —{" "}
            <span className="text-muted-foreground">Froyo Technologies (P) Ltd.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
