/// <reference types="vite/client" />
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ExternalLink,
  Layout,
  Clapperboard,
  Palette,
  Code2,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";
import { useLanguage, translations } from "../lib/LanguageContext";

// 1. Graphic Design Images
const graphicImagesRecord = import.meta.glob(
  "../../graphic_designs/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

function graphicFileName(globKey: string) {
  const raw = globKey.split(/[/\\]/).pop() || "";
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

function exactNumericStem(fileName: string): number | null {
  const stem = fileName.replace(/\.[^.]+$/, "");
  return /^\d+$/.test(stem) ? Number(stem) : null;
}

/** Positions 1–9 are locked to files whose stem is exactly 1…9 (never 10, 11, 1_studio, etc.). */
const LOCKED_FIRST_STEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

/** Aesthetic mix of remaining + new visuals, starting at gallery position 10. */
const GRAPHIC_REST_ORDER = [
  "nouveau 1.png",
  "35.jpg",
  "1_presence online.jpg",
  "34.jpg",
  "1_service video editing.jpg",
  "10.png",
  "Etiquette  yayourt0.5LO.png",
  "40.jpg",
  "visuel 4.jpg",
  "eclipse blanc.png",
  "28.png",
  "1_Mothers Days.jpg",
  "22.jpg",
  "ANANAS DANIELLE.png",
  "26.jpg",
  "visuel 1.jpg",
  "39.jpg",
  "jonathan BIRTHDAY.jpg",
  "pascal 3.png",
  "FINAL FRONT.png",
  "visuel 8.jpg",
  "37.jpg",
  "PUB 2.jpg",
  "19.jpg",
  "Visuel 11.jpg",
  "LOGO PRINCIPALE.png",
  "mjn.png",
  "BAOBAB DANIE.png",
  "visuel 2.jpg",
  "41.jpg",
  "1_website services.jpg",
  "31.png",
  "visuel 17.jpg",
  "WELCOME TO NOVEMBER 2.jpg",
  "1_billet 2.jpg",
  "le vrai ndem4.jpg",
  "36.jpg",
  "Visuel 10.jpg",
  "Etiquette  berger.png",
  "16.jpg",
  "foumban.jpg",
  "visuel 19.jpg",
  "38.jpg",
  "1_Groupe 1.jpg",
  "SALIM.png",
  "visuel 5.jpg",
  "1_studio.jpg",
  "21.jpg",
  "BANDEROLE JZ L.jpg",
  "Visuel 13.jpg",
  "25.jpg",
  "multi clone.jpg",
  "24.jpg",
  "visuel 6.jpg",
  "27.jpg",
  "1_20 Mai fete NAtionale.jpg",
  "20.jpg",
  "visuel 12.jpg",
  "1k linkedin.jpg",
  "13.jpg",
  "stephane 2.png",
  "14.jpg",
  "visuel 3.jpg",
  "17.jpg",
  "EMMA BIRTHDAY1.jpg",
  "32.jpg",
  "visuel 7.jpg",
  "15.jpg",
  "pub graphism2.jpg",
  "FINAL.png",
  "23.jpg",
  "Visuel 15.jpg",
  "1_flyer service.jpg",
  "18.jpg",
  "pub3 - Copy.png",
  "LED LIGHT SMARTPHONE - Copie.jpg",
  "11.png",
  "Visuel 16.jpg",
  "1_asw hack3.jpg",
  "43.jpg",
  "cbc flyer.jpg",
  "33.jpg",
  "nouveau 2.jpg",
  "cbc10.jpg",
  "October welcome25.jpg",
  "29.png",
  "suit.jpg",
  "42.jpg",
  "Sans titre-1.jpg",
  "30.jpg",
  "bissap danie.png",
  "techman happychristmas.jpg",
  "12.jpg",
  "a805b3ae-8bf7-41f5-a451-081779ff7686.png",
  "WhatsApp Image 2026-05-31 at 09.30.25.jpeg",
] as const;

const graphicSrcByFileName = new Map(
  Object.entries(graphicImagesRecord).map(([key, mod]) => [
    graphicFileName(key),
    (mod as { default: string }).default,
  ]),
);

const usedGraphicFiles = new Set<string>();
const lockedGraphicImages = LOCKED_FIRST_STEMS.map((stem) => {
  const match = [...graphicSrcByFileName.entries()].find(
    ([name]) => exactNumericStem(name) === stem,
  );
  if (!match) return null;
  usedGraphicFiles.add(match[0]);
  return match[1];
}).filter((src): src is string => Boolean(src));

const restGraphicImages = [
  ...GRAPHIC_REST_ORDER.filter(
    (name) => graphicSrcByFileName.has(name) && !usedGraphicFiles.has(name),
  ).map((name) => {
    usedGraphicFiles.add(name);
    return graphicSrcByFileName.get(name)!;
  }),
  ...[...graphicSrcByFileName.entries()]
    .filter(([name]) => !usedGraphicFiles.has(name))
    .map(([, src]) => src),
];

const images = [...lockedGraphicImages, ...restGraphicImages];

// 2. Video Links with visible titles and metadata
export interface VideoItem {
  id: string;
  title: string;
  url: string;
  isShort?: boolean;
}

export interface FbVideoItem {
  url: string;
  title: string;
}

const ytVideos: VideoItem[] = [
  // ── Prioritaires (Nouveaux ajouts) ──
  {
    id: "Q9rAgmzJi4o",
    title: "Défilé Miss",
    url: "https://youtube.com/shorts/Q9rAgmzJi4o?feature=share",
    isShort: true,
  },
  {
    id: "QQvrrMJxP-A",
    title: "Montage Vidéo Client",
    url: "https://youtu.be/QQvrrMJxP-A",
    isShort: false,
  },
  {
    id: "UxN4O8d2kFg",
    title: "SMART CHILD SAFETY ECOSYSTEM",
    url: "https://youtu.be/UxN4O8d2kFg",
    isShort: false,
  },
  {
    id: "WbZhPRL5zyw",
    title: "Vidéo IA Nooraxis",
    url: "https://youtu.be/WbZhPRL5zyw",
    isShort: false,
  },
  {
    id: "9Gmzc1QKeMo",
    title: "Tekmen Revolution Services",
    url: "https://youtube.com/shorts/9Gmzc1QKeMo?feature=share",
    isShort: true,
  },
  {
    id: "YFLfpsMxk4M",
    title: "Les Déplacements à Bosco",
    url: "https://youtu.be/YFLfpsMxk4M",
    isShort: false,
  },
  {
    id: "-_4H3XMA7EM",
    title: "Price of Silence 1",
    url: "https://youtube.com/shorts/-_4H3XMA7EM?feature=share",
    isShort: true,
  },
  // ── Autres réalisations antérieures ──
  {
    id: "SWgAKGH0WhA",
    title: "Spot Publicitaire — Pub 1",
    url: "https://www.youtube.com/watch?v=SWgAKGH0WhA",
    isShort: false,
  },
  {
    id: "9D5w6qTOuUA",
    title: "Projet Renaud",
    url: "https://www.youtube.com/watch?v=9D5w6qTOuUA",
    isShort: false,
  },
  {
    id: "t7pexa5JySY",
    title: "Godwin — Vidéo Promo",
    url: "https://www.youtube.com/watch?v=t7pexa5JySY",
    isShort: false,
  },
  {
    id: "lNiMXG3ZmEQ",
    title: "Prêche & Célébration",
    url: "https://www.youtube.com/watch?v=lNiMXG3ZmEQ",
    isShort: false,
  },
  {
    id: "upt6BKQpFpY",
    title: "Jésus Est",
    url: "https://www.youtube.com/watch?v=upt6BKQpFpY",
    isShort: false,
  },
];

const fbLinks: FbVideoItem[] = [
  {
    url: "https://www.facebook.com/share/r/18WN12aUyo/",
    title: "Reel Facebook — Montage Dynamique",
  },
  {
    url: "https://www.facebook.com/share/v/1DaWbNEpsP/",
    title: "Vidéo Facebook — Projet Visuel",
  },
  {
    url: "https://www.facebook.com/share/v/1FX61ojhpm/",
    title: "Vidéo Facebook — Création Digitale",
  },
  {
    url: "https://www.facebook.com/share/v/1BFhorxFDU/",
    title: "Vidéo Facebook — Showcase Réalisations",
  },
];

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="relative w-full aspect-video overflow-hidden bg-black/80">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          className="w-full h-full absolute inset-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5 flex items-start justify-between gap-3 border-t border-white/5 bg-black/40 flex-grow">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className={`inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                video.isShort
                  ? "bg-red-500/15 text-red-400 border border-red-500/30"
                  : "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
              }`}
            >
              <Clapperboard className="w-3 h-3" />
              {video.isShort ? "YouTube Shorts" : "YouTube"}
            </span>
          </div>
          <h4
            className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug"
            title={video.title}
          >
            {video.title}
          </h4>
        </div>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-muted-foreground hover:text-white transition-all flex-shrink-0 mt-0.5 group/link"
          title="Regarder sur YouTube"
        >
          <ExternalLink className="w-4 h-4 group-hover/link:text-cyan-400 group-hover/link:scale-110 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

function FbVideoCard({ fb, index }: { fb: FbVideoItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-lg max-w-[320px] mx-auto w-full"
    >
      <div className="relative w-full aspect-[9/16] overflow-hidden bg-black/80 flex items-center justify-center">
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(fb.url)}&show_text=false`}
          title={fb.title}
          className="w-full h-full absolute inset-0"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder={0}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex items-start justify-between gap-3 border-t border-white/5 bg-black/40">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
              Facebook Reel
            </span>
          </div>
          <h4
            className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug"
            title={fb.title}
          >
            {fb.title}
          </h4>
        </div>
        <a
          href={fb.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-muted-foreground hover:text-white transition-all flex-shrink-0 mt-0.5 group/link"
          title="Regarder sur Facebook"
        >
          <ExternalLink className="w-4 h-4 group-hover/link:text-cyan-400 group-hover/link:scale-110 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

// 3. Web Dev Projects (titles and links are language-independent, only desc changes)
const devProjectsBase = [
  {
    title: "XENA AI",
    link: "https://nexa-ai-2.vercel.app/",
    tags: ["React", "Tailwind CSS", "API", "Web Speech API", "AI Integration"],
    descIdx: 5,
  },
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
  },
];

export function Portfolio({ isFullPage = false }: { isFullPage?: boolean }) {
  const [activeTab, setActiveTab] = useState<"graphic" | "video" | "dev">(
    "graphic",
  );
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
    { id: "graphic", label: "Graphic Design", icon: Palette },
    { id: "video", label: "Video Editing", icon: Clapperboard },
    { id: "dev", label: "Tech & Web", icon: Code2 },
  ] as const;

  const displayImages = isFullPage ? images : images.slice(0, 6);
  // Show 7 priority YouTube videos (+ 3 FB) in home tab preview, or all on full page
  const displayYt = isFullPage ? ytVideos : ytVideos.slice(0, 7);
  const displayFb = isFullPage ? fbLinks : fbLinks.slice(0, 3);
  const displayDev = isFullPage ? devProjects : devProjects.slice(0, 6);

  return (
    <section
      id="portfolio"
      className={`relative ${isFullPage ? "py-16 sm:py-24" : "py-24 sm:py-36"}`}
    >
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
              {t(translations.portfolio.title)}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                {t(translations.portfolio.titleHighlight)}
              </span>
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
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
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
                  <Clapperboard className="w-6 h-6 text-cyan-400" /> Video
                  Editing
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayYt.map((video, i) => (
                    <VideoCard key={video.id} video={video} index={i} />
                  ))}

                  {displayFb.map((fb, i) => (
                    <FbVideoCard key={fb.url} fb={fb} index={i} />
                  ))}
                </div>
              </div>

              <div id="web-dev" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-cyan-400" /> Tech & Web
                  Development
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayDev.map((project, i) => (
                    <motion.a
                      href={project.link !== "#" ? project.link : undefined}
                      target={
                        project.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        project.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
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
                            <span
                              key={j}
                              className="px-2.5 py-1 text-xs font-medium text-cyan-200 bg-cyan-950/40 rounded-md border border-cyan-800/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {t(translations.portfolio.viewProject)}{" "}
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
              {activeTab === "graphic" && (
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
                      {t(translations.portfolio.viewAllGraphic)}{" "}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Video Editing Tab */}
              {activeTab === "video" && (
                <motion.div
                  key="video"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayYt.map((video, i) => (
                      <VideoCard key={video.id} video={video} index={i} />
                    ))}

                    {displayFb.map((fb, i) => (
                      <FbVideoCard key={fb.url} fb={fb} index={i} />
                    ))}
                  </div>
                  <div className="mt-12 text-center relative z-20">
                    <a
                      href="/portfolio#video-editing"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      {t(translations.portfolio.viewAllVideo)}{" "}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Web Dev Tab */}
              {activeTab === "dev" && (
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
                        target={
                          project.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          project.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
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
                              <span
                                key={j}
                                className="px-2.5 py-1 text-xs font-medium text-cyan-200 bg-cyan-950/40 rounded-md border border-cyan-800/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {t(translations.portfolio.viewProject)}{" "}
                            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
                      {t(translations.portfolio.viewAllWeb)}{" "}
                      <ArrowRight className="w-4 h-4" />
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
              onClick={(e) => e.stopPropagation()}
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
