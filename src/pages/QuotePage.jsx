import { Link } from 'react-router-dom'

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-blue-900 font-heavy text-lg tracking-tight">
            <img src="/logo.svg" alt="MG" className="h-9 w-auto" />
            <span>Volver al inicio</span>
          </Link>
          <a
            href="https://mgargentina.ar/quote"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-black"
          >
            Abrir en pestaña nueva
          </a>
        </div>
      </header>

      <main className="container px-4 py-10 flex-1 w-full">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
            <h1 className="text-3xl md:text-4xl font-heavy mb-2">Agendá tu Test Drive</h1>
            <p className="text-sm md:text-base max-w-3xl leading-relaxed">
              Usá la página oficial de MG Argentina dentro de nuestro sitio para completar tu solicitud
              de test drive. Si el contenido no carga, podés abrirlo en una pestaña nueva con el botón superior.
            </p>
          </div>

          <div className="relative bg-gray-50">
            <div className="aspect-[16/9] w-full min-h-[70vh]">
              <iframe
                src="https://mgargentina.ar/quote"
                title="Formulario oficial de Test Drive MG Argentina"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
