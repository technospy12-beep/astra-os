'use client'

import { useEffect, useRef, useState } from 'react'

export default function CentralReactor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 400
    canvas.height = 400

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.save()
      ctx.translate(centerX, centerY)

      // Outer rings
      for (let i = 0; i < 3; i++) {
        const radius = 80 + i * 40
        const alpha = 0.3 - i * 0.08
        const ringRotation = rotation * (1 + i * 0.1)

        ctx.save()
        ctx.rotate((ringRotation * Math.PI) / 180)

        ctx.strokeStyle = `rgba(0, 244, 255, ${alpha})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(0, 0, radius, 0, Math.PI * 2)
        ctx.stroke()

        // Dots on ring
        for (let j = 0; j < 12; j++) {
          const angle = (j / 12) * Math.PI * 2
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          ctx.fillStyle = `rgba(0, 244, 255, ${alpha * 1.5})`
          ctx.fillRect(x - 2, y - 2, 4, 4)
        }

        ctx.restore()
      }

      // Core circle
      const coreGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 40)
      coreGradient.addColorStop(0, 'rgba(0, 244, 255, 0.8)')
      coreGradient.addColorStop(0.7, 'rgba(0, 212, 255, 0.4)')
      coreGradient.addColorStop(1, 'rgba(0, 212, 255, 0.1)')

      ctx.fillStyle = coreGradient
      ctx.beginPath()
      ctx.arc(0, 0, 40, 0, Math.PI * 2)
      ctx.fill()

      // Core glow
      ctx.strokeStyle = 'rgba(0, 244, 255, 0.6)'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(0, 0, 40, 0, Math.PI * 2)
      ctx.stroke()

      // Center dot
      ctx.fillStyle = '#00f0ff'
      ctx.beginPath()
      ctx.arc(0, 0, 5, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      setRotation(prev => (prev + 1) % 360)
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 glow-intense rounded-full" style={{ width: 420, height: 420 }}></div>
      <canvas
        ref={canvasRef}
        className="relative z-10 hologram"
      />
      <div className="absolute text-center mt-48">
        <div className="text-xs font-mono text-astra-cyan uppercase tracking-widest">AI Status</div>
        <div className="text-lg font-bold text-astra-cyan neon-glow mt-2">ACTIVE</div>
      </div>
    </div>
  )
}
