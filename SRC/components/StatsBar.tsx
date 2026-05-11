import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Projets Terminés" },
  { value: "Expertise", label: "Multi-domaine" },
  { value: "Support", label: "24/7" },
];

export function StatsBar() {
  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      {/* Immersive Section Background Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-full bg-cyan-900/10 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
          className="bg-black/40 backdrop-blur-3xl rounded-[3rem] px-6 sm:px-12 py-6 sm:py-8 flex flex-col md:flex-row items-center gap-6 md:gap-4 border border-white/5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] group transition-all duration-500 hover:border-cyan-500/20"
        >
          <div className="flex items-center divide-x divide-white/10 flex-1 w-full">
            {stats.map((s, idx) => (
              <motion.div 
                key={s.label} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx + 0.3, duration: 0.6, ease: "easeOut" }}
                className="flex-1 px-4 sm:px-8 text-center md:text-left"
              >
                <div className="font-display font-bold text-2xl sm:text-4xl text-white leading-none tracking-tight group-hover:text-cyan-400 transition-colors duration-500">
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60 mt-3">{s.label}</div>
              </motion.div>
            ))}
          </div>
          <motion.a 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-black text-white btn-primary-gradient whitespace-nowrap shadow-xl shadow-purple-500/20"
          >
            LANCER VOTRE PROJET <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground/40 font-black uppercase tracking-[0.4em]">
          {["Innovation", "Précision", "Design", "Performance"].map((w, i, arr) => (
            <motion.span 
              key={w} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
              className="flex items-center gap-4 sm:gap-8 group/item"
            >
              <span className="group-hover/item:text-cyan-400 transition-colors duration-300">{w}</span>
              {i < arr.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.2)]" />
              )}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
