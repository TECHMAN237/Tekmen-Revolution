import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Language, translations, t as tFn } from "./translations";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (obj: { en: string; fr: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "en" ? "fr" : "en"));
  }, []);

  const t = useCallback(
    (obj: { en: string; fr: string }) => tFn(obj, lang),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

// Re-export for convenience
export { translations };
export type { Language };
