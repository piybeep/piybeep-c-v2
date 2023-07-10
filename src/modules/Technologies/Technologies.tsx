import Image from "next/image";

import { TECHNOLOGIES_LIST } from "../../constatnts";
import { Title } from "../../components";

import s from "./Technologies.module.scss";

export function Technologies() {
	return (
		<div className={s.wrapper} id={"stacks"}>
			<Title value={"Стек технологий"} />

			<div className={s.list}>
				{TECHNOLOGIES_LIST.map((current) => (
					<div key={current.title} className={s.list__item}>
						<Image
							className={s.list__img}
							src={current.icon}
							alt={"Картинка"}
						/>
						<h2 className={s.list__title}>{current.title}</h2>
					</div>
				))}
			</div>
		</div>
	);
}
