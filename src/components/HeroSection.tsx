import { useState, useEffect } from "react";

const roles = ["Backend Developer", "Python Engineer", "ML Enthusiast", "Problem Solver"];

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
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal/15 rounded-full blur-[128px]" />

      <div className="max-w-3xl text-center relative z-10">
        <p className="text-teal font-medium tracking-wider uppercase text-sm mb-4 animate-fade-up">
          Hello, I'm
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Darshit Varshney
        </h1>
        <div className="h-12 flex items-center justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="text-xl md:text-2xl text-muted-foreground">
            I'm a{" "}
            <span className="text-primary font-semibold typing-cursor pr-1">
              {text}
            </span>
          </span>
        </div>
        <p className="mt-6 text-muted-foreground max-w-lg mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Engineering student with a passion for building efficient backend systems
          and exploring the frontier of AI & Machine Learning.
        </p>
        <div className="mt-8 flex gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
