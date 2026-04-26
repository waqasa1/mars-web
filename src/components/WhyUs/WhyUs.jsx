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
      <div className="container grid-layout">
        <div className="left-content">
          <h2 className="statement">
            We don't build websites.<br />
            We build <span className="highlight">growth engines.</span>
          </h2>
          <p className="philosophy">
            Our approach goes beyond aesthetics. We engineer high-performance digital tools 
            designed to scale your business and dominate your market.
          </p>
        </div>

        <div className="right-content">
          {values.map((v, i) => (
            <div key={i} className="value-item">
              <div className="value-header">
                <span className="value-num">{v.num}</span>
                <h3 className="value-title">{v.title}</h3>
              </div>
              <p className="value-desc">{v.desc}</p>
              {i < values.length - 1 && <div className="separator" />}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-us {
          background: var(--space-deep);
          position: relative;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 64px;
          align-items: flex-start;
        }

        .left-content {
          grid-column: span 6;
        }

        .statement {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 2rem;
        }

        .highlight {
          color: var(--mars);
        }

        .philosophy {
          font-family: var(--font-body);
          font-weight: 300;
          font-size: 1.125rem;
          color: var(--star-dim);
          line-height: 1.8;
          max-width: 480px;
        }

        .right-content {
          grid-column: span 6;
        }

        .value-item {
          padding: 2rem 0;
        }

        .value-item:first-child { padding-top: 0; }
        .value-item:last-child { padding-bottom: 0; }

        .value-header {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 1rem;
        }

        .value-num {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 2.5rem;
          color: var(--mars);
          opacity: 0.8;
        }

        .value-title {
          font-size: 1.5rem;
          color: var(--star-white);
        }

        .value-desc {
          font-family: var(--font-body);
          font-weight: 300;
          font-size: 1rem;
          color: var(--star-dim);
          padding-left: 70px;
        }

        .separator {
          height: 1px;
          background: var(--border-subtle);
          margin-top: 2rem;
        }

        @media (max-width: 1024px) {
          .grid-layout { grid-template-columns: 1fr; gap: 4rem; }
          .left-content, .right-content { grid-column: 1; }
          .value-desc { padding-left: 0; }
        }
      `}</style>
    </section>
  )
}
