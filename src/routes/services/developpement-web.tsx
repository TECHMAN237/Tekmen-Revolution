import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "../../components/ServicePageLayout";
import { Code2, Globe, Zap, ShieldCheck, Smartphone } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

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
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <ServicePageLayout
      data={{
        id: "developpement-web",
        icon: Code2,
        title: isEn ? "Web & Mobile Development" : "Développement Web & Mobile",
        subtitle: isEn
          ? "Modern digital solutions designed to accelerate your growth."
          : "Des solutions numériques modernes conçues pour accélérer votre croissance.",
        whyChooseUs: [
          {
            title: isEn ? "Modern Technologies" : "Technologies Modernes",
            description: isEn
              ? "We use the latest technologies (React, Tailwind, TypeScript) for high-performance and scalable solutions."
              : "We use the latest technologies (React, Tailwind, TypeScript) for high-performance and scalable solutions.",
            icon: Zap,
          },
          {
            title: isEn ? "Responsive Design" : "Design Responsive",
            description: isEn
              ? "Your websites adapt perfectly to all devices: mobile, tablet, and desktop."
              : "Vos sites s'adaptent parfaitement à tous les appareils : mobile, tablette et ordinateur.",
            icon: Globe,
          },
          {
            title: isEn ? "Continuous Support" : "Support Continu",
            description: isEn
              ? "Maintenance, updates, and continuous improvements after launching."
              : "Maintenance, mises à jour et améliorations continues après le lancement.",
            icon: ShieldCheck,
          },
        ],
        services: [
          {
            category: isEn ? "Websites" : "Sites Web",
            items: isEn
              ? [
                  "Landing Page",
                  "Showcase Website",
                  "Institutional Website",
                  "Corporate Website",
                  "Professional Blog",
                  "E-commerce Website",
                ]
              : [
                  "Landing Page",
                  "Site Vitrine",
                  "Site Institutionnel",
                  "Site Entreprise",
                  "Blog Professionnel",
                  "Site E-commerce",
                ],
          },
          {
            category: isEn ? "Mobile Applications" : "Applications Mobile",
            items: isEn
              ? [
                  "Android Application",
                  "iOS Application",
                  "Hybrid Application (React Native)",
                ]
              : [
                  "Application Android",
                  "Application iOS",
                  "Application Hybride (React Native)",
                ],
          },
          {
            category: isEn ? "Technical Services" : "Services Techniques",
            items: isEn
              ? [
                  "Hosting",
                  "Domain Name",
                  "Maintenance",
                  "Website Redesign",
                  "Technical SEO",
                ]
              : [
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
            title: isEn ? "Analysis" : "Analyse",
            description: isEn
              ? "Study of needs, business goals, and technical specifications."
              : "Étude des besoins, objectifs business et specifications techniques.",
          },
          {
            title: isEn ? "Prototyping" : "Maquettage",
            description: isEn
              ? "Creation of high-fidelity prototypes to validate the user experience."
              : "Création des maquettes haute fidélité pour valider l'expérience utilisateur.",
          },
          {
            title: isEn ? "Development" : "Développement",
            description: isEn
              ? "Front-end and back-end coding with development best practices."
              : "Codage front-end et back-end avec les meilleures pratiques du développement.",
          },
          {
            title: isEn ? "Testing" : "Tests",
            description: isEn
              ? "Functional, performance, and security testing before launching."
              : "Tests fonctionnels, de performance et de sécurité avant le lancement.",
          },
          {
            title: isEn ? "Deployment" : "Mise en ligne",
            description: isEn
              ? "Deployment on server with DNS configuration and final optimization."
              : "Déploiement sur serveur avec configuration DNS et optimisation finale.",
          },
        ],
        pricing: [
          {
            label: "Landing Page",
            price: isEn ? "50,000 FCFA" : "50 000 FCFA",
            description: isEn
              ? "Single page optimized for conversion. Perfect for campaigns and launches."
              : "Page unique optimisée pour la conversion. Parfaite pour les campagnes et lancements.",
            icon: Globe,
          },
          {
            label: isEn ? "Showcase Website" : "Site Vitrine",
            price: isEn ? "100,000 FCFA" : "100 000 FCFA",
            description: isEn
              ? "Complete presentation of your business with up to 10 pages."
              : "Présentation complète de votre activité avec jusqu'à 10 pages.",
            icon: Globe,
          },
          {
            label: isEn ? "Corporate Website" : "Site Entreprise",
            price: isEn ? "150,000 FCFA" : "150 000 FCFA",
            description: isEn
              ? "Complete solution with CMS, blog, and multiple pages."
              : "Solution complète avec CMS, blog et pages multiples.",
            icon: Globe,
          },
          {
            label: isEn ? "E-commerce Website" : "Site E-commerce",
            price: isEn ? "250,000 FCFA" : "250 000 FCFA",
            description: isEn
              ? "Complete online store with payment, stock management, and orders."
              : "Boutique en ligne complète avec paiement, gestion de stock et commandes.",
            icon: ShieldCheck,
          },
          {
            label: isEn ? "Mobile Application" : "Application Mobile",
            price: isEn ? "From 300,000 FCFA" : "À partir de 300 000 FCFA",
            description: isEn
              ? "Native or hybrid application with modern interface and advanced features."
              : "Application native ou hybride avec interface moderne et fonctions avancées.",
            icon: Smartphone,
          },
        ],
        subscriptions: [
          {
            name: "Starter",
            features: isEn
              ? ["Regular backups", "Security updates", "Email support"]
              : ["Sauvegardes régulières", "Mises à jour de sécurité", "Support par email"],
            price: isEn ? "20,000 FCFA/month" : "20 000 FCFA/mois",
          },
          {
            name: "Business",
            features: isEn
              ? ["Priority support", "Basic SEO", "Monthly reports", "Daily backups"]
              : ["Support prioritaire", "SEO basique", "Rapports mensuels", "Sauvegardes quotidiennes"],
            price: isEn ? "50,000 FCFA/month" : "50 000 FCFA/mois",
          },
          {
            name: "Premium",
            features: isEn
              ? [
                  "Full maintenance",
                  "Performance optimizations",
                  "24/7 continuous assistance",
                  "Advanced SEO",
                  "Functional updates",
                ]
              : [
                  "Maintenance complète",
                  "Optimisations de performance",
                  "Assistance continue 7j/7",
                  "SEO avancé",
                  "Mises à jour fonctionnelles",
                ],
            price: isEn ? "100,000 FCFA/month" : "100 000 FCFA/mois",
            highlighted: true,
          },
        ],
        subscriptionLabel: isEn ? "Maintenance Plans" : "Formules de Maintenance",
        portfolio: [
          {
            title: isEn ? "Fashion e-commerce site" : "Site e-commerce mode",
            tag: isEn ? "Web Development" : "Développement Web",
            gradient: "from-purple-600/30 via-pink-600/30 to-red-600/30",
          },
          {
            title: isEn ? "Corporate platform" : "Plateforme d'entreprise",
            tag: isEn ? "Web Application" : "Application Web",
            gradient: "from-cyan-600/30 via-blue-600/30 to-indigo-600/30",
          },
          {
            title: isEn ? "Campaign landing page" : "Landing page campagne",
            tag: isEn ? "Optimization" : "Optimisation",
            gradient: "from-orange-600/30 via-yellow-600/30 to-amber-600/30",
          },
          {
            title: isEn ? "Professional blog" : "Blog professionnel",
            tag: isEn ? "Custom CMS" : "CMS personnalisé",
            gradient: "from-emerald-600/30 via-teal-600/30 to-cyan-600/30",
          },
        ],
        faq: [
          {
            question: isEn
              ? "How long does it take to develop a website?"
              : "Combien de temps prend le développement d'un site web ?",
            answer: isEn
              ? "Landing page: 3-5 days. Showcase site: 7-14 days. E-commerce site: 15-21 days. Delays may vary depending on complexity."
              : "Une landing page: 3-5 jours. Un site vitrine: 7-14 jours. Un site e-commerce: 15-21 jours. Les délais peuvent varier selon la complexité.",
          },
          {
            question: isEn
              ? "Will the site be optimized for SEO?"
              : "Le site sera-t-il optimisé pour le référencement ?",
            answer: isEn
              ? "Yes, all our sites are developed with SEO best practices (speed, meta tags, semantic structure) and Google Analytics integration."
              : "Oui, tous nos sites sont développés avec des bonnes pratiques SEO (vitesse, meta tags, structure sémantique) et intégration Google Analytics.",
          },
          {
            question: isEn
              ? "Can I modify the content myself?"
              : "Puis-je modifier le contenu moi-même ?",
            answer: isEn
              ? "Yes, we provide you with a Content Management System (CMS) to easily modify your text, images, and pages."
              : "Oui, nous vous fournissons un système de gestion de contenu (CMS) pour modifier facilement vos textes, images et pages.",
          },
          {
            question: isEn
              ? "Do you offer a maintenance service?"
              : "Proposez-vous un service de maintenance ?",
            answer: isEn
              ? "Our maintenance plans include security updates, automatic backups, and technical support. Contact us for a personalized quote."
              : "Notre formule maintenance inclut les mises à jour de sécurité, sauvegardes automatiques et support technique. Contactez-nous pour un devis personnalisé.",
          },
        ],
      }}
    />
  );
}