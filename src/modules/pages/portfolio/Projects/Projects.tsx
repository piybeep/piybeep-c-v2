import { ProjectCard } from "../../../../components";
import { BlockLayout } from "../../../../layouts";
import { Project } from "../../../../utils";

import s from './Projects.module.scss'

export function Projects({ projects }: { projects: Project[] }) {
    return (
        <BlockLayout value="Наши проекты" position="center" size='lg' tag="h1">
            <div className={s.wrapper}>
                {
                    projects?.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </div>
        </BlockLayout>
    );
};