import Image from "next/image";

import { TECHNOLOGIES_LIST } from "../../../../constatnts";
import { Title } from "../../../../components";

import s from "./Technologies.module.scss";
import { Item } from "./components";

export function Technologies() {
	return (
		<div className={s.wrapper} id={"stacks"}>
			<Title value={"Стек технологий"} />

			<div className={s.list}>
				{TECHNOLOGIES_LIST.map((current) => (
					<Item key={current.title} icon={current.icon} title={current.title} />
				))}
			</div>
		</div>
	);
}
