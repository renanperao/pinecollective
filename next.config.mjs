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
}

export default nextConfig
