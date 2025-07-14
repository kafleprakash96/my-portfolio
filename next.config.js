/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	
	// ✅ ADD: Help with SSR issues
	images: {
		unoptimized: true
	},
	
	// ✅ ADD: Transpile problematic packages
	transpilePackages: ['react-type-animation', 'lottie-react', 'react-awesome-reveal'],
	
	// ✅ ADD: Handle ESM modules better
	experimental: {
		esmExternals: false
	},

	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
			type: "asset/resource",
			generator: {
				filename: "static/chunks/[path][name].[hash][ext]",
			},
		});

		return config;
	},

	staticPageGenerationTimeout: 6000
};

module.exports = nextConfig;