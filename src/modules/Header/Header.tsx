import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { HeaderProps } from "./Header.types";
import { CONTACTS_DATA, MENU_ITEMS } from "../../constatnts";

import s from "./Header.module.scss";

import logo from "../../../public/svg/logo.svg";
import Image from "next/image";
import { PreviewHeader } from "./PreviewHeader";

export function Header({ ...props }: HeaderProps) {
	const query = useRouter();

	// Появление менюшки и её скрытие и открытие при помощи мыши, пока тест
	useEffect(() => {
		let elY = 0;
		let scrollY = 0;
		const scrollTop = () => {
			const el = document.querySelector<HTMLElement>("." + s.bar);
			if (el != null) {
				const height = el.offsetHeight;
				const pos = window.pageYOffset;
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

	const links = MENU_ITEMS.map((current) => {
		return (
			<Link
				className={classNames(s.menu__link, {
					[s.menu__link_active]: query.pathname == current.link,
				})}
				href={current.link}
				key={current.display_name}
			>
				{current.display_name}
			</Link>
		);
	});

	return (
		<>
			<PreviewHeader />
			<header className={classNames(s.header)}>
				<div className={s.bar}>
					<Link href="/" className={s.logo}>
						<Image className={s.logo__svg} src={logo} alt="Логотип" />
						<p className={s.logo__text}>piybeep.</p>
					</Link>

					<div className={s.menu}>{links}</div>

					<div className={s.info}>
						<div className={s.info__column}>
							<Link
								className={s.info__link}
								href={`tel:${CONTACTS_DATA.get("phone")}`}
							>
								{CONTACTS_DATA.get("phone")}
							</Link>
							<button className={s.info__button}>Заказать звонок</button>
						</div>
						<Link
							className={s.info__link}
							href={`mailto:${CONTACTS_DATA.get("email")}`}
						>
							{CONTACTS_DATA.get("email")}
						</Link>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;

