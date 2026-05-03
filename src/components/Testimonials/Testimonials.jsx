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
          color: var(--text-dark);
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
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-2xl);
          padding: 56px 48px;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .testimonial-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(232, 68, 26, 0.3);
        }

        .quote-mark {
          position: absolute;
          top: 24px;
          left: 40px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 120px;
          color: var(--mars);
          opacity: 0.08;
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
          font-family: var(--font-body);
          font-weight: 400;
          font-style: italic;
          font-size: 1.15rem;
          color: var(--text-dark);
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
          border-top: 1px solid rgba(0, 0, 0, 0.05);
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
          font-family: var(--font-display);
          font-weight: 700;
          color: white;
          font-size: 1.4rem;
        }

        .client-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          color: var(--text-dark);
          margin-bottom: 4px;
          font-weight: 700;
        }

        .client-role {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }
      `}</style>
    </section>
  )
}
