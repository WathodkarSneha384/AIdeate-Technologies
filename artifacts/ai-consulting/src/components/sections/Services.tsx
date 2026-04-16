import { motion } from "framer-motion";
import { BrainCircuit, Bot, Search, LineChart, Database, Lightbulb } from "lucide-react";

const services = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    title: "Generative AI Engineering",
    description: "LLM apps, copilots, multimodal AI",
    highlights: ["Custom assistants", "Prompt orchestration", "Model evaluation"],
  },
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "AI Agents & Automation",
    description: "Autonomous agents, workflow automation",
    highlights: ["Agentic workflows", "Ops automation", "Human-in-the-loop control"],
  },
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "RAG & Knowledge Systems",
    description: "Enterprise search, document intelligence",
    highlights: ["Vector search", "Knowledge pipelines", "Source-grounded answers"],
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    title: "AI Consulting & Strategy",
    description: "Roadmaps, audits, architecture",
    highlights: ["Use-case discovery", "Risk & governance", "Adoption roadmap"],
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "ML & Data Solutions",
    description: "NLP, predictive analytics, pipelines",
    highlights: ["Feature engineering", "Model lifecycle", "KPI-driven iteration"],
  },
  {
    icon: <Database className="w-6 h-6 text-primary" />,
    title: "AI Infrastructure",
    description: "Vector DBs, APIs, cloud deployment",
    highlights: ["Secure architecture", "Scalable APIs", "Observability & cost control"],
  }
];

const deliveryModel = [
  "Discovery workshop and feasibility mapping",
  "Architecture, data, and model strategy blueprint",
  "Rapid pilot with measurable business KPI targets",
  "Production rollout with monitoring and handover",
];

export default function Services() {
  return (
    <section id="services" className="relative border-y border-white/5 bg-black/50 py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12)_0%,transparent_70%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-4xl">Engineering Capabilities</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              End-to-end AI engineering from strategy to production systems. We focus on measurable business outcomes, secure architecture, and sustainable long-term velocity.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 md:min-w-[300px]"
          >
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
              <p className="text-xl font-bold text-white md:text-2xl">6+</p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground md:text-sm">Core Service Lines</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
              <p className="text-xl font-bold text-white md:text-2xl">24/7</p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground md:text-sm">Operational Support</p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.04] md:p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.28)] transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-base font-medium text-white md:text-lg">{service.title}</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground md:text-base">{service.description}</p>
              <ul className="space-y-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground md:text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] via-white/[0.015] to-transparent p-6 md:mt-12 md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="mb-3 font-display text-xl font-semibold text-white md:text-2xl">How We Deliver</h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Every engagement follows a structured, enterprise-safe execution model designed to reduce risk and accelerate time-to-value.
              </p>
            </div>
            <ul className="space-y-3">
              {deliveryModel.map((step) => (
                <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground md:text-base">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 text-xs text-primary">
                    ✓
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
