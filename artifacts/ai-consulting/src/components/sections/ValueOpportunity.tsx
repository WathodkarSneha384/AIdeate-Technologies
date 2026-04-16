import { motion } from "framer-motion";
import { Workflow, Box, Network } from "lucide-react";

const opportunities = [
  {
    icon: <Workflow className="w-8 h-8 text-primary" />,
    title: "Scale Operations with AI",
    items: [
      "Automate repetitive workflows",
      "Deploy AI chat & voice agents",
      "Optimize business processes",
      "Reduce operational costs"
    ]
  },
  {
    icon: <Box className="w-8 h-8 text-primary" />,
    title: "Build AI Products",
    items: [
      "Launch Micro-SaaS AI tools",
      "Create AI-powered content engines",
      "Develop niche AI applications",
      "Monetize proprietary workflows"
    ]
  },
  {
    icon: <Network className="w-8 h-8 text-primary" />,
    title: "Transform Enterprise Systems",
    items: [
      "Custom LLM & GenAI solutions",
      "RAG-based knowledge platforms",
      "AI copilots for teams",
      "Prompt engineering frameworks"
    ]
  }
];

export default function ValueOpportunity() {
  return (
    <section id="solutions" className="relative z-10 py-20 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-4xl">The AI Opportunity</h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">Deploying AI is no longer optional. We help you identify and execute high-leverage AI initiatives.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover flex flex-col rounded-2xl p-6 md:p-8"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                {opp.icon}
              </div>
              <h3 className="mb-5 font-display text-lg font-semibold text-white md:text-xl">{opp.title}</h3>
              <ul className="flex-1 space-y-3.5 text-sm md:text-base">
                {opp.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
