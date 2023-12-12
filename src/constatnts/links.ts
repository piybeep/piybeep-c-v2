import vk from "../../public/imgs/contacts/VK.png";
import whatsApp from "../../public/imgs/contacts/WhatsApp.png";
import telegram from "../../public/imgs/contacts/Telegram.png";

export const PRIVACY_LINK = "/privacy_policy.pdf";

export const PAGES_LINK = {
	MAIN: "/",
	BUSINESS: "/business",
	SERVICES: "/services",
	STUDIO: "/studio",
	PORTFOLIO: "/portfolio",
	BLOG: "/blog",
};

export const MENU_ITEMS = [
	// { display_name: "Главная", link: PAGES_LINK.MAIN },
	// { display_name: "Для бизнеса", link: PAGES_LINK.BUSINESS },
	{ display_name: "Услуги", link: PAGES_LINK.SERVICES },
	{ display_name: "Студия", link: PAGES_LINK.STUDIO },
	{ display_name: "Портфолио", link: PAGES_LINK.PORTFOLIO },
	// { display_name: "Блог", link: PAGES_LINK.BLOG },
	// { display_name: "Войти", link: "/lk/sign " },
];

export const SOCIAL_LINKS = [
	{ display_name: "Вконтакте", link: "https://vk.com/piybeep", icon: vk },
	// {
	// 	display_name: "WhatsApp",
	// 	link: "https://wa.me/79265762877",
	// 	icon: whatsApp,
	// },
	{ display_name: "Телеграм", link: "https://t.me/piybeep", icon: telegram },
];
