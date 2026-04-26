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
    <section id="contact" className="section-padding">
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
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .contact-subtext {
          font-family: var(--font-body);
          font-weight: 300;
          font-size: 1.1rem;
          color: var(--star-dim);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .info-icon {
          font-size: 1.5rem;
          background: rgba(232, 68, 26, 0.1);
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid rgba(232, 68, 26, 0.2);
        }

        .info-label {
          font-family: var(--font-display);
          font-size: 0.75rem;
          color: var(--mars);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }

        .info-value {
          font-size: 1rem;
          color: var(--star-white);
        }

        .contact-form-wrapper {
          grid-column: span 7;
          position: relative;
        }

        .form-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(232, 68, 26, 0.15) 0%, transparent 70%);
          z-index: -1;
          filter: blur(40px);
        }

        .contact-form {
          background: var(--space-surface);
          border: 1px solid var(--border-subtle);
          padding: 40px;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--star-white);
        }

        input, select, textarea {
          background: var(--space-void);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          color: var(--star-white);
          font-family: var(--font-body);
          font-size: 1rem;
          transition: all 0.2s;
        }

        input:focus, select:focus, textarea:focus {
          border-color: var(--mars);
          outline: none;
          box-shadow: 0 0 0 3px rgba(232, 68, 26, 0.1);
        }

        .submit-btn {
          background: var(--mars);
          color: white;
          font-family: var(--font-display);
          font-weight: 700;
          padding: 16px;
          border-radius: var(--radius-md);
          margin-top: 8px;
          transition: all 0.3s;
        }

        .submit-btn:hover {
          background: var(--mars-glow);
          box-shadow: 0 0 25px rgba(232, 68, 26, 0.4);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; gap: 4rem; }
          .contact-info, .contact-form-wrapper { grid-column: 1; }
        }
      `}</style>
    </section>
  )
}
