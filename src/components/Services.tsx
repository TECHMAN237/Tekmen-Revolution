import { motion, AnimatePresence } from "framer-motion";
import { Code2, Palette, Clapperboard, Headphones, type LucideIcon } from "lucide-react";
import { useState } from "react";

const services: { icon: LucideIcon; title: string; subtitle: string; description: string }[] = [
  { 
    icon: Code2, 
    title: "Développement", 
    subtitle: "Web & Logiciel",
    description: "Architecture haute précision pour performance brute."
  },
  { 
    icon: Palette, 
    title: "Design Graphique", 
    subtitle: "& Production Vidéo",
    description: "Esthétique premium au service de l'impact."
  },
  { 
    icon: Clapperboard, 
    title: "Video Editing", 
    subtitle: "Cinematic & Motion",
    description: "Narration visuelle et montage d'élite."
  },
  { 
    icon: Headphones, 
    title: "Support Technique", 
    subtitle: "24/7",
    description: "Excellence opérationnelle et fiabilité garantie."
  },
];

function ServiceCard({ s, i, isHovered, setHoveredIndex }: { s: any, i: number, isHovered: boolean, setHoveredIndex: (idx: number | null) => void }) {
  // 0: Dev (White glass), 1: Design (Dark glass), 2: Video (Dark glass), 3: Support (White glass)
  const isDark = i === 1 || i === 2;
  const isLight = i === 0 || i === 3;

  return (
    <motion.div
      onMouseEnter={() => setHoveredIndex(i)}
      onMouseLeave={() => setHoveredIndex(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative cursor-pointer rounded-[2.5rem] transition-all duration-300 ${
        !isHovered ? "opacity-95" : "opacity-100"
      }`}
    >
      {/* Optimized Outer Glow for Hover */}
      {isHovered && (
        <div 
          className="absolute -inset-4 rounded-[3rem] blur-2xl pointer-events-none transition-opacity duration-500 bg-cyan-500/10 opacity-100"
        />
      )}

      {/* Card Body Container */}
      <div
        className={`relative h-full min-h-[260px] rounded-[2.5rem] p-7 sm:p-9 overflow-hidden transition-all duration-300 border flex flex-col ${
          isDark 
            ? "bg-black/50 backdrop-blur-sm border-white/10 hover:border-cyan-400/30 shadow-none hover:shadow-neon-cyan/20"
            : "bg-white/[0.12] backdrop-blur-sm border-white/20 hover:border-blue-300/40 shadow-none hover:shadow-glow-soft"
        }`}
      >
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full" />

        {/* Icon Wrapper */}
        <div 
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-7 transition-all duration-300 border ${
            isHovered
              ? "bg-gradient-to-br from-cyan-400 to-blue-600 border-transparent shadow-lg" 
              : "bg-white/5 border-white/10"
          }`}
        >
          <s.icon className={`w-7 h-7 transition-colors duration-300 ${
            isHovered ? "text-white" : "text-cyan-400"
          }`} />
        </div>

        {/* Text Content */}
        <div className="space-y-2.5 relative z-10">
          <h3 className={`font-display font-bold text-lg leading-tight ${
            isLight && !isHovered ? "text-white/95" : "text-white"
          }`}>
            {s.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground/90 font-medium">
            {s.subtitle}
          </p>
        </div>

        {/* Simplified Micro-description */}
        <div className="mt-4 h-10 overflow-hidden relative z-10">
          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-[11px] sm:text-xs text-cyan-300 font-medium italic"
              >
                {s.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Bottom 3 Dots */}
        <div className="mt-6 flex gap-2 items-center relative z-10">
          {[0, 1, 2].map((d) => (
            <div
              key={d}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isHovered
                  ? (d === 0 ? "w-8 bg-cyan-400 shadow-[0_0_8px_cyan]" : "w-1.5 bg-cyan-400/30") 
                  : "w-1.5 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-36 overflow-hidden" style={{ contain: 'layout style' }}>
      {/* High-Visibility Section Background Decor — optimized blur for scroll perf */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,transparent_70%)] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/30 blur-[60px] rounded-full opacity-70" />
        <div className="absolute top-[10%] right-[-5%] w-[450px] h-[450px] bg-blue-600/20 blur-[50px] rounded-full opacity-60" />
        
        {/* Visible Section Grid */}
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-8 leading-[1.1]"
          >
            L’Innovation à 360° : <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">L'Écosystème Digital</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground/70 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Chez TEKMEN REVOLUTION, nous transformons votre vision en un produit tangible, 
            esthétique et performant. Une approche globale pour des solutions qui dominent.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <ServiceCard 
              key={s.title} 
              s={s} 
              i={i} 
              isHovered={hoveredIndex === i} 
              setHoveredIndex={setHoveredIndex} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
