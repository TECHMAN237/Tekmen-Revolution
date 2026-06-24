/// <reference types="vite/client" />
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Layout, Clapperboard, Palette, Code2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";
import { useLanguage, translations } from "../lib/LanguageContext";

// 1. Graphic Design Images
const graphicImagesRecord = import.meta.glob('../../graphic_designs/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.keys(graphicImagesRecord).sort((a, b) => {
  const getNum = (str: string) => {
    const base = str.split('/').pop() || '';
    const match = base.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 999999;
  };
  const numA = getNum(a);
  const numB = getNum(b);
  if (numA !== numB) return numA - numB;
  return a.localeCompare(b);
}).map(key => (graphicImagesRecord[key] as { default: string }).default);

// 2. Video Links
const ytVideos = [
  "SWgAKGH0WhA",
  "9D5w6qTOuUA",
  "t7pexa5JySY",
  "lNiMXG3ZmEQ",
  "upt6BKQpFpY"
];

const fbLinks = [
  "https://www.facebook.com/share/r/18WN12aUyo/",
  "https://www.facebook.com/share/v/1DaWbNEpsP/",
  "https://www.facebook.com/share/v/1FX61ojhpm/",
  "https://www.facebook.com/share/v/1BFhorxFDU/"
];

// 3. Web Dev Projects (titles and links are language-independent, only desc changes)
const devProjectsBase = [
  {
    title: "TECHMAN PORTFOLIO",
    link: "https://myportfolio-alpha-pearl.vercel.app/",
    tags: ["React", "Tailwind", "Vercel", "Portfolio"],
    descIdx: 0,
  },
  {
    title: "CLIENT PORTFOLIO",
    link: "https://portfolio-apollos.vercel.app/",
    tags: ["Next.js", "Framer Motion", "UI/UX"],
    descIdx: 1,
  },
  {
    title: "UNIVERSITY CLONE WEBSITE",
    link: "https://student-portal-seven-nu.vercel.app/",
    tags: ["React", "API", "Dashboard", "Education"],
    descIdx: 2,
  },
  {
    title: "ARCHITECTURE WEBSITE",
    link: "https://rock-attitude-website.vercel.app/",
    tags: ["Three.js", "React", "Architecture"],
    descIdx: 3,
  },
  {
    title: "SAFECHILD",
    link: "/safechild-access",
    tags: ["Fullstack", "Social Impact", "Auth"],
    descIdx: 4,
  }
];

export function Portfolio({ isFullPage = false }: { isFullPage?: boolean }) {
  const [activeTab, setActiveTab] = useState<'graphic' | 'video' | 'dev'>('graphic');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Build translated dev projects
  const devProjects = devProjectsBase.map((p) => ({
    ...p,
    desc: t(translations.portfolio.devProjects[p.descIdx].desc),
  }));

  const tabs = [
    { id: 'graphic', label: 'Graphic Design', icon: Palette },
    { id: 'video', label: 'Video Editing', icon: Clapperboard },
    { id: 'dev', label: 'Tech & Web', icon: Code2 },
  ] as const;

  const displayImages = isFullPage ? images : images.slice(0, 6);
  // Show 3 YouTube and 3 FB for a total of 6 if not full page
  const displayYt = isFullPage ? ytVideos : ytVideos.slice(0, 3);
  const displayFb = isFullPage ? fbLinks : fbLinks.slice(0, 3);
  const displayDev = isFullPage ? devProjects : devProjects.slice(0, 6);

  return (
    <section id="portfolio" className={`relative ${isFullPage ? 'py-16 sm:py-24' : 'py-24 sm:py-36'}`}>
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-cyan-600/20 blur-[80px] rounded-full opacity-50" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[80px] rounded-full opacity-50" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        {!isFullPage && (
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display font-semibold tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              {t(translations.portfolio.title)}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">{t(translations.portfolio.titleHighlight)}</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl mx-auto font-light"
            >
              {t(translations.portfolio.subtitle)}
            </motion.p>
          </div>
        )}

        {/* Tabs */}
        {!isFullPage && (
          <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-20">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-white shadow-[0_0_20px_rgba(34,211,238,0.3)]" 
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {(() => {
                      const Icon = tab.icon;
                      return <Icon className="w-4 h-4" />;
                    })()}
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Content Area */}
        <div className="min-h-[400px] relative z-10">
          {isFullPage ? (
            <div className="space-y-32">
              {/* Stacked sections for full page */}
              <div id="graphic-design" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Palette className="w-6 h-6 text-cyan-400" /> Graphic Design
                </h3>
                {/* 4 columns on full page to make them slightly smaller ("reduce by 1/4") */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {displayImages.map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "100px" }}
                      transition={{ delay: (i % 8) * 0.05 }}
                      className="relative group rounded-xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 aspect-square"
                      onClick={() => setSelectedImage(src)}
                    >
                      <img 
                        src={src} 
                        alt={`Graphic Design ${i}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                        <p className="text-white text-xs sm:text-sm font-medium flex items-center gap-2">
                          <Layout className="w-4 h-4 text-cyan-400" />
                          {t(translations.portfolio.viewDesign)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div id="video-editing" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Clapperboard className="w-6 h-6 text-cyan-400" /> Video Editing
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayYt.map((id, i) => (
                    <div key={id} className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/10 aspect-video group">
                      <iframe 
                        src={`https://www.youtube.com/embed/${id}`} 
                        title={`YouTube video ${i}`} 
                        className="w-full h-full absolute inset-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                      />
                    </div>
                  ))}
                  
                  {displayFb.map((link, i) => (
                    <div key={i} className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/10 aspect-[9/16] max-w-[300px] mx-auto group flex items-center justify-center">
                      <iframe 
                        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(link)}&show_text=false`}
                        className="w-full h-full absolute inset-0"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder={0}
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div id="web-dev" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-cyan-400" /> Tech & Web Development
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayDev.map((project, i) => (
                    <motion.a
                      href={project.link !== "#" ? project.link : undefined}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      key={i}
                      className="group relative p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-400/30 transition-all duration-300 flex flex-col h-full overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10 flex-grow">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center mb-6 border border-cyan-400/20 group-hover:scale-110 transition-transform duration-300">
                          <Code2 className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground/80 text-sm mb-6 leading-relaxed">
                          {project.desc}
                        </p>
                      </div>

                      <div className="relative z-10 mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, j) => (
                            <span key={j} className="px-2.5 py-1 text-xs font-medium text-cyan-200 bg-cyan-950/40 rounded-md border border-cyan-800/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {t(translations.portfolio.viewProject)} <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {/* Graphic Design Tab */}
              {activeTab === 'graphic' && (
                <motion.div
                  key="graphic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* 3 columns on home page to enforce "2 by 3" layout for the first 6 items */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {displayImages.map((src, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="relative group rounded-xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 aspect-square"
                        onClick={() => setSelectedImage(src)}
                      >
                        <img 
                          src={src} 
                          alt={`Graphic Design ${i}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                          <p className="text-white text-xs sm:text-sm font-medium flex items-center gap-2">
                            <Layout className="w-4 h-4 text-cyan-400" />
                            {t(translations.portfolio.viewDesign)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-12 text-center relative z-20">
                    <a 
                      href="/portfolio#graphic-design"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      {t(translations.portfolio.viewAllGraphic)} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Video Editing Tab */}
              {activeTab === 'video' && (
                <motion.div
                  key="video"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayYt.map((id, i) => (
                      <div key={id} className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/10 aspect-video group">
                        <iframe 
                          src={`https://www.youtube.com/embed/${id}`} 
                          title={`YouTube video ${i}`} 
                          className="w-full h-full absolute inset-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen 
                        />
                      </div>
                    ))}
                    
                    {displayFb.map((link, i) => (
                      <div key={i} className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/10 aspect-[9/16] max-w-[300px] mx-auto group flex items-center justify-center">
                        <iframe 
                          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(link)}&show_text=false`}
                          className="w-full h-full absolute inset-0"
                          style={{ border: 'none', overflow: 'hidden' }}
                          scrolling="no"
                          frameBorder={0}
                          allowFullScreen={true}
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 text-center relative z-20">
                    <a 
                      href="/portfolio#video-editing"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      {t(translations.portfolio.viewAllVideo)} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Web Dev Tab */}
              {activeTab === 'dev' && (
                <motion.div
                  key="dev"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayDev.map((project, i) => (
                      <motion.a
                        href={project.link !== "#" ? project.link : undefined}
                        target={project.link.startsWith("http") ? "_blank" : undefined}
                        rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        key={i}
                        className="group relative p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-400/30 transition-all duration-300 flex flex-col h-full overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10 flex-grow">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center mb-6 border border-cyan-400/20 group-hover:scale-110 transition-transform duration-300">
                            <Code2 className="w-6 h-6 text-cyan-400" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground/80 text-sm mb-6 leading-relaxed">
                            {project.desc}
                          </p>
                        </div>

                        <div className="relative z-10 mt-auto">
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, j) => (
                              <span key={j} className="px-2.5 py-1 text-xs font-medium text-cyan-200 bg-cyan-950/40 rounded-md border border-cyan-800/50">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {t(translations.portfolio.viewProject)} <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  <div className="mt-12 text-center relative z-20">
                    <a 
                      href="/portfolio#web-dev"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      {t(translations.portfolio.viewAllWeb)} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Selected Graphic Design" 
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain drop-shadow-2xl rounded-[5px] border-[3px] border-white" 
              />
              <button 
                className="absolute top-4 right-4 w-12 h-12 bg-black/60 hover:bg-white hover:text-black rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 text-xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
