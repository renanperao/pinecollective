import { Gauge, ShieldCheck, Zap, BarChart3, ArrowUpRight } from "lucide-react"

const diferenciais = [
  {
    icon: Gauge,
    title: "Carrega antes do cliente desistir",
    description:
      "Site que abre em menos de 2 segundos, mesmo em 4G. Cada segundo perdido é uma oportunidade fechando a aba.",
  },
  {
    icon: ShieldCheck,
    title: "Escrito, não montado",
    description:
      "Nada de template comprado. Estrutura desenhada no formato da sua operação, do zero.",
  },
  {
    icon: Zap,
    title: "Encontrado por quem procura",
    description:
      "SEO técnico limpo. Aparece pra quem já digitou o que você vende, não pra tráfego frio.",
  },
  {
    icon: BarChart3,
    title: "Converte, não decora",
    description:
      "Cada página existe pra levar a uma decisão. Não pra parecer bonita e ficar parada.",
  },
]

export function PresencaDigital() {
  return (
    <section
      id="presenca"
      className="relative py-24 sm:py-32 border-t border-border/60"
      aria-labelledby="presenca-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Sites & landing pages
            </div>

            <h2
              id="presenca-titulo"
              className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]"
            >
              Site que gera{" "}
              <span className="font-serif italic font-normal text-primary">
                autoridade
              </span>
              . Landing page que converte.
            </h2>

            <p className="mt-6 sm:mt-8 text-base md:text-lg leading-relaxed text-foreground/80 max-w-md">
              Site institucional pra ser encontrado no Google. Landing page sob
              medida pra sustentar campanha de tráfego pago. Ambos escritos pra
              transformar visita em conversa.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
              <a
                href="#diagnostico"
                className="group inline-flex items-center justify-between gap-4 sm:gap-6 rounded-full bg-primary pl-5 sm:pl-6 pr-2 h-12 sm:h-[52px] text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transform-gpu"
              >
                <span className="text-sm font-medium tracking-tight">
                  Falar sobre site ou landing
                </span>
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform duration-200 group-hover:rotate-45"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </a>
            </div>
          </div>

          <ul className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {diferenciais.map(({ icon: Icon, title, description }) => (
              <li key={title} className="group">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-primary transition-all duration-300 group-hover:border-primary/50 group-hover:scale-110 group-hover:bg-primary/10"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
