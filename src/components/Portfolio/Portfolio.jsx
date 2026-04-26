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
    <section id="portfolio" className="section-padding">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">{showAll ? 'All Projects' : 'Our Work'}</h2>
          {!showAll && (
            <Link href="/projects" className="view-all">
              View All Projects <span>→</span>
            </Link>
          )}
        </div>

        <div className="portfolio-grid">
          {displayedProjects.map((p, i) => (
            <div key={i} className="portfolio-card">
              <div className="image-wrapper">
                <Image 
                  src={p.image} 
                  alt={p.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="project-image"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
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
        .portfolio-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
        }

        .view-all {
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--mars);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .view-all:hover {
          color: var(--mars-glow);
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .portfolio-card {
          background: var(--space-surface);
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .portfolio-card:nth-child(2) {
          margin-top: 60px;
        }

        .portfolio-card:hover {
          border-color: var(--mars-glow);
          transform: translateY(-12px);
          box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.5);
        }

        .image-wrapper {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
        }

        .project-image {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .portfolio-card:hover .project-image {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(3, 5, 15, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .overlay {
          opacity: 1;
        }

        .view-btn {
          background: var(--mars);
          color: white;
          padding: 12px 24px;
          border-radius: var(--radius-md);
          font-family: var(--font-display);
          font-weight: 600;
        }

        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .category-pill {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--mars);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }

        .project-name {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--star-white);
        }

        .project-desc {
          font-family: var(--font-body);
          font-weight: 300;
          font-size: 0.9rem;
          color: var(--star-dim);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .portfolio-grid { grid-template-columns: 1fr; }
          .portfolio-card:nth-child(2) { margin-top: 0; }
        }
      `}</style>
    </section>
  )
}
