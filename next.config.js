/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
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
	// Disable server-side features that don't work with static export
	experimental: {
		esmExternals: false,
	},
	// Ensure proper asset prefix for GitHub Pages
	assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio-2.o' : '',
	basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-2.o' : '',
};

module.exports = nextConfig;