'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <div className="logo-img-wrapper">
                <Image 
                  src="/assets/mars.png" 
                  alt="Mars Web Logo" 
                  width={24} 
                  height={24} 
                  priority
                  loading="eager"
                  fetchPriority="high"
                  className="logo-img"
                />
              </div>
          <span className="mars">MARS</span>
          <span className="web">WEB</span>
        </Link>

        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/projects" className="nav-link">Portfolio</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        <Link href="/contact" className="cta-button">
          Get Started <span>→</span>
        </Link>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 1.5rem 0;
          background: rgba(3, 5, 15, 0);
          backdrop-filter: blur(0);
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(3, 5, 15, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 0.1em;
        }

        .logo-img-wrapper {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 8px var(--mars-glow));
        }

        .logo-img {
          object-fit: contain;
        }

        .logo .mars { color: var(--star-white); }
        .logo .web { color: var(--mars); }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-link {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--star-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .nav-link:hover {
          color: var(--star-white);
        }

        .cta-button {
          background: var(--mars);
          color: white;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.875rem;
          padding: 10px 24px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: var(--mars-glow);
          box-shadow: 0 0 20px rgba(232, 68, 26, 0.4);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </nav>
  )
}
