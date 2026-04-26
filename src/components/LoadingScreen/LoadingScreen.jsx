'use client'

import { useState, useEffect } from 'react'
import styles from './LoadingScreen.module.css'

const statusMessages = [
  'Initializing orbit...',
  'Calibrating systems...',
  'Preparing for launch...',
  'Almost there...',
  'Ready for takeoff.',
]

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [statusIdx, setStatusIdx] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    let start = Date.now()
    const duration = 2000 // 2 seconds total

    const animate = () => {
      const elapsed = Date.now() - start
      const t = Math.min(elapsed / duration, 1)
      
      // Eased progress
      const easedT = t < 0.7 ? (t / 0.7) * 0.7 : 0.7 + ((t - 0.7) / 0.3) * 0.3
      setProgress(easedT)

      // Status messages
      if (easedT > 0.9) setStatusIdx(4)
      else if (easedT > 0.65) setStatusIdx(3)
      else if (easedT > 0.4) setStatusIdx(2)
      else if (easedT > 0.2) setStatusIdx(1)

      if (t < 1) {
        requestAnimationFrame(animate)
      } else {
        setTimeout(() => {
          setIsExiting(true)
          setTimeout(() => {
            onComplete()
          }, 300) // Match exit animation duration
        }, 200) // Hold at 100%
      }
    }

    requestAnimationFrame(animate)
  }, [onComplete])

  const RADIUS = 72
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS
  const angle = progress * 360 - 90
  const dotX = 80 + RADIUS * Math.cos((angle * Math.PI) / 180)
  const dotY = 80 + RADIUS * Math.sin((angle * Math.PI) / 180)

  return (
    <div className={`${styles.loaderContainer} ${isExiting ? styles.loaderExiting : ''}`}>
      <div className={styles.loaderContent}>
        <div className={styles.planetWrapper}>
          <svg width="160" height="160" className={styles.arcSvg}>
            <circle
              cx="80" cy="80" r={RADIUS}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1.5"
            />
            <circle
              cx="80" cy="80" r={RADIUS}
              fill="none"
              stroke="url(#arcGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
              transform="rotate(-90 80 80)"
            />
            <circle 
              cx={dotX} cy={dotY} r="3" 
              fill="#FF6B35"
              style={{ filter: 'drop-shadow(0 0 4px #FF6B35)' }} 
            />
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E8441A" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF6B35" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
          <div className={`${styles.loaderPlanet} ${progress === 1 ? styles.complete : ''}`} />
        </div>

        <div className={styles.textWrapper}>
          <h1 className={styles.logo}>
            <span className={styles.mars}>MARS</span> <span className={styles.web}>WEB</span>
          </h1>
          <p className={styles.status}>{statusMessages[statusIdx]}</p>
        </div>
      </div>
    </div>
  )
}
