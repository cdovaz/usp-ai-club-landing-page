import { lazy, useCallback, useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { CLUB_LINKS } from './config/links'
import { LazySection } from './components/LazySection'
import { Navbar } from './components/Navbar'

const WeeklyCadencePreview = lazy(() =>
  import('./components/WeeklyCadencePreview').then((m) => ({
    default: m.WeeklyCadencePreview,
  })),
)
const EntryAndGovernanceSection = lazy(
  () => import('./components/EntryAndGovernanceSection'),
)
const SkillsVennSection = lazy(() => import('./components/SkillsVennSection'))
const DestinationSection = lazy(() => import('./components/DestinationSection'))
const FooterCTA = lazy(() => import('./components/FooterCTA'))

const HERO_PAINTINGS = [
  {
    title: 'Operários',
    artist: 'Tarsila do Amaral',
    year: '1933',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Oper%C3%A1rios,_Trasila_do_Amaral_-_1933.jpg?width=1920',
  },
  {
    title: 'Independência ou Morte',
    artist: 'Pedro Américo',
    year: '1888',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pedro_Am%C3%A9rico_-_Independ%C3%AAncia_ou_Morte_-_Google_Art_Project.jpg?width=1920',
  },
  {
    title: 'Primeira Missa no Brasil',
    artist: 'Victor Meirelles',
    year: '1860',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Meirelles-primeiramissa2.jpg?width=1920',
  },
  {
    title: 'Os Carnavais',
    artist: 'Emiliano Di Cavalcanti',
    year: 'Acervo',
    src: '/paintings/os-carnavais.jpg',
  },
]

function getNextPaintingIndex(): number {
  if (typeof window === 'undefined') return 0
  try {
    const raw = window.localStorage.getItem('usp_ai_club_painting_idx')
    const prev = raw !== null ? Number.parseInt(raw, 10) : -1
    const next = Number.isNaN(prev) ? 0 : (prev + 1) % HERO_PAINTINGS.length
    window.localStorage.setItem('usp_ai_club_painting_idx', String(next))
    return next
  } catch {
    return Math.floor(Math.random() * HERO_PAINTINGS.length)
  }
}

export function App() {
  const [forceLoadAll, setForceLoadAll] = useState(false)
  const [paintingIndex, setPaintingIndex] = useState<number>(() => getNextPaintingIndex())
  const currentPainting = HERO_PAINTINGS[paintingIndex] ?? HERO_PAINTINGS[0]

  const handleNavigate = useCallback((href: string) => {
    if (href !== '#top') {
      setForceLoadAll(true)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash && window.location.hash !== '#top') {
      setForceLoadAll(true)
    }
  }, [])

  return (
    <div id="top" className="min-h-screen bg-[#070b12] text-[#edeff2]">
      <Navbar onNavigate={handleNavigate} />

      <main>
        {/* 1. Hero Section (only thing visible on initial load, with rotating painting background) */}
        <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden">
          {/* Background painting */}
          <img
            src={currentPainting.src}
            alt={`${currentPainting.title}, de ${currentPainting.artist}`}
            fetchPriority="high"
            decoding="async"
            onError={() => {
              setPaintingIndex((prev) => (prev + 1) % HERO_PAINTINGS.length)
            }}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-40"
          />
          {/* Ink scrims for calm text contrast */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070b12]/95 via-[#070b12]/75 to-[#070b12]/40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-[#070b12]/50"
          />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 md:px-8 md:py-24">
            <div className="enter-rise max-w-[780px]">
              <h1 className="font-headline text-[38px] font-medium leading-[1.06] tracking-[-0.03em] text-[#edeff2] sm:text-[52px] lg:text-[60px]">
                Saia da USP com produtos em produção no seu portfólio
              </h1>

              <p className="mt-5 max-w-[38rem] text-[17px] leading-[1.6] text-[#a3a9b8] md:text-[19px]">
                O laboratório prático dentro da USP para quem quer terminar a graduação com código no ar, usuários reais e acesso direto a comunidade, mentores e investidores.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={CLUB_LINKS.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-[8px] bg-[#edeff2] px-5 text-[14px] font-medium text-[#070b12] transition-[background-color,transform] duration-150 hover:bg-[#ffffff] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#89d3f8]"
                >
                  <span>Garantir vaga no próximo Dia A</span>
                  <ArrowUpRight className="h-4 w-4 text-[#070b12]" strokeWidth={1.5} />
                </a>

                <a
                  href="#ritos"
                  onClick={() => handleNavigate('#ritos')}
                  className="inline-flex h-11 items-center gap-2 rounded-[8px] border border-[var(--hairline)] bg-[#101724]/90 px-5 text-[14px] font-medium text-[#edeff2] transition-colors duration-150 hover:bg-[#162032] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#89d3f8]"
                >
                  <span>Como funciona</span>
                  <ArrowRight className="h-4 w-4 text-[#a3a9b8]" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Quiet museum caption */}
          <div className="pointer-events-none absolute bottom-5 right-6 z-10 font-mono-tabular text-[11px] text-[#a3a9b8]/80 md:right-8">
            {currentPainting.title} · {currentPainting.artist} ({currentPainting.year})
          </div>
        </section>

        {/* 2. Weekly Cadence (Dia A / Dia B) - appears on scroll */}
        <LazySection id="ritos" minHeight={420} forceLoad={forceLoadAll}>
          <section className="mx-auto max-w-[1200px] px-6 pb-20 md:px-8 md:pb-28">
            <WeeklyCadencePreview />
          </section>
        </LazySection>

        {/* 3. Entry Track (4 weeks: Visitante -> Membro Associado) */}
        <LazySection id="ingresso" minHeight={440} forceLoad={forceLoadAll}>
          <EntryAndGovernanceSection />
        </LazySection>

        {/* 4. Skills Venn Diagram */}
        <LazySection id="habilidades" minHeight={520} forceLoad={forceLoadAll}>
          <SkillsVennSection />
        </LazySection>

        {/* 5. Aonde queremos que você chegue */}
        <LazySection id="destino" minHeight={480} forceLoad={forceLoadAll}>
          <DestinationSection />
        </LazySection>
      </main>

      {/* 5. Final CTA */}
      <LazySection minHeight={360} forceLoad={forceLoadAll}>
        <FooterCTA />
      </LazySection>
    </div>
  )
}

export default App
