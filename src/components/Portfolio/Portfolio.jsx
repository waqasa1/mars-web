'use client'

import Image from 'next/image'
import Link from 'next/link'

export const projects = [
  {
    title: 'Space Dental',
    category: 'Web Development · Next.js',
    desc: 'A premium dental clinic website with a modern and elegant design.',
    image: '/assets/spacedental.png',
    link: 'https://spacedental.co.uk/'
  },
  {
    title: 'Psychedelic Soul Sound',
    category: 'Web Development · React',
    desc: 'An immersive audio and wellness platform with vibrant aesthetics.',
    image: '/assets/soulsound.png',
    link: 'https://psychedelicsoulsound.com/'
  },
  {
    title: 'Niyokclean',
    category: 'Web Development · Business',
    desc: 'A professional cleaning service website with a modern and clean design.',
    image: '/assets/niyokclean.png',
    link: 'https://niyokclean.com/'
  },
  {
    title: 'Movsentry',
    category: 'Web App · Next.js',
    desc: 'A comprehensive security and monitoring solution interface.',
    image: '/assets/movsentry.png',
    link: 'https://movsentry.com/'
  },
  {
    title: 'Elena Hills',
    category: 'Web Development · CMS',
    desc: 'A luxurious real estate portfolio showcasing exclusive properties.',
    image: '/assets/elenahills.png',
    link: 'https://www.elenahills.com/'
  },
  {
    title: 'Gutbeck',
    category: 'E-Commerce · Web Development',
    desc: 'A sophisticated e-commerce platform with a seamless shopping experience.',
    image: '/assets/gutbeck.png',
    link: 'https://gutbeck.com/'
  },
  {
    title: 'Accend Fitness',
    category: 'Web Development · React',
    desc: 'A performance fitness platform with blazing speed and seamless UX.',
    image: '/assets/accend-fitness.png',
    link: 'https://accend-fitness.vercel.app/'
  },
  {
    title: 'Mars Web (Software Company)',
    category: 'Web Development · Next.js',
    desc: 'A sleek software company landing page built to convert.',
    image: '/assets/software-company.png',
    link: 'https://software-company-eight.vercel.app/'
  },
  {
    title: 'Asaan Qurbani',
    category: 'Web App · Shopify · Next.js',
    desc: 'Multilingual Qurbani booking platform with a smooth checkout flow.',
    image: '/assets/asaan-qurbani.png',
    link: 'https://asaan-qurbani.vercel.app/en'
  }
]

export default function Portfolio({ showAll = false }) {
  const displayedProjects = showAll ? projects : projects.slice(0, 2)

  return (
    <section id="portfolio" className="portfolio-section section-padding">
      <div className="container">
        <div className="portfolio-header">
          <div className="header-text">
            <h2 className="section-title">{showAll ? 'All Projects' : 'Our Work'}</h2>
            <p className="portfolio-subtext">Selected works that define our engineering excellence.</p>
          </div>
          {!showAll && (
            <Link href="/projects" className="view-all">
              View All Projects <span>→</span>
            </Link>
          )}
        </div>

        <div className="portfolio-grid">
          {displayedProjects.map((p, i) => (
            <div key={i} className="portfolio-card">
              <div className="image-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="project-image"
                  loading={i === 0 ? "eager" : "lazy"}
                  priority={i === 0}
                  style={{ objectFit: 'cover' }}
                />
                <div className="overlay">
                  <Link href={p.link} target="_blank" className="view-btn">View Live Project ↗</Link>
                </div>
              </div>
              <div className="card-content">
                <span className="category-pill">{p.category}</span>
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio-section {
          background: var(--bg-light);
          color: white;
          position: relative;
          z-index: 5;
          background: linear-gradient(180deg, var(--bg-light) 0%, var(--bg-white) 100%);
          overflow: hidden;
        }

        .portfolio-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
        }

        .portfolio-subtext {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-top: 0.5rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0;
        }

        .view-all {
          font-weight: 600;
          color: var(--mars);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .view-all:hover {
          color: var(--mars-glow);
          transform: translateX(5px);
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .portfolio-card {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          border: 1px solid var(--glass-border);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          box-shadow: var(--glass-shadow);
        }

        .portfolio-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-15px);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .image-wrapper {
          position: relative;
          aspect-ratio: 16/10;
          margin: 16px;
          border-radius: var(--radius-xl);
          background: #000;
        }

        .project-image {
          object-fit: cover;
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-card:hover .project-image {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(3, 5, 15, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;
        }

        .portfolio-card:hover .overlay {
          opacity: 1;
        }

        .view-btn {
          background: var(--mars);
          color: white;
          padding: 12px 24px;
          border-radius: var(--radius-md);
          font-weight: 700;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 0.9rem;
        }

        .portfolio-card:hover .view-btn {
          transform: translateY(0);
        }

        .card-content {
          padding: 32px;
          padding-top: 0;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .category-pill {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--mars-glow);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          background: rgba(232, 68, 26, 0.1);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          width: fit-content;
          font-weight: 700;
        }

        .project-name {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: white;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .project-desc {
          font-weight: 400;
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .portfolio-grid { grid-template-columns: 1fr; gap: 32px; }
          .portfolio-header { margin-bottom: 3rem; }
        }

        @media (max-width: 768px) {
          .section-padding { padding: 60px 0; }
          .image-wrapper { margin: 12px; }
          .card-content { padding: 24px; }
          .project-name { font-size: 1.25rem; }
        }

        @media (max-width: 480px) {
          .portfolio-header { flex-direction: column; align-items: flex-start; gap: 20px; }
          .view-all { margin-bottom: 0; }
          .card-content { padding: 20px; }
        }
      `}</style>
    </section>
  )
}
