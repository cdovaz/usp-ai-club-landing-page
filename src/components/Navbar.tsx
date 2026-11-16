import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { CLUB_LINKS } from '../config/links'

const NAV_ITEMS = [
  { label: 'Como funciona', href: '#ritos' },
  { label: 'Ingresso', href: '#ingresso' },
  { label: 'Aonde chegar', href: '#destino' },
]

interface NavbarProps {
  onNavigate?: (href: string) => void
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const handleLinkClick = (href: string) => {
    onNavigate?.(href)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--hairline)] bg-[#070b12]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-[8px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#89d3f8]"
        >
          <img
            src="/logo-prisma.png"
            alt="Emblema do USP AI Club: canais da Foz do Amazonas convergindo em um prisma"
            width={28}
            height={28}
            fetchPriority="high"
            decoding="async"
            className="h-7 w-7 rounded-[6px] object-cover"
          />
          <span className="font-headline text-[16px] font-medium tracking-[-0.01em] text-[#edeff2]">
            USP AI Club
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              className="text-[14px] text-[#a3a9b8] transition-colors duration-150 hover:text-[#edeff2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#89d3f8]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={CLUB_LINKS.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-[8px] bg-[#edeff2] px-4 text-[14px] font-medium text-[#070b12] transition-[background-color,transform] duration-150 hover:bg-[#ffffff] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#89d3f8]"
          >
            <span>Participar do Dia A</span>
            <ArrowUpRight className="h-4 w-4 text-[#070b12]" strokeWidth={1.5} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-[var(--hairline)] bg-[#101724] text-[#edeff2] transition-colors duration-150 hover:bg-[#162032] md:hidden"
        >
          {open ? (
            <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
          ) : (
            <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--hairline)] bg-[#0b0f17] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Navegação mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className="flex h-10 items-center text-[15px] text-[#a3a9b8] transition-colors duration-150 hover:text-[#edeff2]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={CLUB_LINKS.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#edeff2] px-4 text-[14px] font-medium text-[#070b12]"
            >
              <span>Participar do Dia A</span>
              <ArrowUpRight className="h-4 w-4 text-[#070b12]" strokeWidth={1.5} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
