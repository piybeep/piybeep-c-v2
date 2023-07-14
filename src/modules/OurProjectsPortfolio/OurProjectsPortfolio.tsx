import React from "react";
import { ProjectCard } from "../../components";
import { BlockLayout } from "../../layouts";
import s from "./OurProjectsPortfolio.module.scss";

export function OurProjectsPortfolio({
	projects,
}: {
	projects: Record<string, string>[];
}) {
	return (
		<BlockLayout value="Наши проекты" position="center">
			<div className={s.wrapper}>
				{projects?.map((el) => <ProjectCard key={el.id} {...el} />)}
			</div>
		</BlockLayout>
	);
}
