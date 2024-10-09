import { ReactElement } from "react";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

import s from "./ProjectPost.module.scss";
import { Project } from "../../utils";
import { RichTextEditor } from "../../components";

export function ProjectPost({ project }: { project: Project }) {
	const ACCESS_DECODING: { [key: string]: ReactElement } = {
		closed: <>Закрытый проект</>,
		beta: <>Бета-проект</>,
		not_work: <>Сайт больше не работает</>,
		work: (
			<>
				Посмотреть:{" "}
				<Link
					target="_blank"
					className={s.container__link}
					href={
						project.link?.startsWith('https')
							? project.link
							: `https://${project.link}`
					}
				>
					{project.link}
				</Link>
			</>
		),
	};
	return (
		<div className={s.container}>
			<h1 className={s.container__title}>{project.title}</h1>
			{
				project.link &&
				<p className={s.container__text}>{project.access && ACCESS_DECODING[project.access]}</p>
			}
			{project.task && (
				<div className={s.info}>
					<h2 className={s.info__title}>Задача.</h2>
					<p className={s.info__text}>{project.task}</p>
				</div>
			)}
			{project.about_company && (
				<div className={s.info}>
					<h2 className={s.info__title}>О компании.</h2>
					<p className={s.info__text}>{project.about_company}</p>
				</div>
			)}
			{project.about_service && (
				<div className={s.info}>
					<h2 className={s.info__title}>О сервисе.</h2>
					<p className={s.info__text}>{project.about_service}</p>
				</div>
			)}
			<RichTextEditor html={project.text} />
		</div>
	);
}
