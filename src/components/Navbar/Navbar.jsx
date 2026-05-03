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
          <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
            <div className="logo-row" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="logo-img-wrapper" style={{ position: 'relative', width: '32px', height: '32px', flexShrink: 0 }}>
                <Image
                  src="/assets/mars.png"
                  alt="Mars Web Logo"
                  width={28}
                  height={28}
                  priority
                  className="logo-img"
                />
              </div>
              <div className="logo-text" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="mars" style={{ fontWeight: 800 }}>MARS</span>
                <span className="web" style={{ fontWeight: 800 }}>WEB</span>
              </div>
            </div>
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
          background: rgba(2, 4, 10, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          text-decoration: none;
          color: white;
          z-index: 10;
        }

        .logo-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
        }

        .logo-text {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
          font-family: var(--font-main);
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .mars {
          color: #FFFFFF;
        }

        .web {
          color: var(--mars);
        }

        .logo-img-wrapper {
          position: relative;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 10px var(--mars-glow));
        }

        .logo-img {
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 3rem;
          min-width: 400px; /* Stabilize container */
          justify-content: center;
        }

        .nav-link {
          font-family: var(--font-main);
          font-weight: 500;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
        }

        .navbar.scrolled .nav-link {
          color: rgba(255, 255, 255, 0.8);
        }

        .nav-link:hover {
          color: white;
          transform: translateY(-1px);
        }

        .navbar.scrolled .nav-link:hover {
          color: var(--mars-glow);
        }

        .cta-button {
          background: var(--mars);
          color: white;
          font-family: var(--font-main);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 12px 28px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .cta-button:hover {
          background: var(--mars-glow);
          box-shadow: 0 10px 25px rgba(232, 68, 26, 0.4);
          transform: translateY(-2px);
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1100;
        }

        .hamburger span {
          width: 26px;
          height: 2px;
          background: white;
          transition: all 0.3s ease;
        }

        .navbar.scrolled .hamburger span {
          background: white;
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