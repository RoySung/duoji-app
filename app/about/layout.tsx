'use client'

import dynamic from 'next/dynamic'
import { useRef } from 'react'

const Scene = dynamic(() => import('@/components/canvas/scene'), { ssr: false })
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const ref = useRef()

  return (
    <section ref={ref} className="h-[100vh] w-[100vw]">
      <div className="h-full w-full">{children}</div>
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none'
        }}
        eventSource={ref}
        eventPrefix="client"
      />
    </section>
  )
}
