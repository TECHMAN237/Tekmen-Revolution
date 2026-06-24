// ── Internationalization Translations ──
// Default language: English (en)
// Supported: English (en), French (fr)

export type Language = "en" | "fr";

export const translations = {
  // ── Navbar ──
  nav: {
    home: { en: "Home", fr: "Accueil" },
    about: { en: "About", fr: "À propos" },
    services: { en: "Services", fr: "Services" },
    portfolio: { en: "Portfolio", fr: "Portfolio" },
    testimonials: { en: "Testimonials", fr: "Témoignages" },
    cta: { en: "Start a Project", fr: "Lancer un Projet" },
  },

  // ── Hero ──
  hero: {
    badge: { en: "✨ Technological Excellence", fr: "✨ L'Excellence Technologique" },
    titleLine1: { en: "The power of ", fr: "La puissance de " },
    titleBrand: { en: "TEKMEN", fr: "TEKMEN" },
    titleLine2: { en: "REVOLUTION", fr: "REVOLUTION" },
    subtitle: {
      en: "Connect your business with perfect solutions through our intelligent expertise. Faster, more precise, more efficient in Design, Web, Video & Engineering.",
      fr: "Connectez votre entreprise avec les solutions parfaites grâce à notre expertise intelligente. Plus rapide, plus précis, plus efficace en Design, Web, Vidéo et Ingénierie.",
    },
    ctaPrimary: { en: "Book a Demo", fr: "Réserver une Démo" },
    ctaSecondary: { en: "Discover how it works", fr: "Découvrir comment ça marche" },
    discoverServices: { en: "Discover our services", fr: "Découvrir nos services" },
    watchVideo: { en: "Watch the video", fr: "Regardez la vidéo" },
  },

  // ── About ──
  about: {
    badge: { en: "About us", fr: "À propos de nous" },
    titlePrefix: { en: "Through ", fr: "À travers " },
    titleSuffix: { en: ", I support businesses...", fr: ", j'accompagne les entreprises..." },
    description: {
      en: "I help businesses and individuals create a complete digital ecosystem. My goal: transform your vision into a tangible, aesthetic and high-performing product.",
      fr: "J'accompagne les entreprises et les particuliers dans la création d'un écosystème digital complet. Mon objectif : transformer votre vision en un produit tangible, esthétique et performant.",
    },
    quote: {
      en: "\"Why multiply service providers when you can centralize excellence?\"",
      fr: "\"Pourquoi multiplier les prestataires quand vous pouvez centraliser l'excellence ?\"",
    },
    cardTitle: {
      en: "Don't just exist online, dominate your industry.",
      fr: "Ne vous contentez pas d'exister en ligne, dominez votre secteur.",
    },
    cardSubtitle: {
      en: "Discover the full extent of our expertise in my portfolio:",
      fr: "Découvrez toute l'étendue de notre expertise sur mon portfolio :",
    },
    explorePortfolio: { en: "EXPLORE OUR PORTFOLIO", fr: "EXPLORER NOTRE PORTFOLIO" },
    bookNow: { en: "BOOK NOW", fr: "RÉSERVEZ MAINTENANT" },
  },

  // ── Services ──
  services: {
    title: { en: "Our Expert Services", fr: "Nos Services d'Expertise" },
    subtitle: {
      en: "At TEKMEN REVOLUTION, we combine creativity, technique and strategy to offer you digital solutions that elevate your brand and generate concrete results.",
      fr: "Chez TEKMEN REVOLUTION, nous combinons créativité, technique et stratégie pour vous offrir des solutions digitales qui marquent votre marque et génèrent des résultats concrets.",
    },
    discoverService: { en: "Discover the service", fr: "Découvrir le service" },
    exploreSolutions: { en: "Explore our solutions", fr: "Explorer nos solutions" },
    cards: [
      {
        title: { en: "Graphic Design", fr: "Graphic Design" },
        subtitle: { en: "Visual Identity & Print", fr: "Identité Visuelle & Print" },
        description: {
          en: "Professional visual creations that enhance your brand image.",
          fr: "Des créations visuelles professionnelles qui valorisent votre image de marque.",
        },
        valueProposition: {
          en: "Transform your brand into a memorable visual identity that captures attention.",
          fr: "Transformez votre marque en une identité visuelle mémorable qui capte l'attention.",
        },
      },
      {
        title: { en: "Video Editing", fr: "Montage Vidéo" },
        subtitle: { en: "Production & Motion", fr: "Production & Motion" },
        description: {
          en: "Bring your communication to life with engaging videos.",
          fr: "Donnez vie à votre communication grâce à des vidéos engageantes.",
        },
        valueProposition: {
          en: "Impactful video content that converts and retains your audience.",
          fr: "Des contenus vidéo percutants qui convertissent et fidélisent votre audience.",
        },
      },
      {
        title: { en: "Web & Mobile Development", fr: "Développement Web & Mobile" },
        subtitle: { en: "Sites & Applications", fr: "Sites & Applications" },
        description: {
          en: "Modern digital solutions designed to accelerate your growth.",
          fr: "Des solutions numériques modernes conçues pour accélérer votre croissance.",
        },
        valueProposition: {
          en: "High-performing platforms that generate results and set you apart.",
          fr: "Des plateformes performantes qui génèrent des résultats et vous démarquent.",
        },
      },
      {
        title: { en: "Digital Marketing", fr: "Marketing Digital" },
        subtitle: { en: "Strategy & Acquisition", fr: "Stratégie & Acquisition" },
        description: {
          en: "Grow your visibility and turn your audience into customers.",
          fr: "Développez votre visibilité et transformez votre audience en clients.",
        },
        valueProposition: {
          en: "Data-driven strategies that boost your sales and ROI.",
          fr: "Des stratégies data-driven qui boostent vos ventes et votre ROI.",
        },
      },
    ],
  },

  // ── Stats Bar ──
  stats: {
    completedProjects: { en: "Completed Projects", fr: "Projets Terminés" },
    expertise: { en: "Expertise", fr: "Expertise" },
    multiDomain: { en: "Multi-domain", fr: "Multi-domaine" },
    support: { en: "Support", fr: "Support" },
    launchProject: { en: "LAUNCH YOUR PROJECT", fr: "LANCER VOTRE PROJET" },
    keywords: {
      en: ["Innovation", "Precision", "Design", "Performance"],
      fr: ["Innovation", "Précision", "Design", "Performance"],
    },
  },

  // ── Portfolio ──
  portfolio: {
    title: { en: "Our ", fr: "Nos " },
    titleHighlight: { en: "Achievements", fr: "Réalisations" },
    subtitle: {
      en: "Explore our portfolio showcasing our expertise in graphic design, video editing and software development.",
      fr: "Explorez notre portfolio qui démontre notre expertise en design graphique, montage vidéo et développement logiciel.",
    },
    viewDesign: { en: "View design", fr: "Voir le design" },
    viewProject: { en: "View project", fr: "Voir le projet" },
    viewAllGraphic: { en: "View all graphic designs", fr: "Voir tous les designs graphiques" },
    viewAllVideo: { en: "View all video edits", fr: "Voir tous les montages vidéos" },
    viewAllWeb: { en: "View all web projects", fr: "Voir tous les projets web" },
    devProjects: [
      {
        desc: { en: "Personal showcase website and tech portfolio.", fr: "Site vitrine personnel et portfolio tech." },
      },
      {
        desc: { en: "A high-quality portfolio website delivered to a client (Apollos).", fr: "Un site portfolio de haute qualité livré à un client (Apollos)." },
      },
      {
        desc: { en: "Supplementary web application for the University of Buea with more features.", fr: "Application web supplémentaire pour l'Université de Buea avec plus de fonctionnalités." },
      },
      {
        desc: { en: "An immersive showcase website delivered for Rock Attitude.", fr: "Un site vitrine immersif livré pour Rock Attitude." },
      },
      {
        desc: { en: "A project designed to reduce the rate of missing children in our community.", fr: "Un projet conçu pour réduire le taux d'enfants disparus dans notre communauté." },
      },
    ],
  },

  // ── Contact ──
  contact: {
    title: { en: "Get In ", fr: "Nous " },
    titleHighlight: { en: "Touch", fr: "Contacter" },
    subtitle: { en: "Have a project in mind? Let's talk about it.", fr: "Un projet en tête ? Parlons-en." },
    labelName: { en: "Full Name", fr: "Nom Complet" },
    labelEmail: { en: "Email Address", fr: "Adresse Email" },
    labelMessage: { en: "Project Details", fr: "Détails du Projet" },
    placeholderName: { en: "Your Name", fr: "Votre Nom" },
    placeholderEmail: { en: "your@email.com", fr: "votre@email.com" },
    placeholderMessage: { en: "Tell me about your project...", fr: "Parlez-moi de votre projet..." },
    sendMessage: { en: "SEND MESSAGE", fr: "ENVOYER LE MESSAGE" },
    sending: { en: "SENDING...", fr: "ENVOI EN COURS..." },
    messageSent: { en: "MESSAGE SENT ✓", fr: "MESSAGE ENVOYÉ ✓" },
    successMessage: { en: "Message sent successfully! ✨", fr: "Message envoyé avec succès ! ✨" },
    errorNetwork: { en: "Network error. Please check your connection and try again.", fr: "Erreur réseau. Veuillez vérifier votre connexion et réessayer." },
    errorDefault: { en: "Failed to send message. Please try again.", fr: "Échec de l'envoi du message. Veuillez réessayer." },
    errorNameRequired: { en: "Full name is required (minimum 2 characters).", fr: "Le nom complet est requis (minimum 2 caractères)." },
    errorEmailRequired: { en: "A valid email address is required.", fr: "Une adresse email valide est requise." },
    errorMessageRequired: { en: "Project details are required (minimum 10 characters).", fr: "Les détails du projet sont requis (minimum 10 caractères)." },
    readyToStart: { en: "Ready to start a better experience?", fr: "Prêt à démarrer pour une meilleure expérience ?" },
    talkAboutProject: { en: "Let's talk about your next big project.", fr: "Parlons de votre prochain grand projet." },
  },

  // ── Testimonials ──
  testimonials: {
    badge: { en: "Testimonials", fr: "Témoignages" },
    titlePrefix: { en: "What our ", fr: "Ce que nos " },
    titleHighlight: { en: "clients", fr: "clients" },
    titleSuffix: { en: " say", fr: " disent" },
    subtitle: {
      en: "Discover the feedback from those who trusted us to transform their vision into digital reality.",
      fr: "Découvrez les retours de ceux qui nous ont fait confiance pour transformer leur vision en réalité digitale.",
    },
    stats: {
      deliveredProjects: { en: "Delivered Projects", fr: "Projets Livrés" },
      satisfiedClients: { en: "Satisfied Clients", fr: "Clients Satisfaits" },
      averageRating: { en: "Average Rating", fr: "Note Moyenne" },
      customerSupport: { en: "Customer Support", fr: "Support Client" },
    },
    ctaTitle: { en: "Ready to join our satisfied clients?", fr: "Prêt à rejoindre nos clients satisfaits ?" },
    ctaSubtitle: {
      en: "Let's discuss your project and discover how TEKMEN REVOLUTION can transform your vision into reality.",
      fr: "Discutons de votre projet et découvrez comment TEKMEN REVOLUTION peut transformer votre vision en réalité.",
    },
    startProject: { en: "Start a Project", fr: "Lancer un Projet" },
    backHome: { en: "Back to home", fr: "Retour à l'accueil" },
  },

  // ── Footer ──
  footer: {
    rights: { en: "All rights reserved.", fr: "Tous droits réservés." },
  },

  // ── Service Layout ──
  serviceLayout: {
    back: { en: "Back", fr: "Retour" },
    services: { en: "Services", fr: "Services" },
    requestQuote: { en: "Request a quote", fr: "Demander un devis" },
    requestFreeQuote: { en: "Request a free quote", fr: "Demander un devis gratuit" },
    whyChooseTitle: { en: "Why choose this service", fr: "Pourquoi choisir ce service" },
    whyChooseSubtitle: { en: "An expert approach that guarantees exceptional results.", fr: "Une approche experte qui garantit des résultats exceptionnels." },
    processTitle: { en: "Our work process", fr: "Notre processus de travail" },
    processSubtitle: { en: "A proven 5-step methodology for optimal results.", fr: "Une méthodologie éprouvée en 5 étapes pour des résultats optimaux." },
    offeringsTitle: { en: "Our offerings", fr: "Nos prestations" },
    offeringsSubtitle: { en: "Complete solutions adapted to your strategy.", fr: "Des solutions complètes adaptées à votre stratégie." },
    achievementsTitle: { en: "Our achievements", fr: "Nos réalisations" },
    achievementsSubtitle: { en: "Projects that speak to our skills and customer success.", fr: "Des projets qui parlent de nos compétences et de nos succès clients." },
    pricingTitle: { en: "Our Pricing", fr: "Nos Tarifs" },
    pricingSubtitle: { en: "Transparent offers with a clear and measurable value.", fr: "Des offres transparentes avec une valeur claire et mesurable." },
    subscriptionTitle: { en: "Subscription Plans", fr: "Formules d'Abonnement" },
    subscriptionSubtitle: { en: "Benefit from continuous support and preferential rates.", fr: "Bénéficiez d'un accompagnement continu et de tarifs préférentiels." },
    popular: { en: "Popular", fr: "Populaire" },
    subscribe: { en: "Subscribe", fr: "Souscrire" },
    faqTitle: { en: "Frequently Asked Questions", fr: "Questions Fréquentes" },
    faqSubtitle: { en: "Everything you need to know to start our collaboration with peace of mind.", fr: "Tout ce que vous devez savoir pour démarrer notre collaboration sereinement." },
    readyToGrow: { en: "Ready to grow your ", fr: "Prêt à développer votre " },
    digitalPresence: { en: "digital presence", fr: "présence digitale" },
    readyToGrowSuffix: { en: "?", fr: " ?" },
    ctaDescription: { en: "We support companies, brands and entrepreneurs in their digital growth through creative and high-performing solutions.", fr: "Nous accompagnons les entreprises, marques et entrepreneurs dans leur croissance digitale grâce à des solutions créatives et performantes." },
    contactWhatsApp: { en: "Contact on WhatsApp", fr: "Contacter sur WhatsApp" },
    hintDevis: { en: "A question, a project or need a quote? Chat directly with our team.", fr: "Une question, un projet ou besoin d'un devis ? Échangez directement avec notre équipe." },
    hintGeneral: { en: "We usually reply within a few hours.", fr: "Nous répondons généralement en quelques heures." },
    whatsappDefaultMsg: {
      en: `Hello Tekmen Revolution 👋\n\nI'm contacting you regarding your services.\n\nI'd like to get information, ask a question or discuss a project.\n\nMy message:\n\n---\n\nThank you, looking forward to discussing.`,
      fr: `Bonjour Tekmen Revolution 👋\n\nJe vous contacte concernant vos services.\n\nJ'aimerais obtenir des informations, poser une question ou discuter d'un projet.\n\nMon message :\n\n---\n\nMerci et au plaisir d'échanger avec vous.`
    },
    whatsappDevisMsg: {
      en: "Free quote request.",
      fr: "Je souhaite demander un devis gratuit."
    },
    whatsappCardMsg: {
      en: "Quote — ",
      fr: "Devis — "
    },
    whatsappPlanMsg: {
      en: "Plan — ",
      fr: "Formule — "
    },
    navLinks: [
      { en: "🎨 Graphic Design", fr: "🎨 Graphic Design" },
      { en: "🎬 Video Editing", fr: "🎬 Montage Vidéo" },
      { en: "💻 Web/Mobile Dev", fr: "💻 Développement" },
      { en: "📈 Digital Marketing", fr: "📈 Marketing Digital" },
    ]
  },
} as const;

// Helper to get a translation value
export function t(
  obj: { en: string; fr: string },
  lang: Language
): string {
  return obj[lang];
}
