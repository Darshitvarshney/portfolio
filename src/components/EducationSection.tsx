import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    period: "2024 – 2028",
    title: "B.Tech in Computer Science",
    institution: "Ajay Kumar Garg Engineering College, Ghaziabad",
    description: "Currently pursuing a Bachelor's degree in Computer Science with focus on backend development and AI/ML.",
  },
  {
    period: "2023",
    title: "Class XII — CBSE",
    institution: "Blue Bird Senior Secondary School, Aligarh",
    description: "Completed senior secondary education under the CBSE curriculum.",
  },
];

export function EducationSection() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-24 px-6 bg-surface">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          My <span className="text-primary">Education</span>
        </h2>
        <div className="w-16 h-1 bg-teal rounded-full mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={item.period}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start gap-8`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-2 z-10" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <span className="text-sm font-medium text-teal">{item.period}</span>
                  <h3 className="font-heading text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-sm text-primary mt-0.5">{item.institution}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
