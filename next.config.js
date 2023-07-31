/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  optimizeFonts: true,
};

module.exports = nextConfig;
