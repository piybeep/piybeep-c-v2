/** @type {import("next-sitemap").IConfig} */

module.exports = {
	siteUrl: "https://piybeep.com",
	exclude: ["/404"],
	robotsTxtOptions: {
		policies: [
			{ userAgent: "*", disallow: ["/404", "/api/*", "/*?form*"] },
			{ userAgent: "*", allow: ["/"] }
		]
	},
	generateRobotsTxt: true
};
