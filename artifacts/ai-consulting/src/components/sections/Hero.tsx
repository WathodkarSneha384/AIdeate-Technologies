import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/12 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-accent/12 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute left-1/2 top-[18%] h-44 w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/0 via-accent/30 to-primary/0 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide text-primary sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Enterprise AI Engineering Partner
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 max-w-5xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Turn AI Into Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">Competitive Advantage</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          We design, build, and deploy AI systems that automate operations, enhance products, and unlock new revenue streams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button size="lg" className="group h-12 w-full rounded-full bg-primary px-7 text-sm text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(167,139,250,0.5)] sm:h-14 sm:w-auto sm:px-8 sm:text-base">
            Schedule Strategy Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="group h-12 w-full rounded-full border-white/20 px-7 text-sm text-white hover:border-white/40 hover:bg-white/5 sm:h-14 sm:w-auto sm:px-8 sm:text-base">
            Explore Capabilities
            <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform text-muted-foreground" />
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
