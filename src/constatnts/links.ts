export const PRIVACY_LINK = "https://piybeep.com";

import vk from "../../public/imgs/contacts/VK.png";
import whatsApp from "../../public/imgs/contacts/WhatsApp.png";
import telegram from "../../public/imgs/contacts/Telegram.png";

export const MENU_ITEMS = [
	{ display_name: "Главная", link: "/" },
	{ display_name: "Для бизнеса", link: "/biz" },
	{ display_name: "Услуги", link: "/services" },
	{ display_name: "Студия", link: "/studio" },
	{ display_name: "Портфолио", link: "/portfolio" },
	// { display_name: "Блог", link: "/blog" },
	// { display_name: "Войти", link: "/lk/sign " },
];

export const SOCIAL_LINKS = [
	{ display_name: "Вконтакте", link: "https://vk.com/piybeep", icon: vk },
	{
		display_name: "WhatsApp",
		link: "https://wa.me/79265762877",
		icon: whatsApp,
	},
	{ display_name: "Телеграм", link: "https://t.me/piybeep", icon: telegram },
];
