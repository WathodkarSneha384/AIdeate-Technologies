import { motion } from "framer-motion";
import { SiOpenai, SiGooglecloud } from "react-icons/si";
import { Cloud, Server } from "lucide-react";

const technologies = [
  { name: "OpenAI", icon: SiOpenai },
  { name: "Anthropic", isText: true },
  { name: "Gemini", isText: true },
  { name: "LangChain", isText: true },
  { name: "LlamaIndex", isText: true },
  { name: "Pinecone", isText: true },
  { name: "Weaviate", isText: true },
  { name: "AWS", icon: Cloud },
  { name: "GCP", icon: SiGooglecloud },
  { name: "Azure", icon: Server }
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-black/30 py-16 md:py-20">
      <div className="container mx-auto px-6 relative z-10">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground md:mb-10 md:text-sm">
          Powered by enterprise-grade technology
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-60 md:gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center gap-2 hover:opacity-100 hover:text-primary transition-all duration-300 cursor-pointer"
            >
              {tech.icon && <tech.icon className="h-6 w-6 md:h-8 md:w-8" />}
              <span className="text-base font-semibold md:text-lg">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
