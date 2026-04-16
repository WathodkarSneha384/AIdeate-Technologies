import { motion } from "framer-motion";

const metrics = [
  {
    value: "↓ 60%",
    label: "support cost",
    description: "AI-powered support agent replacing 60% of tier-1 tickets.",
    impact: "Annual operating expenditure reduced by $420K.",
    timeline: "12 weeks to production"
  },
  {
    value: "↑ 3x",
    label: "response speed",
    description: "Automated customer response pipeline deployed globally.",
    impact: "Average first-response time improved from 9 min to under 3 min.",
    timeline: "8 weeks implementation"
  },
  {
    value: "80%",
    label: "workflows automated",
    description: "End-to-end workflow automation platform for operations.",
    impact: "Operations teams reallocated capacity to strategic programs.",
    timeline: "10 weeks rollout"
  }
];

export default function Results() {
  return (
    <section id="results" className="relative py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.16)_0%,transparent_55%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:w-2/3"
        >
          <h2 className="mb-4 font-display text-2xl font-bold text-white md:text-4xl">Transformative Impact</h2>
          <p className="text-base text-muted-foreground md:text-lg">
            We deliver measurable outcomes, not prototypes. Every program is aligned to business KPIs with clear baseline, target, and realized impact.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover group relative overflow-hidden rounded-2xl p-6 md:p-8"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full duration-1000 transition-all z-0 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text font-display text-3xl font-bold text-transparent md:text-4xl">
                  {metric.value}
                </div>
                <div className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                  {metric.label}
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {metric.description}
                </p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-xs uppercase tracking-wide text-primary/90">Business Impact</p>
                  <p className="mt-1 text-sm text-white/85">{metric.impact}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{metric.timeline}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:mt-12 md:grid-cols-3 md:p-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Execution Model</p>
            <p className="mt-1 text-sm text-white/85">Pilot-first, KPI-driven, production-ready by design.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Risk Governance</p>
            <p className="mt-1 text-sm text-white/85">Security, model controls, and compliance embedded from day one.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Operational Readiness</p>
            <p className="mt-1 text-sm text-white/85">Monitoring, fallback paths, and team enablement included.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
