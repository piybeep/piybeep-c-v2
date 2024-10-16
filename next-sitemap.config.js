/** @type {import("next-sitemap").IConfig} */

module.exports = {
	siteUrl: "https://piybeep.com",
	generateIndexSitemap: false,
	output: "standalone",

	exclude: ["/404"],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				disallow: ["/404", "/api/*", "/*?etext*", "/?etext*", "/*?form*", ...Array(12).fill(0).map((_, i) => `/portfolio/${i + 1}`)],
				allow: ["/"],
			},
		],
		additionalSitemaps: ['https://piybeep.com/additional-sitemap.xml']
	},
	generateRobotsTxt: true
};
