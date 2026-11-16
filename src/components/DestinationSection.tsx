import { Award, Layers, Rocket } from 'lucide-react'
import { Reveal } from './Reveal'

const DESTINATIONS = [
  {
    icon: Rocket,
    title: 'MVP no ar com usuários reais',
    description:
      'Sair do campo puramente teórico e colocar um produto funcionando na mão de clientes durante a graduação, com métricas semanais de evolução.',
  },
  {
    icon: Layers,
    title: 'Seu projeto, seu equity',
    description:
      'Zero horas gastas em relatórios para terceiros ou tarefas da entidade. Toda a sua energia é investida na construção da sua própria startup.',
  },
  {
    icon: Award,
    title: 'Demo Day e Conselho de Alumni',
    description:
      'Apresentar sua startup tracionada para investidores-anjo, aceleradoras e fundos de Venture Capital parceiros, retornando depois como mentor das novas safras.',
  },
]

const USP_UNITS = ['Poli', 'FEA', 'IME', 'SanFran', 'Biológicas', 'Farmácia', 'Design']

export function DestinationSection() {
  return (
    <section className="border-t border-[var(--hairline)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <Reveal delayMs={0}>
          <div className="max-w-[660px]">
            <span className="font-mono-tabular text-[12px] text-[#89d3f8]">
              02 · Aonde queremos que você chegue
            </span>
            <h2 className="font-headline mt-3 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-[#edeff2] md:text-[36px]">
              Sair da universidade com uma empresa real em tração
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-[#a3a9b8]">
              O objetivo do USP AI Club não é acumular certificados. É formar fundadores capazes de lançar produtos que as pessoas amam e chegar ao mercado com tração comprovada.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {DESTINATIONS.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delayMs={index * 60}>
                <div className="surface-card flex h-full flex-col justify-between rounded-[12px] p-6">
                  <div>
                    <div className="mb-4 flex h-5 w-5 items-center justify-center">
                      <Icon className="h-[18px] w-[18px] text-[#89d3f8]" strokeWidth={1.5} />
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

        <Reveal delayMs={180}>
          <div className="surface-raised mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] p-5">
            <div>
              <div className="text-[14px] font-medium text-[#edeff2]">
                Confluência interunidades da USP
              </div>
              <div className="mt-0.5 text-[13px] text-[#7a8296]">
                Engenharia, negócios, direito e ciência trabalhando lado a lado
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
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
    </section>
  )
}

export default DestinationSection
