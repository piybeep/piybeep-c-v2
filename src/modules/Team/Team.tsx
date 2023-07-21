import { useEffect, useState } from "react";
import Image from "next/image";

import { Title } from "../../components";

import { PERSON_LIST } from "../../constatnts/person";

import s from "./Team.module.scss";

const PersonInfo = ({ current }: { current: any }) => {
	const [windowSize, setWindowSize] = useState(15);

	return (
		<div
			className={s.person}
			style={{
				zIndex: PERSON_LIST.length - current.id,
				left: windowSize * current.id + "%",
			}}
		>
			<Image
				className={s.person__img}
				src={current.img}
				alt={"Картинка"}
				quality={100}
			/>
			<div className={s.person__info}>
				<h2 className={s.person__title}>{current.title}</h2>
				<h3 className={s.person__text}>{current.text}</h3>
			</div>
		</div>
	);
};

export function Team() {
	return (
		<div className={s.wrapper}>
			<Title value={"Команда"} />
			<div className={s.wrapper__list}>
				{PERSON_LIST.map((current) => (
					<PersonInfo key={current.id} current={current} />
				))}
			</div>
		</div>
	);
}
