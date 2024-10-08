import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MENU_ITEMS } from "../../constatnts";

import s from "./Header.module.scss";

import { ButtonHome, Contact, Logo, NavLink } from "./components";
import { ContactsType } from "../../types";
import transformPhoneNumber from "../../utils/transformPhoneNumber";

export function Header({ contacts }: { contacts: ContactsType[] }) {
	const query = useRouter();

	// Появление менюшки и её скрытие и открытие при помощи мыши, пока тест
	useEffect(() => {
		let elY = 0;
		let scrollY = 0;
		const scrollTop = () => {
			const el = document.querySelector<HTMLElement>("." + s.bar);
			if (el != null) {
				const height = el.offsetHeight;
				const pos = window.scrollX;
				const diff = scrollY - pos;

				elY = Math.min(0, Math.max(-height, elY + diff));
				el.style.position =
					pos >= height ? "sticky" : pos === 0 ? "sticky" : el.style.position;
				el.style.transform = `translateY(${pos > 50 ? elY : -2}px)`;

				scrollY = pos;
			}
		};

		window.addEventListener("scroll", scrollTop);

		const mouseCord = (mouse: { clientY: any }) => {
			const offsetY = mouse.clientY;

			const el = document.querySelector<HTMLElement>("." + s.bar);

			if (offsetY < 50 && el) {
				el.style.transform = `translateY(-2px)`;
			}
		};

		window.addEventListener("mousemove", mouseCord);
	}, []);

	return (
		<>
			<header className={classNames(s.header)} id='headerId'>
				<div className={s.bar}>
					<div className={s.logo}>
						<Logo />
					</div>
					<div className={s.menu}>
						<ButtonHome pathname={query.pathname} />
						{
							MENU_ITEMS.map(current => (
								<NavLink
									key={current.display_name}
									value={current.display_name}
									href={current.link}
									active={query.pathname === current.link} />
							))
						}
					</div>

					<div className={s.info}>
						<Contact value={transformPhoneNumber(contacts?.find(i => i.type === 'phone')?.text ?? '') ?? ''}
							prefix="tel:"
						/>
						<Contact value={contacts?.find(i => i.type === 'email')?.text ?? ''} prefix="mailto:" />
					</div>
				</div>
			</header>
		</>
	);
}
