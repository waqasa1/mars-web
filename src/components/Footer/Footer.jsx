'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <div className="logo-img-wrapper">
                <Image
                  src="/assets/mars.png"
                  alt="Mars Web Logo"
                  width={24}
                  height={24}
                  className="logo-img"
                />
              </div>
              <span className="mars">MARS</span>
              <span className="web">WEB</span>
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
          background: var(--space-void);
          border-top: 1px solid var(--border-subtle);
          padding: 80px 0 40px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
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

        .mars { color: var(--star-white); }
        .web { color: var(--mars); }

        .tagline {
          font-family: var(--font-body);
          font-style: italic;
          font-weight: 300;
          color: var(--star-dim);
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-link {
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--star-dim);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .social-link:hover { color: var(--star-white); }

        .col-title {
          font-family: var(--font-display);
          font-size: 1rem;
          color: var(--star-white);
          margin-bottom: 1.5rem;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links li {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--star-dim);
        }

        .footer-links a:hover { color: var(--mars); }

        .whatsapp-btn {
          display: inline-block;
          margin-top: 8px;
          color: var(--mars);
          font-weight: 600;
          border-bottom: 1px solid transparent;
        }

        .whatsapp-btn:hover {
          border-color: var(--mars);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 30px;
          border-top: 1px solid var(--border-subtle);
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--star-faint);
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 10px; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
