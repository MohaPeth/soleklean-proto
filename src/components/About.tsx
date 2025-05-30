export const About = () => {
  return <section id="a-propos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            À propos de SOLEKLEAN
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une entreprise engagée pour l'optimisation de vos installations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Histoire de l'entreprise */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Notre histoire</h3>
            <p className="text-slate-600 mb-6">
              SOLEKLEAN est née de la volonté de répondre à un besoin essentiel : 
              optimiser le rendement des installations solaires au Sénégal. Face au 
              développement croissant de l'énergie solaire, nous avons identifié l'importance 
              cruciale d'un entretien professionnel et régulier.
            </p>
            <p className="text-slate-600 mb-6">
              Basée à Dakar, notre entreprise s'appuie sur une équipe formée aux dernières 
              techniques de nettoyage écologique et équipée d'outils de pointe pour garantir 
              des résultats optimaux sans compromettre l'intégrité de vos installations.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">+30%</div>
                <div className="text-sm text-slate-600">Amélioration moyenne</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-slate-600">Méthodes écologiques</div>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Nos valeurs</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Écologie</h4>
                  <p className="text-slate-600">
                    Respect total de l'environnement avec des méthodes sans produits chimiques 
                    et l'utilisation exclusive d'eau déminéralisée.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Innovation</h4>
                  <p className="text-slate-600">
                    Adoption des technologies les plus avancées et formation continue 
                    de notre équipe aux dernières techniques du secteur.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Proximité</h4>
                  <p className="text-slate-600">
                    Engagement local fort avec une réactivité exemplaire et un suivi 
                    personnalisé adapté aux besoins spécifiques de chaque client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images de l'équipe en action */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Notre équipe en action</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img src="/lovable-uploads/fcdc3b5d-3c02-4b75-b6ee-07420d2b5cf0.png" alt="Équipement de nettoyage professionnel SOLEKLEAN pour panneaux solaires" className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold mb-1">Équipement professionnel</h4>
                <p className="text-white/90 text-sm">Outils spécialisés pour un nettoyage optimal</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Matériel de pointe et expertise technique
              </h4>
              <p className="text-slate-600 mb-4">
                Notre équipe utilise exclusivement du matériel professionnel adapté 
                au nettoyage délicat des installations solaires. Chaque intervention 
                est réalisée avec la plus grande précision pour garantir l'efficacité 
                sans endommager vos équipements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Brosses rotatives spécialisées
                </li>
                
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Équipements de sécurité complets
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Équipe */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Notre équipe</h3>
          <div className="bg-slate-50 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Personnel qualifié</h4>
                <p className="text-slate-600">Formation spécialisée et certifications professionnelles</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Équipe assurée</h4>
                <p className="text-slate-600">Couverture complète pour votre tranquillité d'esprit</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Formation continue</h4>
                <p className="text-slate-600">Mise à jour régulière des compétences et techniques</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};