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
			href={[PAGES_LINK.PORTFOLIO, project.id].join("/")}
		>
			<div className={s.image}>
				<Image
					src={project.preview_image}
					alt={project.title}
					width={520}
					height={390}
				/>
			</div>
			<h3 className={s.title}>{project.title}</h3>
			<p className={s.description}>{project.subtitle}</p>
		</Link>
	);
}
