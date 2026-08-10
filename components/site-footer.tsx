import Link from "next/link"
import { PineLogo } from "@/components/pine-logo"
import { cityPages, servicePages } from "@/lib/seo-data"

export function SiteFooter() {
  const ano = new Date().getFullYear()
  return (
    <footer className="relative border-t border-border/60" aria-label="Rodapé do site">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-md"
              aria-label="Pine Collective, Início"
            >
              <PineLogo className="h-6 w-6 text-primary" />
              <span className="text-base tracking-[-0.01em] font-medium">
                Pine<span className="text-muted-foreground"> Collective</span>
              </span>
            </Link>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
              O braço tecnológico para empresas que já faturam e querem escalar
              com inteligência, sem virar mais um número numa agência.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Navegar
            </div>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {[
                { label: "Proximidade", href: "/#proximidade" },
                { label: "Soluções", href: "/#solucoes" },
                { label: "O Coletivo", href: "/#coletivo" },
                { label: "Diagnóstico", href: "/#diagnostico" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center min-h-[36px] text-foreground/80 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Serviços
            </div>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {servicePages.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="inline-flex items-center min-h-[36px] text-foreground/80 hover:text-primary transition-colors"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Contato direto
            </div>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="mailto:contato@pinecollective.dev"
                  className="inline-flex items-center min-h-[36px] text-foreground hover:text-primary transition-colors"
                >
                  contato@pinecollective.dev
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5548992163070"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar no WhatsApp: (48) 99216-3070 (abre em nova aba)"
                  className="inline-flex items-center min-h-[36px] text-foreground hover:text-primary transition-colors"
                >
                  (48) 99216-3070
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pinecollective.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @pinecollective.dev (abre em nova aba)"
                  className="inline-flex items-center min-h-[36px] text-foreground hover:text-primary transition-colors"
                >
                  Instagram @pinecollective.dev
                </a>
              </li>
              <li className="text-muted-foreground">
                Tijucas, SC · atendimento para todo o Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 border-t border-border/60 pt-8">
          <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Atendimento regional
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {cityPages.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/atendimento/${city.slug}`}
                  className="inline-flex items-center min-h-[36px] text-foreground/80 hover:text-primary transition-colors"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground">
          <span>© {ano} Pine Collective. Todos os direitos reservados.</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacidade"
              className="inline-flex items-center min-h-[36px] hover:text-foreground transition-colors"
            >
              Política de Privacidade (LGPD)
            </Link>
            <Link
              href="/termos"
              className="inline-flex items-center min-h-[36px] hover:text-foreground transition-colors"
            >
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
