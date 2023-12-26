import { PERSON_LIST } from "../../../../constatnts/person";

import { Title } from "../../../../components";
import { Person } from "./components";

import s from "./Team.module.scss";

export function Team() {
	return (
		<div className={s.wrapper}>
			<Title value={"Команда"} />
			<div className={s.wrapper__list}>
				{PERSON_LIST.map((current) => (
					<Person
						key={current.id}
						length={PERSON_LIST.length}
						id={current.id}
						windowSize={15}
						title={current.title}
						text={current.text}
						img={current.img} />
				))}
			</div>
		</div>
	);
}
