import classNames from "classnames";
import { STEPS_INFO } from "../../../../constatnts/steps";
import s from "./Steps.module.scss";
import { Header, Item } from "./components";

export function Steps() {
	return (
		<div className={s.wrapper}>
			{STEPS_INFO.map((current, index) => (
				<div className={s.info} key={current.header}>
					<Header number={`${index + 1}`} title={current.header} slogan={current.slogan} />
					<div className={s.list}>
						{current.list.map((current, index) => (
							<Item key={current.title} index={index} title={current.title} text={current.text} />
						))}
					</div>
				</div>
			))}
		</div>
	);
}
