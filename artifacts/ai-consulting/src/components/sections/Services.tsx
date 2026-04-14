import { motion } from "framer-motion";
import { BrainCircuit, Bot, Search, LineChart, Database, Lightbulb } from "lucide-react";

const services = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    title: "Generative AI Engineering",
    description: "LLM apps, copilots, multimodal AI",
  },
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "AI Agents & Automation",
    description: "Autonomous agents, workflow automation",
  },
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "RAG & Knowledge Systems",
    description: "Enterprise search, document intelligence",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    title: "AI Consulting & Strategy",
    description: "Roadmaps, audits, architecture",
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "ML & Data Solutions",
    description: "NLP, predictive analytics, pipelines",
  },
  {
    icon: <Database className="w-6 h-6 text-primary" />,
    title: "AI Infrastructure",
    description: "Vector DBs, APIs, cloud deployment",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-black/50 border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(182,255,59,0.03)_0%,transparent_70%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Engineering Capabilities</h2>
            <p className="text-muted-foreground text-lg">Comprehensive AI development from prototype to production. We build resilient, scalable systems.</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(182,255,59,0.2)] transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-display font-medium text-white">{service.title}</h3>
              </div>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
