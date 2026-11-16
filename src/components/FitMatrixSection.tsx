import { Reveal } from './Reveal'

const FIT_ROWS = [
  {
    dimension: 'Motivação',
    fit: 'Construir um produto próprio que as pessoas realmente usem e amem',
    antifit: 'Preencher currículo, caçar horas complementares ou inflar rede social',
  },
  {
    dimension: 'Postura no co-working',
    fit: 'Foco profundo, respeito ao silêncio e troca direta entre pares',
    antifit: 'Dispersão, conversas paralelas ou isolamento hostil',
  },
  {
    dimension: 'Comunicação',
    fit: 'Tato objetivo e fala serena apoiada em métricas e entregas',
    antifit: 'Jargões ocos de palco, arrogância defensiva e discursos sem prática',
  },
  {
    dimension: 'Reação ao feedback',
    fit: 'Absorve a crítica, testa em sete dias e volta com resultado',
    antifit: 'Usa a semana de provas da USP como desculpa recorrente para estagnação',
  },
  {
    dimension: 'Estética e rigor',
    fit: 'Simplicidade intencional, cuidado nos detalhes e sobriedade',
    antifit: 'Ostentação artificial, ternos forçados ou desleixo de produto',
  },
]

export function FitMatrixSection() {
  return (
    <section className="border-t border-[var(--hairline)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <Reveal delayMs={0}>
          <div className="max-w-[640px]">
            <span className="font-mono-tabular text-[12px] text-[#89d3f8]">
              03 · Filtro cultural
            </span>
            <h2 className="font-headline mt-3 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-[#edeff2] md:text-[36px]">
              Quem prospera na guilda e quem não se adapta
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-[#a3a9b8]">
              Buscamos os alunos da USP com alta energia, senso estético e apetite por execução — tenham eles um protótipo rodando ou a determinação de construir o primeiro.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="surface-card mt-10 overflow-hidden rounded-[16px]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--hairline)] bg-[#0c121d]">
                    <th className="px-6 py-4 text-[13px] font-medium text-[#7a8296]">
                      Dimensão
                    </th>
                    <th className="px-6 py-4 text-[13px] font-medium text-[#edeff2]">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#89d3f8]" />
                        <span>Fit ideal (USP AI Club)</span>
                      </span>
                    </th>
                    <th className="px-6 py-4 text-[13px] font-medium text-[#7a8296]">
                      Anti-fit (descarte)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--hairline)]">
                  {FIT_ROWS.map((row) => (
                    <tr
                      key={row.dimension}
                      className="transition-colors duration-150 hover:bg-[#162032]/50"
                    >
                      <td className="px-6 py-4 align-top text-[14px] font-medium text-[#edeff2]">
                        {row.dimension}
                      </td>
                      <td className="px-6 py-4 align-top text-[14px] leading-[1.6] text-[#a3a9b8]">
                        {row.fit}
                      </td>
                      <td className="px-6 py-4 align-top text-[14px] leading-[1.6] text-[#7a8296]">
                        {row.antifit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FitMatrixSection
