/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/lehre/unterricht/',
        destination: '/unterricht/aktuelles/',
        permanent: true,
      }
    ]
  }
}
