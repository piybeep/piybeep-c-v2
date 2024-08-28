/** @type {import("next-sitemap").IConfig} */

module.exports = {
	siteUrl: "https://piybeep.com",
	exclude: ["/404"],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				disallow: ["/404", "/api/*", "/*?etext*", "/*?form*", ...Array(12).fill(0).map((_, i) => `/portfolio/${i+1}`)],
				allow: ["/"],
				'Clean-param': 'etext',
			},
		]
	},
	generateRobotsTxt: true
};
