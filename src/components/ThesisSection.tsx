import { Ban, Layers, ShieldCheck, Target } from 'lucide-react'
import { Reveal } from './Reveal'

const PILLARS = [
  {
    icon: Target,
    title: 'Skin in the game com peso de mérito',
    description:
      'Quem coloca o corpo na linha e constrói um projeto próprio tem voz na mesa. Toda a energia vai para a sua startup, não para tarefas da entidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Gravitas e disciplina de reunião',
    description:
      'Encontros semanais com pontualidade, seriedade técnica e métricas do produto na ponta da língua.',
  },
  {
    icon: Layers,
    title: 'Discrição e acabamento de produto',
    description:
      'Reputação vem de software funcionando e clientes reais, não de barulho em rede social ou palco de palestra.',
  },
]

const REFUSALS = [
  'Palco de palestras passivas para plateias que não constroem',
  'Burocracia de empresa júnior fazendo relatórios para terceiros',
  'Processos seletivos artificiais com dinâmicas de grupo e cases hipotéticos',
  'Autopromoção vazia e jargões sem produto no ar',
]

const USP_UNITS = ['Poli', 'FEA', 'IME', 'SanFran', 'Biológicas', 'Farmácia', 'Design']

export function ThesisSection() {
  return (
    <section className="border-t border-[var(--hairline)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal delayMs={0}>
              <span className="font-mono-tabular text-[12px] text-[#89d3f8]">
                01 · Tese e propósito
              </span>
              <h2 className="font-headline mt-3 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-[#edeff2] md:text-[36px]">
                Você não trabalha para a liga. A estrutura trabalha para a sua startup
              </h2>
              <p className="mt-4 text-[16px] leading-[1.65] text-[#a3a9b8]">
                A USP concentra mentes de engenharia, negócios, direito e ciência, mas o ecossistema estudantil tradicional empurra o aluno para o modo plateia ou para a burocracia corporativa.
              </p>
              <p className="mt-4 text-[16px] leading-[1.65] text-[#a3a9b8]">
                O USP AI Club opera como uma guilda de fundadores e estúdio prático no Samsung Ocean: um círculo enxuto de builders autônomos que se capacitam a cada ciclo de sete dias enquanto tiram negócios reais do papel.
              </p>
            </Reveal>

            <Reveal delayMs={90}>
              <div className="mt-8 border-t border-[var(--hairline)] pt-6">
                <div className="mb-3 text-[13px] font-medium text-[#edeff2]">
                  O que recusamos por princípio
                </div>
                <ul className="space-y-2.5">
                  {REFUSALS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#a3a9b8]">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
                        <Ban className="h-4 w-4 text-[#7a8296]" strokeWidth={1.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:col-span-7">
            <div className="grid gap-4">
              {PILLARS.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <Reveal key={pillar.title} delayMs={index * 60}>
                    <div className="surface-card rounded-[12px] p-6">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                          <Icon className="h-[18px] w-[18px] text-[#89d3f8]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-headline text-[18px] font-medium text-[#edeff2]">
                            {pillar.title}
                          </h3>
                          <p className="mt-1.5 text-[14px] leading-[1.6] text-[#a3a9b8]">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delayMs={180}>
              <div className="surface-raised rounded-[12px] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[13px] text-[#a3a9b8]">
                    Confluência interunidades da USP
                  </span>
                  <span className="font-mono-tabular text-[12px] text-[#7a8296]">
                    7 faculdades
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {USP_UNITS.map((unit) => (
                    <span
                      key={unit}
                      className="rounded-[6px] border border-[var(--hairline)] bg-[#0b0f17] px-3 py-1.5 text-[13px] text-[#edeff2]"
                    >
                      {unit}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThesisSection
