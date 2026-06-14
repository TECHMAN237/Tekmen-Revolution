import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "../../components/ServicePageLayout";
import { Code2, Award, Clock, Users, Target, Globe, Zap, ShieldCheck, Smartphone } from "lucide-react";

export const Route = createFileRoute("/services/developpement-web")({
  head: () => ({
    meta: [
      { title: "Développement Web & Mobile — TEKMEN REVOLUTION" },
      { name: "description", content: "Des solutions numériques modernes conçues pour accélérer votre croissance." },
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: DevWebPage,
});

function DevWebPage() {
  return (
    <ServicePageLayout
      data={{
        icon: Code2,
        title: "Développement Web & Mobile",
        subtitle: "Des solutions numériques modernes conçues pour accélérer votre croissance.",
        whyChooseUs: [
          {
            title: "Technologies Modernes",
            description: "Nous utilisons les dernières technologies (React, Tailwind, TypeScript) pour des solutions performantes et évolutives.",
            icon: Zap,
          },
          {
            title: "Design Responsive",
            description: "Vos sites s'adaptent parfaitement à tous les appareils : mobile, tablette et ordinateur.",
            icon: Globe,
          },
          {
            title: "Support Continu",
            description: "Maintenance, mises à jour et améliorations continues après le lancement.",
            icon: ShieldCheck,
          },
        ],
        services: [
          {
            category: "Sites Web",
            items: [
              "Landing Page",
              "Site Vitrine",
              "Site Institutionnel",
              "Site Entreprise",
              "Blog Professionnel",
              "Site E-commerce",
            ],
          },
          {
            category: "Applications Mobile",
            items: [
              "Application Android",
              "Application iOS",
              "Application Hybride (React Native)",
            ],
          },
          {
            category: "Services Techniques",
            items: [
              "Hébergement",
              "Nom de Domaine",
              "Maintenance",
              "Refonte de Site",
              "SEO Technique",
            ],
          },
        ],
        process: [
          {
            title: "Analyse",
            description: "Étude des besoins, objectifs business et specifications techniques.",
          },
          {
            title: "Maquettage",
            description: "Création des maquettes haute fidélité pour valider l'expérience utilisateur.",
          },
          {
            title: "Développement",
            description: "Codage front-end et back-end avec les meilleures pratiques du développement.",
          },
          {
            title: "Tests",
            description: "Tests fonctionnels, de performance et de sécurité avant le lancement.",
          },
          {
            title: "Mise en ligne",
            description: "Déploiement sur serveur avec configuration DNS et optimisation finale.",
          },
        ],
        pricing: [
          {
            label: "Landing Page",
            price: "50 000 FCFA",
            description: "Page unique optimisée pour la conversion. Parfaite pour les campagnes et lancements.",
            icon: Globe,
          },
          {
            label: "Site Vitrine",
            price: "100 000 FCFA",
            description: "Présentation complète de votre activité avec jusqu'à 10 pages.",
            icon: Globe,
          },
          {
            label: "Site Entreprise",
            price: "150 000 FCFA",
            description: "Solution complète avec CMS, blog et pages multiples.",
            icon: Globe,
          },
          {
            label: "Site E-commerce",
            price: "250 000 FCFA",
            description: "Boutique en ligne complète avec paiement, gestion de stock et commandes.",
            icon: ShieldCheck,
          },
          {
            label: "Application Mobile",
            price: "À partir de 300 000 FCFA",
            description: "Application native ou hybride avec interface moderne et fonctions avancées.",
            icon: Smartphone,
          },
        ],
        subscriptions: [
          {
            name: "Starter",
            features: ["Sauvegardes régulières", "Mises à jour de sécurité", "Support par email"],
            price: "20 000 FCFA/mois",
          },
          {
            name: "Business",
            features: ["Support prioritaire", "SEO basique", "Rapports mensuels", "Sauvegardes quotidiennes"],
            price: "50 000 FCFA/mois",
          },
          {
            name: "Premium",
            features: ["Maintenance complète", "Optimisations de performance", "Assistance continue 7j/7", "SEO avancé", "Mises à jour fonctionnelles"],
            price: "100 000 FCFA/mois",
            highlighted: true,
          },
        ],
        subscriptionLabel: "Formules de Maintenance",
        portfolio: [
          {
            title: "Site e-commerce mode",
            tag: "Développement Web",
            gradient: "from-purple-600/30 via-pink-600/30 to-red-600/30",
          },
          {
            title: "Plateforme d'entreprise",
            tag: "Application Web",
            gradient: "from-cyan-600/30 via-blue-600/30 to-indigo-600/30",
          },
          {
            title: "Landing page campagne",
            tag: "Optimisation",
            gradient: "from-orange-600/30 via-yellow-600/30 to-amber-600/30",
          },
          {
            title: "Blog professionnel",
            tag: "CMS personnalisé",
            gradient: "from-emerald-600/30 via-teal-600/30 to-cyan-600/30",
          },
        ],
        faq: [
          {
            question: "Combien de temps prend le développement d'un site web ?",
            answer: "Une landing page: 3-5 jours. Un site vitrine: 7-14 jours. Un site e-commerce: 15-21 jours. Les délais peuvent varier selon la complexité.",
          },
          {
            question: "Le site sera-t-il optimisé pour le référencement ?",
            answer: "Oui, tous nos sites sont développés avec des bonnes pratiques SEO (vitesse, meta tags, structure sémantique) et intégration Google Analytics.",
          },
          {
            question: "Puis-je modifier le contenu moi-même ?",
            answer: "Oui, nous vous fournissons un système de gestion de contenu (CMS) pour modifier facilement vos textes, images et pages.",
          },
          {
            question: "Proposez-vous un service de maintenance ?",
            answer: "Notre formule maintenance inclut les mises à jour de sécurité, sauvegardes automatiques et support technique. Contactez-nous pour un devis personnalisé.",
          },
        ],
      }}
    />
  );
}