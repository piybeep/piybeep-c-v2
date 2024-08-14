import { Marker, Title } from "../components";

import s from './PostInfo.module.scss'
import { BlogsSlugTypes } from "../../../../types";
import { RichTextEditor } from "../../../../components";

export function PostInfo({ post }: { post: BlogsSlugTypes }) {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <Title text={post.attributes.title} />
                <div className={s.header__list}>
                    {
                        post.attributes.themes.data.map(marker =>
                            <Marker key={marker.attributes.theme} text={marker.attributes.theme} />
                        )
                    }
                </div>
            </div>

            <RichTextEditor html={post.attributes.text} />
        </div>
    );
}
