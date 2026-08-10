import type { Metadata } from "next"
import { Mail, MessageCircle, Instagram, MapPin } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { DiagnosticoForm } from "@/components/diagnostico-form"
import { siteConfig } from "@/lib/seo-data"

export const metadata: Metadata = {
  title: "Contato | Pine Collective",
  description:
    "Fale direto com Renan Perão ou Luis Augusto dos Santos. Diagnóstico gratuito, resposta rápida por e-mail, WhatsApp ou Instagram.",
  alternates: { canonical: "/contato" },
}

const canaisRapidos = [
  {
    icon: Mail,
    label: "E-mail",
    valor: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    detalhe: "Resposta em até 1 dia útil",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    valor: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
    detalhe: "Direto com um sócio",
    external: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    valor: "@pinecollective.dev",
    href: siteConfig.instagram,
    detalhe: "Bastidores e projetos",
    external: true,
  },
]

export default function ContatoPage() {
  return (
    <main
      id="conteudo"
      className="relative min-h-screen bg-background text-foreground grain"
    >
      <SiteNav />

      <section className="pt-32 sm:pt-36 md:pt-44 pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Contato
            </div>
            <h1 className="mt-6 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]">
              Fale{" "}
              <span className="font-serif italic font-normal text-primary">
                direto
              </span>{" "}
              com quem escreve o código.
            </h1>
            <p className="mt-6 sm:mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/80">
              Escolha o canal mais confortável ou preencha o diagnóstico
              abaixo. Sem intermediário, sem gerente de conta, sem apresentação
              comercial de 30 slides.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium mb-6 sm:mb-8">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Canais diretos
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {canaisRapidos.map(({ icon: Icon, label, valor, href, detalhe, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-border/70 bg-card/40 p-5 sm:p-6 transition-all duration-300 hover:border-primary/50 hover:bg-secondary/60 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(224,95,33,0.12),0_12px_40px_-10px_rgba(224,95,33,0.2)] transform-gpu"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-secondary/60 text-primary transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </div>
                    <div className="mt-1 text-base font-medium tracking-tight text-foreground truncate">
                      {valor}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {detalhe}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            Nascida em Santa Catarina. Atende empresas em todo o Brasil.
          </div>
        </div>
      </section>

      <DiagnosticoForm />

      <SiteFooter />
    </main>
  )
}
