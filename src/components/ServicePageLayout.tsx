import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Star, ChevronDown, type LucideIcon } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import logoImg from "../../logo.png";

/* ─── Interfaces ─── */
export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  category: string;
  items: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PricingCard {
  label: string;
  price: string;
  description: string;
  icon: LucideIcon;
}

export interface SubscriptionPlan {
  name: string;
  features: string[];
  price: string;
  highlighted?: boolean;
}

export interface PortfolioItem {
  title: string;
  tag: string;
  gradient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageData {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  whyChooseUs: WhyChooseUsItem[];
  services: ServiceCategory[];
  process: ProcessStep[];
  pricing: PricingCard[];
  pricingNote?: string;
  subscriptions: SubscriptionPlan[];
  subscriptionLabel?: string;
  portfolio: PortfolioItem[];
  faq: FAQItem[];
}

/* ─── Nav Tabs Definition ─── */
const navLinks = [
  { label: "🎨 Graphic Design", href: "/services/graphic-design" },
  { label: "🎬 Montage Vidéo", href: "/services/montage-video" },
  { label: "💻 Développement", href: "/services/developpement-web" },
  { label: "📈 Marketing Digital", href: "/services/marketing-digital" },
];

/* ─── Motion Fade-In Wrapper ─── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section Heading Component ─── */
function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16 max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7 }}
        className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base text-muted-foreground/80 font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/* ─── FAQ Accordion Item ─── */
function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 py-4 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 font-display font-semibold text-white/95 hover:text-white transition-colors"
      >
        <span className="text-base sm:text-lg pr-4">{item.question}</span>
        <ChevronDown className={`w-5 h-5 text-purple-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm sm:text-base text-muted-foreground/80 pt-2 pb-4 leading-relaxed font-light">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Process Timeline Component ─── */
function ProcessTimeline({ process, serviceTitle }: { process: ProcessStep[]; serviceTitle: string }) {
  return (
    <div className="relative">
      {/* Desktop: Horizontal timeline */}
      <div className="hidden md:block">
        <div className="flex items-start justify-between pt-8">
          {process.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center flex-1 relative"
            >
              {/* Step number */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                <span className="font-bold text-white text-sm">{idx + 1}</span>
              </div>

              {/* Connector line */}
              {idx < process.length - 1 && (
                <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent" />
              )}

              <h4 className="font-display font-semibold text-base text-white mb-2 max-w-[120px]">
                {step.title}
              </h4>
              <p className="text-xs text-muted-foreground/70 leading-relaxed font-light max-w-[120px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical timeline */}
      <div className="md:hidden">
        <div className="space-y-6">
          {process.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                  <span className="font-bold text-white text-sm">{idx + 1}</span>
                </div>
                {idx < process.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-purple-500/50 to-transparent mt-3" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-display font-semibold text-base text-white mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground/70 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Premium Layout ─── */
export function ServicePageLayout({ data }: { data: ServicePageData }) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const Icon = data.icon;

  return (
    <main className="relative min-h-screen text-foreground bg-[#0B0F19] overflow-x-hidden">
      {/* ─── HEADER/NAVBAR ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto max-w-7xl flex items-center justify-between py-3.5">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoImg} alt="Tekmen Revolution" className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-white/[0.03] border border-white/5">
              {navLinks.map((link) => {
                const isActive = currentPath === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href as any}
                    className={`relative px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_4px_15px_rgba(124,58,237,0.3)]"
                        : "text-muted-foreground/70 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Mobile Nav Trigger */}
          <Link
            to="/"
            hash="services"
            className="md:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            Services
          </Link>
        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-600/15 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 border border-purple-500/30 mb-10 mx-auto"
          >
            <Icon className="w-12 h-12 text-purple-300" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8"
          >
            {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
          >
            <a
              href="https://wa.me/237697368251?text=Bonjour%2C%20je%20souhaite%20demander%20un%20devis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)]"
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/237697368251"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/[0.06] border border-white/10 hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── POURQUOI NOUS CHOISIR ─── */}
      <section className="relative py-24 bg-gradient-to-b from-transparent to-[#101524]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            title="Pourquoi choisir ce service"
            subtitle="Une approche expertes qui garantit des résultats exceptionnels."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {data.whyChooseUs.map((item, idx) => {
              const WIcon = item.icon;
              return (
                <FadeIn key={item.title} delay={idx * 0.15}>
                  <div className="h-full p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 flex items-center justify-center mb-6 mx-auto">
                      <WIcon className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/75 leading-relaxed font-light flex-grow">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PROCESSUS DE TRAVAIL ─── */}
      <section className="relative py-24 bg-gradient-to-b from-[#101524] to-transparent">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Notre processus de travail"
            subtitle="Une méthodologie éprouvée en 5 étapes pour des résultats optimaux."
          />

          <ProcessTimeline process={data.process} serviceTitle={data.title} />
        </div>
      </section>

      {/* ─── CE QUE NOUS PROPOSONS ─── */}
      <section className="relative py-24 bg-gradient-to-b from-transparent to-[#101524]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            title="Nos prestations"
            subtitle="Des solutions complètes adaptées à votre stratégie."
          />

          <div className="space-y-12">
            {data.services.map((cat, ci) => (
              <FadeIn key={cat.category} delay={ci * 0.15}>
                {data.services.length > 1 && (
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-white mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-gradient-to-r from-purple-500 to-transparent" />
                    {cat.category}
                  </h3>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="group relative flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-sm sm:text-base text-white/95 font-medium group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXEMPLES DE RÉALISATIONS ─── */}
      <section className="relative py-24 bg-gradient-to-b from-[#101524] to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            title="Nos réalisations"
            subtitle="Des projets qui parlent de nos compétences et de nos succès clients."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.portfolio.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.15}>
                <div className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-purple-500/25 transition-all duration-300 flex flex-col h-72">
                  <div className={`w-full h-44 bg-gradient-to-br ${item.gradient} relative flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3),transparent_70%)]" />
                    <span className="text-2xl font-display font-bold text-white/50 group-hover:text-white/80 transition-colors uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-center">
                    <span className="text-[10px] font-semibold text-purple-400 uppercase tracking-widest mb-1">
                      {item.tag}
                    </span>
                    <h4 className="font-display font-semibold text-sm text-white/90 group-hover:text-white transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TARIFS ─── */}
      <section className="relative py-24 bg-gradient-to-b from-transparent to-[#101524]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Nos Tarifs"
            subtitle="Des offres transparentes avec une valeur claire et mesurable."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.pricing.map((card, idx) => {
              const PCardIcon = card.icon;
              return (
                <FadeIn key={card.label} delay={idx * 0.15}>
                  <div className="group relative h-full flex flex-col justify-between p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 flex items-center justify-center mb-6">
                        <PCardIcon className="w-7 h-7 text-purple-400" />
                      </div>
                      <h3 className="font-display font-semibold text-xl text-white mb-3">
                        {card.label}
                      </h3>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed font-light mb-6">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
                        {card.price}
                      </div>
                      <a
                        href={`https://wa.me/237697368251?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20%3A%20${encodeURIComponent(card.label)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300"
                      >
                        Demander un devis <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {data.pricingNote && (
            <FadeIn delay={0.3}>
              <div className="flex items-start gap-4 px-6 py-5 rounded-2xl bg-purple-500/[0.06] border border-purple-500/15 mt-10 max-w-3xl mx-auto">
                <Star className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground/80 leading-relaxed font-light">
                  {data.pricingNote}
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ─── FORMULES D'ABONNEMENT ─── */}
      <section className="relative py-24 bg-gradient-to-b from-[#101524] to-transparent">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title={data.subscriptionLabel || "Formules d'Abonnement"}
            subtitle="Bénéficiez d'un accompagnement continu et de tarifs préférentiels."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {data.subscriptions.map((plan, idx) => (
              <FadeIn key={plan.name} delay={idx * 0.15}>
                <div
                  className={`relative flex flex-col h-full rounded-3xl p-8 sm:p-10 transition-all duration-500 border ${
                    plan.highlighted
                      ? "bg-gradient-to-b from-purple-600/15 to-indigo-600/10 border-purple-500/40 shadow-[0_0_60px_-15px_rgba(124,58,237,0.3)]"
                      : "bg-white/[0.03] border-white/5 hover:border-white/10"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 tracking-wider uppercase shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                      Populaire
                    </div>
                  )}

                  <h3 className={`font-display font-bold text-xl mb-2 ${plan.highlighted ? "text-purple-300" : "text-white"}`}>
                    {plan.name}
                  </h3>

                  <div className="mt-2 mb-8">
                    <span className="font-display font-bold text-2xl sm:text-3xl text-white">{plan.price}</span>
                  </div>

                  <ul className="space-y-4 flex-grow mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-purple-400" : "text-cyan-400"}`} />
                        <span className="text-sm text-muted-foreground/80 leading-relaxed font-light">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/237697368251?text=Bonjour%2C%20je%20souhaite%20souscrire%20à%20la%20formule%20%3A%20${plan.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-[1.02] ${
                      plan.highlighted
                        ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_25px_rgba(124,58,237,0.4)]"
                        : "text-white bg-white/[0.06] border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    Souscrire <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION FAQ ─── */}
      <section className="relative py-24 bg-gradient-to-b from-transparent to-[#101524]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            title="Questions Fréquentes"
            subtitle="Tout ce que vous devez savoir pour démarrer notre collaboration sereinement."
          />

          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-10 space-y-2">
            {data.faq.map((item, index) => (
              <FAQAccordion key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL PREMIUM ─── */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-r from-purple-900/40 via-[#0B0F19] to-indigo-900/30">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-8 tracking-tight">
              Prêt à développer votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                présence digitale
              </span>{" "}
              ?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground/75 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Nous accompagnons les entreprises, marques et entrepreneurs dans leur croissance digitale grâce à des solutions créatives et performantes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto sm:max-w-none">
              <a
                href="https://wa.me/237697368251?text=Bonjour%2C%20je%20souhaite%20demander%20un%20devis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all shadow-[0_0_40px_rgba(124,58,237,0.4)]"
              >
                Demander un devis gratuit <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/237697368251"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-white/[0.06] border border-white/10 hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" /> Contacter sur WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 text-center text-xs text-muted-foreground border-t border-white/5 relative z-10 bg-[#0B0F19]">
        <div className="flex flex-col items-center gap-6">
          <img src={logoImg} alt="TEKMEN REVOLUTION" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <p>© {new Date().getFullYear()} TEKMEN REVOLUTION. Tous droits réservés.</p>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP BUTTON ─── */}
      <a
        href="https://wa.me/237697368251"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </main>
  );
}