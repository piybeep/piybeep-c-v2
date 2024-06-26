import { BUSINESS_DATA } from "../../../../constatnts/business";

import s from "./Automation.module.scss";
import { Item } from "./components";
import { Title } from "../../../../components";

export function Automation() {
	return (
		<div className={s.wrapper}>
			<Title value="Автоматизация бизнес-процессов" position='center' withDot={false} />
			<div className={s.list}>
				{BUSINESS_DATA.map((current, index) => (
					<Item
						key={current.id}
						index={index}
						title={current.title}
						img={current.img}
						alt={current.alt}
					/>
				))}
			</div>
		</div>
	);
}
