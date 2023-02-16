/** @type {import('next').NextConfig} */
const withSass = require('@zeit/next-sass');

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
};

module.exports = withSass()
module.exports = nextConfig;
