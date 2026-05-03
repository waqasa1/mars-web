'use client'

import HeroParticles from './HeroParticles'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <HeroParticles />

      <div className="container hero-inner">
        {/* Background Visual - Inline styles for maximum CLS protection */}
        <div
          className="mars-visual"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.6
          }}
        >
          <div
            className="mars-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '820px',
              aspectRatio: '1',
              animation: 'marsFloat 8s ease-in-out infinite alternate'
            }}
          >
            <div className="mars-atmosphere" />
            <div className="mars-planet-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src="/assets/mars2.png"
                alt="Mars Planet"
                fill
                priority
                className="mars-planet-img"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="mars-ring" />
          </div>
        </div>

        {/* Content */}
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
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 100px;
          padding-bottom: 60px;
        }

        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 1;
          position: relative;
          width: 100%;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
          margin-top: 20px;
        }

        .eyebrow {
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.3em;
          color: var(--mars);
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        h1 {
          font-weight: 900;
          font-size: clamp(3.5rem, 8vw, 6.5rem);
          line-height: 0.95;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
          text-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
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
          font-weight: 400;
          font-size: 1.25rem;
          color: var(--star-dim);
          max-width: 650px;
          margin: 0 auto 3rem;
          line-height: 1.7;
          letter-spacing: 0.01em;
        }

        .cta-group {
          display: flex;
          gap: 24px;
          justify-content: center;
        }

        .btn {
          font-weight: 800;
          padding: 18px 40px;
          border-radius: var(--radius-md);
          font-size: 1rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          text-transform: uppercase;
          letter-spacing: 0.1em;
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
          background: rgba(255, 255, 255, 0.03);
        }

        .btn-ghost:hover {
          border-color: var(--mars-glow);
          background: rgba(232, 68, 26, 0.05);
          transform: translateY(-3px);
        }

        .mars-atmosphere {
          position: absolute;
          inset: -10%;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(232, 68, 26, 0.15),
            rgba(232, 68, 26, 0.05) 40%,
            transparent 70%
          );
          filter: blur(40px);
          z-index: -1;
          animation: atmospherePulse 4s ease-in-out infinite alternate;
        }

        .mars-planet-img {
          animation: marsSpin 120s linear infinite;
        }

        .mars-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 140%;
          height: 30%;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          transform: translate(-50%, -50%) rotate(-15deg);
          z-index: -2;
          pointer-events: none;
        }

        @keyframes marsFloat {
          from { transform: translateY(0px) rotate(0deg) scale(1); }
          to   { transform: translateY(-30px) rotate(1deg) scale(1.02); }
        }

        @keyframes marsSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes atmospherePulse {
          from { opacity: 0.5; transform: scale(0.95); }
          to   { opacity: 0.9;   transform: scale(1.05); }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero-content { margin-top: 0; }
          h1 { font-size: clamp(3rem, 10vw, 5rem); }
          .mars-wrapper { max-width: 650px !important; }
        }

        @media (max-width: 768px) {
          .hero { padding-top: 140px; padding-bottom: 60px; }
          .mars-visual { opacity: 0.45 !important; top: 40% !important; }
          .mars-wrapper { max-width: 480px !important; }
          h1 { font-size: clamp(2.5rem, 10vw, 4rem); line-height: 1; }
          .subheading { font-size: 1.1rem; margin-bottom: 2.5rem; }
          .cta-group { gap: 16px; }
          .btn { padding: 16px 32px; font-size: 0.95rem; }
        }

        @media (max-width: 480px) {
          .hero { padding-top: 120px; }
          h1 { font-size: clamp(2.25rem, 12vw, 3.25rem); }
          .mars-wrapper { max-width: 340px !important; }
          .cta-group { flex-direction: column; width: 100%; max-width: 280px; margin: 0 auto; }
          .btn { width: 100%; text-align: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .mars-wrapper { animation: none !important; }
          .mars-planet-img { animation: none !important; }
          .mars-atmosphere { animation: none !important; }
        }
      `}</style>
    </section>
  )
}