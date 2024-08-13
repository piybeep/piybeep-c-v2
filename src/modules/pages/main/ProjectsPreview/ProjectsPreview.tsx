import { Project } from "../../../../utils";
import { PAGES_LINK } from "../../../../constatnts";

import s from "./ProjectsPreview.module.scss";
import { NavLink, Title } from "./components";

export function ProjectsPreview({ projects }: { projects: Project[] }) {
	if (!projects) {
		return <></>
	}

	const titles = [
		{
			text: "Сайты",
			price: `> 29 900 ₽.`,
			islink: true
		},
		{
			text: "Поддержка",
			price: `> 7 400 ₽/мес`,
		},
	];

	return (
		<div className={s.wrapper}>
			<div className={s.titles}>
				{titles.map((title) => (
					<Title key={title.text} text={title.text} price={title.price} isLink={title.islink} />
				))}
				<p className={s.text}>
					Каждый проект мы разрабатываем с нуля и полностью полагаемся на наших
					специалистов, которые придут к результату, который необходим именно вам.
					Ведь самое главное - это получить продукт, который решает ваши задачи и
					приносит прибыль.
				</p>
			</div>
			<div className={s.preview}>
				{projects.map((link) => (
					<NavLink
						key={link.id}
						id={link.id}
						title={link.title}
						href={PAGES_LINK.PORTFOLIO}
						preview_image={process.env.NEXT_PUBLIC_STRAPI_URL + link.preview_image.url}
					/>
				))}
			</div>
		</div>
	);
}
