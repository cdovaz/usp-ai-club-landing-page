import { CheckCircle2, Compass, Mic } from 'lucide-react'
import { Reveal } from './Reveal'

const ENTRY_STEPS = [
  {
    step: '01',
    icon: CheckCircle2,
    title: 'Frequência no Dia A',
    description:
      'Comparecer a quatro encontros abertos semanais consecutivos no Samsung Ocean para conhecer a dinâmica e demonstrar consistência.',
  },
  {
    step: '02',
    icon: Compass,
    title: 'Validação de ideia viável',
    description:
      'Submeter sua tese ou protótipo para análise técnica da Diretoria e de Artur Vilas Boas antes de ir à bancada dos pares.',
  },
  {
    step: '03',
    icon: Mic,
    title: 'Pitch aberto com os pares',
    description:
      'Apresentar presencialmente para os Membros Associados ativos, validando comprometimento e disponibilidade real para construir.',
  },
]

export function EntryAndGovernanceSection() {
  return (
    <section className="border-t border-[var(--hairline)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <Reveal delayMs={0}>
          <div className="max-w-[660px]">
            <span className="font-mono-tabular text-[12px] text-[#89d3f8]">
              Do Visitante ao Membro Associado
            </span>
            <h2 className="font-headline mt-3 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-[#edeff2] md:text-[36px]">
              A trilha de 4 semanas para entrar na guilda
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-[#a3a9b8]">
              Sem dinâmicas artificiais nem provas de case hipotético. Você entra pela sua consistência nos encontros abertos e pela seriedade do projeto que quer tirar do papel.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ENTRY_STEPS.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.step} delayMs={index * 60}>
                <div className="surface-card flex h-full flex-col justify-between rounded-[12px] p-6">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono-tabular text-[12px] text-[#89d3f8]">
                        Passo {item.step}
                      </span>
                      <Icon className="h-[18px] w-[18px] text-[#7a8296]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-headline text-[18px] font-medium text-[#edeff2]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-[#a3a9b8]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EntryAndGovernanceSection
