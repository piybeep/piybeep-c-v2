import Image from "next/image";
import s from "./ProjectCard.module.scss";
import {ProjectCardProps} from "./ProjectCard.types";
import classNames from "classnames";

export function ProjectCard({
                                title,
                                description,
                                ...props
                            }: ProjectCardProps) {
    return (
        <div className={classNames(props.className, s.project_card)}>
            <div className={s.image}>
                <Image
                    src={"/imgs/project-template.png"}
                    alt=""
                    width={800}
                    height={600}
                />
            </div>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
        </div>
    );
}
