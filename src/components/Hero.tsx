import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import dashboardImg from "../../dashboard.png";


export function Hero() {
  return (
    <section id="home" className="relative pt-36 sm:pt-40 lg:pt-44 pb-12 overflow-hidden">
      {/* Local hero accent glows (scene background handled globally) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan-glow)]/40 to-transparent" />
      </div>

      {/* Spline Animation Background - Positioned lower, behind buttons and dashboard */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 top-[280px] w-full max-w-6xl h-[900px] z-0 pointer-events-none"
        dangerouslySetInnerHTML={{
          __html: '<spline-viewer url="https://prod.spline.design/eS0S-ISUdGML49-e/scene.splinecode" background="transparent" style="width: 100%; height: 100%; display: block; background-color: transparent; mix-blend-mode: screen;"></spline-viewer>'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-muted-foreground mx-auto mb-8"
        >
          <span className="text-[var(--cyan-glow)]">✨</span> L'Excellence Technologique
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-[1.1] mb-6"
        >
          La puissance de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#28B6FF]">TEKMEN</span>
          <br />REVOLUTION
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Connectez votre entreprise avec les solutions parfaites grâce à notre 
          expertise intelligente. Plus rapide, plus précis, plus efficace en Design, Web, Vidéo et Ingénierie.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-[#6D28D9] hover:bg-[#5B21B6] transition-colors w-full sm:w-auto">
            Réserver une Démo <ArrowRight className="w-4 h-4" />
          </a>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto">
            Découvrir comment ça marche
          </button>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mx-auto max-w-4xl mt-12 sm:mt-16 group"
        >
          {/* Intense Outer Glow behind dashboard */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 via-cyan-500/30 to-purple-600/30 rounded-[2rem] blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000" />
          <div className="absolute inset-x-10 -bottom-10 h-40 rounded-full blur-3xl bg-gradient-to-r from-purple-600/50 to-cyan-500/50" />

          <div className="relative z-20 rounded-2xl overflow-hidden border border-white/10">
            {/* Global opacity set to 75% as requested, with screen blend mode to keep it premium. */}
            <img 
              src={dashboardImg} 
              alt="Tekmen Revolution Dashboard" 
              className="w-full h-auto object-contain mix-blend-screen opacity-75"
            />

            {/* Real Interactive Buttons overlaid on the dashboard */}
            <div className="absolute bottom-[10%] left-0 right-0 flex justify-center gap-4 px-4">
              <a href="#services" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/25 transition-all hover:scale-105">
                Découvrir nos services
              </a>
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <Play className="w-4 h-4 fill-current" /> Regardez la vidéo
              </button>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
