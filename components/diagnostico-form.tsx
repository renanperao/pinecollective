"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Workflow,
  Cpu,
  Users,
  Globe,
  Sparkles,
  MoreHorizontal,
} from "lucide-react"
import { toast } from "sonner"

const gargalos = [
  { value: "Planilha caótica ou dados espalhados", icon: Workflow },
  { value: "Processos manuais e repetitivos", icon: Cpu },
  { value: "Sem controle de vendas / CRM", icon: Users },
  { value: "Site fraco ou sem conversão", icon: Globe },
  { value: "Falta automação entre sistemas", icon: Sparkles },
  { value: "Outro", icon: MoreHorizontal },
]

const orcamentos = [
  "Até R$ 15k",
  "R$ 15k a R$ 50k",
  "R$ 50k a R$ 120k",
  "Acima de R$ 120k",
  "Ainda definindo",
]

type FormValues = {
  gargaloCategoria: string
  gargaloDetalhe: string
  orcamento: string
  nome: string
  empresa: string
  email: string
  telefone: string
}

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11)
  if (d.length <= 10)
    return d.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").replace(/-$/, "")
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").replace(/-$/, "")
}

type StepKey = "gargalo" | "detalhe" | "orcamento" | "sobre" | "contato"

const stepOrder: StepKey[] = ["gargalo", "detalhe", "orcamento", "sobre", "contato"]

const stepTitles: Record<StepKey, string> = {
  gargalo: "Onde tá o maior gargalo hoje?",
  detalhe: "Conta um pouco mais.",
  orcamento: "Qual o orçamento em mente?",
  sobre: "Como podemos te chamar?",
  contato: "Por onde a gente te procura?",
}

const stepSubtitles: Record<StepKey, string> = {
  gargalo: "Escolha o que mais te descreve. Sem certeza? Marca 'Outro'.",
  detalhe: "Como isso te atrapalha hoje? Este campo é opcional.",
  orcamento: "Uma faixa aproximada. Não é compromisso.",
  sobre: "Só o essencial.",
  contato: "Prometemos usar só pra devolver o diagnóstico.",
}

export function DiagnosticoForm() {
  const [stepIdx, setStepIdx] = useState(0)
  const [enviado, setEnviado] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [direction, setDirection] = useState<1 | -1>(1)
  const reduce = useReducedMotion()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" })

  const currentStep = stepOrder[stepIdx]
  const progress = ((stepIdx + 1) / stepOrder.length) * 100
  const isLastStep = stepIdx === stepOrder.length - 1

  const gargaloCategoria = watch("gargaloCategoria")
  const orcamento = watch("orcamento")

  async function goNext() {
    let fields: (keyof FormValues)[] = []
    if (currentStep === "gargalo") fields = ["gargaloCategoria"]
    if (currentStep === "orcamento") fields = ["orcamento"]
    if (currentStep === "sobre") fields = ["nome", "empresa"]
    if (currentStep === "contato") fields = ["email", "telefone"]

    const ok = fields.length === 0 ? true : await trigger(fields)
    if (!ok) return

    if (isLastStep) {
      await handleSubmit(onSubmit)()
      return
    }
    setDirection(1)
    setStepIdx((s) => s + 1)
  }

  function goPrev() {
    setDirection(-1)
    setStepIdx((s) => Math.max(0, s - 1))
  }

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    const payload = {
      nome: data.nome,
      empresa: data.empresa,
      email: data.email,
      telefone: data.telefone,
      gargalo: `[${data.gargaloCategoria}]${
        data.gargaloDetalhe ? ` ${data.gargaloDetalhe}` : ""
      }`,
      orcamento: data.orcamento,
    }

    try {
      const response = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await response.json().catch(() => null)

      if (response.ok && result?.success) {
        setEnviado(true)
      } else {
        toast.error(
          result?.message ?? "Ocorreu um erro ao enviar. Por favor, tente novamente."
        )
      }
    } catch {
      toast.error("Erro de conexão. Verifique sua internet.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const { onChange: onPhoneChange, ...phoneRest } = register("telefone", {
    required: "WhatsApp é obrigatório",
    minLength: { value: 14, message: "Número inválido: use (00) 00000-0000" },
  })

  const stepVariants = reduce
    ? {
        enter: { opacity: 1, x: 0 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 1, x: 0 },
      }
    : {
        enter: (dir: number) => ({ opacity: 0, x: dir === 1 ? 32 : -32 }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => ({ opacity: 0, x: dir === 1 ? -32 : 32 }),
      }

  return (
    <section
      id="diagnostico"
      className="relative py-24 sm:py-32 border-t border-border/60"
      aria-labelledby="diagnostico-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary/90 font-medium">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Diagnóstico
            </div>

            <h2
              id="diagnostico-titulo"
              className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.02em] leading-[1.05]"
            >
              Comece pelo{" "}
              <span className="font-serif italic font-normal text-primary">
                gargalo
              </span>
              . Não pela ferramenta.
            </h2>

            <p className="mt-6 sm:mt-8 text-base md:text-lg leading-relaxed text-foreground/90 max-w-md">
              5 perguntas rápidas. Menos de 2 minutos. A gente devolve um plano
              concreto, mesmo se você não fechar projeto.
            </p>

            <ul className="mt-8 sm:mt-10 space-y-4 text-sm text-foreground/80">
              {[
                "Conversa direta com Renan ou Luis, sem intermediário",
                "Mapeamento dos 3 gargalos que mais custam hoje",
                "Recomendação técnica e próximos passos, mesmo sem contratar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary"
                    aria-hidden="true"
                  >
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 min-w-0">
            <div className="rounded-2xl border border-border/70 bg-card/40 p-5 sm:p-8 md:p-10 min-h-[560px] flex flex-col">
              {enviado ? (
                <div
                  className="flex flex-1 flex-col items-start gap-6 justify-center"
                  role="status"
                  aria-live="polite"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary"
                    aria-hidden="true"
                  >
                    <Check className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.01em]">
                      Recebido. Obrigado pela confiança.
                    </h3>
                    <p className="mt-3 text-foreground/80 max-w-md leading-relaxed">
                      Um dos sócios da Pine Collective vai te procurar{" "}
                      <span className="text-foreground">rapidamente</span> pelos
                      canais informados.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    goNext()
                  }}
                  className="flex flex-1 flex-col"
                  noValidate
                >
                  <div
                    className="mb-6 sm:mb-8"
                    role="progressbar"
                    aria-valuenow={stepIdx + 1}
                    aria-valuemin={1}
                    aria-valuemax={stepOrder.length}
                    aria-label={`Passo ${stepIdx + 1} de ${stepOrder.length}`}
                  >
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2 tabular-nums">
                      <span>
                        Passo {stepIdx + 1} de {stepOrder.length}
                      </span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-secondary/60 overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={false}
                        animate={{ width: `${progress}%` }}
                        transition={{
                          duration: 0.35,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 relative overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                      <motion.div
                        key={currentStep}
                        custom={direction}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          duration: 0.28,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="flex flex-col gap-6"
                      >
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-[1.6rem] font-semibold tracking-[-0.01em] leading-tight">
                            {stepTitles[currentStep]}
                          </h3>
                          <p className="mt-2 text-sm text-foreground/70">
                            {stepSubtitles[currentStep]}
                          </p>
                        </div>

                        {currentStep === "gargalo" && (
                          <div>
                            <div
                              role="radiogroup"
                              aria-label="Categoria do gargalo"
                              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
                            >
                              {gargalos.map(({ value, icon: Icon }) => {
                                const active = gargaloCategoria === value
                                return (
                                  <button
                                    type="button"
                                    role="radio"
                                    aria-checked={active}
                                    key={value}
                                    onClick={() =>
                                      setValue("gargaloCategoria", value, {
                                        shouldValidate: true,
                                      })
                                    }
                                    className={`group flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-all duration-200 active:scale-[0.98] transform-gpu ${
                                      active
                                        ? "border-primary bg-primary/10 text-foreground shadow-sm shadow-primary/20"
                                        : "border-border/80 bg-secondary/30 text-foreground/85 hover:border-primary/50 hover:bg-secondary/60"
                                    }`}
                                  >
                                    <span
                                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                                        active
                                          ? "border-primary/60 bg-primary/15 text-primary"
                                          : "border-border/80 bg-secondary/60 text-primary/80"
                                      }`}
                                      aria-hidden="true"
                                    >
                                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                                    </span>
                                    <span className="flex-1">{value}</span>
                                    {active && (
                                      <Check
                                        className="h-4 w-4 shrink-0 text-primary"
                                        strokeWidth={2.4}
                                        aria-hidden="true"
                                      />
                                    )}
                                  </button>
                                )
                              })}
                            </div>
                            <input
                              type="hidden"
                              {...register("gargaloCategoria", {
                                required: "Escolha uma categoria pra continuar",
                              })}
                            />
                            {errors.gargaloCategoria && (
                              <p
                                className="mt-3 text-xs text-destructive"
                                role="alert"
                              >
                                {errors.gargaloCategoria.message}
                              </p>
                            )}
                          </div>
                        )}

                        {currentStep === "detalhe" && (
                          <div>
                            <label htmlFor="gargaloDetalhe" className="sr-only">
                              Detalhe do gargalo
                            </label>
                            <textarea
                              id="gargaloDetalhe"
                              rows={5}
                              placeholder="Quanto mais específico, melhor. Ex: 'planilha de pedidos vira caos quando passa de 100 linhas'"
                              className="w-full rounded-xl border border-border/80 bg-secondary/30 px-4 py-3 text-base leading-relaxed text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:bg-secondary/50 resize-none"
                              {...register("gargaloDetalhe")}
                            />
                            <p className="mt-2 text-xs text-muted-foreground">
                              Pode pular. A gente pergunta melhor na conversa.
                            </p>
                          </div>
                        )}

                        {currentStep === "orcamento" && (
                          <div>
                            <div
                              role="radiogroup"
                              aria-label="Orçamento estimado"
                              className="flex flex-wrap gap-2 sm:gap-3"
                            >
                              {orcamentos.map((opt) => {
                                const active = orcamento === opt
                                return (
                                  <button
                                    type="button"
                                    role="radio"
                                    aria-checked={active}
                                    key={opt}
                                    onClick={() =>
                                      setValue("orcamento", opt, {
                                        shouldValidate: true,
                                      })
                                    }
                                    className={`rounded-full border px-4 min-h-[44px] text-sm transition-all duration-200 active:scale-[0.97] transform-gpu ${
                                      active
                                        ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                                        : "border-border/80 bg-secondary/40 text-foreground/85 hover:text-foreground hover:border-primary/50"
                                    }`}
                                  >
                                    {opt}
                                  </button>
                                )
                              })}
                            </div>
                            <input
                              type="hidden"
                              {...register("orcamento", {
                                required: "Selecione uma faixa pra continuar",
                              })}
                            />
                            {errors.orcamento && (
                              <p
                                className="mt-3 text-xs text-destructive"
                                role="alert"
                              >
                                {errors.orcamento.message}
                              </p>
                            )}
                          </div>
                        )}

                        {currentStep === "sobre" && (
                          <div className="grid sm:grid-cols-2 gap-5">
                            <QuizField
                              id="nome"
                              label="Seu nome"
                              error={errors.nome?.message}
                            >
                              <input
                                id="nome"
                                type="text"
                                autoComplete="name"
                                placeholder="Como podemos te chamar"
                                className="quiz-input"
                                aria-invalid={!!errors.nome}
                                {...register("nome", {
                                  required: "Nome é obrigatório",
                                })}
                              />
                            </QuizField>
                            <QuizField
                              id="empresa"
                              label="Empresa"
                              error={errors.empresa?.message}
                            >
                              <input
                                id="empresa"
                                type="text"
                                autoComplete="organization"
                                placeholder="Seu negócio ou empresa"
                                className="quiz-input"
                                aria-invalid={!!errors.empresa}
                                {...register("empresa", {
                                  required: "Empresa é obrigatória",
                                })}
                              />
                            </QuizField>
                          </div>
                        )}

                        {currentStep === "contato" && (
                          <div className="grid sm:grid-cols-2 gap-5">
                            <QuizField
                              id="email"
                              label="E-mail"
                              error={errors.email?.message}
                            >
                              <input
                                id="email"
                                type="email"
                                inputMode="email"
                                autoComplete="email"
                                placeholder="voce@empresa.com.br"
                                className="quiz-input"
                                aria-invalid={!!errors.email}
                                {...register("email", {
                                  required: "E-mail é obrigatório",
                                  pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "E-mail inválido",
                                  },
                                })}
                              />
                            </QuizField>
                            <QuizField
                              id="telefone"
                              label="WhatsApp"
                              error={errors.telefone?.message}
                            >
                              <input
                                id="telefone"
                                type="tel"
                                inputMode="tel"
                                autoComplete="tel"
                                placeholder="(00) 00000-0000"
                                className="quiz-input"
                                aria-invalid={!!errors.telefone}
                                {...phoneRest}
                                onChange={(e) => {
                                  e.target.value = maskPhone(e.target.value)
                                  onPhoneChange(e)
                                }}
                              />
                            </QuizField>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-border/60">
                    <button
                      type="button"
                      onClick={goPrev}
                      disabled={stepIdx === 0}
                      className="inline-flex items-center gap-2 px-3 sm:px-4 min-h-[44px] text-sm text-foreground/70 hover:text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                      Voltar
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center justify-between gap-4 sm:gap-6 rounded-full bg-primary pl-5 sm:pl-6 pr-2 h-12 sm:h-[52px] text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transform-gpu"
                    >
                      <span className="text-sm font-medium tracking-tight">
                        {isSubmitting
                          ? "Enviando..."
                          : isLastStep
                          ? "Enviar diagnóstico"
                          : "Continuar"}
                      </span>
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-background/15 transition-transform duration-200 group-hover:rotate-45"
                        aria-hidden="true"
                      >
                        <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
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

function QuizField({
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
        className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary font-medium"
      >
        {label}
      </label>
      {children}
      {error && (
        <span
          id={`${id}-error`}
          className="text-xs text-destructive mt-0.5"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  )
}
