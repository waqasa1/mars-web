'use client'

const values = [
  {
    num: '01',
    title: 'Obsessive Attention to Detail',
    desc: 'Every pixel, every interaction, crafted with intention.'
  },
  {
    num: '02',
    title: 'Extraordinary Page Speed',
    desc: 'Sub-second load times. 100/100 Lighthouse scores.'
  },
  {
    num: '03',
    title: 'SEO-First Architecture',
    desc: 'Built to rank from day one, not retrofitted later.'
  },
  {
    num: '04',
    title: 'Transparent Communication',
    desc: "You're never left wondering about your project."
  }
]

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="container sticky-container">
        <div className="sticky-left">
          <div className="content-wrapper">
            <span className="eyebrow">OUR PHILOSOPHY</span>
            <h2 className="statement">
              We don't build websites.<br />
              We build <span className="highlight">growth engines.</span>
            </h2>
            <p className="philosophy">
              Our approach goes beyond aesthetics. We engineer high-performance digital tools 
              designed to scale your business and dominate your market.
            </p>
            <div className="cta-mini">
              <span className="dot"></span>
              <span>Obsessed with Performance</span>
            </div>
          </div>
        </div>

        <div className="scrolling-right">
          {values.map((v, i) => (
            <div key={i} className="value-item">
              <div className="value-card">
                <span className="value-num">{v.num}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-us {
          background: var(--bg-white);
          position: relative;
          color: var(--text-dark);
        }

        .sticky-container {
          display: flex;
          gap: 80px;
          position: relative;
          min-height: 200vh; /* Give enough room for scrolling */
        }

        .sticky-left {
          flex: 1;
          height: 100vh;
          position: sticky;
          top: 0;
          display: flex;
          align-items: center;
        }

        .content-wrapper {
          max-width: 520px;
        }

        .eyebrow {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--mars);
          letter-spacing: 0.2em;
          margin-bottom: 2rem;
          display: block;
        }

        .statement {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .highlight {
          color: var(--mars);
          position: relative;
        }

        .philosophy {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 1.125rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .cta-mini {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-dark);
        }

        .dot {
          width: 8px;
          height: 8px;
          background: var(--mars);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--mars);
        }

        .scrolling-right {
          flex: 1;
          padding: 100px 0;
        }

        .value-item {
          min-height: 60vh;
          display: flex;
          align-items: center;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 48px;
          border-radius: var(--radius-2xl);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .value-item:hover .value-card {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(-10px);
          border-color: rgba(232, 68, 26, 0.3);
          box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.3);
        }

        .value-num {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 3.5rem;
          color: var(--mars);
          opacity: 0.2;
          display: block;
          margin-bottom: 1rem;
        }

        .value-title {
          font-size: 1.75rem;
          margin-bottom: 1.25rem;
          font-weight: 700;
        }

        .value-desc {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .sticky-container { flex-direction: column; gap: 40px; min-height: auto; }
          .sticky-left { height: auto; position: relative; padding-top: 80px; }
          .scrolling-right { padding-top: 0; }
          .value-item { min-height: auto; padding: 20px 0; }
        }
      `}</style>
    </section>
  )
}
