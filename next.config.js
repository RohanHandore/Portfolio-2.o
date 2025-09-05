const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'export',
	trailingSlash: true,
	distDir: 'dist',
	images: {
		unoptimized: true,
	},
	experimental: {
		scrollRestoration: true,
	},
	// Optimize for faster builds
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	// Reduce bundle size
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
			};
		}
		return config;
	},
};

module.exports = withPWA(nextConfig);