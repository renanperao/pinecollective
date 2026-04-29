const stack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI" },
  { name: "TypeScript", category: "Linguagem" },
  { name: "Tailwind CSS", category: "Estilo" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Banco de dados" },
  { name: "Vercel", category: "Deploy" },
  { name: "Figma", category: "Design" },
]

export function StackStrip() {
  return (
    <div className="border-y border-border/60 bg-secondary/20 py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-0">
          <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 sm:pr-8 sm:border-r sm:border-border/60">
            Construído com
          </span>

          <div className="sm:pl-8 flex flex-wrap sm:flex-nowrap items-center gap-x-6 gap-y-3 sm:gap-0 sm:divide-x sm:divide-border/50 overflow-hidden">
            {stack.map(({ name, category }) => (
              <div key={name} className="sm:px-6 flex items-baseline gap-2 shrink-0">
                <span className="text-sm font-medium text-foreground/70 tracking-tight">
                  {name}
                </span>
                <span className="text-[9px] text-muted-foreground/40 uppercase tracking-widest hidden md:inline">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
