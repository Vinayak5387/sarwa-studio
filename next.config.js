/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows you to build despite having ESLint errors
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig