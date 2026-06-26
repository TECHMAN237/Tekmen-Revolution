import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import { Globe } from "lucide-react";

/**
 * A premium floating language switcher button.
 * Visible on all pages, positioned in the bottom-right corner.
 * Toggles between English (EN) and French (FR).
 */
export function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
      onClick={toggleLanguage}
      className="fixed bottom-6 left-6 md:left-auto md:right-6 z-[60] group"
      aria-label={`Switch to ${lang === "en" ? "French" : "English"}`}
      id="language-switcher"
    >
      <div className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-purple-500/40 hover:shadow-purple-500/15 transition-all duration-400 cursor-pointer group-hover:scale-105">
        {/* Glow accent on hover */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none" />

        {/* Globe icon */}
        <Globe className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300 relative z-10" />

        {/* Language Labels with animated switch */}
        <div className="relative z-10 flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase">
          <span
            className={`transition-all duration-300 ${
              lang === "en"
                ? "text-white"
                : "text-white/40"
            }`}
          >
            EN
          </span>
          <span className="text-white/20">/</span>
          <span
            className={`transition-all duration-300 ${
              lang === "fr"
                ? "text-white"
                : "text-white/40"
            }`}
          >
            FR
          </span>
        </div>

        {/* Active indicator dot */}
        <motion.div
          layout
          className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] relative z-10"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
    </motion.button>
  );
}
