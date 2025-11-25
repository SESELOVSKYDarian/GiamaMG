function Tag({ type = "hibridos" }) {
  const isHibrido = type === "hibridos";
  const color = isHibrido ? "text-green-600" : "text-sky-500";
  const label = isHibrido ? "Híbridos" : "Eléctricos";

  return (
    <div
      className={`flex items-center gap-1.5 ${color} font-heavy text-[14px] leading-none`}
    >
      <span>{label}</span>
      {/* icono rayo/hoja minimal */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        className="shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {isHibrido ? (
          <path d="M12 2C7 2 3 6 3 11c0 5 4 9 9 9s9-4 9-9c0-1.5-.4-2.9-1.1-4.1-1.3 2.2-3.8 3.8-6.7 4.1 0 0 .6-3.9 5-7.4C16.7 2.6 14.5 2 12 2z" />
        ) : (
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        )}
      </svg>
    </div>
  );
}

function Card({ tagType, image, title, price }) {
  return (
    <div className="rounded-lg shadow-sm overflow-hidden group bg-white">
      <div className="relative">
        <div className="bg-white p-8 min-h-[210px] flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="mb-2">
          <Tag type={tagType} />
        </div>

        <h3 className="font-heavy uppercase text-[22px] tracking-tight leading-6 mb-1">
          {title}
        </h3>

        <p className="text-gray-600 text-[17px] mb-6">
          Desde: <span className="font-heavy text-black">USD {price}</span>*
        </p>

        <button className="btn-outline-black w-[140px]">Cotizar</button>
      </div>
    </div>
  );
}

const cars = [
  {
    tagType: "hibridos",
    image: "https://ext.same-assets.com/937906658/305262746.webp",
    title: "ALL NEW MG 3 HYBRID",
    price: "23.500",
  },
  {
    tagType: "hibridos",
    image: "https://ext.same-assets.com/937906658/3533692258.png",
    title: "ALL NEW MG ZS HYBRID",
    price: "27.500",
  },
  {
    tagType: "electricos",
    image: "https://ext.same-assets.com/937906658/860132896.webp",
    title: "MG CYBERSTER",
    price: "130.000",
  },
];

export default function ModelsGrid() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container">
        <div className="mb-2 text-[18px] font-heavy text-black tracking-tight">
          Modelos
        </div>

        {/* Título grande como en la captura */}
        <h2 className="font-heavy title-modelos text-[48px] md:text-[64px] lg:text-[72px] mb-16">
          ¿Qué modelo MG te gusta?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
