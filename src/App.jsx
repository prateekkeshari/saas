import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Integrations } from './components/Integrations'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col scroll-smooth">
      <div className="flex-1 flex flex-col items-center w-full">
        <Navigation />
        <Hero />
        <Features />
        <Integrations />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
