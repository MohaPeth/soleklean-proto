import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onQuoteRequest: () => void;
}

export const Navbar = ({ onQuoteRequest }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.svg" alt="SOLEKLEAN" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Nos Services
              </button>
              <button
                onClick={() => scrollToSection("pourquoi-nous")}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pourquoi nous choisir
              </button>
              <button
                onClick={() => scrollToSection("reservation")}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Réservation
              </button>
              <button
                onClick={() => scrollToSection("tarifs")}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
            {/* <div className="ml-4 flex items-center space-x-4">
              <Button
                onClick={onQuoteRequest}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Demander un devis
              </Button>
            </div> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection("accueil")}
                className="block text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Nos Services
              </button>
              <button
                onClick={() => scrollToSection("pourquoi-nous")}
                className="block text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Pourquoi nous choisir
              </button>
              <button
                onClick={() => scrollToSection("reservation")}
                className="block text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Réservation
              </button>
              <button
                onClick={() => scrollToSection("tarifs")}
                className="block text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                Contact
              </button>
              {/* <div className="px-3 py-2">
                <Button
                  onClick={onQuoteRequest}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                >
                  Demander un devis
                </Button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
