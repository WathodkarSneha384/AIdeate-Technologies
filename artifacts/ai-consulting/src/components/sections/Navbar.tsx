import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function AldeateLogoSVG() {
  return (
    <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="50%" stopColor="#22D1FB" />
          <stop offset="100%" stopColor="#A178F0" />
        </linearGradient>
        <linearGradient id="aGrad2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B5EE8" />
          <stop offset="100%" stopColor="#22D1FB" />
        </linearGradient>
      </defs>
      {/* A icon shape */}
      <g>
        {/* Left diagonal stroke of A */}
        <polygon points="4,34 14,6 20,14 12,34" fill="url(#aGrad)" />
        {/* Right diagonal stroke of A */}
        <polygon points="24,6 36,34 28,34 20,14" fill="url(#aGrad2)" />
        {/* Crossbar of A */}
        <rect x="10" y="21" width="18" height="4" rx="1" fill="url(#aGrad2)" opacity="0.9" />
        {/* Circuit dot top right */}
        <circle cx="34" cy="10" r="2.5" fill="#22D1FB" />
        <line x1="34" y1="12.5" x2="34" y2="16" stroke="#22D1FB" strokeWidth="1.2" />
      </g>
      {/* "Aldeate" text */}
      <text x="44" y="22" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="15" fill="#FFFFFF" letterSpacing="0.3">Aldeate</text>
      {/* "TECHNOLOGIES" subtext */}
      <text x="44" y="34" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="7.5" fill="#22D1FB" letterSpacing="2">TECHNOLOGIES</text>
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Results", href: "#results" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <AldeateLogoSVG />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full px-6 shadow-[0_0_20px_rgba(182,255,59,0.3)] hover:shadow-[0_0_30px_rgba(182,255,59,0.5)] transition-all duration-300">
            Book a Call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10">
            <Button className="w-full justify-center bg-primary text-primary-foreground">
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
