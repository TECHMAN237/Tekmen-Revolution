import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { StatsBar } from "../components/StatsBar";
import { SceneBackground } from "../components/SceneBackground";
import { Contact } from "../components/Contact";
import logoImg from "../../logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TEKMEN REVOLUTION — L'Excellence Technologique" },
      {
        name: "description",
        content:
          "Agence tech premium : solutions innovantes en Design, Web, Vidéo et Ingénierie. 500+ projets, support 24/7.",
      },
      { property: "og:title", content: "TEKMEN REVOLUTION — L'Excellence Technologique" },
      {
        property: "og:description",
        content: "Solutions innovantes en Design, Web, Vidéo et Ingénierie.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen text-foreground">
      <SceneBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <StatsBar />
      <Contact />
      <footer className="py-16 text-center text-xs text-muted-foreground border-t border-white/5 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <img src={logoImg} alt="TEKMEN REVOLUTION" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <p>© {new Date().getFullYear()} TEKMEN REVOLUTION. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
