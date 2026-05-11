import { motion } from "framer-motion";
import { Send, Linkedin, Github, Phone, MessageSquare, ArrowRight } from "lucide-react";

const contactCards = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "#",
    color: "bg-[#0A66C2]",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    link: "https://wa.me/237697368251",
    color: "bg-[#25D366]",
  },
  {
    icon: Github,
    label: "GitHub",
    link: "#",
    color: "bg-[#24292e]",
  },
  {
    icon: Phone,
    label: "+237 697 368 251",
    link: "tel:+237697368251",
    color: "bg-cyan-500",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-36 overflow-hidden">
      {/* High-Visibility Section Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)] opacity-60" />
        <div className="absolute -top-[5%] right-[-5%] w-[550px] h-[550px] bg-cyan-500/30 blur-[90px] rounded-full opacity-70" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-purple-600/30 blur-[90px] rounded-full opacity-60" />
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
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-600">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-muted-foreground/70 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Have a project in mind? Let's talk about it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-black/40 backdrop-blur-3xl p-8 sm:p-12 rounded-[3rem] border border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden group"
          >
            {/* Subtle light spot inside form */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
            
            <form className="space-y-7 relative z-10">
              <div className="space-y-2.5">
                <label htmlFor="name" className="text-xs font-black tracking-widest text-white/50 ml-2 uppercase">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-7 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all duration-300"
                />
              </div>
              <div className="space-y-2.5">
                <label htmlFor="email" className="text-xs font-black tracking-widest text-white/50 ml-2 uppercase">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-7 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all duration-300"
                />
              </div>
              <div className="space-y-2.5">
                <label htmlFor="message" className="text-xs font-black tracking-widest text-white/50 ml-2 uppercase">Project Details</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-7 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full group flex items-center justify-center gap-3 py-5 rounded-2xl text-lg font-black text-white btn-primary-gradient shadow-[0_15px_40px_-10px_rgba(124,58,237,0.5)] transition-all"
              >
                SEND MESSAGE
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {contactCards.map((card, idx) => (
              <motion.a
                key={idx}
                href={card.link}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.15)' }}
                className="group relative flex flex-col items-center justify-center p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-500 hover:border-white/40"
              >
                {/* Spot behind icon */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${card.color} blur-3xl rounded-full`} />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.color} text-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.6)] transition-all duration-500 relative z-10`}>
                  <card.icon className="w-7 h-7" />
                </div>
                <span className="text-white font-black tracking-tight text-center relative z-10 text-sm uppercase">
                  {card.label}
                </span>
              </motion.a>
            ))}
            
            {/* Direct Call Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="sm:col-span-2 p-10 rounded-[2.5rem] bg-gradient-to-br from-black/60 to-black/20 backdrop-blur-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between group shadow-2xl hover:border-cyan-500/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-6 mb-6 sm:mb-0">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all duration-500">
                  <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl text-white font-bold tracking-tight">Prêt à démarrer ?</h4>
                  <p className="text-sm text-muted-foreground/70 font-light mt-1">Parlons de votre prochain grand projet.</p>
                </div>
              </div>
              <div className="text-[10px] font-black text-cyan-500/40 uppercase tracking-[0.4em] self-end sm:self-center">
                Tekmen Core
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
