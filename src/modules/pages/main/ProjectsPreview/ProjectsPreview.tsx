import { Project } from "../../../../utils";
import { PAGES_LINK } from "../../../../constatnts";

import s from "./ProjectsPreview.module.scss";
import { NavLink, Title } from "./components";

export function ProjectsPreview({ projects }: { projects: Project[] }) {
	const titles = [
		{
			text: "Сайты",
			price: `> 65 900 р.`,
		},
		{
			text: "Поддержка",
			price: `> 9 900 р./мес`,
		},
	];

	return (
		<div className={s.wrapper}>
			<div className={s.titles}>
				{titles.map((title) => (
					<Title key={title.text} text={title.text} price={title.price} />
				))}
			</div>
			<p className={s.text}>
				Каждый проект мы разрабатываем с нуля и полностью полагаемся на наших
				специалистов, которые придут к результату, который необходим именно вам.
				Ведь самое главное - это получить продукт, который решает ваши задачи и
				приносит прибыль.
			</p>
			<div className={s.preview}>
				{projects.map((link) => (
					<NavLink
						key={link.id}
						id={link.id}
						title={link.title}
						href={PAGES_LINK.PORTFOLIO}
						preview_image={link.preview_image}
					/>
				))}
			</div>
		</div>
	);
}
