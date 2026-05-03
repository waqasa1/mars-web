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
    <section className="why-us section-padding">
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
          color: white;
          background: linear-gradient(180deg, var(--bg-light) 0%, var(--bg-white) 100%);
          overflow: clip;
        }

        .sticky-container {
          display: flex;
          gap: 100px;
          position: relative;
          align-items: flex-start;
          overflow: visible;
        }

        .sticky-left {
          flex: 1;
          height: calc(100vh - 120px);
          position: sticky;
          top: 120px;
          display: flex;
          align-items: center;
          z-index: 2;
          align-self: flex-start;
        }

        .content-wrapper {
          max-width: 520px;
        }

        .eyebrow {
          font-size: 0.875rem;
          color: var(--mars);
          letter-spacing: 0.3em;
          margin-bottom: 2rem;
          display: block;
          font-weight: 600;
        }

        .statement {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 2.5rem;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .highlight {
          color: var(--mars);
          text-shadow: 0 0 30px rgba(232, 68, 26, 0.3);
        }

        .philosophy {
          font-weight: 400;
          font-size: 1.125rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 3.5rem;
        }

        .cta-mini {
          display: flex;
          align-items: center;
          gap: 16px;
          font-weight: 700;
          font-size: 0.95rem;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: var(--mars);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--mars);
        }

        .scrolling-right {
          flex: 1;
          padding: 10vh 0;
        }

        .value-item {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 40px 0;
        }

        .value-card {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          padding: 64px;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--glass-border);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--glass-shadow), inset 0 0 20px rgba(255, 255, 255, 0.05);
          position: relative;
          width: 100%;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .value-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
          pointer-events: none;
        }

        .value-item:hover .value-card {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(-15px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
        }

        .value-num {
          font-weight: 900;
          font-size: 5rem;
          color: var(--mars);
          opacity: 0.15;
          display: block;
          margin-bottom: 1.5rem;
          line-height: 1;
        }

        .value-title {
          font-size: 2.25rem;
          margin-bottom: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .value-desc {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .sticky-container { gap: 60px; }
          .sticky-left { height: calc(100vh - 100px); top: 100px; }
        }

        @media (max-width: 768px) {
          .section-padding { padding: 60px 0; }
          .sticky-container { flex-direction: column; gap: 48px; }
          .sticky-left { height: auto; position: relative; top: auto; padding: 0; }
          .scrolling-right { padding: 0; width: 100%; }
          .value-item { min-height: auto; padding: 0; margin-bottom: 32px; }
          .value-card { padding: 48px 32px; min-height: auto; }
          .value-num { font-size: 3.5rem; margin-bottom: 1rem; }
          .value-title { font-size: 1.75rem; margin-bottom: 1rem; }
          .value-desc { font-size: 1rem; }
          .statement { font-size: clamp(2.25rem, 8vw, 3.25rem); margin-bottom: 1.5rem; }
          .philosophy { font-size: 1rem; margin-bottom: 2rem; }
          .content-wrapper { max-width: 100%; }
        }
      `}</style>
    </section>
  )
}
