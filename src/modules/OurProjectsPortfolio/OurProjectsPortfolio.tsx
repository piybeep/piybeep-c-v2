import React from "react";
import {ProjectCard} from "../../components";
import {PROJECTS} from "../../constatnts";
import {BlockLayout} from "../../layouts";
import s from "./OurProjectsPortfolio.module.scss";

export function OurProjectsPortfolio() {
    return (
        <BlockLayout value="Наши проекты" position="center">
            <div className={s.wrapper}>
                {PROJECTS.map((el) => (
                    <ProjectCard
                        title={el.title}
                        key={el.id}
                        description={el.description}
                    />
                ))}
            </div>
        </BlockLayout>
    );
}
