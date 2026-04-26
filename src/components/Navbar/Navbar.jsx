'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Optional: lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">

          {/* Logo */}
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

          {/* Desktop Links */}
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/projects" className="nav-link">Portfolio</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* CTA */}
          <Link href="/contact" className="cta-button">
            Get Started <span>→</span>
          </Link>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/projects" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
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

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1100;
        }

        .hamburger span {
          width: 22px;
          height: 2px;
          background: var(--star-white);
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 70%;
          height: 100vh;
          background: rgba(3, 5, 15, 0.95);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          padding: 100px 30px;
          gap: 2rem;
          transition: right 0.3s ease;
          z-index: 1050;
        }

        .mobile-menu a {
          font-family: var(--font-display);
          color: var(--star-white);
          font-size: 1.1rem;
        }

        .mobile-menu.open {
          right: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .cta-button {
            display: none;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  )
}