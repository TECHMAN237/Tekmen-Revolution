import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "../../components/ServicePageLayout";
import { TrendingUp, Award, Clock, Users, Target, Share2, Zap, ShieldCheck } from "lucide-react";

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
  return (
    <ServicePageLayout
      data={{
        icon: TrendingUp,
        title: "Marketing Digital",
        subtitle: "Développez votre visibilité et transformez votre audience en clients.",
        whyChooseUs: [
          {
            title: "Stratégie Data-Driven",
            description: "Nos campagnes sont basées sur les données et optimisées pour un maximum de ROI.",
            icon: Target,
          },
          {
            title: "Expertise Multi-Plateformes",
            description: "Maîtrise des algorithmes Facebook, Instagram, TikTok, Google Ads et LinkedIn.",
            icon: Share2,
          },
          {
            title: "Résultats Transparents",
            description: "Rapports mensuels détaillés avec le suivi des KPI et les analyses de performance.",
            icon: Award,
          },
        ],
        services: [
          {
            category: "Stratégie",
            items: [
              "Audit Digital",
              "Stratégie Marketing",
              "Calendrier Éditorial",
              "Plan de Contenu",
            ],
          },
          {
            category: "Réseaux Sociaux",
            items: [
              "Gestion Réseaux Sociaux",
              "Community Management",
              "Sous-Titrage",
              "Management d'influenceur",
            ],
          },
          {
            category: "Publicité",
            items: [
              "Campagnes Publicitaires",
              "Facebook Ads",
              "Instagram Ads",
              "TikTok Ads",
              "Google Ads",
            ],
          },
          {
            category: "Acquisition",
            items: [
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
            description: "Analyse complète de votre présence digitale et de vos concurrents.",
          },
          {
            title: "Stratégie",
            description: "Définition des objectifs, cibles et canaux de communication.",
          },
          {
            title: "Exécution",
            description: "Mise en œuvre des campagnes avec création de contenus et publicités.",
          },
          {
            title: "Optimisation",
            description: "Ajustements en continu basés sur les données de performance.",
          },
          {
            title: "Reporting",
            description: "Rapport mensuel avec les résultats et recommandations.",
          },
        ],
        pricing: [
          {
            label: "Audit Digital",
            price: "25 000 FCFA",
            description: "Analyse approfondie de votre stratégie actuelle et recommandations d'optimisation.",
            icon: ShieldCheck,
          },
          {
            label: "Gestion Réseaux Sociaux",
            price: "50 000 FCFA/mois",
            description: "Gestion complète de vos réseaux avec création et publication de contenus.",
            icon: Share2,
          },
          {
            label: "Community Management",
            price: "75 000 FCFA/mois",
            description: "Engagement authentique avec votre communauté et réponse aux messages.",
            icon: Users,
          },
          {
            label: "Campagnes Publicitaires",
            price: "100 000 FCFA/mois",
            description: "Campagnes ciblées sur les réseaux sociaux avec suivi et optimisation.",
            icon: Target,
          },
          {
            label: "Stratégie Marketing Complète",
            price: "150 000 FCFA",
            description: "Plan stratégique complet avec audit, plan d'action et mise en œuvre.",
            icon: Zap,
          },
        ],
        subscriptions: [
          {
            name: "Starter",
            features: ["12 publications/mois", "Gestion de 1 réseau social", "Reporting mensuel basique"],
            price: "50 000 FCFA/mois",
          },
          {
            name: "Business",
            features: ["20 publications/mois", "Gestion de 3 réseaux sociaux", "Reporting mensuel détaillé", "Calendrier éditorial"],
            price: "100 000 FCFA/mois",
          },
          {
            name: "Premium",
            features: ["Publications illimitées", "Community Management", "Publicités sponsorisées", "Reporting avancé", "Stratégie sur mesure"],
            price: "200 000 FCFA/mois",
            highlighted: true,
          },
        ],
        portfolio: [
          {
            title: "Campagne WhatsApp générations",
            tag: "Acquisition",
            gradient: "from-purple-600/30 via-pink-600/30 to-red-600/30",
          },
          {
            title: "Stratégie Instagram",
            tag: "Community Management",
            gradient: "from-cyan-600/30 via-blue-600/30 to-indigo-600/30",
          },
          {
            title: "Campagne Facebook Ads",
            tag: "Publicité",
            gradient: "from-orange-600/30 via-yellow-600/30 to-amber-600/30",
          },
          {
            title: "Calendrier éditorial",
            tag: "Stratégie",
            gradient: "from-emerald-600/30 via-teal-600/30 to-cyan-600/30",
          },
        ],
        faq: [
          {
            question: "Combien de temps dure une campagne publicitaire ?",
            answer: "Les campagnes sont gérées sur un minimum de 3 mois pour permettre l'optimisation. Les résultats visibles se font attendre entre 2 et 4 semaines.",
          },
          {
            question: "Qu'est-ce qui est inclus dans la gestion de réseaux sociaux ?",
            answer: "Création de contenus, publication, réponse aux messages, engagement avec la communauté et reporting mensuel.",
          },
          {
            question: "Utilisez-vous mes données clients ?",
            answer: "Non, nous ne utilisons jamais vos données clients. Toutes nos campagnes respectent la RGPD et les politiques de confidentialité des plateformes.",
          },
          {
            question: "Puis-je annuler mon abonnement ?",
            answer: "Oui, vous pouvez annuler à tout moment. L'abonnement est mensuel et ne comporte pas de engagement longue durée.",
          },
        ],
      }}
    />
  );
}