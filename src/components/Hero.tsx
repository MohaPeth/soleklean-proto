import { Button } from "@/components/ui/button";

interface HeroProps {
  onQuoteRequest: () => void;
}
export const Hero = ({ onQuoteRequest }: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section id="accueil" className="relative pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/soleklean_hero.jpeg')",
          zIndex: 0,
        }}
      >
        {/* Overlay with reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          <img
            src="/logo.svg"
            alt="SOLEKLEAN Logo"
            className="h-24 md:h-32 w-auto mb-6"
          />

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Nettoyage Écologique de
            <br />
            <span className="text-blue-600">Panneaux Solaires</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Expert en nettoyage professionnel et écologique de panneaux
            solaires, façades et vitrages. Boostez le rendement de vos
            installations photovoltaïques jusqu'à 30% avec nos solutions
            respectueuses de l'environnement. Intervention rapide partout, devis
            gratuit sous 24h.
          </p>
        </div>
      </div>
    </section>
  );
};
