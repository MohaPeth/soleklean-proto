
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tarifs" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nos Tarifs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Des prix transparents adaptés à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Prestation ponctuelle */}
          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Prestation ponctuelle</h3>
              <p className="text-slate-600">Intervention unique</p>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">15.000 CFA</div>
              <p className="text-slate-500">Nettoyage + Inspection</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Nettoyage complet
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Inspection visuelle
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Intervention sous 48h
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Devis gratuit
              </li>
            </ul>

            <Button 
              onClick={() => scrollToSection("devis")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Demander un devis
            </Button>
          </div>

          {/* Abonnement - Le plus populaire */}
          <div className="bg-blue-600 p-8 rounded-xl border shadow-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Le plus populaire
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Abonnement régulier</h3>
              <p className="text-blue-100">Maintenance programmée</p>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-white mb-2">10.000 CFA</div>
              <p className="text-blue-100">par passage</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 text-orange-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Tarif préférentiel -33%
              </li>
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 text-orange-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Planification automatique
              </li>
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 text-orange-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Suivi personnalisé
              </li>
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 text-orange-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Priorité sur les interventions
              </li>
            </ul>

            <Button 
              onClick={() => scrollToSection("devis")}
              className="w-full bg-white text-blue-600 hover:bg-blue-50"
            >
              Choisir l'abonnement
            </Button>
          </div>

          {/* Premium */}
          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Service Premium</h3>
              <p className="text-slate-600">Solution complète</p>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-slate-900 mb-2">Sur devis</div>
              <p className="text-slate-500">Service complet + suivi</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Nettoyage complet
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Rapport photo détaillé
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Contrôle technique
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Suivi performance
              </li>
            </ul>

            <Button 
              onClick={() => scrollToSection("devis")}
              variant="outline" 
              className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              Obtenir un devis personnalisé
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            * Tarifs indicatifs pour installations standards. Devis personnalisé selon surface et complexité.
          </p>
          <Button 
            onClick={() => scrollToSection("devis")}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Obtenir un devis gratuit et personnalisé
          </Button>
        </div>
      </div>
    </section>
  );
};
