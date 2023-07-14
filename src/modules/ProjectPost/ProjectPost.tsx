import { ReactElement } from "react";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

import s from "./ProjectPost.module.scss";

import { ProjectPostProps } from "./ProjectPost.d";

export function ProjectPost({ project }: ProjectPostProps) {
	const ACCESS_DECODING: { [key: string]: ReactElement } = {
		closed: <>Закрытый проект</>,
		beta: <>Бета-проект</>,
		not_work: <>Сайт больше не работает</>,
		work: (
			<>
				Посмотреть:{" "}
				<Link
					target="_blank"
					href={
						project.link?.startsWith("http")
							? project.link
							: `http://${project.link}`
					}
				>
					{project.link}
				</Link>
			</>
		),
	};
	return (
		<div className={s.container}>
			<h1>{project.title}</h1>
			<p>{project.access && ACCESS_DECODING[project.access]}</p>
			{project.task && (
				<div className={s.info}>
					<h5>Задача.</h5>
					<p>{project.task}</p>
				</div>
			)}
			{project.about_company && (
				<div className={s.info}>
					<h5>О компании.</h5>
					<p>{project.about_company}</p>
				</div>
			)}
			{project.about_service && (
				<div className={s.info}>
					<h5>О сервисе.</h5>
					<p>{project.about_service}</p>
				</div>
			)}
			<div className={s.text}>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw]}
					// TODO: make optimization imgs
					// components={{
					// 	img: ({ node, ...props }) => {
					// 		return (
					// 			<Image
					// 				alt={props.alt ?? ""}
					// 				src={props.src ?? ""}
					// 				quality={100}
					// 				width={1000}
					// 				height={600}
					// 				{...props}
					// 			/>
					// 		);
					// 	},
					// }}
				>
					{project.text}
				</ReactMarkdown>
			</div>
		</div>
	);
}
