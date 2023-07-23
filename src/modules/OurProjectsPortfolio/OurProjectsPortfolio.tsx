import React from "react";
import { ProjectCard } from "../../components";
import { BlockLayout } from "../../layouts";
import s from "./OurProjectsPortfolio.module.scss";
import { Project } from "../../utils";

export function OurProjectsPortfolio({
	projects,
	count,
}: {
	projects: Project[];
	count: number;
}) {
	return (
		<BlockLayout value="Наши проекты" position="center">
			<div className={s.wrapper}>
				{projects?.map((el) => <ProjectCard key={el.id} project={el} />)}
			</div>
		</BlockLayout>
	);
}
