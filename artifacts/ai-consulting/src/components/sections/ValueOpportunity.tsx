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
    title: "Build Your Own AI Products",
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
    <section id="solutions" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">The AI Opportunity</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Deploying AI is no longer optional. We help you identify and execute high-leverage AI initiatives.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                {opp.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-6">{opp.title}</h3>
              <ul className="space-y-4 flex-1">
                {opp.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shadow-[0_0_8px_rgba(182,255,59,0.8)]"></div>
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
