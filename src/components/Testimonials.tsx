import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

/* ──────────────────────────────────────────────
   TEMPLATE DATA — Personnalisez ici vos témoignages
   ────────────────────────────────────────────── */
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;       // URL de l'image ou initiales
  rating: number;       // 1–5 étoiles
  text: string;
  projectType: string;  // Ex: "Site Web", "Design", "Vidéo"
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Laurent",
    role: "Directrice Marketing",
    company: "NovaTech Solutions",
    avatar: "",
    rating: 5,
    text: "TEKMEN REVOLUTION a complètement transformé notre présence digitale. Le design est époustouflant et les performances du site ont dépassé toutes nos attentes. Un vrai partenaire stratégique.",
    projectType: "Site Web",
  },
  {
    id: 2,
    name: "Marc Dubois",
    role: "CEO & Fondateur",
    company: "StartUp Vision",
    avatar: "",
    rating: 5,
    text: "Une expertise rare qui combine créativité et excellence technique. Notre application a été livrée dans les délais avec une qualité irréprochable. Je recommande sans hésitation.",
    projectType: "Application Web",
  },
  {
    id: 3,
    name: "Amina Diallo",
    role: "Responsable Communication",
    company: "Agence Horizon",
    avatar: "",
    rating: 5,
    text: "Les vidéos promotionnelles réalisées par TEKMEN ont généré un engagement record sur nos réseaux sociaux. Le montage est cinématique, l'attention au détail est remarquable.",
    projectType: "Vidéo",
  },
  {
    id: 4,
    name: "Jean-Pierre Martin",
    role: "Directeur Technique",
    company: "CloudBridge",
    avatar: "",
    rating: 4,
    text: "La refonte complète de notre identité visuelle a propulsé notre marque à un niveau supérieur. Chaque élément graphique respire le professionnalisme et l'innovation.",
    projectType: "Design Graphique",
  },
  {
    id: 5,
    name: "Claire Beaumont",
    role: "Product Manager",
    company: "FinEdge",
    avatar: "",
    rating: 5,
    text: "Travailler avec TEKMEN REVOLUTION est une expérience fluide et inspirante. Ils comprennent la vision du client et la transcendent avec des solutions technologiques avant-gardistes.",
    projectType: "UX/UI Design",
  },
  {
    id: 6,
    name: "Youssef Benali",
    role: "Entrepreneur",
    company: "Digital Nomad Co.",
    avatar: "",
    rating: 5,
    text: "Mon site e-commerce est passé de 0 à 500 ventes mensuelles grâce à la stratégie digitale et au design immersif de TEKMEN. Un investissement qui s'est rentabilisé en un mois.",
    projectType: "E-commerce",
  },
];

/* ──────────────────────────────────────────────
   Helpers
   ────────────────────────────────────────────── */
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]"
              : "text-white/15"
          }`}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Project-type badge colors
   ────────────────────────────────────────────── */
const badgeColors: Record<string, string> = {
  "Site Web": "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-300",
  "Application Web": "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300",
  "Vidéo": "from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-300",
  "Design Graphique": "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300",
  "UX/UI Design": "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300",
  "E-commerce": "from-violet-500/20 to-fuchsia-500/20 border-violet-500/30 text-violet-300",
};

function getBadgeClass(projectType: string) {
  return badgeColors[projectType] || "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-300";
}

/* ──────────────────────────────────────────────
   Stats
   ────────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Projets Livrés" },
  { value: "98%", label: "Clients Satisfaits" },
  { value: "5.0", label: "Note Moyenne" },
  { value: "24/7", label: "Support Client" },
];

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */
export function Testimonials() {
  const [activePage, setActivePage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(activePage * perPage, activePage * perPage + perPage);

  return (
    <section
      id="testimonials"
      className="relative min-h-screen py-24 sm:py-32 overflow-hidden"
      style={{ contain: "layout style" }}
    >
      {/* ── Background Decor ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-8%] w-[500px] h-[500px] bg-purple-600/30 blur-[60px] rounded-full opacity-60" />
        <div className="absolute bottom-[10%] right-[-8%] w-[450px] h-[450px] bg-indigo-500/25 blur-[60px] rounded-full opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_55%)]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black tracking-[0.2em] text-purple-400 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,1)] animate-pulse" />
            Témoignages
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.05] tracking-tight">
            Ce que nos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-[#28B6FF]">
              clients
            </span>{" "}
            disent
          </h2>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
            Découvrez les retours de ceux qui nous ont fait confiance pour transformer leur vision en réalité digitale.
          </p>
        </motion.div>

        {/* ── Spline 3D Animation — Below Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-[600px] h-[300px] sm:h-[400px] relative z-0 mb-8 pointer-events-none"
        >
          <div className="w-full h-full relative opacity-90">
            <div className="absolute -inset-8 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none" />
            <iframe
              src="https://my.spline.design/widgetscarouselcopycopy-I8B5wVUEzU5JzXcPqYfI2tYq-g0Z/"
              frameBorder="0"
              width="100%"
              height="100%"
              title="Spline 3D Animation"
              style={{ border: "none" }}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl glass text-center group hover:border-purple-500/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
              <p className="text-2xl sm:text-3xl font-display font-bold text-gradient relative z-10">{s.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground/70 font-medium relative z-10">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Featured Testimonial (First Card — Highlighted) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-16"
        >
          <div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent border border-purple-500/20 backdrop-blur-sm overflow-hidden group hover:border-purple-500/40 transition-all duration-700">
            {/* Glow accent */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/15 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 blur-[40px] rounded-full" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <Quote className="w-12 h-12 text-purple-400/60" />
              </div>
              <div className="flex-1">
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light italic">
                  "{testimonials[0].text}"
                </p>
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30">
                      {testimonials[0].avatar ? (
                        <img src={testimonials[0].avatar} alt={testimonials[0].name} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        getInitials(testimonials[0].name)
                      )}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base">{testimonials[0].name}</p>
                      <p className="text-muted-foreground/70 text-sm">
                        {testimonials[0].role} — <span className="text-purple-400">{testimonials[0].company}</span>
                      </p>
                    </div>
                  </div>
                  <div className="sm:ml-auto flex items-center gap-3">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r border text-xs font-semibold ${getBadgeClass(testimonials[0].projectType)}`}>
                      {testimonials[0].projectType}
                    </div>
                    <StarRating rating={testimonials[0].rating} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Testimonial Cards Grid ── */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visible.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="relative h-full p-7 rounded-[2rem] frost-card group hover:scale-[1.02] transition-transform duration-500">
                    {/* Accent glow */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-500/10 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header: Badge + Rating */}
                      <div className="flex items-center justify-between mb-5">
                        <div className={`px-2.5 py-1 rounded-full bg-gradient-to-r border text-[10px] font-semibold ${getBadgeClass(t.projectType)}`}>
                          {t.projectType}
                        </div>
                        <StarRating rating={t.rating} />
                      </div>

                      {/* Quote */}
                      <Quote className="w-8 h-8 text-purple-500/30 mb-3 flex-shrink-0" />

                      <p className="text-sm sm:text-base text-white/80 leading-relaxed flex-1 font-light">
                        "{t.text}"
                      </p>

                      {/* Divider */}
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500/80 to-indigo-600/80 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-purple-500/20">
                          {t.avatar ? (
                            <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover" />
                          ) : (
                            getInitials(t.name)
                          )}
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">{t.name}</p>
                          <p className="text-muted-foreground/60 text-xs">
                            {t.role} · <span className="text-purple-400/80">{t.company}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={() => setActivePage((p) => Math.max(0, p - 1))}
                disabled={activePage === 0}
                className="p-3 rounded-full glass hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Page précédente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === activePage
                        ? "bg-purple-400 shadow-[0_0_12px_rgba(167,139,250,0.8)] scale-125"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActivePage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={activePage === totalPages - 1}
                className="p-3 rounded-full glass hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Page suivante"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* ── CTA Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-24 text-center"
        >
          <div className="relative max-w-3xl mx-auto p-10 sm:p-14 rounded-[2.5rem] bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent border border-white/8 backdrop-blur-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-purple-500/15 blur-[80px] rounded-full" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Prêt à rejoindre nos clients satisfaits ?
              </h3>
              <p className="text-muted-foreground/70 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
                Discutons de votre projet et découvrez comment TEKMEN REVOLUTION peut transformer votre vision en réalité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white btn-primary-gradient shadow-xl shadow-purple-500/20"
                >
                  Lancer un Projet
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-sm font-bold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                >
                  Retour à l'accueil
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
