import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    value: "@Darshitvarshney",
    href: "https://github.com/Darshitvarshney",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "in/darshit-varshney",
    href: "https://www.linkedin.com/in/darshit-varshney-422002390",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: "darshitvarshney1928@gmail.com",
    href: "mailto:darshitvarshney1928@gmail.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 9927231085",
    href: "tel:+919927231085",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
];

export function ContactSection() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 bg-[#14151b] relative border-t border-white/[0.06]">
      <div ref={ref} className="max-w-5xl mx-auto transition-all duration-700">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold tracking-widest text-slate-400 uppercase mb-2 block">
            // Direct Inquiries
          </span>
          <h2 className="font-['Anton'] text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white uppercase mb-3">
            Get in <span className="text-slate-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-white mb-6 mx-auto" />
          <p className="text-base text-slate-300 max-w-lg mx-auto font-normal">
            I'm open to freelance work, collaborations, and interesting opportunities.
            Feel free to reach out!
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-[#181920] border border-white/[0.08] hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300 group shadow-2xl"
            >
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-white mb-4 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-md">
                {s.icon}
              </div>

              <div className="flex items-center gap-1 text-white font-['Syne'] font-bold text-base group-hover:text-slate-200 transition-colors">
                <span>{s.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <span className="text-xs text-slate-400 font-medium mt-1 truncate max-w-full">
                {s.value}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
