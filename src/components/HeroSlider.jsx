import { useState, useRef, useEffect } from "react";

const slides = [
  {
    type: "video",
    desktop: "/media/desktop_slider.mp4", // Video principal del Cyberster
    mobile: "/media/mobile_slider.mp4",
    thumb: "https://ext.same-assets.com/937906658/860132896.webp", // miniatura Cyberster
    alt: "MG Cyberster Video",
  },
  {
    type: "image",
    src: "https://ext.same-assets.com/937906658/3533692258.png",
    thumb: "https://ext.same-assets.com/937906658/3533692258.png",
    alt: "MG ZS Hybrid",
  },
  {
    type: "image",
    src: "https://ext.same-assets.com/937906658/305262746.webp",
    thumb: "https://ext.same-assets.com/937906658/305262746.webp",
    alt: "MG 3 Hybrid",
  },
];

function VideoSlide({ desktop, mobile }) {
  return (
    <div className="absolute inset-0">
      <video
        className="hidden md:block w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={desktop} type="video/mp4" />
      </video>
      <video
        className="block md:hidden w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={mobile} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const scrollerRef = useRef(null);

  const go = (i) => setIndex((i + total) % total);
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  // Centrar miniatura activa
  useEffect(() => {
    const wrap = scrollerRef.current;
    if (!wrap) return;
    const item = wrap.querySelector(`[data-thumb="${index}"]`);
    if (!item) return;
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const target = Math.max(0, itemCenter - wrap.clientWidth / 2);
    wrap.scrollTo({ left: target, behavior: "smooth" });
  }, [index]);

  return (
    <section className="relative h-[85vh] md:h-screen">
      <div className="relative h-full overflow-hidden">
        {/* SLIDES */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          >
            {s.type === "video" ? (
              <VideoSlide desktop={s.desktop} mobile={s.mobile} />
            ) : (
              <>
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </>
            )}
          </div>
        ))}

        {/* BARRA INFERIOR CENTRADA */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-4 flex justify-center">
          <div className="flex items-center gap-3 rounded-lg bg-black/40 backdrop-blur-sm p-2">
            {/* Flecha izquierda */}
            <button
              onClick={prev}
              className="shrink-0 h-10 w-10 grid place-items-center bg-white/90 hover:bg-white rounded-md"
              aria-label="Anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>

            {/* Miniaturas */}
            <div
              ref={scrollerRef}
              className="flex items-center gap-3 overflow-x-auto no-scrollbar px-2"
            >
              {slides.map((s, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={i}
                    data-thumb={i}
                    onClick={() => go(i)}
                    className={`rounded-md overflow-hidden border transition ${
                      isActive
                        ? "border-white ring-2 ring-white"
                        : "border-white/40 hover:border-white"
                    }`}
                  >
                    <img
                      src={s.thumb || s.src}
                      alt={s.alt}
                      className="h-16 w-28 object-cover"
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>

            {/* Flecha derecha */}
            <button
              onClick={next}
              className="shrink-0 h-10 w-10 grid place-items-center bg-white/90 hover:bg-white rounded-md"
              aria-label="Siguiente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
