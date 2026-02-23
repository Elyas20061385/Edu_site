import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  {
    level: "Beginner",
    title: "Web Fundamentals",
    description: "HTML, CSS, JavaScript basics & Git",
    color: "from-green-500 to-emerald-600",
  },
  {
    level: "Junior",
    title: "Frontend Frameworks",
    description: "React, TypeScript, Tailwind CSS & state management",
    color: "from-blue-500 to-cyan-600",
  },
  {
    level: "Mid-Level",
    title: "Backend & APIs",
    description: "Node.js, databases, REST & GraphQL APIs",
    color: "from-purple-500 to-violet-600",
  },
  {
    level: "Senior",
    title: "Architecture & DevOps",
    description: "System design, CI/CD, Docker, Kubernetes & cloud",
    color: "from-primary to-red-600",
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-primary mb-2 block">
            // your learning path
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Developer Roadmap
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
            A structured path from zero to senior-level web developer
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {steps.map((step, i) => (
            <motion.div
              key={step.level}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10" />

              {/* Content card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-semibold">
                    {step.level}
                  </span>
                  <h3 className="font-display text-lg font-bold mt-1 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-xs text-primary justify-start md:justify-end">
                    <Check className="w-3.5 h-3.5" />
                    <span className={i % 2 === 0 ? "md:order-first md:mr-1" : ""}>
                      Guided projects included
                    </span>
                  </div>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
