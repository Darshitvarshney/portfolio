import { useState, useEffect, useRef } from "react";
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

  // 3D Cursor & Scroll Tracking State
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Handle smooth mouse tracking over the hero viewport
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setMouseOffset({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Live scroll parallax for avatar and typography in Hero
  const scrollShiftY = Math.min(scrollY * 0.35, 180);
  const scrollShiftX = Math.min(scrollY * 0.12, 70);
  const scrollRotY = Math.min(scrollY * 0.03, 14);
  const scrollRotX = Math.min(scrollY * 0.02, 10);

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full studio-backdrop flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-hidden select-none"
    >
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

      {/* Main Center Stage: Solid White Name on Left, Avatar & Arrows Shifted Slightly Right */}
      <div className="relative z-10 flex-1 flex items-center justify-between my-auto py-8">
        
        {/* Left Side: Solid Pure White Name (DARSHIT VARSHNEY) moving in sync with cursor & scroll */}
        <div
          className="absolute inset-y-0 left-0 flex flex-col justify-center items-start pl-4 sm:pl-10 lg:pl-16 pointer-events-none z-0 gap-3 sm:gap-5"
          style={{
            transform: `perspective(1000px) translate3d(${mouseOffset.x * 18 - scrollShiftX * 0.5}px, ${mouseOffset.y * 14 - scrollShiftY * 0.4}px, 0) rotateY(${mouseOffset.x * 8 - scrollRotY * 0.5}deg) rotateX(${-mouseOffset.y * 6}deg)`,
            transition: isHovered ? "transform 0.12s ease-out" : "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="flex items-center gap-3 sm:gap-6">
            <h1 className="font-['Anton'] text-6xl sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[8.25rem] tracking-tight leading-none text-white uppercase drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
              DARSHIT
            </h1>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            {/* Preserved spacing where star was located */}
            <div className="w-11 h-11 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 pointer-events-none" aria-hidden="true" />

            <h1 className="font-['Anton'] text-6xl sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[8.25rem] tracking-tight leading-none text-white uppercase drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
              VARSHNEY
            </h1>
          </div>

          {/* Dynamic Typed Roles below Name */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
            <div className="w-6 sm:w-10 h-[2px] bg-white/50 shrink-0" />
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wider text-slate-300 uppercase">
              {text}
              <span className="inline-block w-0.5 sm:w-1 h-3.5 sm:h-5 bg-white ml-1.5 animate-pulse align-middle" />
            </p>
          </div>
        </div>

        {/* Right-Center: 3D Avatar + Scroll Down Arrow (Positioned cleanly to the right of name without overlap) */}
        <div className="relative z-10 w-full flex justify-center md:justify-end md:pr-14 lg:pr-32 xl:pr-44 2xl:pr-56">
          <div className="relative flex flex-col items-center">
            
            {/* Studio Ambient Backlight behind Avatar */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-white/[0.08] rounded-full blur-3xl pointer-events-none"
              style={{
                transform: `translate3d(${mouseOffset.x * 12 + scrollShiftX * 0.4}px, ${mouseOffset.y * 12 + scrollShiftY * 0.4}px, 0)`,
                transition: isHovered ? "transform 0.15s ease-out" : "transform 0.8s ease-out",
              }}
            />

            {/* 3D Character Avatar with live cursor physics, scroll movement & rotation */}
            <img
              src="/avatar.png"
              alt="Darshit Varshney 3D Avatar"
              className="relative z-10 w-[270px] sm:w-[350px] md:w-[420px] lg:w-[460px] h-auto object-contain cursor-grab active:cursor-grabbing drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)]"
              style={{
                transform: `perspective(1000px) translate3d(${mouseOffset.x * 26 + scrollShiftX}px, ${mouseOffset.y * 18 + scrollShiftY}px, 0) rotateY(${mouseOffset.x * 14 + scrollRotY}deg) rotateX(${-mouseOffset.y * 10 - scrollRotX}deg)`,
                transition: isHovered ? "transform 0.12s ease-out" : "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />

            {/* Dynamic Reacting Floor Shadow */}
            <div
              className="w-44 sm:w-60 h-6 bg-black/80 rounded-full blur-md mx-auto -mt-3 sm:-mt-5 pointer-events-none"
              style={{
                transform: `translate3d(${-mouseOffset.x * 20 - scrollShiftX * 0.4}px, ${-mouseOffset.y * 8 - scrollShiftY * 0.2}px, 0) scale(${Math.max(0.6, 1 - Math.abs(mouseOffset.y) * 0.15 - (scrollY * 0.0008))})`,
                transition: isHovered ? "transform 0.12s ease-out" : "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />

            {/* Doodle Annotation 1: 'Just scroll down' with curly arrow */}
            <div className="absolute top-10 -right-8 sm:-right-14 md:-right-20 lg:-right-22 hidden sm:flex items-center gap-2 pointer-events-none">
              <div className="flex flex-col items-center">
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
                <span className="font-['Caveat'] text-xl md:text-2xl text-slate-300 font-bold tracking-wide -mt-2 rotate-[-4deg] whitespace-nowrap">
                  Just scroll down
                </span>
              </div>
            </div>

            {/* Doodle Annotation 2: 'Follow me' with curly arrow */}
            <div className="absolute bottom-16 -right-6 sm:-right-10 md:-right-14 lg:-right-16 hidden sm:flex items-center gap-2 pointer-events-none">
              <div className="flex flex-col items-center">
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
