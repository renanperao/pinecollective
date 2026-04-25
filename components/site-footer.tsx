import Link from "next/link"
import { PineLogo } from "@/components/pine-logo"

export function SiteFooter() {
  const ano = new Date().getFullYear()
  return (
    <footer className="relative border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <PineLogo className="h-6 w-6 text-primary" />
              <span className="text-base tracking-[-0.01em] font-medium">
                Pine<span className="text-muted-foreground"> Collective</span>
              </span>
            </Link>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
              O braço tecnológico para empresas que já faturam e querem escalar
              com inteligência — sem virar mais um número numa agência.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Navegar
            </div>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {[
                { label: "Proximidade", href: "#proximidade" },
                { label: "Soluções", href: "#solucoes" },
                { label: "O Coletivo", href: "#coletivo" },
                { label: "Diagnóstico", href: "#diagnostico" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Contato direto
            </div>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="mailto:hello@pinecollective.com.br"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  hello@pinecollective.com.br
                </a>
              </li>
              <li className="text-muted-foreground">
                São Paulo · atendemos remotamente em todo o Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground">
          <span>© {ano} Pine Collective. Todos os direitos reservados.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="hover:text-foreground transition-colors">
              Política de Privacidade (LGPD)
            </Link>
            <Link href="/termos" className="hover:text-foreground transition-colors">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
