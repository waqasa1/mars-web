'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    // Track mouse relative to the whole footer section
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <footer className="footer" onMouseMove={handleMouseMove}>
      <div
        className="footer-background-text"
        style={{
          '--mouse-x': `${mousePos.x}px`,
          '--mouse-y': `${mousePos.y}px`
        }}
      >
        MARS WEB
      </div>
      <div className="container footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
              <div className="logo-row" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="logo-img-wrapper" style={{ position: 'relative', width: '28px', height: '28px', flexShrink: 0 }}>
                  <Image
                    src="/assets/mars.png"
                    alt="Mars Web Logo"
                    width={24}
                    height={24}
                    className="logo-img"
                  />
                </div>
                <div className="logo-text" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span className="mars" style={{ fontWeight: 800 }}>MARS</span>
                  <span className="web" style={{ fontWeight: 800 }}>WEB</span>
                </div>
              </div>
            </Link>
            <p className="tagline">Beyond Earth. Beyond Ordinary.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/marswebhq/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="col-title">Services</h4>
            <ul className="footer-links">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>SEO Optimization</li>
              <li>Digital Marketing</li>
              <li>Shopify Development</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="col-title">Company</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Portfolio</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="col-title">Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:marsweb321@gmail.com">marsweb321@gmail.com</a></li>
              <li><a href="tel:+923204402790">+92 320 4402790</a></li>
              <li>
                <Link href="https://wa.me/923204402790" className="whatsapp-btn">
                  Chat on WhatsApp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Mars Web. All rights reserved.</p>
          <p>Built with ❤️ beyond Earth.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          background: #03050F;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 160px 0 60px;
          overflow: hidden;
          cursor: default;
        }

        .footer-background-text {
          position: absolute;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          font-family: "Playfair Display", "Cormorant Garamond", serif;
          font-weight: 900;
          font-size: clamp(8rem, 18vw, 15rem);
          color: rgba(255, 255, 255, 0.02);
          white-space: nowrap;
          z-index: 0;
          letter-spacing: -0.02em;
          user-select: none;
          text-transform: uppercase;
          pointer-events: none; /* Let mouse events pass through to footer */
          
          /* Glow effect that tracks mouse anywhere in footer but only lights up the text */
          background: radial-gradient(
            500px circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 255, 255, 0.35),
            transparent 70%
          );
          -webkit-background-clip: text;
          background-clip: text;
          transition: color 0.5s ease;
        }

        .footer-content {
          position: relative;
          z-index: 1;
          pointer-events: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 60px;
          margin-bottom: 100px;
        }

        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.75rem;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }

        .logo-img-wrapper {
          position: relative;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 10px var(--mars-glow));
        }

        .logo-img {
          object-fit: contain;
        }

        .mars { color: #FFFFFF; }
        .web { color: var(--mars); }

        .tagline {
          font-family: var(--font-body);
          font-style: italic;
          font-weight: 300;
          color: #8B8FA8;
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-link {
          font-family: var(--font-display);
          font-size: 0.85rem;
          color: #8B8FA8;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
        }

        .social-link:hover { color: #FFFFFF; }

        .col-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          color: #FFFFFF;
          margin-bottom: 2rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-links li {
          font-family: var(--font-body);
          font-size: 1rem;
          color: #8B8FA8;
          transition: all 0.3s ease;
        }

        .footer-links a:hover { 
          color: var(--mars); 
          transform: translateX(5px);
          display: inline-block;
        }

        .whatsapp-btn {
          display: inline-block;
          margin-top: 10px;
          color: var(--mars);
          font-weight: 700;
          border-bottom: 2px solid transparent;
          font-family: var(--font-display);
        }

        .whatsapp-btn:hover {
          border-color: var(--mars);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 40px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: #4A4E63;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .footer-background-text { font-size: clamp(6rem, 25vw, 10rem); bottom: 5%; }
        }

        @media (max-width: 768px) {
          .footer { padding: 80px 0 40px; }
          .footer-grid { grid-template-columns: 1fr; gap: 48px; margin-bottom: 60px; text-align: center; }
          .footer-brand .logo { justify-content: center; margin-bottom: 1.5rem; }
          .social-links { justify-content: center; }
          .footer-links { align-items: center; }
          .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
          .footer-background-text { font-size: clamp(3rem, 15vw, 6rem); bottom: 10%; opacity: 0.03; }
          .tagline { max-width: 250px; margin: 0 auto 2rem; }
        }

        @media (max-width: 480px) {
          .footer-grid { gap: 40px; }
          .footer-background-text { display: none; }
          .col-title { font-size: 0.9rem; margin-bottom: 1.25rem; }
          .footer-link { font-size: 0.9rem; }
        }
      `}</style>
    </footer>
  )
}
