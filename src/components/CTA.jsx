export default function CTA() {
  return (
    <section className="relative h-[500px]">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/media/home.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-blue-900/70" />
      <div className="relative container px-4 h-full flex flex-col justify-center text-white max-w-3xl">
        <div className="mb-3 text-xs font-bold uppercase tracking-widest">
          Test Drive
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
          Manejar un MG, la aventura que no te podés perder.
        </h2>
        <button className="shadow h-11 px-6 py-3 bg-white text-black hover:bg-gray-100 w-fit font-semibold">
          ¡Agendar Test Drive ahora!
        </button>
      </div>
    </section>
  );
}
