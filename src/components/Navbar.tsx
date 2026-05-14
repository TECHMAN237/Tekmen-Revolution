import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Cpu } from "lucide-react";
import logoImg from "../../logo.png";

const links = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Portfolio", href: "#portfolio" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl ${
          scrolled ? "glass-strong shadow-glow-soft" : "glass"
        }`}
      >
        <div className="flex items-center px-5 sm:px-6 py-3">
          {/* Logo Container (Left) */}
          <div className="flex-1 flex justify-start">
            <a href="#home" className="flex items-center group">
              <img 
                src={logoImg} 
                alt="Tekmen Revolution Logo" 
                className="h-8 sm:h-10 w-auto object-contain" 
              />
            </a>
          </div>

          {/* Desktop Nav (Center) */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l, idx) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan-glow)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Container (Right) */}
          <div className="flex-1 flex justify-end items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white btn-primary-gradient transition-all hover:scale-105"
            >
              Lancer un Projet
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg glass"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/5"
            >
              <nav className="flex flex-col p-4 gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="sm:hidden mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white btn-primary-gradient"
                >
                  Lancer un Projet <ArrowRight className="w-4 h-4" />
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
