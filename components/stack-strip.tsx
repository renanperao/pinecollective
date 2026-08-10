const garantias = [
  { name: "Código versionado", detail: "Seu, não nosso" },
  { name: "Documentação em pt-BR", detail: "Sem jargão" },
  { name: "Suporte direto", detail: "Com o sócio" },
  { name: "Sem lock-in", detail: "Você sai quando quiser" },
  { name: "Deploy incluído", detail: "No seu domínio" },
  { name: "Treinamento da equipe", detail: "Presencial ou remoto" },
]

export function StackStrip() {
  return (
    <div
      className="border-y border-border/60 bg-secondary/20 py-4 sm:py-5"
      aria-label="O que está incluso em cada projeto"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
          <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 sm:pr-8 sm:border-r sm:border-border/60">
            Você recebe
          </span>

          <ul className="sm:pl-8 flex flex-wrap sm:flex-nowrap items-center gap-x-5 gap-y-3 sm:gap-0 sm:divide-x sm:divide-border/50 overflow-x-auto sm:overflow-hidden scrollbar-none">
            {garantias.map(({ name, detail }) => (
              <li key={name} className="sm:px-6 flex items-baseline gap-2 shrink-0">
                <span className="text-sm font-medium text-foreground/80 tracking-tight">
                  {name}
                </span>
                <span className="text-[9px] text-muted-foreground/40 uppercase tracking-widest hidden md:inline">
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
