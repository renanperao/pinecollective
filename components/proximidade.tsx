export function Proximidade() {
  return (
    <section
      id="proximidade"
      className="relative py-28 md:py-40 border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              Proximidade
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Uma boutique não atende multidão. Atende quem busca encaixe
              perfeito.
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="text-balance font-sans text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-[-0.015em] font-medium">
              Atenção dedicada. Você não fala com um robô ou um estagiário,
              você fala{" "}
              <span className="font-serif italic font-normal text-primary">
                diretamente com quem projeta a solução.
              </span>{" "}
              Somos o braço tecnológico que o seu negócio precisava para o
              próximo nível.
            </p>

            <div className="mt-12 pt-10 border-t border-border/60">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  {
                    num: "01",
                    title: "Diagnóstico",
                    desc: "Entendemos o gargalo real antes de qualquer linha de código.",
                  },
                  {
                    num: "02",
                    title: "Arquitetura",
                    desc: "Projetamos a solução sob medida para o seu contexto específico.",
                  },
                  {
                    num: "03",
                    title: "Entrega",
                    desc: "Acompanhamos cada fase até a ferramenta estar em uso real.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex flex-col gap-3">
                    <span className="font-mono text-xs text-primary tracking-[0.1em]">
                      {step.num}
                    </span>
                    <span className="text-sm font-medium text-foreground tracking-tight">
                      {step.title}
                    </span>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      {step.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
