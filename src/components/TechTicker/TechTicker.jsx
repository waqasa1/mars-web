'use client'

const techs = [
  'REACT', 'NEXT.JS', 'NODE.JS', 'REACT NATIVE', 'SHOPIFY', 'SEO', 'DIGITAL MARKETING', 'TYPESCRIPT', 'TAILWIND CSS', 'VERCEL'
]

export default function TechTicker() {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-content">
        {[...techs, ...techs].map((tech, i) => (
          <div key={i} className="ticker-item">
            <span className="tech-name">{tech}</span>
            <span className="separator">·</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          background: rgba(8, 13, 30, 0.5);
          padding: 1.5rem 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          white-space: nowrap;
        }

        .ticker-content {
          display: inline-flex;
          animation: ticker 30s linear infinite;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 0 1rem;
        }

        .tech-name {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--star-dim);
          letter-spacing: 0.1em;
        }

        .separator {
          color: var(--mars);
          font-weight: bold;
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
