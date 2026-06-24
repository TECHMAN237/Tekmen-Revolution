import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Linkedin, Github, Phone, MessageSquare, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage, translations } from "../lib/LanguageContext";

const SiLinkedin = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const SiWhatsapp = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const SiGithub = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const SiPhone = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const contactCards = [
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/steeve-zali-5a70b6379/",
    color: "bg-[#0A66C2]",
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    link: "https://wa.me/237697368251",
    color: "bg-[#25D366]",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    link: "https://github.com/TECHMAN237",
    color: "bg-[#24292e]",
  },
  {
    icon: SiPhone,
    label: "+237 697 368 251",
    link: "tel:+237697368251",
    color: "bg-cyan-500",
  },
];

// ── API URL Configuration ────────────────────────────────────
// In development: http://localhost:3001
// In production: your deployed API URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

// ── Email regex for client-side validation ───────────────────
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const { t } = useLanguage();

  // Client-side validation
  function validateForm(): string[] {
    const errors: string[] = [];
    if (!name.trim() || name.trim().length < 2) {
      errors.push(t(translations.contact.errorNameRequired));
    }
    if (!email.trim() || !EMAIL_REGEX.test(email.trim())) {
      errors.push(t(translations.contact.errorEmailRequired));
    }
    if (!message.trim() || message.trim().length < 10) {
      errors.push(t(translations.contact.errorMessageRequired));
    }
    return errors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 1. Client-side validation
    const errors = validateForm();
    if (errors.length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setStatusMessage(errors[0]);
      return;
    }

    setFieldErrors([]);
    setStatus("loading");
    setStatusMessage("");

    try {
      // 2. Send to API
      console.log("📤 Sending contact request to /api/contact...");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // 3. Success — reset form
        setStatus("success");
        setStatusMessage(t(translations.contact.successMessage));
        setName("");
        setEmail("");
        setMessage("");

        // Auto-dismiss success message after 6 seconds
        setTimeout(() => {
          setStatus("idle");
          setStatusMessage("");
        }, 6000);
      } else {
        // 4. Server validation errors or failure
        setStatus("error");
        setStatusMessage(
          data.errors?.[0] || data.error || t(translations.contact.errorDefault)
        );
      }
    } catch (err) {
      // 5. Network error
      setStatus("error");
      setStatusMessage(t(translations.contact.errorNetwork));
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-36 overflow-hidden" style={{ contain: 'layout style' }}>
      {/* High-Visibility Section Background Decor — optimized blur for scroll perf */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)] opacity-60" />
        <div className="absolute -top-[5%] right-[-5%] w-[550px] h-[550px] bg-cyan-500/30 blur-[60px] rounded-full opacity-70" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-purple-600/30 blur-[60px] rounded-full opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 tracking-tight"
          >
            {t(translations.contact.title)}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-600">{t(translations.contact.titleHighlight)}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-muted-foreground/70 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t(translations.contact.subtitle)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-black/55 backdrop-blur-sm p-8 sm:p-12 rounded-[3rem] border border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden group"
          >
            {/* Subtle light spot inside form */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/5 blur-[40px] rounded-full pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
              {/* Honeypot field — hidden from humans, traps bots */}
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
              />

              <div className="space-y-2.5">
                <label htmlFor="contact-name" className="text-xs font-black tracking-widest text-white/50 ml-2 uppercase">{t(translations.contact.labelName)}</label>
                <input 
                  type="text" 
                  id="contact-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t(translations.contact.placeholderName)}
                  disabled={status === "loading"}
                  className="w-full px-7 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all duration-300 disabled:opacity-50"
                />
              </div>
              <div className="space-y-2.5">
                <label htmlFor="contact-email" className="text-xs font-black tracking-widest text-white/50 ml-2 uppercase">{t(translations.contact.labelEmail)}</label>
                <input 
                  type="email" 
                  id="contact-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t(translations.contact.placeholderEmail)}
                  disabled={status === "loading"}
                  className="w-full px-7 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all duration-300 disabled:opacity-50"
                />
              </div>
              <div className="space-y-2.5">
                <label htmlFor="contact-message" className="text-xs font-black tracking-widest text-white/50 ml-2 uppercase">{t(translations.contact.labelMessage)}</label>
                <textarea 
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t(translations.contact.placeholderMessage)}
                  disabled={status === "loading"}
                  className="w-full px-7 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all duration-300 resize-none disabled:opacity-50"
                />
              </div>

              {/* Status Message */}
              <AnimatePresence mode="wait">
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-semibold ${
                      status === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    {statusMessage}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.button 
                whileHover={status !== "loading" ? { scale: 1.01, y: -2 } : {}}
                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                type="submit"
                disabled={status === "loading"}
                className="w-full group flex items-center justify-center gap-3 py-5 rounded-2xl text-lg font-black text-white btn-primary-gradient shadow-[0_15px_40px_-10px_rgba(124,58,237,0.5)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    {t(translations.contact.sending)}
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : status === "success" ? (
                  <>
                    {t(translations.contact.messageSent)}
                    <CheckCircle className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    {t(translations.contact.sendMessage)}
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Info Cards */}
          <div className="flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {contactCards.map((card, idx) => (
                  <motion.a
                    key={idx}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="group relative flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 ${card.color} text-white shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-all duration-500 relative z-10`}>
                      <card.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-white/70 group-hover:text-white font-bold tracking-tight text-center relative z-10 text-[10px] sm:text-xs uppercase transition-colors">
                      {card.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Direct Call Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-full p-6 sm:p-8 rounded-[2.5rem] bg-gradient-to-br from-black/65 to-black/30 backdrop-blur-sm border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 group shadow-2xl hover:border-cyan-500/30 transition-colors duration-500"
            >
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all duration-500 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg text-white font-bold tracking-tight">{t(translations.contact.readyToStart)}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground/70 font-light mt-1">{t(translations.contact.talkAboutProject)}</p>
                </div>
              </div>
              <div className="text-[10px] font-black text-cyan-500/40 uppercase tracking-[0.4em] self-center">
                Tekmen Core
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
