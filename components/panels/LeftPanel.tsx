'use client'

import { useState, useEffect } from 'react'
import { AlertTriangle, HardDrive, Zap, Network } from 'lucide-react'

interface DiagnosticData {
  cpu: number
  memory: number
  disk: number
  network: string
  threats: number
  processes: number
}

export default function LeftPanel() {
  const [diagnostics, setDiagnostics] = useState<DiagnosticData>({
    cpu: 45,
    memory: 68,
    disk: 52,
    network: 'Connected',
    threats: 0,
    processes: 247,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setDiagnostics(prev => ({
        ...prev,
        cpu: Math.floor(Math.random() * 80 + 20),
        memory: Math.floor(Math.random() * 60 + 40),
        disk: Math.floor(Math.random() * 70 + 30),
        processes: Math.floor(Math.random() * 300 + 200),
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-64 glass-panel border-r border-astra-blue/20 overflow-y-auto p-4 space-y-4">
      {/* Title */}
      <div className="text-xs font-mono font-bold text-astra-cyan uppercase tracking-widest">
        ▓ System Diagnostics
      </div>

      {/* CPU */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-astra-blue">CPU Usage</span>
          <span className="text-astra-cyan neon-glow">{diagnostics.cpu}%</span>
        </div>
        <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-astra-blue/30">
          <div
            className="h-full bg-gradient-to-r from-astra-blue to-astra-cyan transition-all duration-500"
            style={{ width: `${diagnostics.cpu}%` }}
          />
        </div>
      </div>

      {/* Memory */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-astra-purple">Memory</span>
          <span className="text-astra-cyan neon-glow">{diagnostics.memory}%</span>
        </div>
        <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-astra-purple/30">
          <div
            className="h-full bg-gradient-to-r from-astra-purple to-astra-cyan transition-all duration-500"
            style={{ width: `${diagnostics.memory}%` }}
          />
        </div>
      </div>

      {/* Disk */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-astra-green">Storage</span>
          <span className="text-astra-cyan neon-glow">{diagnostics.disk}%</span>
        </div>
        <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-astra-green/30">
          <div
            className="h-full bg-gradient-to-r from-astra-green to-astra-cyan transition-all duration-500"
            style={{ width: `${diagnostics.disk}%` }}
          />
        </div>
      </div>

      <div className="border-t border-astra-blue/10 pt-4 my-4"></div>

      {/* Network Status */}
      <div className="glass-sm p-3 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-astra-cyan">
          <Network className="w-3 h-3" />
          <span>Network</span>
        </div>
        <div className="text-xs text-astra-blue">{diagnostics.network}</div>
      </div>

      {/* Threats */}
      <div className="glass-sm p-3 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono">
          <AlertTriangle className="w-3 h-3" />
          <span className={diagnostics.threats > 0 ? 'text-red-400' : 'text-astra-green'}>
            Threats Detected
          </span>
        </div>
        <div className="text-xs text-astra-cyan">{diagnostics.threats}</div>
      </div>

      {/* Processes */}
      <div className="glass-sm p-3 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-astra-cyan">
          <Zap className="w-3 h-3" />
          <span>Active Processes</span>
        </div>
        <div className="text-xs text-astra-blue">{diagnostics.processes}</div>
      </div>

      <div className="border-t border-astra-blue/10 pt-4 my-4"></div>

      {/* Recent Activity */}
      <div className="text-xs font-mono font-bold text-astra-cyan uppercase tracking-widest">
        ▓ Activity Log
      </div>
      <div className="space-y-2 text-xs font-mono text-astra-blue/70 text-left">
        <div>[16:45:23] System boot completed</div>
        <div>[16:45:45] Network interface online</div>
        <div>[16:46:12] AI modules initialized</div>
        <div>[16:47:34] Voice assistant ready</div>
        <div>[16:48:01] Weather sync complete</div>
      </div>
    </div>
  )
}
