import { Marker, Title } from "../components";

import s from './PostInfo.module.scss'
import { BlogsResTypes } from "../../../../types";

export function PostInfo({ post }: { post: BlogsResTypes }) {

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <Title text={post.title} />
                <div className={s.header__list}>
                    {
                        post.themes.map(marker =>
                            <Marker key={marker.id} text={marker.theme} />
                        )
                    }
                </div>
            </div>

            <div className={s.info} dangerouslySetInnerHTML={{ __html: post.text }} />
        </div>
    );
}