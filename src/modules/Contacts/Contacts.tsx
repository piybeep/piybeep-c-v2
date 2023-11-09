import Image from "next/image";
import Link from "next/link";

import { Title } from "../../components";

import { CONTACTS_DATA, SOCIAL_LINKS } from "../../constatnts";

import s from "./Contacts.module.scss";

export function Contacts() {
	return (
		<div className={s.wrapper}>
			<Title value={"Всегда на связи"} />
			<div className={s.list}>
				<div className={s.contact}>
					<Link
						className={s.contact__link}
						href={`tel:${CONTACTS_DATA.get("phone")}`}
					>
						{CONTACTS_DATA.get("phone")}
					</Link>
					<Link
						className={s.contact__link}
						href={`tel:${CONTACTS_DATA.get("sec-phone")}`}
					>
						{CONTACTS_DATA.get("sec-phone")}
					</Link>
					<Link
						className={s.contact__link}
						href={`mailto:${CONTACTS_DATA.get("email")}`}
					>
						{CONTACTS_DATA.get("email")}
					</Link>
				</div>
				<span className={s.slogan}>
					Мы всегда на связи! Оставляйте заявку на сайте, звоните по телефону,
					пишите нам на почту, в телеграм, ватсап или вконтакте, и мы обсудим
					ваш проект!
				</span>
				<div className={s.social}>
					{SOCIAL_LINKS.map((current) => (
						<Link
							key={current.display_name}
							href={current.link}
							className={s.social__link}
							target={'_blank'}
						>
							<Image
								className={s.social__img}
								src={current.icon}
								alt={"Картинка"}
							/>
							{current.display_name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
