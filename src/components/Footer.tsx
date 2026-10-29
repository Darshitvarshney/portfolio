import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 sm:px-10 border-t border-white/[0.08] bg-[#0c0d10]/90 backdrop-blur-[2px]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <span className="font-['Anton'] font-normal text-white text-xl tracking-wide uppercase">
            DARSHIT<span className="text-white/60">.</span>
          </span>
          <span className="text-slate-600">|</span>
          <p className="text-xs text-slate-400 font-medium">
            © {new Date().getFullYear()} <span className="text-slate-200">Darshit Varshney</span>. All rights reserved.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 shadow-md"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
