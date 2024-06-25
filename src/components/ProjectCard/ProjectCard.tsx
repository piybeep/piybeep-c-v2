import Image from "next/image";
import s from "./ProjectCard.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { Project } from "../../utils";
import { PAGES_LINK } from "../../constatnts";

export function ProjectCard({ project }: { project: Project }) {
	return (
		<Link
			className={classNames(s.project_card)}
			href={[PAGES_LINK.PORTFOLIO, project.slug].join("/")}
		>
			<div className={s.image}>
				<Image
					src={process.env.NEXT_PUBLIC_STRAPI_URL + project.preview_image.url}
					alt={project.title}
					width={520}
					height={390}
					quality={85}
				/>
			</div>
			<h2 className={s.title}>{project.subtitle}</h2>
			<p className={s.description}>{project.title}</p>
		</Link>
	);
}
