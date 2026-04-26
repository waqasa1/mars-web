'use client'

import { useEffect, useRef } from 'react'

export default function HeroParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let particles = []
    let sparks = []
    let embers = []
    let mouse = { x: -1000, y: -1000 }
    let lerpMouse = { x: -1000, y: -1000 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = Array.from({ length: 120 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.8,
        speedY: Math.random() * 0.2 + 0.1,
        speedX: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      }))

      sparks = Array.from({ length: 70 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 1,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.8 + 0.1,
      }))

      embers = Array.from({ length: 25 }).map(() => ({
        x: canvas.width * (0.75 + Math.random() * 0.15),
        y: canvas.height * (0.4 + Math.random() * 0.3),
        size: Math.random() * 3 + 2,
        speedY: Math.random() * 0.4 + 0.2,
        opacity: Math.random() * 0.5 + 0.3,
        life: Math.random() * 120 + 120,
        maxLife: 240,
      }))
    }

    const handleMouseMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Lerp mouse
      lerpMouse.x += (mouse.x - lerpMouse.x) * 0.05
      lerpMouse.y += (mouse.y - lerpMouse.y) * 0.05

      const mouseShiftX = (lerpMouse.x - canvas.width / 2) * 0.02
      const mouseShiftY = (lerpMouse.y - canvas.height / 2) * 0.02

      // Draw Particles (Layer 1)
      ctx.fillStyle = 'rgba(232, 68, 26, 0.2)'
      particles.forEach(p => {
        p.y -= p.speedY
        p.x += p.speedX
        if (p.y < 0) p.y = canvas.height
        
        ctx.beginPath()
        ctx.arc(p.x + mouseShiftX * 0.5, p.y + mouseShiftY * 0.5, p.size, 0, Math.PI * 2)
        ctx.globalAlpha = p.opacity
        ctx.fill()
      })

      // Draw Sparks (Layer 2)
      sparks.forEach(s => {
        s.twinklePhase += s.twinkleSpeed
        const opacity = Math.max(0.1, Math.min(0.9, s.opacity + Math.sin(s.twinklePhase) * 0.4))
        
        ctx.fillStyle = 'rgba(232, 233, 243, 1)'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.globalAlpha = opacity
        ctx.fill()
      })

      // Draw Embers (Layer 3)
      ctx.shadowBlur = 8
      ctx.shadowColor = 'rgba(255, 107, 53, 0.8)'
      embers.forEach(e => {
        e.y -= e.speedY
        e.life--
        if (e.life <= 0) {
          e.y = canvas.height * (0.4 + Math.random() * 0.3)
          e.x = canvas.width * (0.75 + Math.random() * 0.15)
          e.life = e.maxLife
        }

        const lifeFactor = e.life / e.maxLife
        ctx.fillStyle = `rgba(255, 107, 53, ${lifeFactor * 0.8})`
        ctx.beginPath()
        ctx.arc(e.x + mouseShiftX * 0.2, e.y + mouseShiftY * 0.2, e.size, 0, Math.PI * 2)
        ctx.globalAlpha = 1
        ctx.fill()
      })
      ctx.shadowBlur = 0

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
