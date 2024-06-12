import s from "./Technologies.module.scss";
import { Item } from "./components";
import { TECHNOLOGIES_LIST } from "../../constatnts";
import { Title } from "../../components";

export function Technologies() {
	return (
		<div className={s.wrapper} id={"stacks"}>
			<Title value={"Стек технологий"} size="md" />

			<div className={s.list}>
				{TECHNOLOGIES_LIST.map((current) => (
					<Item key={current.title} icon={current.icon} title={current.title} />
				))}
			</div>
		</div>
	);
}
