import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from './Reveal'

type CircleSlot = 'top' | 'left' | 'right' | null

interface ProfileData {
  id: 'fde' | 'gtm'
  code: string
  title: string
  summary: string
  centerLabel: string
  skills: {
    slot: Exclude<CircleSlot, null>
    name: string
    detail: string
  }[]
}

const PROFILES: ProfileData[] = [
  {
    id: 'fde',
    code: 'FDE',
    title: 'Forward Deployed Engineer',
    summary:
      'Entra no problema real do cliente, traduz a regra de negócio e coloca software e agentes de IA em produção.',
    centerLabel: 'FDE',
    skills: [
      {
        slot: 'top',
        name: 'Produto',
        detail: 'Descoberta com usuários, clareza de proposta de valor e acabamento de interface.',
      },
      {
        slot: 'left',
        name: 'Negócio',
        detail: 'Modelo de receita, precificação, jurídico e narrativa para clientes e investidores.',
      },
      {
        slot: 'right',
        name: 'Tecnologia',
        detail: 'Engenharia de software, agentes de IA, arquitetura e velocidade de entrega.',
      },
    ],
  },
  {
    id: 'gtm',
    code: 'GTM',
    title: 'Go-To-Market Engineer',
    summary:
      'Usa código, dados e automação para construir canais previsíveis de aquisição e fechar os primeiros contratos.',
    centerLabel: 'GTM',
    skills: [
      {
        slot: 'top',
        name: 'Tech',
        detail: 'Automação de prospecção, enriquecimento de dados, APIs e agentes de outbound.',
      },
      {
        slot: 'left',
        name: 'Growth',
        detail: 'Experimentos de aquisição, funis de conversão, métricas de ativação e retenção.',
      },
      {
        slot: 'right',
        name: 'Vendas',
        detail: 'Qualificação de leads, demos técnicas, negociação B2B e fechamento de pilotos.',
      },
    ],
  },
]

function ProfileSlide({ profile }: { profile: ProfileData }) {
  const [activeSlot, setActiveSlot] = useState<CircleSlot>(null)
  const topSkill = profile.skills[0]
  const leftSkill = profile.skills[1]
  const rightSkill = profile.skills[2]

  return (
    <div className="w-full shrink-0">
      <div className="surface-card rounded-[16px] p-6 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: Info + 3 skills */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--hairline)] pb-4">
              <div>
                <span className="font-mono-tabular text-[12px] text-[#89d3f8]">
                  Perfil {profile.code}
                </span>
                <h3 className="font-headline mt-1 text-[22px] font-medium text-[#edeff2] sm:text-[24px]">
                  {profile.title}
                </h3>
              </div>
              <span className="rounded-[6px] border border-[var(--hairline)] bg-[#0b0f17] px-2.5 py-1 font-mono-tabular text-[12px] text-[#a3a9b8]">
                3 frentes
              </span>
            </div>

            <p className="mt-4 text-[15px] leading-[1.6] text-[#a3a9b8]">
              {profile.summary}
            </p>

            <div className="mt-6 space-y-2.5">
              {profile.skills.map((skill) => {
                const isActive = activeSlot === skill.slot
                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setActiveSlot(skill.slot)}
                    onMouseLeave={() => setActiveSlot(null)}
                    className={`rounded-[10px] border px-4 py-3 transition-colors duration-150 ${
                      isActive
                        ? 'border-[var(--hairline-strong)] bg-[#162032]'
                        : 'border-[var(--hairline)] bg-[#0b0f17]'
                    }`}
                  >
                    <div className="text-[14px] font-medium text-[#edeff2]">
                      {skill.name}
                    </div>
                    <p className="mt-0.5 text-[13px] leading-[1.55] text-[#a3a9b8]">
                      {skill.detail}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Venn Diagram */}
          <div className="lg:col-span-6">
            <div className="rounded-[12px] border border-[var(--hairline)] bg-[#070b12] p-4 sm:p-6">
              <svg
                viewBox="0 0 420 330"
                className="mx-auto h-auto w-full max-w-[380px] select-none"
                role="img"
                aria-label={`Diagrama de Venn do perfil ${profile.title}: ${topSkill.name}, ${leftSkill.name} e ${rightSkill.name}`}
              >
                {/* Top circle */}
                <g
                  onMouseEnter={() => setActiveSlot('top')}
                  onMouseLeave={() => setActiveSlot(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx="210"
                    cy="118"
                    r="88"
                    fill="#89d3f8"
                    fillOpacity={activeSlot === 'top' ? 0.22 : 0.11}
                    stroke="#89d3f8"
                    strokeOpacity={activeSlot === 'top' ? 0.9 : 0.45}
                    strokeWidth="1.5"
                  />
                  <text
                    x="210"
                    y="74"
                    textAnchor="middle"
                    fill="#edeff2"
                    fontFamily="Space Grotesk, sans-serif"
                    fontSize="14"
                    fontWeight="500"
                  >
                    {topSkill.name}
                  </text>
                </g>

                {/* Bottom-left circle */}
                <g
                  onMouseEnter={() => setActiveSlot('left')}
                  onMouseLeave={() => setActiveSlot(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx="156"
                    cy="208"
                    r="88"
                    fill="#287fc4"
                    fillOpacity={activeSlot === 'left' ? 0.26 : 0.14}
                    stroke="#287fc4"
                    strokeOpacity={activeSlot === 'left' ? 0.9 : 0.55}
                    strokeWidth="1.5"
                  />
                  <text
                    x="112"
                    y="232"
                    textAnchor="middle"
                    fill="#edeff2"
                    fontFamily="Space Grotesk, sans-serif"
                    fontSize="14"
                    fontWeight="500"
                  >
                    {leftSkill.name}
                  </text>
                </g>

                {/* Bottom-right circle */}
                <g
                  onMouseEnter={() => setActiveSlot('right')}
                  onMouseLeave={() => setActiveSlot(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx="264"
                    cy="208"
                    r="88"
                    fill="#123c69"
                    fillOpacity={activeSlot === 'right' ? 0.44 : 0.28}
                    stroke="#287fc4"
                    strokeOpacity={activeSlot === 'right' ? 0.9 : 0.45}
                    strokeWidth="1.5"
                  />
                  <text
                    x="308"
                    y="232"
                    textAnchor="middle"
                    fill="#edeff2"
                    fontFamily="Space Grotesk, sans-serif"
                    fontSize="14"
                    fontWeight="500"
                  >
                    {rightSkill.name}
                  </text>
                </g>

                {/* Center intersection */}
                <circle
                  cx="210"
                  cy="178"
                  r="32"
                  fill="#070b12"
                  fillOpacity="0.92"
                  stroke="#89d3f8"
                  strokeOpacity="0.65"
                  strokeWidth="1"
                />
                <text
                  x="210"
                  y="183"
                  textAnchor="middle"
                  fill="#89d3f8"
                  fontFamily="Space Grotesk, sans-serif"
                  fontSize="14"
                  fontWeight="500"
                >
                  {profile.centerLabel}
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SkillsVennSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PROFILES.length - 1 : prev - 1))
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev === PROFILES.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="border-t border-[var(--hairline)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <Reveal delayMs={0}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[620px]">
              <span className="font-mono-tabular text-[12px] text-[#89d3f8]">
                02 · Perfis de membro alvo
              </span>
              <h2 className="font-headline mt-3 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-[#edeff2] md:text-[36px]">
                Dois perfis complementares na mesma mesa
              </h2>
              <p className="mt-4 text-[16px] leading-[1.65] text-[#a3a9b8]">
                O clube desenvolve dois perfis técnicos orientados a execução: quem constrói e implanta o produto em produção (FDE) e quem transforma tecnologia em distribuição e receita (GTM Engineer).
              </p>
            </div>

            {/* Carousel controls */}
            <div className="flex items-center gap-3">
              <span className="font-mono-tabular text-[12px] text-[#7a8296]">
                0{activeIndex + 1} / 0{PROFILES.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Perfil anterior"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-[var(--hairline)] bg-[#101724] text-[#edeff2] transition-colors duration-150 hover:bg-[#162032] focus-visible:outline-2 focus-visible:outline-[#89d3f8]"
                >
                  <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Próximo perfil"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-[var(--hairline)] bg-[#101724] text-[#edeff2] transition-colors duration-150 hover:bg-[#162032] focus-visible:outline-2 focus-visible:outline-[#89d3f8]"
                >
                  <ChevronRight className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Carousel Track */}
        <Reveal delayMs={80}>
          <div
            className="mt-8 overflow-hidden"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') goPrev()
              if (e.key === 'ArrowRight') goNext()
            }}
            aria-roledescription="carousel"
            aria-label="Perfis de membro alvo"
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                transitionProperty: 'transform',
                transitionDuration: '380ms',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {PROFILES.map((profile) => (
                <ProfileSlide key={profile.id} profile={profile} />
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {PROFILES.map((profile, index) => {
              const active = index === activeIndex
              return (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ir para ${profile.title}`}
                  className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                    active ? 'w-6 bg-[#89d3f8]' : 'w-2 bg-[#162032] hover:bg-[#287fc4]'
                  }`}
                />
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default SkillsVennSection
