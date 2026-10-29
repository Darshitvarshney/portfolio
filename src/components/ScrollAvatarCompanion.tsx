import { useState, useEffect } from "react";
import { X, Sparkles, ChevronUp } from "lucide-react";

interface SectionConfig {
  id: string;
  side: "left" | "right";
  rotateY: number;
  label: string;
  tagline: string;
}

const sectionConfigs: SectionConfig[] = [
  {
    id: "about",
    side: "right",
    rotateY: -10,
    label: "About Me",
    tagline: "B.Tech CS",
  },
  {
    id: "experience",
    side: "left",
    rotateY: 12,
    label: "Experience",
    tagline: "Challan Save Intern",
  },
  {
    id: "projects",
    side: "right",
    rotateY: -12,
    label: "Projects",
    tagline: "8+ Shipped Systems",
  },
  {
    id: "skills",
    side: "left",
    rotateY: 10,
    label: "Tech Stack",
    tagline: "Python, FastAPI, Next.js",
  },
  {
    id: "education",
    side: "right",
    rotateY: -10,
    label: "Education",
    tagline: "AKGEC (2024 – 2028)",
  },
  {
    id: "contact",
    side: "right",
    rotateY: -6,
    label: "Connect",
    tagline: "Let's collaborate!",
  },
];

export function ScrollAvatarCompanion() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [bounce, setBounce] = useState(false);

  // Track scroll position and detect active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Only show companion when user scrolls down past the hero section
      if (scrollY < 260) {
        setVisible(false);
        setActiveSection(null);
        return;
      }

      setVisible(true);

      // Find which section is currently centered/active in viewport
      const viewportCenter = window.innerHeight * 0.45;
      let currentSection = sectionConfigs[0].id;

      for (const config of sectionConfigs) {
        const el = document.getElementById(config.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            currentSection = config.id;
            break;
          } else if (rect.top <= viewportCenter) {
            currentSection = config.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mouse coordinates for interactive 3D avatar tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const normY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePos({
        x: Math.max(-1, Math.min(1, normX)),
        y: Math.max(-1, Math.min(1, normY)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentConfig =
    sectionConfigs.find((s) => s.id === activeSection) || sectionConfigs[0];
  const isRight = currentConfig.side === "right";

  const triggerBounce = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 600);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Scroll avatar companion"
      className="fixed bottom-6 left-4 sm:left-6 z-40 pointer-events-none transition-all duration-700 ease-out"
      style={{
        transform: minimized
          ? isRight
            ? "translate3d(calc(100vw - 100% - 32px), 20px, 0)"
            : "translate3d(0px, 20px, 0)"
          : isRight
          ? "translate3d(calc(100vw - 100% - 32px), 0px, 0)"
          : "translate3d(0px, 0px, 0)",
        opacity: visible ? 1 : 0,
      }}
    >
      {minimized ? (
        // Minimized floating avatar badge
        <button
          onClick={() => setMinimized(false)}
          className="pointer-events-auto p-2 rounded-full bg-[#181920]/90 border border-white/20 shadow-2xl flex items-center gap-2 hover:scale-105 transition-all text-xs text-white"
          title="Restore avatar companion"
        >
          <img
            src="/avatar.png"
            alt="Darshit Avatar"
            className="w-7 h-7 rounded-full object-cover bg-black"
          />
          <span className="font-['Plus_Jakarta_Sans'] font-semibold pr-1">Darshit</span>
        </button>
      ) : (
        // Full Interactive Floating 3D Avatar
        <div className="relative flex flex-col items-center group pointer-events-auto select-none">
          {/* Section Speech Bubble */}
          <div
            onClick={triggerBounce}
            className={`mb-2 px-3.5 py-1.5 rounded-full bg-[#181920]/95 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-2 cursor-pointer hover:border-white/30 transition-all duration-300 ${
              bounce ? "scale-105" : "hover:scale-102"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <div className="flex flex-col text-left">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-white uppercase tracking-wider leading-none">
                {currentConfig.label}
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-slate-400 font-medium leading-tight">
                {currentConfig.tagline}
              </span>
            </div>

            {/* Quick Actions inside pill */}
            <div className="flex items-center gap-1 pl-1 ml-1 border-l border-white/10">
              <button
                onClick={scrollToTop}
                className="p-1 text-slate-400 hover:text-white transition-colors"
                title="Scroll back to top"
              >
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMinimized(true);
                }}
                className="p-1 text-slate-400 hover:text-white transition-colors"
                title="Minimize avatar"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Interactive 3D Avatar Stage */}
          <div
            onClick={triggerBounce}
            className="relative flex flex-col items-center cursor-pointer group"
          >
            {/* Subtle Ambient Studio Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-44 h-32 sm:h-44 bg-white/[0.08] rounded-full blur-2xl pointer-events-none" />

            {/* 3D Character Avatar with live mouse tracking and section rotation */}
            <img
              src="/avatar.png"
              alt="Darshit Varshney 3D Avatar"
              className={`relative z-10 w-24 sm:w-32 md:w-36 lg:w-40 h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-transform duration-500 ${
                bounce ? "scale-110 -translate-y-2" : ""
              }`}
              style={{
                transform: `perspective(800px) rotateY(${
                  currentConfig.rotateY + mousePos.x * 12
                }deg) rotateX(${-mousePos.y * 10}deg) translate3d(${
                  mousePos.x * 8
                }px, ${mousePos.y * 6}px, 0)`,
                transition: "transform 0.15s ease-out",
              }}
            />

            {/* Dynamic Floor Shadow */}
            <div
              className="w-16 sm:w-24 h-3 bg-black/70 rounded-full blur-sm mx-auto -mt-1 sm:-mt-2 pointer-events-none"
              style={{
                transform: `scale(${1 - Math.abs(mousePos.y) * 0.15}) translate3d(${
                  -mousePos.x * 6
                }px, 0, 0)`,
              }}
            />
          </div>
        </div>
      )}
    </aside>
  );
}
