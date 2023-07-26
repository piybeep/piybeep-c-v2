import Image from "next/image";
import s from "./ProjectsPreview.module.scss";
import { Project } from "../../utils";
import Link from "next/link";
import { PAGES_LINK } from "../../constatnts";

export function ProjectsPreview({ projects }: { projects: Project[] }) {
	const titles = [
		{
			text: "Сайты",
			price: <>{">"} 65 900 р.</>,
		},
		{
			text: "Поддержка",
			price: <>{">"} 9 900 р./мес</>,
		},
	];

	return (
		<div className={s.wrapper}>
			<div className={s.titles}>
				{titles.map((i) => (
					<div key={i.text} className={s.title}>
						<h2 className={s.text}>{i.text}</h2>
						<h2 className={s.price}>{i.price}</h2>
					</div>
				))}
			</div>
			<p className={s.text}>
				Каждый проект мы разрабатываем с нуля и полностью полагаемся на наших
				специалистов, которые придут к результату, который нужен именно вам.
				Ведь самое главное - это получить продукт, который решает ваши задачи и
				приносит прибыль.
			</p>
			<div className={s.preview}>
				{projects.map((i) => (
					<Link
						key={i.id}
						href={[PAGES_LINK.PORTFOLIO, i.id].join("/")}
						className={s.container}
					>
						<Image
							src={i.preview_image}
							alt={i.title}
							width={270}
							height={152}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
