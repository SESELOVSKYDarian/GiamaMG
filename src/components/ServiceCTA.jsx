export default function ServiceCTA() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container">
        <div className="mb-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
          MG Care
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 tracking-tight">
          Cuidamos tu MG para que siempre esté como nuevo.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img
              src="https://ext.same-assets.com/937906658/378233026.jpeg"
              alt="Servicio MG"
              className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="mb-5 text-[15px] leading-relaxed max-w-xl">
                Mantenimientos programados, repuestos originales y técnicos
                certificados para que tu MG siga rindiendo como el primer día.
              </p>
              <button className="shadow h-11 px-6 py-3 bg-white text-black hover:bg-gray-100 font-semibold">
                Más información
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img
              src="https://ext.same-assets.com/937906658/301372880.webp"
              alt="Garantías y beneficios"
              className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="mb-5 text-[15px] leading-relaxed max-w-xl">
                Conocé planes, garantías y beneficios exclusivos para clientes
                MG. Tranquilidad total en cada kilómetro.
              </p>
              <button className="shadow h-11 px-6 py-3 bg-white text-black hover:bg-gray-100 font-semibold">
                Centros de servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
