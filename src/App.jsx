import React from 'react'
import HeroSection from './components/HeroSection'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App