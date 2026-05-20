import { createFileRoute, Link } from "@tanstack/react-router";
import { Portfolio } from "../components/Portfolio";
import { SceneBackground } from "../components/SceneBackground";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logoImg from "../../logo.png";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

function PortfolioNavbar() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center pointer-events-none transition-all duration-500`}
    >
      <div className={`w-full max-w-7xl transition-all duration-500 pointer-events-auto flex items-center justify-between ${
        scrolled ? "bg-black/70 backdrop-blur-md border border-white/10 shadow-lg py-3 px-4 rounded-full" : "bg-transparent py-4 px-0"
      }`}>
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Accueil</span>
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <a href="#graphic-design" className="px-3 sm:px-5 py-2 rounded-full hover:bg-white/10 text-xs sm:text-sm font-medium transition-all text-white">
            🎨 <span className="hidden md:inline">Graphic Design</span>
          </a>
          <a href="#video-editing" className="px-3 sm:px-5 py-2 rounded-full hover:bg-white/10 text-xs sm:text-sm font-medium transition-all text-white">
            🎬 <span className="hidden md:inline">Video Editing</span>
          </a>
          <a href="#web-dev" className="px-3 sm:px-5 py-2 rounded-full hover:bg-white/10 text-xs sm:text-sm font-medium transition-all text-white">
            💻 <span className="hidden md:inline">Tech & Web</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}


function PortfolioPage() {
  return (
    <main className="relative min-h-screen text-foreground">
      <PortfolioNavbar />
      
      <div className="relative pt-32 pb-12 z-20 mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <h1 className="font-display font-semibold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl mb-6">
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Portfolio</span> Complet
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl mx-auto font-light mb-8">
            Découvrez l'intégralité de nos réalisations. Une collection de nos meilleurs travaux en design, montage et développement.
          </p>
        </div>
      </div>

      <div className="-mt-24">
        <Portfolio isFullPage={true} />
      </div>

      <footer className="py-16 text-center text-xs text-muted-foreground border-t border-white/5 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <img src={logoImg} alt="TEKMEN REVOLUTION" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <p>© {new Date().getFullYear()} TEKMEN REVOLUTION. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
