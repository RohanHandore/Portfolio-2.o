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
};

module.exports = nextConfig;