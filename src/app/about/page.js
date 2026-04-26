'use client'

import StarField from '@/components/Atmosphere/StarField'
import NebulaBlobs from '@/components/Atmosphere/NebulaBlobs'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import WhyUs from '@/components/WhyUs/WhyUs'

export default function AboutPage() {
  return (
    <div className="main-content visible">
      <StarField />
      <NebulaBlobs />
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <section className="about-hero section-padding">
          <div className="container">
            <div className="about-header">
              <p className="eyebrow">OUR STORY</p>
              <h1 className="section-title">
                Pioneering the <br />
                <span className="highlight-text">Digital Frontier</span>
              </h1>
              <p className="about-desc">
                Mars Web is a premium software house specializing in crafting extraordinary websites and digital experiences. We believe that a website should be more than just an online presence; it should be a powerful engine for growth, engineered with obsessive attention to detail and blazing performance.
              </p>
            </div>
          </div>
        </section>

        <WhyUs />
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
        .about-hero {
          position: relative;
          text-align: center;
          padding-top: 60px;
          padding-bottom: 80px;
        }
        .about-header {
          max-width: 800px;
          margin: 0 auto;
        }
        .eyebrow {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.3em;
          color: var(--mars);
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }
        .section-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(3rem, 6vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }
        .highlight-text {
          font-style: italic;
          color: var(--mars);
          background: linear-gradient(to right, var(--mars), var(--mars-glow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .about-desc {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 1.25rem;
          color: var(--star-dim);
          line-height: 1.6;
        }
      `}</style>
    </div>
  )
}
