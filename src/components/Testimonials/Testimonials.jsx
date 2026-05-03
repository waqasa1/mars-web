'use client'

const testimonials = [
  {
    text: "Mars Web transformed our online presence. Page speed went from 45 to 98 on Lighthouse. Incredible work.",
    name: "Ahmed R.",
    role: "Founder, Accend Fitness",
    stars: 5
  },
  {
    text: "They understood our vision immediately. The attention to detail in every component was unlike anything we'd seen.",
    name: "Sara M.",
    role: "E-commerce Manager",
    stars: 5
  },
  {
    text: "Our SEO rankings jumped within weeks of launch. These guys build for performance from the ground up.",
    name: "Tariq H.",
    role: "CEO, Local Business",
    stars: 5
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="quote-mark">"</div>
              <div className="stars">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si}>★</span>
                ))}
              </div>
              <p className="quote-text">{t.text}</p>
              <div className="client-info">
                <div className="avatar">{t.name[0]}</div>
                <div>
                  <h4 className="client-name">{t.name}</h4>
                  <p className="client-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: var(--bg-white);
          color: white;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .testimonial-card {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-2xl);
          padding: 56px 48px;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--glass-shadow);
        }

        .testimonial-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-10px);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .quote-mark {
          position: absolute;
          top: 24px;
          left: 40px;
          font-weight: 900;
          font-size: 120px;
          color: var(--mars);
          opacity: 0.1;
          line-height: 1;
          pointer-events: none;
        }

        .stars {
          color: var(--mars);
          margin-bottom: 1.5rem;
          font-size: 1rem;
          letter-spacing: 3px;
        }

        .quote-text {
          font-weight: 400;
          font-style: italic;
          font-size: 1.15rem;
          color: var(--star-white);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .client-info {
          display: flex;
          align-items: center;
          gap: 20px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 2rem;
        }

        .avatar {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--mars), var(--mars-glow));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: white;
          font-size: 1.4rem;
        }

        .client-name {
          font-size: 1.15rem;
          color: white;
          margin-bottom: 4px;
          font-weight: 800;
        }

        .client-role {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .section-header { margin-bottom: 3rem; }
          .testimonial-card { padding: 40px 32px; }
          .quote-mark { font-size: 80px; top: 16px; left: 24px; }
        }
      `}</style>
    </section>
  )
}
