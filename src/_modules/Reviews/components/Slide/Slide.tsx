import { SlideProps } from "./Slide.types";

import s from './Slide.module.scss'
import Link from "next/link";

export function Slide({ text, href, project, author }: SlideProps) {
    return (
        <>
            <div className={s.text}>{text}</div>
            <div className={s.info}>
                {author}
                {project && " - "}
                {project && (
                    <Link className={s.info__link} href={[href, project?.id].join("/")}>
                        {project?.subtitle}
                    </Link>
                )}
            </div>
        </ >
    );
};