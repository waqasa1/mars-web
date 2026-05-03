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
          overflow: hidden;
        }

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
          color: rgba(255, 255, 255, 0.03);
          z-index: 0;
          pointer-events: none;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          color: var(--text-dark);
          position: relative;
          z-index: 1;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-2xl);
          padding: 48px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.2),
            inset 0 0 20px rgba(255, 255, 255, 0.02);
        }

        .service-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-12px);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(232, 68, 26, 0.3);
          border-color: rgba(232, 68, 26, 0.4);
        }

        .service-icon {
          font-size: 3.5rem;
          margin-bottom: 2.5rem;
          display: block;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .service-card:hover .service-icon {
          transform: scale(1.15) rotate(8deg);
        }

        .service-name {
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .service-desc {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tech-tag {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .service-card:hover .tech-tag {
          background: rgba(232, 68, 26, 0.1);
          color: var(--mars-glow);
          border-color: rgba(232, 68, 26, 0.3);
        }

        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
          .service-card { padding: 32px; }
        }

        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
