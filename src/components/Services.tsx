import { motion } from "framer-motion";
import { Code2, Palette, Clapperboard, TrendingUp, ArrowRight, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

const services: { icon: LucideIcon; title: string; subtitle: string; description: string; href: string; emoji: string; valueProposition: string }[] = [
  {
    icon: Palette,
    title: "Graphic Design",
    subtitle: "Identité Visuelle & Print",
    description: "Des créations visuelles professionnelles qui valorisent votre image de marque.",
    href: "/services/graphic-design",
    emoji: "🎨",
    valueProposition: "Transformez votre marque en une identité visuelle mémorable qui capte l'attention.",
  },
  {
    icon: Clapperboard,
    title: "Montage Vidéo",
    subtitle: "Production & Motion",
    description: "Donnez vie à votre communication grâce à des vidéos engageantes.",
    href: "/services/montage-video",
    emoji: "🎬",
    valueProposition: "Des contenus vidéo percutants qui convertissent et fidélisent votre audience.",
  },
  {
    icon: Code2,
    title: "Développement Web & Mobile",
    subtitle: "Sites & Applications",
    description: "Des solutions numériques modernes conçues pour accélérer votre croissance.",
    href: "/services/developpement-web",
    emoji: "💻",
    valueProposition: "Des plateformes performantes qui génèrent des résultats et vous démarquent.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    subtitle: "Stratégie & Acquisition",
    description: "Développez votre visibilité et transformez votre audience en clients.",
    href: "/services/marketing-digital",
    emoji: "📈",
    valueProposition: "Des stratégies data-driven qui boostent vos ventes et votre ROI.",
  },
];

function ServiceCard({
  s,
  i,
  isHovered,
  setHoveredIndex,
}: {
  s: (typeof services)[0];
  i: number;
  isHovered: boolean;
  setHoveredIndex: (idx: number | null) => void;
}) {
  return (
    <Link to={s.href as any}>
      <motion.div
        onMouseEnter={() => setHoveredIndex(i)}
        onMouseLeave={() => setHoveredIndex(null)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.55, delay: i * 0.12 }}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative cursor-pointer rounded-[2rem] transition-all duration-300 h-full flex flex-col"
      >
        {/* Premium glow effect */}
        <div
          className={`absolute -inset-2 rounded-[2.5rem] blur-2xl pointer-events-none transition-opacity duration-500 ${
            isHovered
              ? "opacity-100 bg-gradient-to-br from-purple-600/25 via-indigo-600/15 to-transparent"
              : "opacity-0 bg-gradient-to-br from-purple-600/10 to-transparent"
          }`}
        />

        {/* Card body */}
        <div
          className={`relative h-full min-h-[300px] rounded-[2rem] p-8 sm:p-10 overflow-hidden transition-all duration-400 border flex flex-col justify-between ${
            isHovered
              ? "bg-gradient-to-b from-white/[0.12] to-white/[0.06] border-purple-500/40 shadow-[0_30px_100px_-25px_rgba(124,58,237,0.4)]"
              : "bg-white/[0.04] border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)]"
          } backdrop-blur-sm`}
        >
          {/* Shine sweep effect */}
          <div
            className={`absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/8 to-transparent transition-all duration-700 ${
              isHovered ? "translate-x-full opacity-100" : "-translate-x-full opacity-0"
            }`}
          />

          {/* Top section */}
          <div>
            {/* Emoji badge */}
            <div className="text-4xl mb-6">{s.emoji}</div>

            {/* Icon circle */}
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400 border ${
                isHovered
                  ? "bg-gradient-to-br from-purple-600 to-indigo-600 border-transparent shadow-[0_8px_30px_-8px_rgba(124,58,237,0.6)]"
                  : "bg-white/[0.05] border-white/10"
              }`}
            >
              <s.icon
                className={`w-8 h-8 transition-colors duration-300 ${
                  isHovered ? "text-white" : "text-purple-400"
                }`}
              />
            </div>

            {/* Title & subtitle */}
            <div className="space-y-2 mb-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-tight">
                {s.title}
              </h3>
              <p className="text-sm text-purple-300/80 font-medium">
                {s.subtitle}
              </p>
            </div>

            {/* Value proposition */}
            <p
              className={`text-sm leading-relaxed transition-all duration-400 ${
                isHovered ? "text-muted-foreground/90" : "text-muted-foreground/55"
              }`}
            >
              {s.valueProposition}
            </p>
          </div>

          {/* Bottom CTA */}
          <div
            className={`mt-8 pt-6 border-t border-white/10 transition-all duration-400 ${
              isHovered ? "border-purple-500/20" : ""
            }`}
          >
            <div
              className={`flex items-center gap-2 transition-all duration-400 ${
                isHovered ? "text-purple-300" : "text-white/40"
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wider">Découvrir le service</span>
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-400 ${
                  isHovered ? "translate-x-2" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden" style={{ contain: "layout style" }}>
      {/* Background with depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Animated gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/15 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: "10s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-28">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 leading-[1.1]"
          >
            Nos Services d'Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground/70 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Chez TEKMEN REVOLUTION, nous combinons créativité, technique et stratégie pour vous offrir des solutions digitales qui marquent votre marque et génèrent des résultats concrets.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Link
            to="/services/graphic-design"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:scale-105"
          >
            Explorer nos solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}