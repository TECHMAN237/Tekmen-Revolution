import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "../../components/ServicePageLayout";
import { Clapperboard, Users, Clock, Target, Video, Zap, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

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
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <ServicePageLayout
      data={{
        id: "montage-video",
        icon: Clapperboard,
        title: isEn ? "Video Editing" : "Montage Vidéo",
        subtitle: isEn
          ? "Bring your communication to life with professional and engaging videos."
          : "Donnez vie à votre communication grâce à des vidéos professionnelles et engageantes.",
        whyChooseUs: [
          {
            title: isEn ? "Expert Storytelling" : "Storytelling Expert",
            description: isEn
              ? "Our team tells stories that connect, convert, and create an emotional bond with your audience."
              : "Notre équipe raconte des histoires qui connectent, convertissent et créent un lien émotionnel avec votre audience.",
            icon: Users,
          },
          {
            title: isEn ? "Filming & Post-Prod" : "Tournage & Post-Prod",
            description: isEn
              ? "From concept to final delivery, we fully manage your video project."
              : "Du concept à la livraison finale, nous gérons entièrement votre projet vidéo.",
            icon: Clock,
          },
          {
            title: isEn ? "Measurable Results" : "Résultats Mesurables",
            description: isEn
              ? "Videos optimized for SEO and high-conversion advertising campaigns."
              : "Des vidéos optimisées pour le référencement et les campagnes publicitaires à fort taux de conversion.",
            icon: Target,
          },
        ],
        services: [
          {
            category: isEn ? "Social Media" : "Réseaux Sociaux",
            items: isEn
              ? [
                  "Instagram Reel",
                  "TikTok",
                  "YouTube Shorts",
                  "Subtitling",
                ]
              : [
                  "Reel Instagram",
                  "TikTok",
                  "YouTube Shorts",
                  "Sous-Titrage",
                ],
          },
          {
            category: isEn ? "Advertising" : "Publicité",
            items: isEn
              ? [
                  "Video Ads",
                  "Advertising Campaigns",
                  "Corporate Video",
                ]
              : [
                  "Publicité Vidéo",
                  "Campagnes publicitaires",
                  "Vidéo d'entreprise",
                ],
          },
          {
            category: isEn ? "Long Form Content" : "Contenus Longs",
            items: isEn
              ? [
                  "Corporate Video",
                  "Documentary",
                  "Interview",
                  "Podcast Editing",
                ]
              : [
                  "Vidéo Corporate",
                  "Documentaire",
                  "Interview",
                  "Montage Podcast",
                ],
          },
          {
            category: isEn ? "Events" : "Événementiel",
            items: isEn
              ? [
                  "Event Video",
                  "Event Recap",
                  "Product Presentation",
                ]
              : [
                  "Vidéo Événementielle",
                  "Retour d'événement",
                  "Présentation de produit",
                ],
          },
        ],
        process: [
          {
            title: isEn ? "Content Reception" : "Réception des contenus",
            description: isEn
              ? "We collect your files, brief, and instructions to kick off the project."
              : "Nous collectons vos fichiers, brief et consignes pour démarrer le projet.",
          },
          {
            title: isEn ? "Editing" : "Montage",
            description: isEn
              ? "Assembling clips with a clear and punchy narrative structure."
              : "Assemblage des séquences avec une structure narrative claire et percutante.",
          },
          {
            title: isEn ? "Effects" : "Effets",
            description: isEn
              ? "Adding transitions, animations, music, and visual effects for more impact."
              : "Ajout de transitions, animations, musiques et effets visuels pour plus d'impact.",
          },
          {
            title: "Validation",
            description: isEn
              ? "Review your project with our recommendations and adjustments."
              : "Vous retrouvez votre projet avec nos recommandations et ajustements.",
          },
          {
            title: isEn ? "Delivery" : "Livraison",
            description: isEn
              ? "Optimized files for each platform (Instagram, TikTok, YouTube, etc.)."
              : "Fichiers finaux optimisés et livrés dans les formats adaptés à vos besoins.",
          },
        ],
        pricing: [
          {
            label: isEn ? "Simple Reel" : "Reel Simple",
            price: isEn ? "10,000 FCFA" : "10 000 FCFA",
            description: isEn
              ? "Quick and punchy Reel for social media. Ideal for flash promos."
              : "Reel rapide et percutant pour les réseaux sociaux. Idéal pour les promotions flash.",
            icon: Video,
          },
          {
            label: isEn ? "Professional Reel" : "Reel Professionnel",
            price: isEn ? "15,000 FCFA" : "15 000 FCFA",
            description: isEn
              ? "High-end Reel with advanced effects, music, and fluid transitions."
              : "Reel haut de gamme avec effets avancés, musique et transitions fluides.",
            icon: Video,
          },
          {
            label: isEn ? "Promotional Video" : "Vidéo Promotionnelle",
            price: isEn ? "25,000 FCFA" : "25 000 FCFA",
            description: isEn
              ? "30-60 second video for your ad campaigns and launches."
              : "Vidéo de 30-60 secondes pour vos campagnes publicitaires et lancements.",
            icon: Zap,
          },
          {
            label: "Motion Design",
            price: isEn ? "35,000 FCFA" : "35 000 FCFA",
            description: isEn
              ? "2D/3D animation to visually explain your products or services."
              : "Animation 2D/3D pour expliquer vos produits ou services de manière visuelle.",
            icon: Video,
          },
          {
            label: isEn ? "Corporate Video" : "Vidéo Corporate",
            price: isEn ? "50,000 FCFA" : "50 000 FCFA",
            description: isEn
              ? "Complete business video: presentation, values, services, and call to action."
              : "Vidéo d'entreprise complète : présentation, valeurs, services et appel à action.",
            icon: ShieldCheck,
          },
        ],
        subscriptions: [
          {
            name: "Starter",
            features: isEn
              ? ["4 videos/month", "Short formats (Reels/TikTok)", "72h delivery"]
              : ["4 vidéos/mois", "Formats courts (Reels/TikTok)", "Livraison sous 72h"],
            price: isEn ? "40,000 FCFA/month" : "40 000 FCFA/mois",
          },
          {
            name: "Business",
            features: isEn
              ? ["8 videos/month", "Short and long formats", "Subtitling included", "48h delivery"]
              : ["8 vidéos/mois", "Formats courts et longs", "Sous-titrage inclus", "Livraison sous 48h"],
            price: isEn ? "75,000 FCFA/month" : "75 000 FCFA/mois",
          },
          {
            name: "Premium",
            features: isEn
              ? ["15 videos/month", "All formats included", "Motion Design included", "Absolute priority", "Unlimited revisions"]
              : ["15 vidéos/mois", "Tous formats confondus", "Motion Design inclus", "Priorité absolue", "Révisions illimitées"],
            price: isEn ? "130,000 FCFA/month" : "130 000 FCFA/mois",
            highlighted: true,
          },
        ],
        portfolio: [
          {
            title: isEn ? "Launched product campaign" : "Campagne produit lancé",
            tag: "Reels & TikTok",
            gradient: "from-purple-600/30 via-pink-600/30 to-red-600/30",
          },
          {
            title: isEn ? "Fashion influencer" : "Influenceur mode",
            tag: isEn ? "Presentation Videos" : "Vidéos de présentation",
            gradient: "from-cyan-600/30 via-blue-600/30 to-indigo-600/30",
          },
          {
            title: isEn ? "Company launch" : "Lancement entreprise",
            tag: isEn ? "Corporate Video" : "Vidéo corporate",
            gradient: "from-orange-600/30 via-yellow-600/30 to-amber-600/30",
          },
          {
            title: isEn ? "Event recap" : "Retour événement",
            tag: isEn ? "Event Editing" : "Montage événementiel",
            gradient: "from-emerald-600/30 via-teal-600/30 to-cyan-600/30",
          },
        ],
        faq: [
          {
            question: isEn
              ? "What video length can I request?"
              : "Quelle durée de vidéo puis-je demander ?",
            answer: isEn
              ? "We create videos from 15 seconds to 5 minutes depending on your needs. Short reels are 15-30 seconds, promo videos are 30-60 seconds."
              : "Nous réalisons des vidéos de 15 secondes à 5 minutes selon vos besoins. Les reels court format font 15-30 secondes, les vidéos promotionnelles 30-60 secondes.",
          },
          {
            question: isEn
              ? "Do you provide source files?"
              : "Fournissez-vous les fichiers source ?",
            answer: isEn
              ? "Yes, we deliver the source files (projects) as well as exported files in optimal formats for each platform."
              : "Oui, nous vous livrons les fichiers source (project) ainsi que les fichiers exportés dans les formats optimaux pour chaque plateforme.",
          },
          {
            question: isEn
              ? "Can I revise my video?"
              : "Puis-je réviser ma vidéo ?",
            answer: isEn
              ? "Absolutely. You benefit from 2 rounds of revisions included in the price. Subscriptions include unlimited revisions."
              : "Absolument. Vous bénéficiez de 2 rounds de révisions incluses dans le prix. Les abonnements incluent des révisions illimitées.",
          },
          {
            question: isEn
              ? "Do you work with an external filming team?"
              : "Combos-vous avec une équipe externe ?",
            answer: isEn
              ? "Yes, we can work with your footage or organize filming through our partners. Editing and post-production remain under our responsibility."
              : "Oui, nous pouvons travailler avec vos propres caméras ou organiser le tournage via nos partenaires. Le montage et le post-production restent sous notre responsabilité.",
          },
        ],
      }}
    />
  );
}