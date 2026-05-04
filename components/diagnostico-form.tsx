"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { ArrowUpRight, Check } from "lucide-react"
import { toast } from "sonner"

const orcamentos = [
  "Até R$ 15k",
  "R$ 15k a R$ 50k",
  "R$ 50k a R$ 120k",
  "Acima de R$ 120k",
  "Ainda definindo",
]

type FormValues = {
  nome: string
  empresa: string
  email: string
  telefone: string
  gargalo: string
  orcamento: string
}

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11)
  if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").replace(/-$/, "")
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").replace(/-$/, "")
}

export function DiagnosticoForm() {
  const [enviado, setEnviado] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" })

  const orcamentoSelecionado = watch("orcamento")

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "")
    formData.append("subject", `Novo Diagnóstico: ${data.empresa}`)
    formData.append("from_name", "Pine Collective Website")
    Object.entries(data).forEach(([k, v]) => formData.append(k, v))

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const json = await res.json()
      if (json.success) {
        setEnviado(true)
      } else {
        toast.error("Ocorreu um erro ao enviar. Por favor, tente novamente.")
      }
    } catch {
      toast.error("Erro de conexão. Verifique sua internet.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const { onChange: onPhoneChange, ...phoneRest } = register("telefone", {
    required: "WhatsApp é obrigatório",
    minLength: { value: 14, message: "Número inválido — use (00) 00000-0000" },
  })

  return (
    <section
      id="diagnostico"
      className="relative py-28 md:py-40 border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left col */}
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
              Conte sobre o gargalo do seu negócio. Em breve voltamos com um
              diagnóstico inicial, sem custo e sem compromisso.
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

          {/* Right col — form */}
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
                      Um dos sócios da Pine Collective vai te procurar{" "}
                      <span className="text-foreground">rapidamente</span> pelos
                      canais informados.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field id="nome" label="Nome" error={errors.nome?.message}>
                      <input
                        id="nome"
                        type="text"
                        placeholder="Como podemos te chamar"
                        className="form-input"
                        {...register("nome", { required: "Nome é obrigatório" })}
                      />
                    </Field>

                    <Field id="empresa" label="Empresa" error={errors.empresa?.message}>
                      <input
                        id="empresa"
                        type="text"
                        placeholder="Seu negócio ou empresa"
                        className="form-input"
                        {...register("empresa", { required: "Empresa é obrigatória" })}
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field id="email" label="E-mail corporativo" error={errors.email?.message}>
                      <input
                        id="email"
                        type="email"
                        placeholder="voce@empresa.com.br"
                        className="form-input"
                        {...register("email", {
                          required: "E-mail é obrigatório",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "E-mail inválido",
                          },
                        })}
                      />
                    </Field>

                    <Field id="telefone" label="WhatsApp / Telefone" error={errors.telefone?.message}>
                      <input
                        id="telefone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        className="form-input"
                        {...phoneRest}
                        onChange={(e) => {
                          e.target.value = maskPhone(e.target.value)
                          onPhoneChange(e)
                        }}
                      />
                    </Field>
                  </div>

                  <Field
                    id="gargalo"
                    label="Qual o seu maior gargalo operacional hoje?"
                    error={errors.gargalo?.message}
                  >
                    <textarea
                      id="gargalo"
                      rows={4}
                      placeholder="Conte com suas palavras, quanto mais específico melhor."
                      className="form-input resize-none"
                      {...register("gargalo", { required: "Descreva seu gargalo para podermos ajudar" })}
                    />
                  </Field>

                  <Field id="orcamento" label="Orçamento estimado" error={errors.orcamento?.message}>
                    <div className="flex flex-wrap gap-2">
                      {orcamentos.map((opt) => {
                        const active = orcamentoSelecionado === opt
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setValue("orcamento", opt, { shouldValidate: true })}
                            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                              active
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border/80 bg-secondary/40 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                            }`}
                          >
                            {opt}
                          </button>
                        )
                      })}
                    </div>
                    <input
                      type="hidden"
                      {...register("orcamento", { required: "Selecione um orçamento estimado" })}
                    />
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

    </section>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary"
      >
        {label}
      </label>
      {children}
      {error && (
        <span className="text-xs text-destructive mt-0.5" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
