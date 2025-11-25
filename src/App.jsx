import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import HeroSlider from './components/HeroSlider.jsx'
import ModelsGrid from './components/ModelsGrid.jsx'
import About from './components/About.jsx'
import CTA from './components/CTA.jsx'
import ServiceCTA from './components/ServiceCTA.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import QuotePage from './pages/QuotePage.jsx'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <HeroSlider />
        <ModelsGrid />
        <About />
        <CTA />
        <ServiceCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quote" element={<QuotePage />} />
    </Routes>
  )
}
