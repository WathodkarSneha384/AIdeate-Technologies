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
    <section className="py-20 border-y border-white/5 bg-black/30 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
          Powered by enterprise-grade technology
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center gap-2 hover:opacity-100 hover:text-primary transition-all duration-300 cursor-pointer"
            >
              {tech.icon && <tech.icon className="w-8 h-8" />}
              <span className="text-xl font-bold">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
