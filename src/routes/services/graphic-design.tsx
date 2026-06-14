import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "../../components/ServicePageLayout";
import { Palette, Award, Clock, Users, Target, Image, Zap, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services/graphic-design")({
  head: () => ({
    meta: [
      { title: "Graphic Design — TEKMEN REVOLUTION" },
      { name: "description", content: "Des créations visuelles professionnelles qui valorisent votre image de marque et attirent votre audience." },
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: GraphicDesignPage,
});

function GraphicDesignPage() {
  return (
    <ServicePageLayout
      data={{
        icon: Palette,
        title: "Graphic Design",
        subtitle: "Des créations visuelles professionnelles qui valorisent votre image de marque et attirent votre audience.",
        whyChooseUs: [
          {
            title: "Expertise & Qualité",
            description: "Notre équipe d'artistes qualifiés combine créativité et stratégie pour des résultats exceptionnels.",
            icon: Award,
          },
          {
            title: "Rapidité & Efficacité",
            description: "Des délais respectés sans compromis sur la qualité, avec des livrables sous 48h pour la plupart des projets.",
            icon: Clock,
          },
          {
            title: "Résultats Concrets",
            description: "Des visuels qui transforment votre audience et boostent vos ventes, pas juste des fichiers jolis.",
            icon: Target,
          },
        ],
        services: [
          {
            category: "Services Numériques",
            items: [
              "Visuel Réseaux Sociaux",
              "Couverture Facebook",
              "Bannière LinkedIn",
              "flyer Recto",
              "Affiche Publicitaire",
            ],
          },
          {
            category: "Services Print",
            items: [
              "Flyer Recto/Verso",
              "Carte de Visite",
              "Brochure",
              "Dépliant",
              "Roll-Up",
              "Kakemono",
              "Menu Restaurant",
              "Packaging Produit",
            ],
          },
          {
            category: "Identité de Marque",
            items: [
              "Logo Professionnel",
              "Charte Graphique",
            ],
          },
        ],
        process: [
          {
            title: "Analyse du besoin",
            description: "Nous étudions votre brief, objectifs et public cible pour aligner la stratégie.",
          },
          {
            title: "Recherche créative",
            description: "Inspiration et exploration visuelle pour définir le style et la direction artistique.",
          },
          {
            title: "Création",
            description: "Mise en œuvre des concepts avec des maquettes détaillées et des retours d'équipe.",
          },
          {
            title: "Révisions",
            description: "Jusqu'à 2 rounds de modifications pour parfaire le résultat final.",
          },
          {
            title: "Livraison",
            description: "Fichiers finaux optimisés et livrés dans les formats adaptés à vos besoins.",
          },
        ],
        pricing: [
          {
            label: "Visuel Réseaux Sociaux",
            price: "5 000 FCFA",
            description: "Idéal pour les publications Instagram, Facebook, LinkedIn et TikTok. Design percutant qui capte l'attention.",
            icon: Image,
          },
          {
            label: "Flyer Recto",
            price: "5 000 FCFA",
            description: "Communication visuelle rapide pour événements, promotions et actualités.",
            icon: Image,
          },
          {
            label: "Flyer Recto/Verso",
            price: "10 000 FCFA",
            description: "Information complète sur deux faces. Parfait pour les événements et campagnes.",
            icon: Image,
          },
          {
            label: "Affiche Publicitaire",
            price: "5 000 FCFA",
            description: "Design impactant pour vos campagnes de rue et affichage.",
            icon: Image,
          },
          {
            label: "Carte de Visite",
            price: "5 000 FCFA",
            description: "Votre identité professionnelle en miniature. Design élégant et mémorable.",
            icon: Image,
          },
          {
            label: "Logo Professionnel",
            price: "30 000 FCFA",
            description: "Votre identité visuelle unique. 3 concepts + révisions illimitées.",
            icon: Zap,
          },
          {
            label: "Charte Graphique",
            price: "50 000 FCFA",
            description: "L'ossature complète de votre identité visuelle. Logo, couleurs, typographies.",
            icon: ShieldCheck,
          },
          {
            label: "Roll-Up",
            price: "20 000 FCFA",
            description: "Support d'affichage professionnel. Design impactant pour vos événements.",
            icon: Image,
          },
          {
            label: "Brochure",
            price: "25 000 FCFA",
            description: "Document multipage élégant. Idéal pour présenter votre activité.",
            icon: Image,
          },
        ],
        pricingNote: "Les tarifs affichés concernent uniquement la conception graphique. Les coûts d'impression sont calculés séparément selon les quantités et supports souhaités.",
        subscriptions: [
          {
            name: "Starter",
            features: ["10 visuels/mois", "Formats réseaux sociaux", "Livraison sous 48h"],
            price: "30 000 FCFA/mois",
          },
          {
            name: "Business",
            features: ["20 visuels/mois", "Formats réseaux sociaux", "Supports print inclus", "Livraison sous 24h"],
            price: "55 000 FCFA/mois",
          },
          {
            name: "Premium",
            features: ["40 visuels/mois", "Tous formats confondus", "Priorité absolue", "Direction artistique", "Révisions illimitées"],
            price: "100 000 FCFA/mois",
            highlighted: true,
          },
        ],
        portfolio: [
          {
            title: "Campagne de lancement produit",
            tag: "Identité visuelle",
            gradient: "from-purple-600/30 via-pink-600/30 to-red-600/30",
          },
          {
            title: "Marque de mode féminine",
            tag: "Logo & Charte",
            gradient: "from-cyan-600/30 via-blue-600/30 to-indigo-600/30",
          },
          {
            title: "Événement corporate",
            tag: "Flyers & Roll-Up",
            gradient: "from-orange-600/30 via-yellow-600/30 to-amber-600/30",
          },
          {
            title: "Restaurant gastronomique",
            tag: "Menu & Packaging",
            gradient: "from-emerald-600/30 via-teal-600/30 to-cyan-600/30",
          },
        ],
        faq: [
          {
            question: "Combien de temps faut-il pour créer un logo ?",
            answer: "Un logo professionnel prend généralement 5 à 7 jours ouvrés. Cela inclut la phase de création, les révisions et les livraisons finales dans les formats vectoriels.",
          },
          {
            question: "Vous fournissez-vous les fichiers d'impression ?",
            answer: "Oui, nous livrons tous les fichiers nécessaires : PDF haute résolution, formats vectoriels (AI, EPS), et formats web (PNG, JPG). Vous pouvez ensuite faire imprimer vos documents.",
          },
          {
            question: "Combien de révisions sont incluses ?",
            answer: "Pour les projets ponctuels, nous incluons jusqu'à 2 rounds de révisions. Pour les abonnements, les révisions sont illimitées pendant la période d'abonnement.",
          },
          {
            question: "Travaillez-vous avec des marques existantes ?",
            answer: "Absolument. Nous travaillons avec votre charte graphique existante ou créons une nouvelle identité. Notre objectif est de renforcer votre marque, pas de la remplacer.",
          },
        ],
      }}
    />
  );
}