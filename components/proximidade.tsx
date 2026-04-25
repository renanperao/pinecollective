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
              Atenção dedicada. Você não fala com um robô ou um estagiário —
              você fala{" "}
              <span className="font-serif italic font-normal text-primary">
                diretamente com quem projeta a solução.
              </span>{" "}
              Somos o braço tecnológico que o seu negócio precisava para o
              próximo nível.
            </p>

            <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <span className="h-9 w-9 rounded-full border border-border bg-secondary flex items-center justify-center text-xs font-medium text-foreground">
                  PC
                </span>
                <span className="h-9 w-9 rounded-full border border-border bg-secondary flex items-center justify-center text-xs font-medium text-foreground">
                  RM
                </span>
                <span className="h-9 w-9 rounded-full border border-border bg-secondary flex items-center justify-center text-xs font-medium text-foreground">
                  AC
                </span>
              </div>
              <span>Sócios e arquitetos no projeto, do briefing à entrega.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
