/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/atendimento/iguacu",
        destination: "/atendimento/biguacu",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
