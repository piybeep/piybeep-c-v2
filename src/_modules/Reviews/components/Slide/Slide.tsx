import { SlideProps } from "./Slide.types";

import s from './Slide.module.scss'
import Link from "next/link";

export function Slide({ text, href, project, author, id }: SlideProps) {
    return (
        <>
            <Link href={{ query: { 'form': 'review', 'id': id } }} scroll={false} className={s.text}>{text}</Link>
            <div className={s.info}>
                {author}
                {project && " - "}
                {project && (
                    <Link className={s.info__link} href={[href, project?.id].join("/")}>
                        {project?.subtitle}
                    </Link>
                )}
            </div>
        </>
    );
};