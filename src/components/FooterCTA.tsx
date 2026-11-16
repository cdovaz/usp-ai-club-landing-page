import { ArrowUpRight, MapPin } from 'lucide-react'
import { CLUB_LINKS } from '../config/links'
import { Reveal } from './Reveal'

export function FooterCTA() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[#070b12]">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-24">
        <Reveal delayMs={0}>
          <div className="surface-card rounded-[16px] p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-[13px] text-[#89d3f8]">
                  <MapPin className="h-4 w-4 text-[#89d3f8]" strokeWidth={1.5} />
                  <span>{CLUB_LINKS.locationLabel}</span>
                </div>
                <h2 className="font-headline mt-3 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-[#edeff2] md:text-[36px]">
                  O próximo passo é comparecer ao Dia A
                </h2>
                <p className="mt-3 max-w-[560px] text-[15px] leading-[1.65] text-[#a3a9b8]">
                  Traga um problema real ou uma ideia em rascunho. Preencha o registro de intenção em duas linhas para liberar seu acesso ao espaço físico do Samsung Ocean no InovaUSP.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 lg:col-span-4 lg:items-end">
                <a
                  href={CLUB_LINKS.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-[8px] bg-[#edeff2] px-6 text-[15px] font-medium text-[#070b12] transition-[background-color,transform] duration-150 hover:bg-[#ffffff] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#89d3f8]"
                >
                  <span>Garantir vaga no próximo Dia A</span>
                  <ArrowUpRight className="h-4 w-4 text-[#070b12]" strokeWidth={1.5} />
                </a>
                <span className="font-mono-tabular text-[12px] text-[#7a8296]">
                  Operação autônoma · Custo zero
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[var(--hairline)] pt-8 text-[13px] text-[#7a8296] sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <img
                src="/logo-prisma.png"
                alt="Logo USP AI Club"
                width={24}
                height={24}
                loading="lazy"
                decoding="async"
                className="h-6 w-6 rounded-[4px] object-cover"
              />
              <span className="font-headline font-medium text-[#edeff2]">USP AI Club</span>
              <span>·</span>
              <span>Universidade de São Paulo</span>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a href="#ritos" className="transition-colors duration-150 hover:text-[#edeff2]">
                Como funciona
              </a>
              <a href="#ingresso" className="transition-colors duration-150 hover:text-[#edeff2]">
                Ingresso
              </a>
              <a href="#destino" className="transition-colors duration-150 hover:text-[#edeff2]">
                Aonde chegar
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}

export default FooterCTA
