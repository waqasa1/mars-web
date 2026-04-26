'use client'

import StarField from '@/components/Atmosphere/StarField'
import NebulaBlobs from '@/components/Atmosphere/NebulaBlobs'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Contact from '@/components/Contact/Contact'

export default function ContactPage() {
  return (
    <div className="main-content visible">
      <StarField />
      <NebulaBlobs />
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Contact />
      </main>
      <Footer />
      <style jsx>{`
        .main-content {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
      `}</style>
    </div>
  )
}
