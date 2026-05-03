'use client'

import { useState, useEffect } from 'react'
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

// Persistent flag to prevent loader re-triggering during internal navigation
let hasShownLoaderGlobal = false;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check both memory flag (for internal nav) and sessionStorage (for refresh)
    const hasLoadedSession = typeof window !== 'undefined' && sessionStorage.getItem('mars_web_loaded');
    
    if (hasShownLoaderGlobal || hasLoadedSession) {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('mars_web_loaded', 'true');
    hasShownLoaderGlobal = true;
    setLoading(false);
  }

  // Prevent hydration mismatch by not rendering anything that depends on client-only state until mounted
  // BUT we want to avoid the flash, so we use the 'hidden' class approach
  
  return (
    <>
      {isMounted && loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`main-content ${(!isMounted || loading) ? 'hidden' : 'visible'}`}>
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
    </>
  )
}
