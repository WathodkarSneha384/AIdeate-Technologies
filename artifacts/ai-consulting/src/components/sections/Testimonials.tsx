import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AIdeate didn't just build us a chatbot; they architected an entire automated support infrastructure that cut our operational costs in half within three months.",
    name: "Sarah Jenkins",
    title: "VP of Operations",
    company: "FinTech Global"
  },
  {
    quote: "The generative AI tools they deployed for our internal teams act like force multipliers. Our engineers are moving 3x faster with the copilot they designed.",
    name: "Marcus Chen",
    title: "CTO",
    company: "DataSphere"
  },
  {
    quote: "Finding an AI partner that understands both deep technical architecture and actual business value is rare. AIdeate Technologies delivers on both.",
    name: "Elena Rodriguez",
    title: "Chief Strategy Officer",
    company: "HealthSync AI"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black/40 border-y border-white/5 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Trusted by Industry Leaders</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-primary/40 mb-6" />
                <p className="text-lg text-white/90 leading-relaxed mb-8">"{test.quote}"</p>
              </div>
              <div>
                <div className="font-bold text-white">{test.name}</div>
                <div className="text-sm text-primary">{test.title}, {test.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
