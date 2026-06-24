import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "../../components/ServicePageLayout";
import { Palette, Award, Clock, Target, Image, Zap, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

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
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <ServicePageLayout
      data={{
        id: "graphic-design",
        icon: Palette,
        title: "Graphic Design",
        subtitle: isEn
          ? "Professional visual creations that enhance your brand image and attract your audience."
          : "Des créations visuelles professionnelles qui valorisent votre image de marque et attirent votre audience.",
        whyChooseUs: [
          {
            title: isEn ? "Expertise & Quality" : "Expertise & Qualité",
            description: isEn
              ? "Our team of skilled artists combines creativity and strategy for exceptional results."
              : "Notre équipe d'artistes qualifiés combine créativité et stratégie pour des résultats exceptionnels.",
            icon: Award,
          },
          {
            title: isEn ? "Speed & Efficiency" : "Rapidité & Efficacité",
            description: isEn
              ? "Deadlines met without compromising on quality, with deliverables within 48 hours for most projects."
              : "Des délais respectés sans compromis sur la qualité, avec des livrables sous 48h pour la plupart des projets.",
            icon: Clock,
          },
          {
            title: isEn ? "Concrete Results" : "Résultats Concrets",
            description: isEn
              ? "Visuals that convert your audience and boost your sales, not just pretty files."
              : "Des visuels qui transforment votre audience et boostent vos ventes, pas juste des fichiers jolis.",
            icon: Target,
          },
        ],
        services: [
          {
            category: isEn ? "Digital Services" : "Services Numériques",
            items: isEn
              ? [
                  "Social Media Visuals",
                  "Facebook Cover",
                  "LinkedIn Banner",
                  "Single-sided Flyer",
                  "Advertising Poster",
                ]
              : [
                  "Visuel Réseaux Sociaux",
                  "Couverture Facebook",
                  "Bannière LinkedIn",
                  "flyer Recto",
                  "Affiche Publicitaire",
                ],
          },
          {
            category: isEn ? "Print Services" : "Services Print",
            items: isEn
              ? [
                  "Double-sided Flyer",
                  "Business Card",
                  "Brochure",
                  "Leaflet",
                  "Roll-Up",
                  "Kakemono",
                  "Restaurant Menu",
                  "Product Packaging",
                ]
              : [
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
            category: isEn ? "Brand Identity" : "Identité de Marque",
            items: isEn
              ? [
                  "Professional Logo",
                  "Brand Guidelines",
                ]
              : [
                  "Logo Professionnel",
                  "Charte Graphique",
                ],
          },
        ],
        process: [
          {
            title: isEn ? "Need Analysis" : "Analyse du besoin",
            description: isEn
              ? "We study your brief, objectives, and target audience to align the strategy."
              : "Nous étudions votre brief, objectifs et public cible pour aligner la stratégie.",
          },
          {
            title: isEn ? "Creative Research" : "Recherche créative",
            description: isEn
              ? "Inspiration and visual exploration to define the style and artistic direction."
              : "Inspiration et exploration visuelle pour définir le style et la direction artistique.",
          },
          {
            title: isEn ? "Creation" : "Création",
            description: isEn
              ? "Implementing concepts with detailed prototypes and team feedback."
              : "Mise en œuvre des concepts avec des maquettes détaillées et des retours d'équipe.",
          },
          {
            title: isEn ? "Revisions" : "Révisions",
            description: isEn
              ? "Up to 2 rounds of modifications to perfect the final result."
              : "Jusqu'à 2 rounds de modifications pour parfaire le résultat final.",
          },
          {
            title: isEn ? "Delivery" : "Livraison",
            description: isEn
              ? "Final files optimized and delivered in formats suitable for your needs."
              : "Fichiers finaux optimisés et livrés dans les formats adaptés à vos besoins.",
          },
        ],
        pricing: [
          {
            label: isEn ? "Social Media Visual" : "Visuel Réseaux Sociaux",
            price: isEn ? "5,000 FCFA" : "5 000 FCFA",
            description: isEn
              ? "Ideal for Instagram, Facebook, LinkedIn, and TikTok posts. Striking design that grabs attention."
              : "Idéal pour les publications Instagram, Facebook, LinkedIn et TikTok. Design percutant qui capte l'attention.",
            icon: Image,
          },
          {
            label: isEn ? "Single-sided Flyer" : "Flyer Recto",
            price: isEn ? "5,000 FCFA" : "5 000 FCFA",
            description: isEn
              ? "Quick visual communication for events, promotions, and updates."
              : "Communication visuelle rapide pour événements, promotions et actualités.",
            icon: Image,
          },
          {
            label: isEn ? "Double-sided Flyer" : "Flyer Recto/Verso",
            price: isEn ? "10,000 FCFA" : "10 000 FCFA",
            description: isEn
              ? "Complete information on both sides. Perfect for events and campaigns."
              : "Information complète sur deux faces. Parfait pour les événements et campagnes.",
            icon: Image,
          },
          {
            label: isEn ? "Advertising Poster" : "Affiche Publicitaire",
            price: isEn ? "5,000 FCFA" : "5 000 FCFA",
            description: isEn
              ? "Impactful design for your street campaigns and billboards."
              : "Design impactant pour vos campagnes de rue et affichage.",
            icon: Image,
          },
          {
            label: isEn ? "Business Card" : "Carte de Visite",
            price: isEn ? "5,000 FCFA" : "5 000 FCFA",
            description: isEn
              ? "Your professional identity in miniature. Elegant and memorable design."
              : "Votre identité professionnelle en miniature. Design élégant et mémorable.",
            icon: Image,
          },
          {
            label: isEn ? "Professional Logo" : "Logo Professionnel",
            price: isEn ? "30,000 FCFA" : "30 000 FCFA",
            description: isEn
              ? "Your unique visual identity. 3 concepts + unlimited revisions."
              : "Votre identité visuelle unique. 3 concepts + révisions illimitées.",
            icon: Zap,
          },
          {
            label: isEn ? "Brand Guidelines" : "Charte Graphique",
            price: isEn ? "50,000 FCFA" : "50 000 FCFA",
            description: isEn
              ? "The complete backbone of your visual identity. Logo, colors, typography."
              : "L'ossature complète de votre identité visuelle. Logo, couleurs, typographies.",
            icon: ShieldCheck,
          },
          {
            label: "Roll-Up",
            price: isEn ? "20,000 FCFA" : "20 000 FCFA",
            description: isEn
              ? "Professional display banner. Impactful design for your events."
              : "Support d'affichage professionnel. Design impactant pour vos événements.",
            icon: Image,
          },
          {
            label: "Brochure",
            price: isEn ? "25,000 FCFA" : "25 000 FCFA",
            description: isEn
              ? "Elegant multi-page document. Ideal for presenting your activity."
              : "Document multipage élégant. Idéal pour présenter votre activité.",
            icon: Image,
          },
        ],
        pricingNote: isEn
          ? "The prices shown are for graphic design only. Printing costs are calculated separately based on quantity and materials."
          : "Les tarifs affichés concernent uniquement la conception graphique. Les coûts d'impression sont calculés séparément selon les quantités et supports souhaités.",
        subscriptions: [
          {
            name: "Starter",
            features: isEn
              ? ["10 visuals/month", "Social media formats", "48h delivery"]
              : ["10 visuels/mois", "Formats réseaux sociaux", "Livraison sous 48h"],
            price: isEn ? "30,000 FCFA/month" : "30 000 FCFA/mois",
          },
          {
            name: "Business",
            features: isEn
              ? ["20 visuals/month", "Social media formats", "Print materials included", "24h delivery"]
              : ["20 visuels/mois", "Formats réseaux sociaux", "Supports print inclus", "Livraison sous 24h"],
            price: isEn ? "55,000 FCFA/month" : "55 000 FCFA/mois",
          },
          {
            name: "Premium",
            features: isEn
              ? ["40 visuals/month", "All formats included", "Absolute priority", "Art direction", "Unlimited revisions"]
              : ["40 visuels/mois", "Tous formats confondus", "Priorité absolue", "Direction artistique", "Révisions illimitées"],
            price: isEn ? "100,000 FCFA/month" : "100 000 FCFA/mois",
            highlighted: true,
          },
        ],
        portfolio: [
          {
            title: isEn ? "Product launch campaign" : "Campagne de lancement produit",
            tag: isEn ? "Visual Identity" : "Identité visuelle",
            gradient: "from-purple-600/30 via-pink-600/30 to-red-600/30",
          },
          {
            title: isEn ? "Women's fashion brand" : "Marque de mode féminine",
            tag: isEn ? "Logo & Guidelines" : "Logo & Charte",
            gradient: "from-cyan-600/30 via-blue-600/30 to-indigo-600/30",
          },
          {
            title: isEn ? "Corporate event" : "Événement corporate",
            tag: "Flyers & Roll-Up",
            gradient: "from-orange-600/30 via-yellow-600/30 to-amber-600/30",
          },
          {
            title: isEn ? "Gourmet restaurant" : "Restaurant gastronomique",
            tag: "Menu & Packaging",
            gradient: "from-emerald-600/30 via-teal-600/30 to-cyan-600/30",
          },
        ],
        faq: [
          {
            question: isEn
              ? "How long does it take to create a logo?"
              : "Combien de temps faut-il pour créer un logo ?",
            answer: isEn
              ? "A professional logo usually takes 5 to 7 business days. This includes the creation phase, revisions, and final delivery in vector formats."
              : "Un logo professionnel prend généralement 5 à 7 jours ouvrés. Cela inclut la phase de création, les révisions et les livraisons finales dans les formats vectoriels.",
          },
          {
            question: isEn
              ? "Do you provide files ready for print?"
              : "Vous fournissez-vous les fichiers d'impression ?",
            answer: isEn
              ? "Yes, we deliver all necessary files: high-resolution PDF, vector formats (AI, EPS), and web formats (PNG, JPG). You can then get your documents printed."
              : "Oui, nous livrons tous les fichiers nécessaires : PDF haute résolution, formats vectoriels (AI, EPS), et formats web (PNG, JPG). Vous pouvez ensuite faire imprimer vos documents.",
          },
          {
            question: isEn
              ? "How many revisions are included?"
              : "Combien de révisions sont incluses ?",
            answer: isEn
              ? "For one-off projects, we include up to 2 rounds of revisions. For subscriptions, revisions are unlimited during the subscription period."
              : "Pour les projets ponctuels, nous incluons jusqu'à 2 rounds de révisions. Pour les abonnements, les révisions sont illimitées pendant la période d'abonnement.",
          },
          {
            question: isEn
              ? "Do you work with existing brands?"
              : "Travaillez-vous avec des marques existantes ?",
            answer: isEn
              ? "Absolutely. We work with your existing brand guidelines or create a brand new identity. Our goal is to strengthen your brand, not replace it."
              : "Absolument. Nous travaillons avec votre charte graphique existante ou créons une nouvelle identité. Notre objectif est de renforcer votre marque, pas de la remplacer.",
          },
        ],
      }}
    />
  );
}