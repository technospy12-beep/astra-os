'use client'

import { useEffect, useState } from 'react'
import LeftPanel from '@/components/panels/LeftPanel'
import TopBar from '@/components/panels/TopBar'
import CentralReactor from '@/components/core/CentralReactor'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, []) 

  if (!mounted) return null

  return (
    <main className="w-screen h-screen bg-astra-black flex flex-col overflow-hidden">
      {/* Top Bar */}
      <TopBar />

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <LeftPanel />

        {/* Center Reactor */}
        <div className="flex-1 flex items-center justify-center p-8 relative">
          <CentralReactor />
        </div>

        {/* Right Panel - Placeholder */}
        <div className="w-64 glass-panel border-l border-astra-blue/20 p-4">
          <div className="text-xs font-mono font-bold text-astra-cyan uppercase tracking-widest mb-4">
            ▓ Status
          </div>
          <div className="space-y-4 text-xs font-mono text-astra-blue/70">
            <div>System: ONLINE</div>
            <div>AI: ACTIVE</div>
            <div>Network: SECURE</div>
            <div>Power: OPTIMAL</div>
          </div>
        </div>
      </div>
    </main>
  )
}
