/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/static/:path*',
				destination: 'http://localhost:8000/static/:path*'
			}
		];
	},
	images: {
		formats: ['image/avif', 'image/webp']
	},
	reactStrictMode: true,
	optimizeFonts: true
};

module.exports = nextConfig;
