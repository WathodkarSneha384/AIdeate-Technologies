import { motion } from "framer-motion";

const metrics = [
  {
    value: "↓ 60%",
    label: "support cost",
    description: "AI-powered support agent replacing 60% of tier-1 tickets."
  },
  {
    value: "↑ 3x",
    label: "response speed",
    description: "Automated customer response pipeline deployed globally."
  },
  {
    value: "80%",
    label: "workflows automated",
    description: "End-to-end workflow automation platform for operations."
  }
];

export default function Results() {
  return (
    <section id="results" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(182,255,59,0.05)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Transformative Impact</h2>
          <p className="text-muted-foreground text-lg">We don't build toys. We build systems that directly impact the bottom line.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-8 rounded-2xl relative overflow-hidden group"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full duration-1000 transition-all z-0 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2">
                  {metric.value}
                </div>
                <div className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                  {metric.label}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
