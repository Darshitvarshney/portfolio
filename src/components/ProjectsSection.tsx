import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github, Sparkles, Smartphone, Globe, Layers, Download, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  title: string;
  type: string;
  category: "all" | "ai" | "fullstack" | "mobile";
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
    category: "ai",
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
    category: "fullstack",
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
    category: "mobile",
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
    category: "ai",
    description:
      "NLP-based semantic search engine leveraging TF-IDF vectorization and custom query matching algorithms for rapid text document retrieval.",
    tech: ["Python", "Scikit-Learn", "NLP", "TF-IDF"],
    github: "https://github.com/Darshitvarshney/nlp_search_2",
  },
  {
    title: "Business Data Scraper",
    type: "Automation Pipeline",
    category: "fullstack",
    description:
      "Automated scraping pipeline extracting structured business intelligence from Google Maps with dual speed/depth modes and automated Excel export.",
    tech: ["Python", "Web Scraping", "Automation", "Excel"],
    github: "https://github.com/Darshitvarshney",
  },
  {
    title: "Travefy",
    type: "Hackathon Project",
    category: "fullstack",
    description:
      "Collaborative travel-planning web application for trip creation, itinerary scheduling, route coordination, and structured user management.",
    tech: ["Python", "Flask", "MongoDB", "REST API"],
    github: "https://github.com/Darshitvarshney/Travefy",
  },
  {
    title: "Vaultify",
    type: "Security / Python",
    category: "fullstack",
    description:
      "Secure password management tool in Python that encrypts and stores credentials using a master key, OTP verification, and strong key generation.",
    tech: ["Python", "Cryptography", "CLI"],
    github: "https://github.com/Darshitvarshney/Vaultify",
  },
  {
    title: "Notes App Backend",
    type: "Backend Service",
    category: "fullstack",
    description:
      "Scalable backend API service with token authentication, structured data models, and CRUD operations for personal note taking.",
    tech: ["Python", "FastAPI", "MongoDB"],
    github: "https://github.com/Darshitvarshney/Notes-App-Backend",
  },
];

export function ProjectsSection() {
  const ref = useScrollReveal();
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "mobile">("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 sm:px-10 bg-[#111216] relative border-t border-white/[0.06]">
      <div ref={ref} className="max-w-6xl mx-auto transition-all duration-700">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold tracking-widest text-slate-400 uppercase mb-2 block">
              // Selected Artifacts
            </span>
            <h2 className="font-['Anton'] text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white uppercase">
              Featured <span className="text-slate-400">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-white mt-4" />
          </div>
          <p className="text-sm font-medium text-slate-400 max-w-md">
            A curated portfolio of AI systems, scalable backend architectures, and mobile applications
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {[
            { id: "all", label: "All Works" },
            { id: "ai", label: "AI & Multimodal" },
            { id: "fullstack", label: "Full-Stack" },
            { id: "mobile", label: "Mobile" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === tab.id
                  ? "bg-white text-black shadow-lg"
                  : "bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:border-white/30 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={`group relative flex flex-col justify-between rounded-3xl bg-[#181920] border backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl ${
                project.featured
                  ? "border-white/20 hover:border-white/50"
                  : "border-white/[0.08] hover:border-white/25"
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-white/[0.06] border border-white/10 text-white">
                      {project.icon === "ai" && <Sparkles className="w-4 h-4" />}
                      {project.icon === "globe" && <Globe className="w-4 h-4" />}
                      {project.icon === "mobile" && <Smartphone className="w-4 h-4" />}
                      {!project.icon && <Layers className="w-4 h-4" />}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                      {project.type}
                    </span>
                  </div>

                  {project.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-['Syne'] text-xl font-bold mb-3 text-white group-hover:text-slate-200 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-4 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Bullets */}
                {project.bullets && project.bullets.length > 0 && (
                  <ul className="mb-4 space-y-2 text-xs text-slate-400">
                    {project.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-white font-bold mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-white/[0.08]">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-white/30"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{project.githubBackend ? "App Repo" : "GitHub"}</span>
                    </a>
                  )}

                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-white/30"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Backend Repo</span>
                    </a>
                  )}

                  {project.apk && (
                    <a
                      href={project.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white transition-colors py-1.5 px-3.5 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20"
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black transition-colors py-1.5 px-3.5 rounded-lg bg-white hover:bg-slate-200 shadow-md"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3 h-3" />
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
