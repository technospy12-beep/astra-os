'use client'

import { useEffect, useState } from 'react'
import { Network, Battery, Wifi, Clock } from 'lucide-react'

export default function TopBar() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour12: false }))
      setDate(now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-12 glass-panel border-b border-astra-blue/20 px-6 flex items-center justify-between text-xs font-mono">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 text-astra-cyan" />
          <span className="text-astra-cyan neon-glow">{time}</span>
        </div>
        <div className="text-astra-blue/70">{date}</div>
      </div>

      {/* Center */}
      <div className="text-astra-cyan font-bold uppercase tracking-widest">ASTRA OS v1.0</div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Network className="w-3 h-3 text-astra-green" />
          <span className="text-astra-green">Connected</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="w-3 h-3 text-astra-cyan" />
          <span className="text-astra-cyan">WiFi</span>
        </div>
        <div className="flex items-center gap-2">
          <Battery className="w-3 h-3 text-astra-cyan" />
          <span className="text-astra-cyan">100%</span>
        </div>
      </div>
    </div>
  )
}
