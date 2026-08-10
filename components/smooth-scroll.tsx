"use client"

import { ReactLenis } from "lenis/react"
import { ReactNode, useEffect, useState } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const listener = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mq.addEventListener("change", listener)
    return () => mq.removeEventListener("change", listener)
  }, [])

  if (reduceMotion) {
    return <>{children}</>
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
