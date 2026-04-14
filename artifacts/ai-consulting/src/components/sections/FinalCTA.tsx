import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center glass-card border border-primary/20 rounded-3xl p-12 md:p-20 shadow-[0_0_50px_rgba(182,255,59,0.1)]"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Build Your AI Edge Today</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Stop experimenting with toy projects. Start deploying production-grade AI systems that drive real business value.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-[0_0_20px_rgba(182,255,59,0.3)] hover:shadow-[0_0_40px_rgba(182,255,59,0.5)] transition-all duration-300 group w-full sm:w-auto">
              Book Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-full w-full sm:w-auto">
              Start Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
