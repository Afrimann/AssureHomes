import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.assurehomes.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
