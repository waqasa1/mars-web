'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hi Mars Web!\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Brief:\n${formData.message}`
    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/923204402790?text=${encodedText}`, '_blank')
  }

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Ready to Launch Your Project?</h2>
            <p className="contact-subtext">
              We're currently accepting new projects and would love to hear about your vision.
              Let's build something extraordinary together.
            </p>

            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <p className="info-label">Location</p>
                  <p className="info-value">Based in Pakistan. Working Globally.</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <p className="info-label">Email</p>
                  <p className="info-value">marsweb321@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💬</span>
                <div>
                  <p className="info-label">WhatsApp</p>
                  <p className="info-value">+92 320 4402790</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-glow" />
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text" name="name" required
                  placeholder="John Doe"
                  value={formData.name} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email" name="email" required
                  placeholder="john@example.com"
                  value={formData.email} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Service Interested In</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>SEO Optimization</option>
                  <option>Digital Marketing</option>
                  <option>Shopify Development</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Project Brief</label>
                <textarea
                  name="message" rows="4" required
                  placeholder="Tell us about your project..."
                  value={formData.message} onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message via WhatsApp →
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: var(--bg-light);
          color: var(--text-dark);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 64px;
          align-items: center;
        }

        .contact-info {
          grid-column: span 5;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 2rem;
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .contact-subtext {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 1.125rem;
          color: var(--text-muted);
          margin-bottom: 3.5rem;
          line-height: 1.8;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .info-item {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }

        .info-icon {
          font-size: 1.5rem;
          background: rgba(232, 68, 26, 0.05);
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          border: 1px solid rgba(232, 68, 26, 0.1);
        }

        .info-label {
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--mars);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 6px;
          font-weight: 700;
        }

        .info-value {
          font-size: 1.1rem;
          color: white;
          font-weight: 600;
        }

        .contact-form-wrapper {
          grid-column: span 7;
          position: relative;
        }

        .form-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle, rgba(232, 68, 26, 0.1) 0%, transparent 70%);
          z-index: 0;
          filter: blur(60px);
          pointer-events: none;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 48px;
          border-radius: var(--radius-2xl);
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          z-index: 1;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-group label {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 700;
          color: white;
        }

        input, select, textarea {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          padding: 16px 20px;
          color: white;
          font-family: var(--font-body);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        input:focus, select:focus, textarea:focus {
          border-color: var(--mars);
          background: rgba(0, 0, 0, 0.3);
          outline: none;
          box-shadow: 0 0 0 4px rgba(232, 68, 26, 0.1);
        }

        .submit-btn {
          background: var(--mars);
          color: white;
          font-family: var(--font-display);
          font-weight: 700;
          padding: 18px;
          border-radius: var(--radius-lg);
          margin-top: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 1rem;
          letter-spacing: 0.02em;
        }

        .submit-btn:hover {
          background: var(--mars-glow);
          box-shadow: 0 15px 35px rgba(232, 68, 26, 0.3);
          transform: translateY(-3px);
        }

        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; gap: 4rem; }
          .contact-info, .contact-form-wrapper { grid-column: 1; }
          .contact-form { padding: 32px; }
        }
      `}</style>
    </section>
  )
}
