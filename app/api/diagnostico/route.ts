import { NextResponse } from "next/server"

const web3formsEndpoint =
  process.env.WEB3FORMS_ENDPOINT ??
  ["https://api", "web3forms", "com/submit"].join(".")

const crmEndpoint =
  process.env.CRM_INBOUND_URL ??
  "https://crm-pine-collective.vercel.app/api/inbound"

const requiredFields = [
  "nome",
  "empresa",
  "telefone",
  "gargalo",
  "orcamento",
] as const

const optionalFields = ["email", "campanha"] as const

type RequiredField = (typeof requiredFields)[number]
type OptionalField = (typeof optionalFields)[number]
type DiagnosticoPayload = Record<RequiredField, string> &
  Partial<Record<OptionalField, string>>

async function enviarParaWeb3Forms(data: DiagnosticoPayload): Promise<boolean> {
  const accessKey =
    process.env.WEB3FORMS_KEY ?? process.env.NEXT_PUBLIC_WEB3FORMS_KEY
  if (!accessKey) return false

  const formData = new FormData()
  formData.append("access_key", accessKey)
  const rotulo = data.campanha?.trim() ? ` (${data.campanha.trim()})` : ""
  formData.append("subject", `Novo Diagnóstico${rotulo}: ${data.empresa.trim()}`)
  formData.append("from_name", "Pine Collective Website")

  requiredFields.forEach((field) => {
    formData.append(field, data[field].trim())
  })
  optionalFields.forEach((field) => {
    const value = data[field]?.trim()
    if (value) formData.append(field, value)
  })

  try {
    const response = await fetch(web3formsEndpoint, { method: "POST", body: formData })
    const result = await response.json().catch(() => null)
    return response.ok && !!result?.success
  } catch {
    return false
  }
}

/**
 * Fonte da verdade dos leads: grava direto no CRM próprio da Pine, sem
 * depender de um serviço de fora pra "captar" quem preencheu o formulário.
 * Autenticado por segredo compartilhado, ver leeds-pine-collective/app/api/inbound.
 */
async function enviarParaCrm(data: DiagnosticoPayload): Promise<boolean> {
  const secret = process.env.CRM_INBOUND_SECRET
  if (!secret) return false

  try {
    const response = await fetch(crmEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-inbound-secret": secret,
      },
      body: JSON.stringify(data),
    })
    const result = await response.json().catch(() => null)
    return response.ok && !!result?.success
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  let payload: Partial<DiagnosticoPayload>

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Dados inválidos." },
      { status: 400 },
    )
  }

  const missingField = requiredFields.find((field) => !payload[field]?.trim())
  if (missingField) {
    return NextResponse.json(
      { success: false, message: "Preencha todos os campos obrigatórios." },
      { status: 400 },
    )
  }

  const data = payload as DiagnosticoPayload

  // As duas integrações rodam em paralelo e são independentes: se uma
  // falhar (CRM fora do ar, chave do Web3Forms expirada, etc.) o lead não
  // se perde por causa da outra. Só falha pro visitante se as duas falharem.
  const [crmOk, web3formsOk] = await Promise.all([
    enviarParaCrm(data),
    enviarParaWeb3Forms(data),
  ])

  if (!crmOk && !web3formsOk) {
    return NextResponse.json(
      { success: false, message: "Não foi possível enviar agora." },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true })
}
