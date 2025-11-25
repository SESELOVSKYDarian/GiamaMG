import Logo from "./Logo.jsx";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-lg">
      <div className="container px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="inline-flex items-center">
            <Logo className="w-12 h-12 md:w-14 md:h-14 text-white" />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-[15px]">
            <button className="hover:text-gray-300 transition">Modelos</button>
            <button className="hover:text-gray-300 transition">MG World</button>
            <button className="hover:text-gray-300 transition">MG CARE</button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-white text-black hover:bg-gray-100 font-semibold h-11 px-6 py-3 shadow">
            Test Drive
          </button>
          <button className="md:hidden p-2" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
