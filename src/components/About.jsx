export default function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container">
        <div className="mb-2 text-xs font-bold text-gray-500 uppercase tracking-widest">Sobre MG</div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight">
          Tenemos un futuro brillante por delante
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img src="https://ext.same-assets.com/937906658/1182247034.webp" alt="ZS Hybrid+" className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="mb-5 text-[15px] leading-relaxed">
                El <strong>ZS Hybrid+</strong> es un SUV híbrido Eco eficiente y moderno que combina estilo, confort y tecnología
              </p>
              <button className="shadow h-11 px-6 py-3 bg-white text-black hover:bg-gray-100 font-semibold">
                Más información
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img src="https://ext.same-assets.com/937906658/301372880.webp" alt="MG3 híbrido" className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="mb-5 text-[15px] leading-relaxed">
                Conocé el nuevo <strong>MG3 híbrido</strong> Tecnología Full Hybrid con hasta 43,5 Km/L de rendimiento
              </p>
              <button className="shadow h-11 px-6 py-3 bg-white text-black hover:bg-gray-100 font-semibold">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
