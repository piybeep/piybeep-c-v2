import s from "./Footer.module.scss";
import { Contacts, Copyright, Navigation, Social } from "./components";

export function Footer() {
	return (
		<footer className={s.footer}>
			<div className={s.info}>
				<div className={s.info__column}>
					<Navigation />
					<Contacts />
				</div>
				<div className={s.info__column}>
					<Social />
					<Copyright />
				</div>
			</div>
		</footer>
	);
}
