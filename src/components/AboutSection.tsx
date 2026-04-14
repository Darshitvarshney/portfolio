import { useScrollReveal } from "@/hooks/useScrollReveal";

export function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-16 h-1 bg-teal rounded-full mb-8" />
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a detail-oriented and self-driven B.Tech Computer Science student 
              at Ajay Kumar Garg Engineering College, Ghaziabad. I have a strong 
              foundation in Python programming and backend development.
            </p>
            <p>
              Currently diving deep into AI and Machine Learning, I'm passionate 
              about applying data-driven techniques to solve real-world problems.
              I enjoy building modular, efficient systems that scale.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Location", value: "Aligarh, Uttar Pradesh" },
              { label: "Email", value: "darshitvarshney1928@gmail.com" },
              { label: "Education", value: "B.Tech CS (Current)" },
              { label: "Focus", value: "Backend Dev, AI/ML" },
            ].map((item) => (
              <div key={item.label} className="flex gap-3">
                <span className="text-teal font-medium min-w-[100px]">{item.label}:</span>
                <span className="text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
