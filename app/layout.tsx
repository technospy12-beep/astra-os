import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ASTRA OS - AI Operating System',
  description: 'Cinematic AI Operating System Interface',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-astra-black text-white overflow-hidden">
        {children}
      </body>
    </html>
  )
}
