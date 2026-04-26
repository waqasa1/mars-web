'use client'

import StarField from '@/components/Atmosphere/StarField'
import NebulaBlobs from '@/components/Atmosphere/NebulaBlobs'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Portfolio from '@/components/Portfolio/Portfolio'

export default function ProjectsPage() {
  return (
    <div className="main-content visible">
      <StarField />
      <NebulaBlobs />
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <Portfolio showAll={true} />
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
