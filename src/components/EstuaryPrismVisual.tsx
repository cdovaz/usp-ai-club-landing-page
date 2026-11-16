import { ArrowRight } from 'lucide-react'

const SHIFTS = [
  {
    dimension: 'Produto',
    oldWay: 'Telas passivas (CRUD)',
    newWay: 'Agentes que executam ponta a ponta',
    oldWidth: 36,
    newWidth: 92,
  },
  {
    dimension: 'Modelo',
    oldWay: 'Licença por assento (SaaS)',
    newWay: 'Service-as-a-Software (resultado)',
    oldWidth: 42,
    newWidth: 88,
  },
  {
    dimension: 'Habilidade',
    oldWay: 'Código isolado ou só gestão',
    newWay: 'Produto + Negócio + Orquestração',
    oldWidth: 32,
    newWidth: 94,
  },
  {
    dimension: 'Velocidade',
    oldWay: 'Meses até o primeiro piloto',
    newWay: 'Ciclos semanais com usuários reais',
    oldWidth: 28,
    newWidth: 86,
  },
]

export function EstuaryPrismVisual() {
  return (
    <div className="w-full select-none">
      <div className="surface-card rounded-[16px] p-6 sm:p-7">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--hairline)] pb-4">
          <div>
            <div className="font-headline text-[17px] font-medium text-[#edeff2]">
              A mudança de paradigma no mercado
            </div>
            <div className="mt-0.5 text-[12px] text-[#7a8296]">
              SaaS tradicional vs. produtos e serviços com IA
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#7a8296]">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#123c69]" />
              <span>Antes</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#89d3f8]">
              <span className="h-2 w-2 rounded-full bg-[#89d3f8]" />
              <span>Agora</span>
            </span>
          </div>
        </div>

        {/* Visual Contrast Rows */}
        <div className="mt-5 space-y-4">
          {SHIFTS.map((row) => (
            <div
              key={row.dimension}
              className="rounded-[10px] border border-[var(--hairline)] bg-[#0b0f17] p-3.5"
            >
              <div className="mb-2 flex items-center justify-between gap-2 text-[12px]">
                <span className="font-mono-tabular text-[#89d3f8]">{row.dimension}</span>
                <div className="flex items-center gap-1.5 text-right">
                  <span className="text-[#7a8296]">{row.oldWay}</span>
                  <ArrowRight className="h-3 w-3 shrink-0 text-[#7a8296]" strokeWidth={1.5} />
                  <span className="font-medium text-[#edeff2]">{row.newWay}</span>
                </div>
              </div>

              {/* Dual visual bars */}
              <div className="space-y-1.5">
                <div className="h-1.5 w-full overflow-hidden rounded-[3px] bg-[#101724]">
                  <div
                    className="h-full rounded-[3px] bg-[#123c69]"
                    style={{ width: `${row.oldWidth}%` }}
                  />
                </div>
                <div className="h-2 w-full overflow-hidden rounded-[3px] bg-[#101724]">
                  <div
                    className="h-full rounded-[3px] bg-[#89d3f8]"
                    style={{ width: `${row.newWidth}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
