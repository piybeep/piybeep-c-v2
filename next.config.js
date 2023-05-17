/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ["piybeep.com"],
	},
};

module.exports = nextConfig;

