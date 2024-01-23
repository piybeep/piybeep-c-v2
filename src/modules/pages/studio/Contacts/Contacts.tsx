import { Title } from "../../../../components";
import { Links, Slogan, Social } from "./components";

import s from "./Contacts.module.scss";

export function Contacts() {
	return (
		<div className={s.wrapper}>
			<Title value={"Всегда на связи"} size='md' />
			<div className={s.list}>
				<Links />
				<Slogan text="Мы всегда на связи! Оставляйте заявку на сайте, звоните по телефону,
            пишите нам на почту, в телеграм, ватсап или вконтакте, и мы обсудим
            ваш проект!" />
				<Social />
			</div>
		</div>
	);
}
