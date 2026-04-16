import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AIdeate didn't just build us a chatbot; they architected an entire automated support infrastructure that cut our operational costs in half within three months.",
    name: "Sarah Jenkins",
    title: "VP of Operations",
    company: "FinTech Global",
    outcome: "Reduced support ops cost by 50%"
  },
  {
    quote: "The generative AI tools they deployed for our internal teams act like force multipliers. Our engineers are moving 3x faster with the copilot they designed.",
    name: "Marcus Chen",
    title: "CTO",
    company: "DataSphere",
    outcome: "3x faster internal engineering throughput"
  },
  {
    quote: "Finding an AI partner that understands both deep technical architecture and actual business value is rare. AIdeate Technologies delivers on both.",
    name: "Elena Rodriguez",
    title: "Chief Strategy Officer",
    company: "HealthSync AI",
    outcome: "Enterprise rollout completed in one quarter"
  }
];

export default function Testimonials() {
  return (
    <section className="relative border-y border-white/5 bg-black/40 py-20 md:py-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-14 grid gap-6 md:mb-16 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold text-white md:text-4xl">Trusted by Industry Leaders</h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
              Executive teams trust us to deliver secure, business-aligned AI systems that perform reliably under real enterprise constraints.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Client Confidence Signals</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                <p className="text-lg font-bold text-white">95%</p>
                <p className="text-xs text-muted-foreground">Renewal intent</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                <p className="text-lg font-bold text-white">4.9/5</p>
                <p className="text-xs text-muted-foreground">Stakeholder rating</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.04] md:p-8"
            >
              <div>
                <Quote className="w-8 h-8 text-primary/40 mb-6" />
                <p className="mb-8 text-base leading-relaxed text-white/90 md:text-lg">"{test.quote}"</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold text-white">{test.name}</div>
                <div className="text-sm text-primary">{test.title}, {test.company}</div>
                <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{test.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
