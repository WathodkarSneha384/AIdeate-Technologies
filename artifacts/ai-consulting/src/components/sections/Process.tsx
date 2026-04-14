import { motion } from "framer-motion";
import { Search, PenTool, Database, Code, Rocket, Activity } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "Discovery",
    description: "Identify high-ROI AI use cases and operational bottlenecks."
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Architecture",
    description: "Design resilient, scalable systems tailored to your tech stack."
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Data",
    description: "Prepare, clean, and vectorise enterprise data for LLM consumption."
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Development",
    description: "Iterative engineering of agents, RAG pipelines, and AI features."
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Deployment",
    description: "Secure, monitored rollout to production environments."
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Optimization",
    description: "Continuous evaluation and fine-tuning of AI outputs."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Our Methodology</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A rigorous, proven framework for bringing AI systems from concept to production.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 md:-ml-[1px] w-[2px] bg-white/10">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-primary/50 to-transparent"
            ></motion.div>
          </div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2"></div>
                
                <div className="absolute left-0 md:left-1/2 -ml-3 w-14 h-14 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(182,255,59,0.2)] z-10">
                  {step.icon}
                </div>

                <div className={`pl-20 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
                }`}>
                  <div className="glass-card p-6 rounded-2xl">
                    <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">Step 0{index + 1}</span>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
