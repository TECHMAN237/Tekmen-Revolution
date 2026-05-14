import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-36 overflow-hidden" style={{ contain: 'layout style' }}>
      {/* High-Visibility Section Background Decor — blur reduced for scroll perf */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-[-5%] w-[450px] h-[450px] bg-purple-600/40 blur-[50px] rounded-full opacity-80" />
        <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] bg-cyan-500/30 blur-[50px] rounded-full opacity-70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_60%)] opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black tracking-[0.2em] text-purple-400 uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,1)] animate-pulse" />
              À propos de nous
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.05] tracking-tight">
              À travers <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-[#28B6FF]">TEKMEN REVOLUTION</span>, j'accompagne les entreprises...
            </h2>
            
            <p className="mt-8 text-base sm:text-lg text-muted-foreground/90 leading-relaxed max-w-2xl font-light">
              J'accompagne les entreprises et les particuliers dans la création d'un écosystème digital complet. 
              Mon objectif : transformer votre vision en un produit tangible, esthétique et performant.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 p-8 rounded-[2rem] bg-black/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500/10 blur-2xl rounded-full" />
              <p className="text-lg sm:text-xl font-medium text-white/90 italic relative z-10 leading-relaxed">
                "Pourquoi multiplier les prestataires quand vous pouvez centraliser l'excellence ?"
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full lg:max-w-md"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/70 backdrop-blur p-8 sm:p-12 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:border-purple-500/30 hover:shadow-purple-500/10">
              {/* Subtle halo spot behind the card */}
              <div className="absolute -inset-20 bg-purple-500/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative z-10">
                <p className="text-2xl sm:text-3xl text-white font-bold leading-tight tracking-tight mb-8">
                  Ne vous contentez pas d'exister en ligne, dominez votre secteur.
                </p>
                
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-10" />
                
                <div className="space-y-8">
                  <p className="text-sm text-muted-foreground/80 font-medium">
                    Découvrez toute l'étendue de notre expertise sur mon portfolio :
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <motion.a 
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href="#portfolio" 
                      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl text-base font-bold text-white btn-primary-gradient shadow-xl shadow-purple-500/20 transition-all"
                    >
                      EXPLORE OUR PORTFOLIO
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      whileTap={{ scale: 0.98 }}
                      href="#contact" 
                      className="inline-flex items-center justify-center px-8 py-4.5 rounded-2xl text-base font-bold text-white border border-white/10 bg-white/5 transition-all"
                    >
                      BOOK NOW
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
