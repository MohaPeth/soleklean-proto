export const Services = () => {
  return <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nos Services Professionnels
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Des solutions de nettoyage adaptées à chaque type d'installation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Nettoyage panneaux solaires */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Nettoyage de panneaux solaires</h3>
            </div>
            
            <p className="text-slate-600 mb-6">
              Optimisez le rendement de vos installations photovoltaïques avec notre service spécialisé.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Amélioration de performance jusqu'à 30%
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Nettoyage écologique sans produits chimiques
              </li>
              
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Prolongation de la durée de vie des installations
              </li>
            </ul>
          </div>

          {/* Nettoyage façades */}
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Nettoyage de façades & vitrages</h3>
            </div>
            
            <p className="text-slate-600 mb-6">
              Redonnez éclat et transparence à vos surfaces vitrées et façades.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Techniques adaptées à chaque surface
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Nettoyage haute pression contrôlée
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Préservation de l'intégrité des matériaux
              </li>
              <li className="flex items-center text-slate-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Résultat sans traces ni résidus
              </li>
            </ul>
          </div>
        </div>

        {/* Options d'abonnement */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Prestations ponctuelles ou abonnements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 border border-slate-200 rounded-lg">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Prestation ponctuelle</h4>
              <p className="text-slate-600 mb-4">Idéal pour un nettoyage de remise en état ou d'entretien occasionnel</p>
              <ul className="text-left space-y-2 text-slate-600">
                <li>• Intervention rapide</li>
                <li>• Tarif transparent</li>
                <li>• Qualité garantie</li>
              </ul>
            </div>
            <div className="p-6 border border-blue-200 rounded-lg bg-blue-50">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Abonnement régulier</h4>
              <p className="text-slate-600 mb-4">Maintenance programmée pour optimiser durablement vos installations</p>
              <ul className="text-left space-y-2 text-slate-600">
                <li>• Tarif préférentiel</li>
                <li>• Planification automatique</li>
                <li>• Suivi personnalisé</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};