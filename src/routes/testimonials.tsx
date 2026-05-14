import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Testimonials } from "../components/Testimonials";
import logoImg from "../../logo.png";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Témoignages — TEKMEN REVOLUTION" },
      {
        name: "description",
        content:
          "Découvrez les témoignages de nos clients satisfaits. Plus de 500 projets livrés avec une note moyenne de 5.0.",
      },
      { property: "og:title", content: "Témoignages — TEKMEN REVOLUTION" },
      {
        property: "og:description",
        content: "Retours clients et avis sur nos services de design, web et vidéo.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <main className="relative min-h-screen text-foreground bg-[var(--background)]">
      {/* Subtle background grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15)_0%,transparent_60%)]" />
      </div>

      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      <Testimonials />

      {/* Footer */}
      <footer className="py-16 text-center text-xs text-muted-foreground border-t border-white/5 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <img
            src={logoImg}
            alt="TEKMEN REVOLUTION"
            className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
          <p>© {new Date().getFullYear()} TEKMEN REVOLUTION. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
