import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github, Sparkles, Smartphone, Globe, Layers, Download } from "lucide-react";

interface ProjectItem {
  title: string;
  type: string;
  featured?: boolean;
  icon?: "ai" | "globe" | "mobile" | "default";
  description: string;
  bullets?: string[];
  tech: string[];
  github?: string;
  githubBackend?: string;
  live?: string;
  apk?: string;
}

const projects: ProjectItem[] = [
  {
    title: "ANTARIX – SatQuery AI",
    type: "Agentic AI / Multimodal",
    featured: true,
    icon: "ai",
    description:
      "A multimodal satellite-imagery analysis platform powered by Qwen2-VL-2B-Instruct fine-tuned with LoRA/QLoRA for visual question answering.",
    bullets: [
      "Fine-tuned Qwen2-VL with LoRA/QLoRA for satellite visual question answering.",
      "Developed agentic AI workflows with LangGraph for image captioning, natural-language querying, and change detection.",
    ],
    tech: ["Python", "Qwen2-VL", "LoRA/QLoRA", "LangGraph", "Multimodal AI", "Computer Vision"],
    github: "https://github.com/Manny2706/ANTARIX2.O",
  },
  {
    title: "ChallanSave",
    type: "Live Production Platform",
    featured: true,
    icon: "globe",
    description:
      "Full-stack traffic legal-assistance platform with complete Admin Portal, automated WhatsApp workflows, and AI customer support.",
    bullets: [
      "Built complete Admin website frontend and backend for case tracking, challan resolution, and operational metrics.",
      "Engineered end-to-end WhatsApp bot automation for instant challan inquiries, updates, and customer support.",
      "Integrated AI-powered workflows to automate client assistance and streamline resolution processing.",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "WhatsApp API", "AI Automation", "REST APIs"],
    live: "https://www.challansave.in",
  },
  {
    title: "Music Streaming App",
    type: "Flutter Mobile & Backend",
    featured: true,
    icon: "mobile",
    description:
      "Modern cross-platform mobile music player and streaming application built with Flutter accompanied by a dedicated backend service.",
    bullets: [
      "Engineered sleek audio player controls, playlist management, and responsive UI in Flutter.",
      "Built dedicated backend API services for audio streaming, media cataloging, and playlist sync.",
    ],
    tech: ["Flutter", "Dart", "REST API", "Audio Streaming", "Mobile Architecture"],
    github: "https://github.com/Darshitvarshney/music_app_",
    githubBackend: "https://github.com/Darshitvarshney/music_app_backend",
    apk: "https://drive.google.com/file/d/14PVmM_b2DHtECphe0M0p7HBtEqiRevvX/view?usp=sharing",
  },
  {
    title: "NLP Semantic Search",
    type: "Freelance / ML",
    description:
      "NLP-based semantic search engine leveraging TF-IDF vectorization and custom query matching algorithms for rapid text document retrieval.",
    tech: ["Python", "Scikit-Learn", "NLP", "TF-IDF"],
    github: "https://github.com/Darshitvarshney/nlp_search_2",
  },
  {
    title: "Business Data Scraper",
    type: "Automation Pipeline",
    description:
      "Automated scraping pipeline extracting structured business intelligence from Google Maps with dual speed/depth modes and automated Excel export.",
    tech: ["Python", "Web Scraping", "Automation", "Excel"],
    github: "https://github.com/Darshitvarshney",
  },
  {
    title: "Travefy",
    type: "Hackathon Project",
    description:
      "Collaborative travel-planning web application for trip creation, itinerary scheduling, route coordination, and structured user management.",
    tech: ["Python", "Flask", "MongoDB", "REST API"],
    github: "https://github.com/Darshitvarshney/Travefy",
  },
  {
    title: "Vaultify",
    type: "Security / Python",
    description:
      "Secure password management tool in Python that encrypts and stores credentials using a master key, OTP verification, and strong key generation.",
    tech: ["Python", "Cryptography", "CLI"],
    github: "https://github.com/Darshitvarshney/Vaultify",
  },
  {
    title: "Notes App Backend",
    type: "Backend Service",
    description:
      "Scalable backend API service with token authentication, structured data models, and CRUD operations for personal note taking.",
    tech: ["Python", "FastAPI", "MongoDB"],
    github: "https://github.com/Darshitvarshney/Notes-App-Backend",
  },
];

export function ProjectsSection() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-6 bg-surface">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-teal rounded-full" />
          </div>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            A selection of AI platforms, full-stack systems, and mobile applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group flex flex-col justify-between rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 ${
                project.featured
                  ? "border-primary/40 shadow-lg shadow-primary/5 hover:border-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {project.icon === "ai" && <Sparkles className="w-4 h-4 text-teal" />}
                    {project.icon === "globe" && <Globe className="w-4 h-4 text-teal" />}
                    {project.icon === "mobile" && <Smartphone className="w-4 h-4 text-teal" />}
                    {!project.icon && <Layers className="w-4 h-4 text-teal" />}
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      {project.type}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>

                {project.bullets && project.bullets.length > 0 && (
                  <ul className="mb-4 space-y-1.5 text-xs text-foreground/80 list-disc list-inside">
                    {project.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-border/50">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-teal font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-secondary"
                    >
                      <Github className="w-4 h-4" />
                      <span>{project.githubBackend ? "App Repo" : "GitHub"}</span>
                    </a>
                  )}

                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-secondary"
                    >
                      <Github className="w-4 h-4" />
                      <span>Backend Repo</span>
                    </a>
                  )}

                  {project.apk && (
                    <a
                      href={project.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal/80 transition-colors py-1 px-2.5 rounded-md bg-teal/10 hover:bg-teal/20"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download APK</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal/80 transition-colors py-1 px-2.5 rounded-md bg-teal/10 hover:bg-teal/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
