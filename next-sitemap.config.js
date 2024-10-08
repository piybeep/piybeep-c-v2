/** @type {import("next-sitemap").IConfig} */

module.exports = {
	siteUrl: "https://testbeep.com",
	exclude: ["/404"],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				//disallow: ["/404", "/api/*", "/*?etext*", "/?etext*", "/*?form*", ...Array(12).fill(0).map((_, i) => `/portfolio/${i + 1}`)],
				disallow: ["*"],
				//allow: ["/"],
			},
		]
	},
	generateRobotsTxt: true
};
