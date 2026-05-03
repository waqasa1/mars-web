'use client'

const services = [
  {
    title: 'Web Development',
    desc: 'React, Next.js, Node.js. Lightning-fast, SEO-ready websites.',
    tags: ['React', 'Next.js', 'Vercel'],
    icon: '🌐'
  },
  {
    title: 'Mobile Development',
    desc: 'React Native apps for iOS and Android. Native performance.',
    tags: ['React Native', 'iOS', 'Android'],
    icon: '📱'
  },
  {
    title: 'SEO Optimization',
    desc: 'Technical SEO, Core Web Vitals, structured data. Rank higher.',
    tags: ['SEO', 'Performance', 'Analytics'],
    icon: '🚀'
  },
  {
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns that convert traffic into revenue.',
    tags: ['Google Ads', 'Meta', 'Data'],
    icon: '📈'
  },
  {
    title: 'Social Media',
    desc: 'Brand storytelling across all platforms.',
    tags: ['Content', 'Strategy', 'Growth'],
    icon: '💬'
  },
  {
    title: 'Shopify Development',
    desc: 'Custom storefronts and e-commerce solutions.',
    tags: ['Shopify', 'Liquid', 'eCom'],
    icon: '🛍️'
  }
]

export default function Services() {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="watermark">SERVICES</span>
          <h2 className="section-title">What We Do</h2>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="tech-tags">
                {s.tags.map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background: var(--bg-light);
          position: relative;
          background: linear-gradient(180deg, var(--space-deep) 0%, var(--bg-light) 100%);
          overflow: hidden;
        }

        .section-header {
          position: relative;
          text-align: center;
          margin-bottom: 6rem;
        }

        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(4rem, 15vw, 12rem);
          color: rgba(255, 255, 255, 0.02);
          z-index: 0;
          pointer-events: none;
          letter-spacing: 0.1em;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          color: white;
          position: relative;
          z-index: 1;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .service-card {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-2xl);
          padding: 64px 48px;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--glass-shadow), inset 0 0 20px rgba(255, 255, 255, 0.02);
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .service-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
          pointer-events: none;
        }

        .service-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-15px);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .service-icon {
          font-size: 4rem;
          margin-bottom: 2.5rem;
          display: block;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.2));
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .service-name {
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
          color: white;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .service-desc {
          font-weight: 400;
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: auto;
        }

        .tech-tag {
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .service-card:hover .tech-tag {
          background: rgba(232, 68, 26, 0.15);
          color: var(--mars-glow);
          border-color: rgba(232, 68, 26, 0.4);
        }

        @media (max-width: 1280px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; gap: 24px; }
          .service-card { padding: 48px 32px; }
          .service-icon { font-size: 3.5rem; }
          .service-name { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  )
}
