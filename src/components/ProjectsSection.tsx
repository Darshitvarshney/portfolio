import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "NLP Search",
    type: "Freelance",
    description:
      "NLP-based semantic search system using TF-IDF vectorization and preprocessing for efficient query matching with custom ranking mechanisms.",
    tech: ["Python", "Scikit-Learn", "NLP", "TF-IDF"],
    github: "https://github.com/Darshitvarshney/nlp_search_2",
  },
  {
    title: "Business Data Scraper",
    type: "Freelance",
    description:
      "Web scraping system to collect structured business data from Google Maps — names, addresses, phones, emails, coordinates. Deep-extraction and high-speed modes with automated Excel outputs.",
    tech: ["Python", "Web Scraping", "Automation", "Excel"],
    github: "https://github.com/Darshitvarshney",
  },
  {
    title: "Travefy",
    type: "Hackathon",
    description:
      "Travel-planning web app for trip creation and itinerary management. Clean UI, structured backend with auth and real-time features planned.",
    tech: ["Python", "Flask", "MongoDB", "REST API"],
    github: "https://github.com/Darshitvarshney/Travefy",
  },
  {
    title: "Credit Card Fraud Detection",
    type: "ML Project",
    description:
      "Machine learning model for detecting fraudulent credit card transactions using classification algorithms and data analysis techniques.",
    tech: ["Python", "Scikit-Learn", "ML", "Data Analysis"],
    github: "https://github.com/Darshitvarshney/Credit-Card-Fraud-Detection",
  },
  {
    title: "Vaultify",
    type: "Personal Project",
    description:
      "Secure password management tool in Python that encrypts and stores passwords using a master key. Supports OTP-based recovery and strong password generation.",
    tech: ["Python", "Cryptography", "CLI"],
    github: "https://github.com/Darshitvarshney/Vaultify",
  },
  {
    title: "Notes App Backend",
    type: "Backend Project",
    description:
      "Backend API for a notes application with CRUD operations, user management, and structured data handling.",
    tech: ["Python", "FastAPI", "MongoDB"],
    github: "https://github.com/Darshitvarshney/Notes-App-Backend",
  },
];

export function ProjectsSection() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-6 bg-surface">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-teal rounded-full mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {project.type}
                </span>
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-md bg-secondary text-teal font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
