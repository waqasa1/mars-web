'use client'

import { useEffect, useState } from 'react'

export default function StarField() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generateStars = () => {
      const layers = [
        { count: 100, size: '0.5px', opacity: 0.3, speed: '80s' },
        { count: 50, size: '1px', opacity: 0.5, speed: '120s' },
        { count: 20, size: '1.5px', opacity: 0.8, speed: '160s' },
      ]

      const newStars = layers.map((layer) => {
        return Array.from({ length: layer.count }).map((_, i) => ({
          id: `${layer.size}-${i}`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: layer.size,
          opacity: layer.opacity,
          duration: (Math.random() * 3 + 2).toFixed(2) + 's',
          delay: (Math.random() * 5).toFixed(2) + 's',
        }))
      })
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="stars-container">
      {stars.map((layer, layerIdx) => (
        <div key={layerIdx} className="star-layer">
          {layer.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                position: 'absolute',
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                backgroundColor: 'var(--star-white)',
                borderRadius: '50%',
                opacity: star.opacity,
                animation: `starTwinkle ${star.duration} infinite ease-in-out ${star.delay}`,
              }}
            />
          ))}
        </div>
      ))}
      <style jsx>{`
        .stars-container {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: radial-gradient(circle at center, var(--space-deep) 0%, var(--space-void) 100%);
        }
      `}</style>
    </div>
  )
}
