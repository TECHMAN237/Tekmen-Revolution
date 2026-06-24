import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "../../components/ServicePageLayout";
import { TrendingUp, Award, Users, Target, Share2, Zap, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export const Route = createFileRoute("/services/marketing-digital")({
  head: () => ({
    meta: [
      { title: "Marketing Digital — TEKMEN REVOLUTION" },
      { name: "description", content: "Développez votre visibilité et transformez votre audience en clients." },
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: MarketingDigitalPage,
});

function MarketingDigitalPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <ServicePageLayout
      data={{
        id: "marketing-digital",
        icon: TrendingUp,
        title: isEn ? "Digital Marketing" : "Marketing Digital",
        subtitle: isEn
          ? "Develop your visibility and transform your audience into customers."
          : "Développez votre visibilité et transformez votre audience en clients.",
        whyChooseUs: [
          {
            title: isEn ? "Data-Driven Strategy" : "Stratégie Data-Driven",
            description: isEn
              ? "Our campaigns are based on data and optimized for maximum ROI."
              : "Nos campagnes sont basées sur les données et optimisées pour un maximum de ROI.",
            icon: Target,
          },
          {
            title: isEn ? "Multi-Platform Expertise" : "Expertise Multi-Plateformes",
            description: isEn
              ? "Mastery of algorithms for Facebook, Instagram, TikTok, Google Ads, and LinkedIn."
              : "Maîtrise des algorithmes Facebook, Instagram, TikTok, Google Ads et LinkedIn.",
            icon: Share2,
          },
          {
            title: isEn ? "Transparent Results" : "Résultats Transparents",
            description: isEn
              ? "Detailed monthly reports with KPI tracking and performance analysis."
              : "Rapports mensuels détaillés avec le suivi des KPI et les analyses de performance.",
            icon: Award,
          },
        ],
        services: [
          {
            category: isEn ? "Strategy" : "Stratégie",
            items: isEn
              ? [
                  "Digital Audit",
                  "Marketing Strategy",
                  "Editorial Calendar",
                  "Content Plan",
                ]
              : [
                  "Audit Digital",
                  "Stratégie Marketing",
                  "Calendrier Éditorial",
                  "Plan de Contenu",
                ],
          },
          {
            category: isEn ? "Social Media" : "Réseaux Sociaux",
            items: isEn
              ? [
                  "Social Media Management",
                  "Community Management",
                  "Subtitling",
                  "Influencer Management",
                ]
              : [
                  "Gestion Réseaux Sociaux",
                  "Community Management",
                  "Sous-Titrage",
                  "Management d'influenceur",
                ],
          },
          {
            category: isEn ? "Advertising" : "Publicité",
            items: isEn
              ? [
                  "Advertising Campaigns",
                  "Facebook Ads",
                  "Instagram Ads",
                  "TikTok Ads",
                  "Google Ads",
                ]
              : [
                  "Campagnes Publicitaires",
                  "Facebook Ads",
                  "Instagram Ads",
                  "TikTok Ads",
                  "Google Ads",
                ],
          },
          {
            category: "Acquisition",
            items: isEn
              ? [
                  "Lead Generation",
                  "Email Marketing",
                  "WhatsApp Marketing",
                  "Conversion Campaigns",
                ]
              : [
                  "Génération de Leads",
                  "Email Marketing",
                  "WhatsApp Marketing",
                  "Campagnes de Conversion",
                ],
          },
        ],
        process: [
          {
            title: "Audit",
            description: isEn
              ? "Complete analysis of your digital presence and competitors."
              : "Analyse complète de votre présence digitale et de vos concurrents.",
          },
          {
            title: isEn ? "Strategy" : "Stratégie",
            description: isEn
              ? "Definition of objectives, targets, and communication channels."
              : "Définition des objectifs, cibles et canaux de communication.",
          },
          {
            title: isEn ? "Execution" : "Exécution",
            description: isEn
              ? "Implementation of campaigns with content creation and advertising."
              : "Mise en œuvre des campagnes avec création de contenus et publicités.",
          },
          {
            title: "Optimization",
            description: isEn
              ? "Continuous adjustments based on performance data."
              : "Ajustements en continu basés sur les données de performance.",
          },
          {
            title: "Reporting",
            description: isEn
              ? "Monthly report with results and recommendations."
              : "Rapport mensuel avec les résultats et recommandations.",
          },
        ],
        pricing: [
          {
            label: isEn ? "Digital Audit" : "Audit Digital",
            price: isEn ? "25,000 FCFA" : "25 000 FCFA",
            description: isEn
              ? "In-depth analysis of your current strategy and optimization recommendations."
              : "Analyse approfondie de votre stratégie actuelle et recommandations d'optimisation.",
            icon: ShieldCheck,
          },
          {
            label: isEn ? "Social Media Management" : "Gestion Réseaux Sociaux",
            price: isEn ? "50,000 FCFA/month" : "50 000 FCFA/mois",
            description: isEn
              ? "Complete management of your networks with content creation and publication."
              : "Gestion complète de vos réseaux avec création et publication de contenus.",
            icon: Share2,
          },
          {
            label: "Community Management",
            price: isEn ? "75,000 FCFA/month" : "75 000 FCFA/mois",
            description: isEn
              ? "Authentic engagement with your community and replying to messages."
              : "Engagement authentique avec votre communauté et réponse aux messages.",
            icon: Users,
          },
          {
            label: isEn ? "Advertising Campaigns" : "Campagnes Publicitaires",
            price: isEn ? "100,000 FCFA/month" : "100 000 FCFA/mois",
            description: isEn
              ? "Targeted social media campaigns with tracking and optimization."
              : "Campagnes ciblées sur les réseaux sociaux avec suivi et optimisation.",
            icon: Target,
          },
          {
            label: isEn ? "Complete Marketing Strategy" : "Stratégie Marketing Complète",
            price: isEn ? "150,000 FCFA" : "150 000 FCFA",
            description: isEn
              ? "Complete strategic plan with audit, action plan, and implementation."
              : "Plan stratégique complet avec audit, plan d'action et mise en œuvre.",
            icon: Zap,
          },
        ],
        subscriptions: [
          {
            name: "Starter",
            features: isEn
              ? ["12 publications/month", "Management of 1 social network", "Basic monthly reporting"]
              : ["12 publications/mois", "Gestion de 1 réseau social", "Reporting mensuel basique"],
            price: isEn ? "50,000 FCFA/month" : "50 000 FCFA/mois",
          },
          {
            name: "Business",
            features: isEn
              ? ["20 publications/month", "Management of 3 social networks", "Detailed monthly reporting", "Editorial calendar"]
              : ["20 visuels/mois", "Formats réseaux sociaux", "Supports print inclus", "Livraison sous 24h"],
            price: isEn ? "100,000 FCFA/month" : "100 000 FCFA/mois",
          },
          {
            name: "Premium",
            features: isEn
              ? ["Unlimited publications", "Community Management", "Sponsored ads", "Advanced reporting", "Tailored strategy"]
              : ["Publications illimitées", "Community Management", "Publicités sponsorisées", "Reporting avancé", "Stratégie sur mesure"],
            price: isEn ? "200,000 FCFA/month" : "200 000 FCFA/mois",
            highlighted: true,
          },
        ],
        portfolio: [
          {
            title: isEn ? "WhatsApp generations campaign" : "Campagne WhatsApp générations",
            tag: "Acquisition",
            gradient: "from-purple-600/30 via-pink-600/30 to-red-600/30",
          },
          {
            title: isEn ? "Instagram strategy" : "Stratégie Instagram",
            tag: "Community Management",
            gradient: "from-cyan-600/30 via-blue-600/30 to-indigo-600/30",
          },
          {
            title: isEn ? "Facebook Ads campaign" : "Campagne Facebook Ads",
            tag: isEn ? "Advertising" : "Publicité",
            gradient: "from-orange-600/30 via-yellow-600/30 to-amber-600/30",
          },
          {
            title: isEn ? "Editorial calendar" : "Calendrier éditorial",
            tag: isEn ? "Strategy" : "Stratégie",
            gradient: "from-emerald-600/30 via-teal-600/30 to-cyan-600/30",
          },
        ],
        faq: [
          {
            question: isEn
              ? "How long does an advertising campaign last?"
              : "Combien de temps dure une campagne publicitaire ?",
            answer: isEn
              ? "Campaigns are managed over a minimum of 3 months to allow optimization. Visible results take between 2 and 4 weeks."
              : "Les campagnes sont gérées sur un minimum de 3 mois pour permettre l'optimisation. Les résultats visibles se font attendre entre 2 et 4 semaines.",
          },
          {
            question: isEn
              ? "What is included in social media management?"
              : "Qu'est-ce qui est inclus dans la gestion de réseaux sociaux ?",
            answer: isEn
              ? "Content creation, publishing, replying to messages, community engagement, and monthly reporting."
              : "Création de contenus, publication, réponse aux messages, engagement avec la communauté et reporting mensuel.",
          },
          {
            question: isEn
              ? "Do you use my client data?"
              : "Utilisez-vous mes données clients ?",
            answer: isEn
              ? "No, we never use your customer data. All our campaigns respect GDPR and platform privacy policies."
              : "Non, nous ne utilisons jamais vos données clients. Toutes nos campagnes respectent la RGPD et les politiques de confidentialité des plateformes.",
          },
          {
            question: isEn
              ? "Can I cancel my subscription?"
              : "Puis-je annuler mon abonnement ?",
            answer: isEn
              ? "Yes, you can cancel at any time. The subscription is monthly and has no long-term commitment."
              : "Oui, vous pouvez annuler à tout moment. L'abonnement est mensuel et ne comporte pas de engagement longue durée.",
          },
        ],
      }}
    />
  );
}