/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-secondary to-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-4">DEVIENEZ EXPERTE</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Prothésiste<br />
              <span className="font-bold">Ongulaire & Experte Cils</span>
            </h1>
            <p className="text-gray-600 mb-6 sm:mb-8">
              Formations professionnelles 100% pratiques, accessibles et rentables.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Formation accélérée
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Certification reconnue
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Accompagnement
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full hover:bg-opacity-90 transition font-medium">
                Voir les formations
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-full hover:border-primary hover:text-primary transition font-medium">
                Réserver en appel
              </button>
            </div>
            <div className="flex items-center mt-6 sm:mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=portrait%20of%20woman%20beauty%20professional%20headshot&image_size=square_hd`}
                    alt="Étudiante"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center text-yellow-500">
                  {'★'.repeat(5)}
                </div>
                <p className="text-xs sm:text-sm text-gray-600">4.9/5 • 1,247 avis</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beautiful%20asian%20woman%20with%20perfect%20nail%20art%20manicure%20professional%20beauty%20portrait&image_size=portrait_4_3"
              alt="Prothésiste Ongulaire"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=nail%20art%20close%20up%20beauty%20salon&image_size=square"
                  alt="Nail art"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900 text-xs sm:text-sm">Formation Prothésiste Ongulaire</p>
                  <p className="text-xl sm:text-2xl font-bold text-primary">300€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
