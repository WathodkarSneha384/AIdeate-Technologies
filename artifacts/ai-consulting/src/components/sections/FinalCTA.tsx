import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-3xl border border-primary/20 p-8 text-center shadow-[0_0_50px_rgba(139,92,246,0.24)] glass-card md:p-16"
        >
          <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-5xl">Build Your AI Advantage With Confidence</h2>
          <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg">
            Move from experiments to enterprise execution with a roadmap, architecture, and delivery partner built for measurable outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group h-12 w-full rounded-full bg-primary px-7 text-sm text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(167,139,250,0.5)] sm:h-14 sm:w-auto sm:px-8 sm:text-base">
              Schedule Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 w-full rounded-full border-white/20 px-7 text-sm text-white hover:border-white/40 hover:bg-white/5 sm:h-14 sm:w-auto sm:px-8 sm:text-base">
              Request Implementation Plan
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
