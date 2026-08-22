import { NextResponse } from "next/server"

const endpoint =
  process.env.WEB3FORMS_ENDPOINT ??
  ["https://api", "web3forms", "com/submit"].join(".")

const requiredFields = [
  "nome",
  "empresa",
  "telefone",
  "gargalo",
  "orcamento",
] as const

const optionalFields = ["email"] as const

type RequiredField = (typeof requiredFields)[number]
type OptionalField = (typeof optionalFields)[number]
type DiagnosticoPayload = Record<RequiredField, string> &
  Partial<Record<OptionalField, string>>

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

  const accessKey =
    process.env.WEB3FORMS_KEY ?? process.env.NEXT_PUBLIC_WEB3FORMS_KEY

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "Formulário indisponível no momento." },
      { status: 500 },
    )
  }

  const data = payload as DiagnosticoPayload
  const formData = new FormData()
  formData.append("access_key", accessKey)
  formData.append("subject", `Novo Diagnóstico: ${data.empresa.trim()}`)
  formData.append("from_name", "Pine Collective Website")

  requiredFields.forEach((field) => {
    formData.append(field, data[field].trim())
  })

  optionalFields.forEach((field) => {
    const value = data[field]?.trim()
    if (value) formData.append(field, value)
  })

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
    })
    const result = await response.json().catch(() => null)

    if (!response.ok || !result?.success) {
      return NextResponse.json(
        { success: false, message: "Não foi possível enviar agora." },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, message: "Erro de conexão." },
      { status: 502 },
    )
  }
}
