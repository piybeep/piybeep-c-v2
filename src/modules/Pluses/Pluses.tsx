import { PLUSES_INFO } from "../../constatnts/pluses";
import s from "./Pluses.module.scss";

export function Pluses() {
	return (
		<div className={s.wrapper}>
			{PLUSES_INFO.map((current) => (
				<h2 key={current.id} className={s.wrapper__slogan}>
					{current.text}
				</h2>
			))}
		</div>
	);
}
