'use client'

import HeroParticles from './HeroParticles'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <HeroParticles />

      <div className="container hero-inner">
        <div className="hero-content">
          <p className="eyebrow">WE BUILD DIGITAL WORLDS</p>
          <h1>
            Extraordinary Websites.<br />
            Engineered <span className="highlight-text">Beyond Earth.</span>
          </h1>
          <p className="subheading">
            We craft pixel-perfect web and mobile experiences with obsessive attention to detail,
            blazing performance, and SEO built to dominate search rankings.
          </p>
          <div className="cta-group">
            <Link href="#contact" className="btn btn-primary">Start Your Project →</Link>
            <Link href="#portfolio" className="btn btn-ghost">View Our Work</Link>
          </div>
        </div>

        <div className="mars-visual">
          <div className="mars-planet-container">
            <Image
              src="/assets/mars2.png"
              alt="Mars Planet"
              width={600}
              height={600}
              priority
              loading="eager"
              fetchPriority="high"
              className="mars-planet-img"
            />
            <div className="mars-glow"></div>
          </div>
        </div>
      </div>


      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 100px;
          padding-bottom: 60px;
        }

        .hero-inner {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          align-items: center;
          gap: 40px;
          z-index: 1;
        }

        .hero-content {
          grid-column: span 7;
          position: relative;
          z-index: 2;
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

        h1 {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(3rem, 6.5vw, 5.5rem);
          line-height: 0.95;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .highlight-text {
          display: block;
          font-style: italic;
          color: var(--mars);
          background: linear-gradient(to right, var(--mars), var(--mars-glow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subheading {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 1.25rem;
          color: var(--star-dim);
          max-width: 580px;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .cta-group {
          display: flex;
          gap: 20px;
        }

        .btn {
          font-family: var(--font-display);
          font-weight: 600;
          padding: 16px 36px;
          border-radius: var(--radius-md);
          font-size: 1rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-primary {
          background: var(--mars);
          color: white;
          box-shadow: 0 10px 30px -10px rgba(232, 68, 26, 0.5);
        }

        .btn-primary:hover {
          background: var(--mars-glow);
          box-shadow: 0 15px 40px -10px rgba(232, 68, 26, 0.6);
          transform: translateY(-3px);
        }

        .btn-ghost {
          border: 1px solid var(--border-subtle);
          color: var(--star-white);
          backdrop-filter: blur(10px);
        }

        .btn-ghost:hover {
          border-color: var(--mars-glow);
          background: rgba(232, 68, 26, 0.05);
          transform: translateY(-3px);
        }

        .mars-visual {
          grid-column: span 5;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .mars-planet-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mars-planet-img {
          width: 100% !important;
          height: auto !important;
          object-fit: contain;
          filter: drop-shadow(0 0 50px rgba(232, 68, 26, 0.2));
          animation: float 8s ease-in-out infinite;
        }

        .mars-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, var(--mars) 0%, transparent 70%);
          opacity: 0.15;
          filter: blur(60px);
          pointer-events: none;
          z-index: -1;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @media (max-width: 1200px) {
          .hero-inner { gap: 20px; }
          h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); }
        }

        @media (max-width: 1024px) {
          .hero { padding-top: 140px; }
          .hero-inner { grid-template-columns: 1fr; text-align: center; }
          .hero-content { grid-column: 1; display: flex; flex-direction: column; align-items: center; }
          .subheading { margin-left: auto; margin-right: auto; }
          .cta-group { justify-content: center; }
          .mars-visual { grid-column: 1; margin-top: 2rem; order: -1; }
          .mars-planet-container { max-width: 300px; }
          h1 { font-size: clamp(2.2rem, 8vw, 3.8rem); }
        }

        @media (max-width: 640px) {
          .hero { padding-top: 120px; }
          .cta-group { flex-direction: column; width: 100%; max-width: 300px; }
          .btn { width: 100%; text-align: center; }
          .eyebrow { font-size: 0.75rem; letter-spacing: 0.2em; }
        }
      `}</style>
    </section>
  )
}