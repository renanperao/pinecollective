"use client"

import { useForm } from "react-hook-form"
import { useEffect, useRef, useState } from "react"
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
  "Até R$ 1k",
  "R$ 1k a R$ 5k",
  "R$ 5k a R$ 15k",
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

type StepKey = "gargalo" | "orcamento" | "sobre" | "contato" | "detalhe"

const stepOrder: StepKey[] = ["gargalo", "orcamento", "sobre", "contato", "detalhe"]

const stepTitles: Record<StepKey, string> = {
  gargalo: "Onde tá o maior gargalo hoje?",
  orcamento: "Qual o orçamento em mente?",
  sobre: "Como podemos te chamar?",
  contato: "Por onde a gente te procura?",
  detalhe: "Quer contar um pouco mais?",
}

const stepSubtitles: Record<StepKey, string> = {
  gargalo: "Escolha o que mais te descreve. Sem certeza? Marca 'Outro'.",
  orcamento: "Uma faixa aproximada. Não é compromisso.",
  sobre: "Só o essencial.",
  contato: "É só digitar. A gente confirma com você.",
  detalhe: "",
}

type PhoneStage = "idle" | "confirm-number" | "confirm-email" | "revealed-email"

export function DiagnosticoQuiz({ compact = false }: { compact?: boolean }) {
  const [stepIdx, setStepIdx] = useState(0)
  const [enviado, setEnviado] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [phoneStage, setPhoneStage] = useState<PhoneStage>("idle")
  const prevPhoneDigitsLen = useRef(0)
  const emailInputRef = useRef<HTMLInputElement | null>(null)
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
  const isAutoAdvanceStep = currentStep === "gargalo" || currentStep === "orcamento"

  const gargaloCategoria = watch("gargaloCategoria")
  const orcamento = watch("orcamento")
  const gargaloDetalheValue = watch("gargaloDetalhe")
  const hasDetalhe = !!gargaloDetalheValue?.trim()
  const telefoneValue = watch("telefone")
  const telefoneDigits = (telefoneValue ?? "").replace(/\D/g, "")

  useEffect(() => {
    const len = telefoneDigits.length
    const complete = len === 10 || len === 11
    if (complete && prevPhoneDigitsLen.current !== len) {
      setPhoneStage("confirm-number")
    } else if (!complete) {
      setPhoneStage("idle")
    }
    prevPhoneDigitsLen.current = len
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [telefoneDigits])

  useEffect(() => {
    if (phoneStage === "revealed-email") {
      emailInputRef.current?.focus()
    }
  }, [phoneStage])

  function advanceAfter(delayMs = 300) {
    setTimeout(() => {
      setDirection(1)
      setStepIdx((s) => Math.min(stepOrder.length - 1, s + 1))
    }, delayMs)
  }

  function selectSingleChoice(field: "gargaloCategoria" | "orcamento", value: string) {
    setValue(field, value, { shouldValidate: true })
    advanceAfter(280)
  }

  async function goNext() {
    let fields: (keyof FormValues)[] = []
    if (currentStep === "gargalo") fields = ["gargaloCategoria"]
    if (currentStep === "orcamento") fields = ["orcamento"]
    if (currentStep === "sobre") fields = ["nome", "empresa"]
    if (currentStep === "contato") fields = ["telefone", "email"]

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
    setPhoneStage("idle")
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

  const { ref: emailRegisterRef, ...emailRest } = register("email", {
    validate: (value) =>
      !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "E-mail inválido",
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

  const inputClass = compact ? "quiz-input-sm" : "quiz-input"

  const hideSubmitButton =
    isAutoAdvanceStep ||
    (currentStep === "contato" &&
      (phoneStage === "confirm-number" || phoneStage === "confirm-email"))

  if (enviado) {
    return (
      <div
        className={`flex flex-1 flex-col justify-center gap-3 ${
          compact ? "items-center text-center" : "items-start gap-6"
        }`}
        role="status"
        aria-live="polite"
      >
        <span
          className={`flex items-center justify-center rounded-full bg-primary/15 text-primary ${
            compact ? "h-12 w-12" : "h-12 w-12"
          }`}
          aria-hidden="true"
        >
          <Check className={compact ? "h-5 w-5" : "h-6 w-6"} strokeWidth={2} />
        </span>
        <div>
          <h3
            className={`font-semibold tracking-[-0.01em] ${
              compact ? "text-xl" : "text-2xl md:text-3xl"
            }`}
          >
            Recebido. Obrigado pela confiança.
          </h3>
          <p
            className={`text-foreground/80 max-w-md leading-relaxed ${
              compact ? "mt-2 text-sm" : "mt-3"
            }`}
          >
            Um dos sócios da Pine Collective vai te procurar{" "}
            <span className="text-foreground">rapidamente</span> pelos canais
            informados.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        goNext()
      }}
      className="flex flex-1 flex-col min-h-0"
      noValidate
    >
      <div
        className={compact ? "mb-3 shrink-0" : "mb-6 sm:mb-8"}
        role="progressbar"
        aria-valuenow={stepIdx + 1}
        aria-valuemin={1}
        aria-valuemax={stepOrder.length}
        aria-label={`Passo ${stepIdx + 1} de ${stepOrder.length}`}
      >
        <div
          className={`flex items-center justify-between text-muted-foreground tabular-nums ${
            compact ? "text-[10px] mb-1.5" : "text-xs mb-2"
          }`}
        >
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
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          />
        </div>
      </div>

      <div
        className={`flex-1 relative overflow-hidden min-h-0 ${
          compact ? "flex items-center" : ""
        }`}
      >
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={compact ? "w-full flex flex-col gap-4" : "flex flex-col gap-6"}
          >
            <div>
              <h3
                className={`font-semibold tracking-[-0.01em] leading-tight ${
                  compact
                    ? "text-lg sm:text-xl"
                    : "text-xl sm:text-2xl md:text-[1.6rem]"
                }`}
              >
                {stepTitles[currentStep]}
              </h3>
              {!compact && stepSubtitles[currentStep] && (
                <p className="mt-2 text-sm text-foreground/70">
                  {stepSubtitles[currentStep]}
                </p>
              )}
              {currentStep === "detalhe" && (
                <span
                  className={`inline-flex items-center rounded-full border border-primary bg-primary/15 font-bold text-primary ${
                    compact
                      ? "mt-3 px-3.5 py-1.5 text-xs"
                      : "mt-4 px-4 py-1.5 text-sm"
                  }`}
                >
                  100% opcional — pode pular
                </span>
              )}
            </div>

            {currentStep === "gargalo" && (
              <div>
                <div
                  role="radiogroup"
                  aria-label="Categoria do gargalo"
                  className={
                    compact
                      ? "grid grid-cols-2 gap-2"
                      : "grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
                  }
                >
                  {gargalos.map(({ value, icon: Icon }) => {
                    const active = gargaloCategoria === value
                    return (
                      <button
                        type="button"
                        role="radio"
                        aria-checked={active}
                        key={value}
                        onClick={() => selectSingleChoice("gargaloCategoria", value)}
                        className={`group flex items-center text-left transition-all duration-200 active:scale-[0.98] transform-gpu ${
                          compact
                            ? "gap-2.5 rounded-xl border px-3 py-3 text-xs leading-snug"
                            : "gap-3 rounded-xl border px-4 py-3.5 text-sm"
                        } ${
                          active
                            ? "border-primary bg-primary/10 text-foreground shadow-sm shadow-primary/20"
                            : "border-border/80 bg-secondary/30 text-foreground/85 hover:border-primary/50 hover:bg-secondary/60"
                        }`}
                      >
                        <span
                          className={`flex shrink-0 items-center justify-center rounded-lg border transition-colors ${
                            compact ? "h-7 w-7" : "h-8 w-8"
                          } ${
                            active
                              ? "border-primary/60 bg-primary/15 text-primary"
                              : "border-border/80 bg-secondary/60 text-primary/80"
                          }`}
                          aria-hidden="true"
                        >
                          <Icon
                            className={compact ? "h-3.5 w-3.5" : "h-4 w-4"}
                            strokeWidth={1.8}
                          />
                        </span>
                        <span className="flex-1">{value}</span>
                        {active && (
                          <Check
                            className={`shrink-0 text-primary ${
                              compact ? "h-3.5 w-3.5" : "h-4 w-4"
                            }`}
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
                  <p className="mt-2 text-xs text-destructive" role="alert">
                    {errors.gargaloCategoria.message}
                  </p>
                )}
              </div>
            )}

            {currentStep === "orcamento" && (
              <div>
                <div
                  role="radiogroup"
                  aria-label="Orçamento estimado"
                  className={
                    compact ? "flex flex-wrap gap-2" : "flex flex-wrap gap-2 sm:gap-3"
                  }
                >
                  {orcamentos.map((opt) => {
                    const active = orcamento === opt
                    return (
                      <button
                        type="button"
                        role="radio"
                        aria-checked={active}
                        key={opt}
                        onClick={() => selectSingleChoice("orcamento", opt)}
                        className={`rounded-full border transition-all duration-200 active:scale-[0.97] transform-gpu ${
                          compact
                            ? "px-4 min-h-[40px] text-sm"
                            : "px-4 min-h-[44px] text-sm"
                        } ${
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
                  <p className="mt-2 text-xs text-destructive" role="alert">
                    {errors.orcamento.message}
                  </p>
                )}
              </div>
            )}

            {currentStep === "sobre" && (
              <div className={compact ? "grid grid-cols-2 gap-3" : "grid sm:grid-cols-2 gap-5"}>
                <QuizField id="nome" label="Seu nome" error={errors.nome?.message} compact={compact}>
                  <input
                    id="nome"
                    type="text"
                    autoComplete="name"
                    placeholder={compact ? "Seu nome" : "Como podemos te chamar"}
                    className={inputClass}
                    aria-invalid={!!errors.nome}
                    {...register("nome", { required: "Nome é obrigatório" })}
                  />
                </QuizField>
                <QuizField id="empresa" label="Empresa" error={errors.empresa?.message} compact={compact}>
                  <input
                    id="empresa"
                    type="text"
                    autoComplete="organization"
                    placeholder={compact ? "Empresa" : "Seu negócio ou empresa"}
                    className={inputClass}
                    aria-invalid={!!errors.empresa}
                    {...register("empresa", { required: "Empresa é obrigatória" })}
                  />
                </QuizField>
              </div>
            )}

            {currentStep === "contato" && (
              <div className={compact ? "flex flex-col gap-3" : "flex flex-col gap-4"}>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="telefone"
                    className={`uppercase tracking-[0.16em] text-primary font-semibold ${
                      compact ? "text-xs" : "text-xs"
                    }`}
                  >
                    WhatsApp
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(00) 00000-0000"
                    className={`w-full rounded-xl border-2 bg-primary/5 font-semibold text-foreground placeholder:text-muted-foreground/60 placeholder:font-normal outline-none transition-colors focus:bg-primary/10 ${
                      compact
                        ? "px-4 py-3.5 text-lg"
                        : "px-4 py-4 text-lg sm:text-xl"
                    } ${
                      errors.telefone
                        ? "border-destructive"
                        : "border-primary/50 focus:border-primary"
                    }`}
                    aria-invalid={!!errors.telefone}
                    {...phoneRest}
                    onChange={(e) => {
                      e.target.value = maskPhone(e.target.value)
                      onPhoneChange(e)
                    }}
                  />
                  {errors.telefone && (
                    <span className="text-xs text-destructive" role="alert">
                      {errors.telefone.message}
                    </span>
                  )}
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  {phoneStage === "confirm-number" && (
                    <motion.div
                      key="confirm-number"
                      initial={{ opacity: 0, y: -6, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -6, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`overflow-hidden rounded-xl border border-primary/40 bg-secondary/40 ${
                        compact ? "p-3" : "p-3.5"
                      }`}
                    >
                      <p className={compact ? "text-sm" : "text-sm"}>
                        Esse número está correto?
                      </p>
                      <div className="mt-2.5 flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setPhoneStage("idle")}
                          className={`rounded-full border border-border/80 text-foreground/70 hover:text-foreground hover:border-border transition-colors ${
                            compact ? "px-3.5 min-h-[36px] text-sm" : "px-4 min-h-[38px] text-sm"
                          }`}
                        >
                          Não
                        </button>
                        <button
                          type="button"
                          onClick={() => setPhoneStage("confirm-email")}
                          className={`rounded-full bg-emerald-600 font-semibold text-white hover:bg-emerald-500 transition-colors active:scale-[0.97] transform-gpu ${
                            compact ? "px-5 min-h-[36px] text-sm" : "px-5 min-h-[38px] text-sm"
                          }`}
                        >
                          Sim
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {phoneStage === "confirm-email" && (
                    <motion.div
                      key="confirm-email"
                      initial={{ opacity: 0, y: -6, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -6, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`overflow-hidden rounded-xl border border-border/70 bg-secondary/40 ${
                        compact ? "p-3" : "p-3.5"
                      }`}
                    >
                      <p className={compact ? "text-sm" : "text-sm"}>
                        Deseja preencher e-mail?
                      </p>
                      <div className="mt-2.5 flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setPhoneStage("idle")
                            advanceAfter(120)
                          }}
                          className={`rounded-full bg-destructive font-semibold text-white hover:bg-destructive/90 transition-colors active:scale-[0.97] transform-gpu ${
                            compact ? "px-4 min-h-[36px] text-sm" : "px-4 min-h-[38px] text-sm"
                          }`}
                        >
                          Não
                        </button>
                        <button
                          type="button"
                          onClick={() => setPhoneStage("revealed-email")}
                          className={`rounded-full border border-border/80 text-foreground/80 hover:text-foreground hover:border-primary/50 transition-colors ${
                            compact ? "px-4 min-h-[36px] text-sm" : "px-4 min-h-[38px] text-sm"
                          }`}
                        >
                          Sim
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {phoneStage === "revealed-email" && (
                    <motion.div
                      key="email-field"
                      initial={{ opacity: 0, y: -6, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -6, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden flex flex-col gap-2"
                    >
                      <label
                        htmlFor="email"
                        className={`uppercase tracking-[0.14em] text-muted-foreground ${
                          compact ? "text-[10px]" : "text-[10px] sm:text-xs"
                        }`}
                      >
                        E-mail
                      </label>
                      <input
                        id="email"
                        ref={(el) => {
                          emailInputRef.current = el
                          emailRegisterRef(el)
                        }}
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="voce@empresa.com.br"
                        className={inputClass}
                        aria-invalid={!!errors.email}
                        {...emailRest}
                      />
                      {errors.email && (
                        <span className="text-xs text-destructive" role="alert">
                          {errors.email.message}
                        </span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {currentStep === "detalhe" && (
              <div>
                <label htmlFor="gargaloDetalhe" className="sr-only">
                  Detalhe do gargalo
                </label>
                <textarea
                  id="gargaloDetalhe"
                  rows={compact ? 4 : 5}
                  placeholder="Quanto mais específico, melhor. Ex: 'planilha de pedidos vira caos quando passa de 100 linhas'"
                  className={`w-full rounded-xl border border-dashed border-border/70 bg-secondary/20 leading-relaxed text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:bg-secondary/40 resize-none ${
                    compact ? "px-3.5 py-3 text-sm" : "px-4 py-3 text-base"
                  }`}
                  {...register("gargaloDetalhe")}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className={`flex items-center justify-between gap-4 border-t border-border/60 shrink-0 ${
          compact ? "mt-3 pt-3" : "mt-8 pt-6"
        }`}
      >
        <button
          type="button"
          onClick={goPrev}
          disabled={stepIdx === 0}
          className={`inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
            compact ? "px-2 min-h-[40px] text-sm" : "px-3 sm:px-4 min-h-[44px] text-sm"
          }`}
        >
          <ArrowLeft className={compact ? "h-4 w-4" : "h-4 w-4"} aria-hidden="true" />
          Voltar
        </button>

        {!hideSubmitButton && (
          <button
            type="submit"
            disabled={isSubmitting}
            className={`group inline-flex items-center justify-between rounded-full bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transform-gpu ${
              compact ? "gap-4 pl-5 pr-1.5 h-11" : "gap-4 sm:gap-6 pl-5 sm:pl-6 pr-2 h-12 sm:h-[52px]"
            }`}
          >
            <span className={`font-medium tracking-tight ${compact ? "text-sm" : "text-sm"}`}>
              {isSubmitting
                ? "Enviando..."
                : isLastStep
                ? hasDetalhe
                  ? "Enviar diagnóstico"
                  : "Pular"
                : "Continuar"}
            </span>
            <span
              className={`flex items-center justify-center rounded-full bg-background/15 transition-transform duration-200 group-hover:rotate-45 ${
                compact ? "h-8 w-8" : "h-9 w-9"
              }`}
              aria-hidden="true"
            >
              <ArrowRight className={compact ? "h-4 w-4" : "h-4 w-4"} strokeWidth={2.2} />
            </span>
          </button>
        )}
      </div>
    </form>
  )
}

function QuizField({
  id,
  label,
  error,
  compact,
  children,
}: {
  id: string
  label: string
  error?: string
  compact?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className={`uppercase tracking-[0.18em] text-primary font-medium ${
          compact ? "text-[10px]" : "text-[10px] sm:text-xs"
        }`}
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
