/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/atendimento/iguacu",
        destination: "/atendimento/biguacu",
        permanent: true,
      },
    ]
  },
  // Prévias de cliente vivem como export estático em public/previa/<cliente>/.
  // Estas duas regras valem para qualquer cliente, sem precisar editar nada
  // quando entrar ou sair um projeto.
  async rewrites() {
    return [
      { source: "/previa/:cliente", destination: "/previa/:cliente/index.html" },
      {
        source: "/previa/:cliente/:page",
        destination: "/previa/:cliente/:page.html",
      },
    ]
  },
}

export default nextConfig
