/** @type {import('next').NextConfig} */

const nextConfig = {
	// reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ["piybeep.com", "piybeep.ru"],
	},
	poweredByHeader: false,
	productionBrowserSourceMaps: true,
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{
						key: "Strict-Transport-Security",
						value: "max-age=31536000; includeSubDomains",
					},
					{ key: "X-Frame-Options", value: "deny" },
					{ key: "X-XSS-Protection", value: "1; mode=block" },
					{ key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
					{ key: "Referrer-Policy", value: "no-referrer" },
					{ key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
				],
			},
		];
	},
};

module.exports = nextConfig;
