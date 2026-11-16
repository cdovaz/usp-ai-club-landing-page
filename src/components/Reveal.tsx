import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delayMs?: number
  className?: string
}

export function Reveal({ children, delayMs = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    let rafId = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          rafId = window.requestAnimationFrame(() => {
            setVisible(true)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '480ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  )
}
