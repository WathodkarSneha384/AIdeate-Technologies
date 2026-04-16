"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ValueOpportunity from "@/components/sections/ValueOpportunity";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const queryClient = new QueryClient();

export default function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
          <Navbar />
          <main>
            <Hero />
            <ValueOpportunity />
            <Services />
            <Process />
            <TechStack />
            <Results />
            <Testimonials />
            <FinalCTA />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
