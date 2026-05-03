'use client'

import HeroParticles from './HeroParticles'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <HeroParticles />

      <div className="container hero-inner">
        <div className="mars-visual">
          <div className="mars-wrapper">
            <div className="mars-atmosphere"></div>
            <div className="mars-planet-container">
              <Image
                src="/assets/mars2.png"
                alt="Mars Planet"
                width={800}
                height={800}
                priority
                loading="eager"
                fetchPriority="high"
                className="mars-planet-img"
              />
            </div>
            <div className="mars-ring"></div>
          </div>
        </div>

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
          margin-top: 20px; /* Pull text up over the planet */
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
          font-size: clamp(3.5rem, 8vw, 6.5rem);
          line-height: 0.9;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
          text-shadow: 0 10px 30px rgba(3, 5, 15, 0.8);
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
          max-width: 650px;
          margin: 0 auto 3rem;
          line-height: 1.6;
          text-shadow: 0 5px 15px rgba(3, 5, 15, 0.5);
        }

        .cta-group {
          display: flex;
          gap: 20px;
          justify-content: center;
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
          background: rgba(255, 255, 255, 0.03);
        }

        .btn-ghost:hover {
          border-color: var(--mars-glow);
          background: rgba(232, 68, 26, 0.05);
          transform: translateY(-3px);
        }

        /* ── Mars Visual ── */

        .mars-visual {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
          pointer-events: none;
          opacity: 0.7;
        }

        .mars-wrapper {
          position: relative;
          width: 100%;
          max-width: 800px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: marsFloat 10s ease-in-out infinite alternate;
        }

        .mars-atmosphere {
          position: absolute;
          inset: -15%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(232, 68, 26, 0.25) 0%,
            rgba(139, 42, 16, 0.1) 40%,
            transparent 70%
          );
          animation: atmospherePulse 5s ease-in-out infinite alternate;
        }

        .mars-ring {
          position: absolute;
          inset: 0%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(232, 68, 26, 0.15) 0%,
            transparent 75%
          );
          filter: blur(40px);
        }

        .mars-planet-container {
          position: relative;
          width: 80%;
          aspect-ratio: 1;
          z-index: 1;
        }

        .mars-planet-img {
          width: 100% !important;
          height: auto !important;
          object-fit: contain;
          border-radius: 50%;
          filter:
            drop-shadow(0 0 50px rgba(232, 68, 26, 0.4));
          animation: marsSpin 120s linear infinite;
        }

        .mars-planet-container::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            transparent 0%,
            rgba(3, 5, 15, 0.6) 80%
          );
          z-index: 2;
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
          .hero-content { margin-top: -60px; }
          h1 { font-size: clamp(3rem, 10vw, 5rem); }
          .mars-wrapper { max-width: 600px; }
        }

        @media (max-width: 640px) {
          .hero { padding-top: 120px; }
          .cta-group { flex-direction: column; width: 100%; max-width: 300px; margin: 0 auto; }
          .btn { width: 100%; text-align: center; }
          .mars-wrapper { max-width: 400px; }
          h1 { font-size: clamp(2.5rem, 12vw, 4rem); }
        }

        @media (prefers-reduced-motion: reduce) {
          .mars-wrapper { animation: none; }
          .mars-planet-img { animation: none; }
          .mars-atmosphere { animation: none; }
        }
      `}</style>
    </section>
  )
}