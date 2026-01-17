import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Portfolio from './portfolio/Portfolio'
import About from './about/About'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

export default function App() {
  return (
    <>
          <div className='p-5' id=""></div>

      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}