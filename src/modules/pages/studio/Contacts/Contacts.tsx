import { Title } from "../../../../components";
import { ContactsType } from "../../../../types";
import transformPhoneNumber from "../../../../utils/transformPhoneNumber";
import { Links, Slogan, Social } from "./components";

import s from "./Contacts.module.scss";

export function Contacts({ contacts }: { contacts: ContactsType[] }) {
	return (
		<div className={s.wrapper}>
			<Title value={"Всегда на связи"} size='md' />
			<div className={s.list}>
				<Links phone={transformPhoneNumber(contacts.find(i => i.type === 'phone')?.text!)} email={contacts.find(i => i.type === 'email')?.text!} />
				<Slogan text="Мы всегда на связи! Оставляйте заявку на сайте, звоните по телефону,
            пишите нам на почту, в телеграм, ватсап или вконтакте, и мы обсудим
            ваш проект!" />
				<Social social={contacts.filter(i => i.type === 'vk' || i.type === 'tg')} />
			</div>
		</div>
	);
}
