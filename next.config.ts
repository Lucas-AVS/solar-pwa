/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/solar-pwa',
  assetPrefix: '/solar-pwa',
};

export default nextConfig;