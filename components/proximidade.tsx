export function Proximidade() {
  return (
    <section
      id="proximidade"
      className="relative py-24 sm:py-32 border-t border-border/60"
      aria-labelledby="proximidade-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Proximidade
          </div>
          <p className="mt-4 text-sm text-foreground/70 leading-relaxed max-w-sm">
            Uma boutique não atende multidão. Atende quem busca encaixe
            perfeito.
          </p>

          <p
            id="proximidade-titulo"
            className="mt-10 sm:mt-12 text-balance font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-[-0.015em] font-semibold"
          >
            Você fala com{" "}
            <span className="font-serif italic font-normal text-primary">
              quem escreve o código.
            </span>{" "}
            O sistema que roda na sua empresa sai da cabeça de quem te
            atendeu, direto pra sua operação.
          </p>
        </div>

        <div className="mt-14 sm:mt-16 pt-10 border-t border-border/60">
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                num: "01",
                title: "Diagnóstico",
                desc: "Entendemos o gargalo antes de sugerir ferramenta.",
              },
              {
                num: "02",
                title: "Arquitetura",
                desc: "Projetamos a solução no seu contexto, não num template.",
              },
              {
                num: "03",
                title: "Entrega",
                desc: "Em ondas curtas, até estar rodando em produção.",
              },
            ].map((step) => (
              <li key={step.num} className="flex flex-col gap-3">
                <span className="font-mono text-xs text-primary tracking-[0.1em] tabular-nums">
                  {step.num}
                </span>
                <span className="text-base font-medium text-foreground tracking-tight">
                  {step.title}
                </span>
                <span className="text-sm text-foreground/70 leading-relaxed">
                  {step.desc}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
