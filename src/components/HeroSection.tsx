import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";

const roles = [
  "Backend Developer",
  "Flutter Developer",
  "AI & ML Engineer",
  "Full-Stack Developer",
  "Automation Specialist",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen w-full studio-backdrop flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-hidden select-none">
      
      {/* 4 Viewfinder Framing Corner Brackets */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-8 h-8 sm:w-14 sm:h-14 border-t-2 border-l-2 border-white/70 pointer-events-none z-30" />
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-8 h-8 sm:w-14 sm:h-14 border-t-2 border-r-2 border-white/70 pointer-events-none z-30" />
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-8 h-8 sm:w-14 sm:h-14 border-b-2 border-l-2 border-white/70 pointer-events-none z-30" />
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-8 h-8 sm:w-14 sm:h-14 border-b-2 border-r-2 border-white/70 pointer-events-none z-30" />

      {/* Top Header Bar inside framing */}
      <div className="relative z-20 flex items-center justify-between pt-2 sm:pt-4 px-2 sm:px-4">
        {/* Top-Left: Welcome */}
        <div className="flex flex-col">
          <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-semibold tracking-wider text-slate-200 uppercase">
            Welcome To My Portfolio
          </p>
          <span className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide">
            {text}
            <span className="inline-block w-1 h-3 bg-white ml-1 animate-pulse" />
          </span>
        </div>

        {/* Top-Right: Quick Nav Links */}
        <div className="flex items-center gap-6 sm:gap-10">
          <a
            href="#projects"
            className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold tracking-widest text-slate-200 hover:text-white uppercase transition-colors"
          >
            Work
          </a>
          <a
            href="#experience"
            className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold tracking-widest text-slate-200 hover:text-white uppercase transition-colors"
          >
            Experience
          </a>
          <a
            href="#about"
            className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold tracking-widest text-slate-200 hover:text-white uppercase transition-colors"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Main Center Stage: Giant Typography & Centered Standing 3D Avatar */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-auto py-8">
        
        {/* Giant Background Typography: DARSHIT VARSHNEY */}
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-2 sm:pl-6 pointer-events-none z-0 gap-3 sm:gap-5 md:gap-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <h1 className="font-['Anton'] text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[10.5rem] tracking-tight leading-none text-white/95 uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              DARSHIT
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            {/* Preserved spacing where star was located */}
            <div className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0 pointer-events-none" aria-hidden="true" />

            <h1 className="font-['Anton'] text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[10.5rem] tracking-tight leading-none text-white/95 uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              VARSHNEY
            </h1>
          </div>
        </div>

        {/* Center: Standing 3D Avatar with floating animation */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative">
            {/* 3D Character Avatar */}
            <img
              src="/avatar.png"
              alt="Darshit Varshney 3D Avatar"
              className="w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] h-auto object-contain animate-float-avatar drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
            />

            {/* Floor Ambient Shadow */}
            <div className="w-48 sm:w-64 h-6 sm:h-8 bg-black/70 rounded-full blur-md mx-auto -mt-4 sm:-mt-6 animate-float-shadow pointer-events-none" />

            {/* Doodle Annotation 1: 'Just scroll down' with curly arrow */}
            <div className="absolute top-12 -right-16 sm:-right-24 md:-right-32 hidden sm:flex items-center gap-2 pointer-events-none">
              <div className="flex flex-col items-center">
                {/* SVG Curly Arrow pointing down */}
                <svg
                  width="45"
                  height="65"
                  viewBox="0 0 50 70"
                  fill="none"
                  className="stroke-slate-300 -rotate-12"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M 35 5 Q 10 25 30 45 Q 40 55 20 65" />
                  <polyline points="15,58 20,65 28,62" />
                </svg>
                <span className="font-['Caveat'] text-xl md:text-2xl text-slate-300 font-bold tracking-wide -mt-2 rotate-[-4deg]">
                  Just scroll down
                </span>
              </div>
            </div>

            {/* Doodle Annotation 2: 'Follow me' with curly arrow */}
            <div className="absolute bottom-16 -right-12 sm:-right-20 md:-right-28 hidden sm:flex items-center gap-2 pointer-events-none">
              <div className="flex flex-col items-center">
                {/* SVG Curly Arrow pointing to socials */}
                <svg
                  width="40"
                  height="50"
                  viewBox="0 0 45 55"
                  fill="none"
                  className="stroke-slate-300 rotate-12"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M 10 10 Q 35 20 20 38 Q 12 45 30 50" />
                  <polyline points="25,45 30,50 32,42" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Bar inside framing */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 pb-2 sm:pb-4 px-2 sm:px-4">
        
        {/* Bottom-Left: EXPLORE MORE -> */}
        <a
          href="#about"
          className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold tracking-widest text-slate-200 hover:text-white uppercase transition-all group"
        >
          <span>EXPLORE MORE</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </a>

        {/* Bottom-Right: Follow me with social icons */}
        <div className="flex flex-col sm:items-end items-center gap-2">
          <span className="font-['Caveat'] text-2xl text-slate-200 font-bold tracking-wide">
            Follow me
          </span>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/Darshitvarshney"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#181920] border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white hover:bg-white/10 hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/darshit-varshney-422002390"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#181920] border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white hover:bg-white/10 hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:darshitvarshney1928@gmail.com"
              className="w-9 h-9 rounded-full bg-[#181920] border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white hover:bg-white/10 hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="tel:+919927231085"
              className="w-9 h-9 rounded-full bg-[#181920] border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-white hover:bg-white/10 hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
