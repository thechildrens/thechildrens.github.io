/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? './' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
