import Image from "next/image";
import { Marker, Title } from "../components";

import s from './PostInfo.module.scss'
import { BlogsTypes } from "../../../../types";

export function PostInfo({ post }: { post: BlogsTypes }) {

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <Title text={post.title} />
                <div className={s.header__list}>
                    {
                        post.themes.map(marker =>
                            <Marker key={marker} text={marker} />
                        )
                    }
                </div>
            </div>

            <div className={s.info} dangerouslySetInnerHTML={{ __html: post.text }} />
        </div>
    );
}