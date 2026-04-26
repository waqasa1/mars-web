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
    <section id="services" className="section-padding">
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
        .section-header {
          position: relative;
          text-align: center;
          margin-bottom: 5rem;
        }

        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(4rem, 15vw, 10rem);
          color: var(--space-elevated);
          z-index: -1;
          opacity: 0.5;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          color: var(--star-white);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }

        .service-card {
          background: var(--space-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 32px;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          border-color: var(--border-glow);
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(3, 5, 15, 0.5);
        }

        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .service-name {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--star-white);
        }

        .service-desc {
          font-family: var(--font-body);
          font-weight: 300;
          font-size: 0.9rem;
          color: var(--star-dim);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background: rgba(232, 68, 26, 0.1);
          color: var(--mars);
          border: 1px solid rgba(232, 68, 26, 0.2);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
