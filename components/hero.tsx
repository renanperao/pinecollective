import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

function DashboardMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-3xl blur-2xl"
        style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(224,95,33,0.08), transparent 70%)" }}
      />
      <div className="relative rounded-2xl border border-border/70 bg-card overflow-hidden shadow-2xl shadow-black/40">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border/60 bg-secondary/60">
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-border/80" />
            <div className="h-2 w-2 rounded-full bg-border/80" />
            <div className="h-2 w-2 rounded-full bg-border/80" />
          </div>
          <div className="flex-1 h-4 rounded bg-background/50 flex items-center px-2">
            <span className="text-[9px] text-muted-foreground/40 font-mono">app.suaempresa.com.br/dashboard</span>
          </div>
        </div>

        {/* Dashboard */}
        <div className="flex bg-[#0d1117]">
          {/* Sidebar */}
          <div className="w-28 shrink-0 border-r border-border/40 p-2 flex flex-col gap-0.5">
            <div className="px-2 py-1.5 mb-2">
              <div className="h-2 w-16 bg-primary/50 rounded" />
            </div>
            {[
              { label: "Dashboard", active: true },
              { label: "Pedidos", active: false },
              { label: "Clientes", active: false },
              { label: "Relatórios", active: false },
              { label: "Config.", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`px-2 py-1.5 rounded-md text-[9px] ${
                  item.active
                    ? "bg-primary/15 text-primary font-medium"
                    : "text-muted-foreground/60"
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="flex-1 p-3 flex flex-col gap-2.5 min-w-0">
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Receita mensal", value: "R$ 48.2k", change: "+12%", up: true },
                { label: "Pedidos", value: "1.284", change: "+8%", up: true },
                { label: "Conversão", value: "3.4%", change: "+0.6%", up: true },
              ].map((m) => (
                <div key={m.label} className="rounded-lg border border-border/50 bg-secondary/20 p-2">
                  <div className="text-[8px] text-muted-foreground/70 leading-none">{m.label}</div>
                  <div className="text-[11px] font-semibold text-foreground mt-1 leading-none">{m.value}</div>
                  <div className="text-[8px] text-primary mt-1 leading-none">{m.change}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-lg border border-border/50 bg-secondary/20 p-2.5">
              <div className="text-[8px] text-muted-foreground/70 mb-2">Faturamento — últimos 12 meses</div>
              <div className="flex items-end gap-0.5 h-14">
                {[38, 52, 44, 61, 48, 72, 58, 80, 65, 88, 74, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i === 11 ? "var(--primary)" : `rgba(224,95,33,${0.15 + i * 0.015})`,
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["Jan", "Abr", "Jul", "Out", "Dez"].map((m) => (
                  <span key={m} className="text-[7px] text-muted-foreground/40">{m}</span>
                ))}
              </div>
            </div>

            {/* Recent orders */}
            <div className="rounded-lg border border-border/50 bg-secondary/20 p-2.5">
              <div className="text-[8px] text-muted-foreground/70 mb-1.5">Pedidos recentes</div>
              {[
                { id: "#1284", client: "Farmácia Central", status: "Entregue", val: "R$ 420" },
                { id: "#1283", client: "Óptica Visão", status: "Em rota", val: "R$ 890" },
                { id: "#1282", client: "Clínica Saúde+", status: "Separação", val: "R$ 215" },
              ].map((row, i) => (
                <div
                  key={row.id}
                  className={`flex items-center justify-between py-1 ${i > 0 ? "border-t border-border/30" : ""}`}
                >
                  <span className="font-mono text-[8px] text-muted-foreground/60 w-10">{row.id}</span>
                  <span className="text-[8px] text-muted-foreground/80 flex-1 px-1 truncate">{row.client}</span>
                  <span className={`text-[7px] px-1.5 py-0.5 rounded-full mr-1 ${
                    row.status === "Entregue"
                      ? "bg-primary/15 text-primary"
                      : "bg-border/40 text-muted-foreground/60"
                  }`}>
                    {row.status}
                  </span>
                  <span className="text-[8px] text-foreground/80 w-10 text-right">{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44 pb-24 md:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-[520px] max-w-5xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(224,95,33,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Text col */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              Consultoria boutique de tecnologia
            </div>

            <h1 className="mt-8 text-balance font-sans text-[2.5rem] leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-medium">
              Tecnologia{" "}
              <span className="font-serif italic font-normal text-primary">
                sob medida
              </span>{" "}
              para quem já fatura, mas cansou de processos lentos e manuais.
            </h1>

            <p className="mt-8 max-w-lg text-pretty text-base md:text-lg leading-relaxed text-muted-foreground">
              Na Pine Collective, não entregamos apenas sistemas. Nós entramos na
              sua operação, ouvimos seus problemas e construímos a ferramenta exata
              para sua empresa escalar com inteligência.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="#diagnostico"
                className="group inline-flex items-center justify-between gap-6 rounded-full bg-primary pl-6 pr-2 py-2 text-primary-foreground transition-all hover:bg-primary/90"
              >
                <span className="text-base font-medium tracking-tight">
                  Agendar diagnóstico pessoal
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background/15 transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </Link>

              <Link
                href="#solucoes"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                Ver como resolvemos
                <span aria-hidden className="text-primary">→</span>
              </Link>
            </div>
          </div>

          {/* Mockup col */}
          <div className="lg:col-span-6 hidden lg:block">
            <DashboardMockup />
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-10 border-t border-border/60 pt-10">
          {[
            { k: "Atendimento", v: "1:1, sem intermediários" },
            { k: "Especialistas", v: "Sêniores sob demanda" },
            { k: "Foco", v: "PMEs em crescimento" },
            { k: "Entrega", v: "Customizada por nicho" },
          ].map((item) => (
            <div key={item.k} className="flex flex-col gap-1.5">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground/80">
                {item.k}
              </dt>
              <dd className="text-sm md:text-base text-foreground">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
