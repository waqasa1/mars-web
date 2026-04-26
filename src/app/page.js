'use client'

import { useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen'
import StarField from '@/components/Atmosphere/StarField'
import NebulaBlobs from '@/components/Atmosphere/NebulaBlobs'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import TechTicker from '@/components/TechTicker/TechTicker'
import Services from '@/components/Services/Services'
import WhyUs from '@/components/WhyUs/WhyUs'
import Portfolio from '@/components/Portfolio/Portfolio'
import Testimonials from '@/components/Testimonials/Testimonials'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`main-content ${loading ? 'hidden' : 'visible'}`}>
        <StarField />
        <NebulaBlobs />
        <Navbar />
        <main>
          <Hero />
          <TechTicker />
          <Services />
          <WhyUs />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
      <style jsx>{`
        .main-content {
          transition: opacity 1s ease;
        }
        .hidden {
          opacity: 0;
          height: 100vh;
          overflow: hidden;
        }
        .visible {
          opacity: 1;
        }
      `}</style>
    </>
  )
}
