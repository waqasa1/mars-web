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
    <section className="testimonials section-padding">
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
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .testimonial-card {
          background: var(--space-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 40px 32px;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .quote-mark {
          position: absolute;
          top: 10px;
          left: 20px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 80px;
          color: var(--mars);
          opacity: 0.15;
          line-height: 1;
        }

        .stars {
          color: var(--mars);
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }

        .quote-text {
          font-family: var(--font-body);
          font-weight: 300;
          font-style: italic;
          font-size: 1.1rem;
          color: var(--star-white);
          line-height: 1.6;
          margin-bottom: 2rem;
          flex: 1;
        }

        .client-info {
          display: flex;
          align-items: center;
          gap: 16px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 1.5rem;
        }

        .avatar {
          width: 48px;
          height: 48px;
          background: var(--mars-dim);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--star-white);
          font-size: 1.2rem;
        }

        .client-name {
          font-family: var(--font-display);
          font-size: 1rem;
          color: var(--star-white);
          margin-bottom: 2px;
        }

        .client-role {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--star-dim);
        }
      `}</style>
    </section>
  )
}
