import { Calendar, Compass, Lock, Users } from 'lucide-react'
import { Reveal } from './Reveal'

export function WeeklyCadencePreview() {
  return (
    <div id="ritos" className="space-y-6">
      <Reveal delayMs={0}>
        <div className="max-w-[660px]">
          <div className="flex items-center gap-2 text-[12px] text-[#89d3f8]">
            <Compass className="h-4 w-4 text-[#89d3f8]" strokeWidth={1.5} />
            <span className="font-mono-tabular">Como funciona na prática</span>
          </div>
          <h2 className="font-headline mt-3 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-[#edeff2] md:text-[36px]">
            Dois encontros por semana no Samsung Ocean
          </h2>
          <p className="mt-3 text-[16px] leading-[1.65] text-[#a3a9b8]">
            A rotina do clube é dividida em dois momentos complementares dentro do InovaUSP: uma porta de entrada aberta para toda a USP e um dia fechado de execução para associados.
          </p>
        </div>
      </Reveal>

      {/* 1. Dia A (appears first on scroll) */}
      <Reveal delayMs={60}>
        <div className="surface-card rounded-[16px] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--hairline)] pb-4">
            <div className="flex items-center gap-2.5">
              <Users className="h-[18px] w-[18px] text-[#89d3f8]" strokeWidth={1.5} />
              <span className="font-mono-tabular text-[13px] text-[#89d3f8]">
                Dia A · Aberto
              </span>
            </div>
            <span className="text-[13px] text-[#7a8296]">Visitantes + Associados</span>
          </div>

          <div className="mt-5 grid gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-8">
              <h3 className="font-headline text-[22px] font-medium text-[#edeff2]">
                Oficina prática e porta de entrada do clube
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#a3a9b8]">
                É o encontro semanal aberto a qualquer aluno de graduação ou pós da USP. Em vez de palestras genéricas, os temas do Dia A nascem das dores reais levantadas pelos próprios membros associados: validação de problema, engenharia de produto e agentes de IA, jurídico para startups e captação.
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#a3a9b8]">
                Para o visitante, é o espaço para conhecer a guilda, trocar com quem já está construindo e completar a frequência mínima necessária para se candidatar a membro associado.
              </p>
            </div>

            <div className="surface-raised rounded-[12px] p-4 md:col-span-4">
              <div className="text-[12px] text-[#7a8296]">Como participar</div>
              <div className="mt-1 text-[14px] font-medium text-[#edeff2]">
                Registro de intenção em 2 linhas
              </div>
              <div className="mt-3 border-t border-[var(--hairline)] pt-3 text-[12px] text-[#7a8296]">
                O que você leva
              </div>
              <div className="mt-1 text-[13px] text-[#a3a9b8]">
                Repertório técnico aplicado e contato direto com builders da USP
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 2. Dia B (appears below Dia A as you keep scrolling) */}
      <Reveal delayMs={80}>
        <div className="surface-card rounded-[16px] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--hairline)] pb-4">
            <div className="flex items-center gap-2.5">
              <Lock className="h-[18px] w-[18px] text-[#287fc4]" strokeWidth={1.5} />
              <span className="font-mono-tabular text-[13px] text-[#a3a9b8]">
                Dia B · Fechado
              </span>
            </div>
            <span className="text-[13px] text-[#7a8296]">Exclusivo Membros Associados</span>
          </div>

          <div className="mt-5 grid gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-8">
              <h3 className="font-headline text-[22px] font-medium text-[#edeff2]">
                Co-working, mentoria e pitch semanal de trabalho
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#a3a9b8]">
                Dia exclusivo para quem já tem projeto aprovado. O foco é execução presencial lado a lado no Samsung Ocean, rodada fechada de mentoria com professores da USP, mentores do Ocean e Artur Vilas Boas, além do pitch semanal de trabalho: o que você entregou nos últimos 7 dias e qual a meta dos próximos 7.
              </p>
            </div>

            <div className="surface-raised rounded-[12px] p-4 md:col-span-4">
              <div className="text-[12px] text-[#7a8296]">Ritmo esperado</div>
              <div className="mt-1 text-[14px] font-medium text-[#edeff2]">
                Entrega semanal contínua
              </div>
              <div className="mt-3 border-t border-[var(--hairline)] pt-3 text-[12px] text-[#7a8296]">
                Métrica norte
              </div>
              <div className="mt-1 flex items-center gap-2 text-[13px] text-[#89d3f8]">
                <Calendar className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                <span>MVP no ar e tração real</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
