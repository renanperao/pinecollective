"use client"

import { useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"

const orcamentos = [
  "Até R$ 15k",
  "R$ 15k – R$ 50k",
  "R$ 50k – R$ 120k",
  "Acima de R$ 120k",
  "Ainda definindo",
]

export function DiagnosticoForm() {
  const [orcamento, setOrcamento] = useState<string>("")
  const [enviado, setEnviado] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "44a8e0c4-b5a0-476e-a492-ecdd98683d14")
    formData.append("subject", `Novo Diagnóstico: ${formData.get("empresa")}`)
    formData.append("from_name", "Pine Collective Website")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setEnviado(true)
      } else {
        alert("Ocorreu um erro ao enviar. Por favor, tente novamente.")
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua internet.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="diagnostico"
      className="relative py-28 md:py-40 border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              Diagnóstico pessoal
            </div>

            <h2 className="mt-6 text-balance text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-[-0.02em] leading-[1.05]">
              Sua operação merece um{" "}
              <span className="font-serif italic font-normal text-primary">
                cérebro digital.
              </span>
            </h2>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-md">
              Conte sobre o gargalo do seu negócio. Em até dois dias úteis,
              voltamos com um diagnóstico inicial — sem custo, sem compromisso.
            </p>

            <ul className="mt-10 space-y-4 text-sm text-muted-foreground">
              {[
                "Conversa de 45 min com um sócio da Pine",
                "Mapeamento dos seus 3 maiores gargalos",
                "Recomendação inicial e próximos passos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/70 bg-card/40 p-6 md:p-10">
              {enviado ? (
                <div className="flex flex-col items-start gap-6 py-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.01em]">
                      Recebido. Obrigado pela confiança.
                    </h3>
                    <p className="mt-3 text-muted-foreground max-w-md leading-relaxed">
                      Um dos sócios da Pine Collective vai te procurar em até{" "}
                      <span className="text-foreground">dois dias úteis</span>{" "}
                      pelos canais informados.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                  <input
                    type="hidden"
                    name="from_name"
                    value="Pine Collective Website"
                  />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field id="nome" label="Nome">
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        placeholder="Como podemos te chamar"
                        className="form-input"
                      />
                    </Field>

                    <Field id="empresa" label="Empresa">
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        required
                        placeholder="Nome do seu negócio"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field id="email" label="E-mail corporativo">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="voce@empresa.com.br"
                        className="form-input"
                      />
                    </Field>

                    <Field id="telefone" label="WhatsApp / Telefone">
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <Field
                    id="gargalo"
                    label="Qual o seu maior gargalo operacional hoje?"
                  >
                    <textarea
                      id="gargalo"
                      name="gargalo"
                      required
                      rows={4}
                      placeholder="Conte com suas palavras — quanto mais específico, melhor."
                      className="form-input resize-none"
                    />
                  </Field>

                  <Field id="orcamento" label="Orçamento estimado">
                    <div className="flex flex-wrap gap-2">
                      {orcamentos.map((opt) => {
                        const active = orcamento === opt
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setOrcamento(opt)}
                            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                              active
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border/80 bg-secondary/40 text-muted-foreground hover:text-foreground hover:border-border"
                            }`}
                          >
                            {opt}
                          </button>
                        )
                      })}
                    </div>
                    <input type="hidden" name="orcamento" value={orcamento} />
                  </Field>

                  <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 pt-4 border-t border-border/60">
                    <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                      Suas informações são tratadas com confidencialidade. Não
                      compartilhamos com terceiros.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center justify-between gap-6 rounded-full bg-primary pl-6 pr-2 py-2 text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="text-sm font-medium tracking-tight">
                        {isSubmitting ? "Enviando..." : "Enviar diagnóstico"}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          background-color: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          padding: 0.75rem 0;
          font-size: 1rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.2s ease;
        }
        :global(.form-input::placeholder) {
          color: var(--muted-foreground);
          opacity: 0.7;
        }
        :global(.form-input:focus) {
          border-bottom-color: var(--primary);
        }
      `}</style>
    </section>
  )
}

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-[0.16em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
