import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const current = [...navLinks, { name: "Contact", href: "#contact" }].find(({ href }) => {
        const element = document.getElementById(href.slice(1));
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActiveSection(current.href.slice(1));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 rounded-2xl transition-all duration-300 ${isScrolled ? "bg-background/85 backdrop-blur-xl border border-border shadow-2xl" : "bg-background/35 backdrop-blur-md border border-transparent"}`}>
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate("#home"); }} className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="w-8 h-8 rounded-lg bg-primary text-primary-foreground grid place-items-center text-xs">MD</span>
            <span>Madupa<span className="text-primary">.</span></span>
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); navigate(link.href); }} className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${activeSection === link.href.slice(1) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"}`}>
                {link.name}
              </a>
            ))}
          </div>

          <button onClick={() => navigate("#contact")} className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-bold hover:-translate-y-0.5 transition-transform">
            Hire me <ArrowUpRight className="w-4 h-4" />
          </button>
          <button onClick={() => setIsMobileMenuOpen(value => !value)} className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden max-w-7xl mx-auto mt-2 bg-background/95 backdrop-blur-xl border border-border rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="p-3 space-y-1">
              {[...navLinks, { name: "Contact", href: "#contact" }].map(link => (
                <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); navigate(link.href); }} className={`block px-4 py-3 rounded-xl font-semibold transition-all ${activeSection === link.href.slice(1) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
