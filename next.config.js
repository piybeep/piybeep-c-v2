/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ["piybeep.com", "piybeep.ru"],
	},
};

module.exports = nextConfig;
