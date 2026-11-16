import { Suspense, useEffect, useRef, useState, type ReactNode } from 'react'

interface LazySectionProps {
  id?: string
  minHeight?: number
  forceLoad?: boolean
  children: ReactNode
}

function SectionPlaceholder({ minHeight }: { minHeight: number }) {
  return <div style={{ minHeight }} aria-hidden="true" />
}

export function LazySection({
  id,
  minHeight = 420,
  forceLoad = false,
  children,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(forceLoad)

  useEffect(() => {
    if (forceLoad) {
      setShouldLoad(true)
    }
  }, [forceLoad])

  useEffect(() => {
    if (shouldLoad) return
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.01 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <div ref={ref} id={id}>
      {shouldLoad ? (
        <Suspense fallback={<SectionPlaceholder minHeight={minHeight} />}>
          {children}
        </Suspense>
      ) : (
        <SectionPlaceholder minHeight={minHeight} />
      )}
    </div>
  )
}
