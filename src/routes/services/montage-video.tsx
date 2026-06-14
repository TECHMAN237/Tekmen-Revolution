import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "../../components/ServicePageLayout";
import { Clapperboard, Award, Clock, Users, Target, Video, Zap, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services/montage-video")({
  head: () => ({
    meta: [
      { title: "Montage Vidéo — TEKMEN REVOLUTION" },
      { name: "description", content: "Donnez vie à votre communication grâce à des vidéos professionnelles et engageantes." },
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: MontageVideoPage,
});

function MontageVideoPage() {
  return (
    <ServicePageLayout
      data={{
        icon: Clapperboard,
        title: "Montage Vidéo",
        subtitle: "Donnez vie à votre communication grâce à des vidéos professionnelles et engageantes.",
        whyChooseUs: [
          {
            title: "Storytelling Expert",
            description: "Notre équipe raconte des histoires qui connectent, convertissent et créent un lien émotionnel avec votre audience.",
            icon: Users,
          },
          {
            title: "Tournage & Post-Prod",
            description: "Du concept à la livraison finale, nous gérons entièrement votre projet vidéo.",
            icon: Clock,
          },
          {
            title: "Résultats Mesurables",
            description: "Des vidéos optimisées pour le référencement et les campagnes publicitaires à fort taux de conversion.",
            icon: Target,
          },
        ],
        services: [
          {
            category: "Réseaux Sociaux",
            items: [
              "Reel Instagram",
              "TikTok",
              "YouTube Shorts",
              "Sous-Titrage",
            ],
          },
          {
            category: "Publicité",
            items: [
              "Publicité Vidéo",
              "Campagnes publicitaires",
              "Vidéo d'entreprise",
            ],
          },
          {
            category: "Contenus Longs",
            items: [
              "Vidéo Corporate",
              "Documentaire",
              "Interview",
              "Montage Podcast",
            ],
          },
          {
            category: "Événementiel",
            items: [
              "Vidéo Événementielle",
              "Retour d'événement",
              "Présentation de produit",
            ],
          },
        ],
        process: [
          {
            title: "Réception des contenus",
            description: "Nous collectons vos fichiers, brief et consignes pour démarrer le projet.",
          },
          {
            title: "Montage",
            description: "Assemblage des séquences avec une structure narrative claire et percutante.",
          },
          {
            title: "Effets",
            description: "Ajout de transitions, animations, musiques et effets visuels pour plus d'impact.",
          },
          {
            title: "Validation",
            description: "Vous retrouvez votre projet avec nos recommandations et ajustements.",
          },
          {
            title: "Livraison",
            description: "Fichiers optimisés pour chaque plateforme (Instagram, TikTok, YouTube, etc.).",
          },
        ],
        pricing: [
          {
            label: "Reel Simple",
            price: "10 000 FCFA",
            description: "Reel rapide et percutant pour les réseaux sociaux. Idéal pour les promotions flash.",
            icon: Video,
          },
          {
            label: "Reel Professionnel",
            price: "15 000 FCFA",
            description: "Reel haut de gamme avec effets avancés, musique et transitions fluides.",
            icon: Video,
          },
          {
            label: "Vidéo Promotionnelle",
            price: "25 000 FCFA",
            description: "Vidéo de 30-60 secondes pour vos campagnes publicitaires et lancements.",
            icon: Zap,
          },
          {
            label: "Motion Design",
            price: "35 000 FCFA",
            description: "Animation 2D/3D pour expliquer vos produits ou services de manière visuelle.",
            icon: Video,
          },
          {
            label: "Vidéo Corporate",
            price: "50 000 FCFA",
            description: "Vidéo d'entreprise complète : présentation, valeurs, services et appel à action.",
            icon: ShieldCheck,
          },
        ],
        subscriptions: [
          {
            name: "Starter",
            features: ["4 vidéos/mois", "Formats courts (Reels/TikTok)", "Livraison sous 72h"],
            price: "40 000 FCFA/mois",
          },
          {
            name: "Business",
            features: ["8 vidéos/mois", "Formats courts et longs", "Sous-titrage inclus", "Livraison sous 48h"],
            price: "75 000 FCFA/mois",
          },
          {
            name: "Premium",
            features: ["15 vidéos/mois", "Tous formats confondus", "Motion Design inclus", "Priorité absolue", "Révisions illimitées"],
            price: "130 000 FCFA/mois",
            highlighted: true,
          },
        ],
        portfolio: [
          {
            title: "Campagne produit lancé",
            tag: "Reels & TikTok",
            gradient: "from-purple-600/30 via-pink-600/30 to-red-600/30",
          },
          {
            title: "Influenceur mode",
            tag: "Vidéos de présentation",
            gradient: "from-cyan-600/30 via-blue-600/30 to-indigo-600/30",
          },
          {
            title: "Lancement entreprise",
            tag: "Vidéo corporate",
            gradient: "from-orange-600/30 via-yellow-600/30 to-amber-600/30",
          },
          {
            title: "Retour événement",
            tag: "Montage événementiel",
            gradient: "from-emerald-600/30 via-teal-600/30 to-cyan-600/30",
          },
        ],
        faq: [
          {
            question: "Quelle durée de vidéo puis-je demander ?",
            answer: "Nous réalisons des vidéos de 15 secondes à 5 minutes selon vos besoins. Les reels court format font 15-30 secondes, les vidéos promotionnelles 30-60 secondes.",
          },
          {
            question: "Fournissez-vous les fichiers source ?",
            answer: "Oui, nous vous livrons les fichiers source (project) ainsi que les fichiers exportés dans les formats optimaux pour chaque plateforme.",
          },
          {
            question: "Puis-je réviser ma vidéo ?",
            answer: "Absolument. Vous bénéficiez de 2 rounds de révisions incluses dans le prix. Les abonnements incluent des révisions illimitées.",
          },
          {
            question: "Combos-vous avec une équipe externe ?",
            answer: "Oui, nous pouvons travailler avec vos propres caméras ou organiser le tournage via nos partenaires. Le montage et le post-production restent sous notre responsabilité.",
          },
        ],
      }}
    />
  );
}