import { useInView } from "react-intersection-observer";
import { useApp } from "../../store";
import { ContactsType } from "../../types";
import s from "./Footer.module.scss";
import { Contacts, Copyright, Navigation, Social } from "./components";

export function Footer({ contacts }: { contacts: ContactsType[] }) {

	const toggleIsFooterInView = useApp(
		(state) => state.toggleIsFooterInView,
	);
	const { ref } = useInView({
		onChange: (inView) => {
			toggleIsFooterInView(inView);
		},
	});

	return (
		<footer className={s.footer} ref={ref}>
			<div className={s.info}>
				<div className={s.info__column}>
					<Navigation />
					<Contacts
						phone={contacts.find(i => i.type === 'phone')?.text!}
						email={contacts.find(i => i.type === 'email')?.text!} />
				</div>
				<div className={s.info__column}>
					<Social social={contacts.filter(i => i.type === 'tg' || i.type === 'vk' || i.type === 'wa')} />
					<Copyright />
				</div>
			</div>
		</footer>
	);
}
