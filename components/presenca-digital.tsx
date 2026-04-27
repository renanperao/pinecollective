import { Gauge, ShieldCheck, Zap, BarChart3, ArrowUpRight } from "lucide-react"

const diferenciais = [
  {
    icon: Gauge,
    title: "Engenharia de Performance Brutal",
    description:
      "Desenvolvemos em Next.js e Tailwind para garantir carregamento instantâneo. Em um mercado de segundos, a velocidade é o seu maior diferencial competitivo.",
  },
  {
    icon: ShieldCheck,
    title: "Infraestrutura de Autoridade",
    description:
      "Sua empresa não é genérica, seu site também não deve ser. Criamos interfaces sob medida que transmitem a solidez e a exclusividade que seu faturamento exige.",
  },
  {
    icon: Zap,
    title: "SEO e Arquitetura de Elite",
    description:
      "Código limpo focado em conversão. Garantimos que sua empresa seja encontrada por quem importa, ocupando o topo dos resultados com autoridade técnica.",
  },
  {
    icon: BarChart3,
    title: "Foco Total em Business",
    description:
      "Um site amador é um ralo de dinheiro. Nossa engenharia foca em transformar visitantes em oportunidades reais, eliminando a invisibilidade digital.",
  },
]

export function PresencaDigital() {
  return (
    <section
      id="presenca"
      className="relative py-28 md:py-40 border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              Presença Digital de Elite
            </div>
            
            <h2 className="mt-6 text-balance text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
              Sua autoridade exige uma{" "}
              <span className="font-serif italic font-normal text-primary">
                infraestrutura à altura.
              </span>
            </h2>
            
            <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-md">
              Não criamos sites. Engenheiramos interfaces de alta performance que servem como a porta de entrada para a digitalização total do seu negócio.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#diagnostico"
                className="group inline-flex items-center justify-between gap-6 rounded-full bg-primary pl-6 pr-2 py-2 text-primary-foreground transition-all hover:bg-primary/90"
              >
                <span className="text-sm font-medium tracking-tight">
                  Solicitar Diagnóstico de Presença
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {diferenciais.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-primary transition-colors group-hover:border-primary/50">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
