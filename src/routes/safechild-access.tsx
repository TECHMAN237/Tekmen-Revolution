import { createFileRoute, Link } from "@tanstack/react-router";
import { SceneBackground } from "../components/SceneBackground";
import { ArrowLeft, ExternalLink, Key, User, Lock, ShieldCheck, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import logoImg from "../../logo.png";
import { useLanguage, translations } from "../lib/LanguageContext";

export const Route = createFileRoute("/safechild-access")({
  component: SafeChildAccessPage,
});

function SafeChildAccessPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { t, lang } = useLanguage();
  const isEn = lang === "en";

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <main className="relative min-h-screen text-foreground flex flex-col">
      <SceneBackground />
      
      <div className="relative flex-grow flex items-center justify-center z-20 mx-auto max-w-3xl px-4 sm:px-6 pt-16 pb-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md relative overflow-hidden"
        >
          {/* Background Decor within card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-colors mb-8 relative z-10"
          >
            <ArrowLeft className="w-4 h-4" /> {isEn ? "Back to portfolio" : "Retour au portfolio"}
          </Link>

          <div className="relative z-10 text-center mb-10">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/20">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {isEn ? "Access to " : "Accès au projet "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SAFECHILD</span>{isEn ? " project" : ""}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              {isEn 
                ? "For security and confidentiality reasons, this platform requires access credentials. Please use the credentials below to log in."
                : "Pour des raisons de sécurité et de confidentialité, cette plateforme nécessite des identifiants d'accès. Veuillez utiliser les coordonnées ci-dessous pour vous connecter."}
            </p>
          </div>

          <div className="bg-black/40 border border-white/5 rounded-2xl p-6 sm:p-8 mb-10 relative z-10">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
              <Key className="w-5 h-5 text-purple-400" /> {isEn ? "Access Credentials" : "Coordonnées d'accès"}
            </h3>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 group">
                <div className="flex items-center gap-3 mb-2 sm:mb-0 text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{isEn ? "Username" : "Nom d'utilisateur"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-cyan-300 font-bold tracking-wide">
                    user@test.com
                  </span>
                  <button 
                    onClick={() => handleCopy('user@test.com', 'username')}
                    className="p-1.5 rounded-md hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                    title={isEn ? "Copy username" : "Copier le nom d'utilisateur"}
                  >
                    {copiedField === 'username' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 group">
                <div className="flex items-center gap-3 mb-2 sm:mb-0 text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm font-medium">{isEn ? "Password" : "Mot de passe"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-cyan-300 font-bold tracking-wide">
                    user123
                  </span>
                  <button 
                    onClick={() => handleCopy('user123', 'password')}
                    className="p-1.5 rounded-md hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                    title={isEn ? "Copy password" : "Copier le mot de passe"}
                  >
                    {copiedField === 'password' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center relative z-10">
            {/* Update the href below with the actual URL when deployed */}
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 w-full sm:w-auto"
            >
              {isEn ? "Access the platform" : "Accéder à la plateforme"} <ExternalLink className="w-5 h-5" />
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              {isEn 
                ? "The link will be updated as soon as the deployment is complete."
                : "Le lien sera mis à jour dès que le déploiement sera complété."}
            </p>
          </div>
        </motion.div>
      </div>

      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-white/5 relative z-10 mt-auto">
        <div className="flex flex-col items-center gap-4">
          <img src={logoImg} alt="TEKMEN REVOLUTION" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <p>© {new Date().getFullYear()} TEKMEN REVOLUTION. {t(translations.footer.rights)}</p>
        </div>
      </footer>
    </main>
  );
}
