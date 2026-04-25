import Link from "next/link"
import { PineLogo } from "@/components/pine-logo"

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5">
        <nav className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 backdrop-blur-md px-5 py-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-foreground"
            aria-label="Pine Collective — Início"
          >
            <PineLogo className="h-6 w-6 text-primary" />
            <span className="text-sm tracking-[-0.01em] font-medium">
              Pine<span className="text-muted-foreground"> Collective</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <li>
              <Link
                href="#proximidade"
                className="hover:text-foreground transition-colors"
              >
                Proximidade
              </Link>
            </li>
            <li>
              <Link
                href="#solucoes"
                className="hover:text-foreground transition-colors"
              >
                Soluções
              </Link>
            </li>
            <li>
              <Link
                href="#coletivo"
                className="hover:text-foreground transition-colors"
              >
                O Coletivo
              </Link>
            </li>
          </ul>

          <Link
            href="#diagnostico"
            className="group inline-flex items-center gap-2 text-sm rounded-full border border-border/80 bg-secondary/40 px-4 py-2 text-foreground hover:border-primary/60 hover:bg-secondary transition-colors"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Agendas abertas
          </Link>
        </nav>
      </div>
    </header>
  )
}
