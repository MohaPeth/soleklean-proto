export const WhyChooseUs = () => {
  const advantages = [
    {
      icon: "⚡",
      title: "Rapidité",
      description: "Intervention sous 48h, équipe réactive et disponible"
    },
    {
      icon: "🛡️",
      title: "Fiabilité",
      description: "Personnel qualifié, assuré et équipé professionnellement"
    },
    {
      icon: "🌱",
      title: "Écologie",
      description: "Méthodes écologiques, sans produits chimiques nocifs"
    },
    {
      icon: "✨",
      title: "Propreté",
      description: "Résultats impeccables, sans traces ni résidus"
    },
    {
      icon: "🔧",
      title: "Expertise",
      description: "Formation continue, techniques innovantes et adaptées"
    },
    {
      icon: "📈",
      title: "Performance",
      description: "Amélioration mesurable du rendement de vos installations"
    }
  ];

  return (
    <section id="pourquoi-nous" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Pourquoi choisir SOLEKLEAN ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Notre engagement qualité et notre expertise font la différence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{advantage.title}</h3>
              <p className="text-slate-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Engagements spécifiques */}
        <div className="mt-16 bg-white p-8 rounded-xl border">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Nos engagements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Amélioration garantie</h4>
              <p className="text-slate-600">Augmentation mesurable du rendement de vos installations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Respect de l'environnement</h4>
              <p className="text-slate-600">Eau déminéralisée uniquement, zéro produit chimique</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Transparence totale</h4>
              <p className="text-slate-600">Devis détaillé, intervention programmée, rapport photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
