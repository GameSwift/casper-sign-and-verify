import './src/utils/env/client.mjs'
import './src/utils/env/server.mjs'

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/icons/:path*.svg',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate'
          }
        ]
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/icons/:path*.svg',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache'
          }
        ]
      }
    ]
  }
}

export default nextConfig
