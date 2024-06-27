import { Marker, Title } from "../components";

import s from './PostInfo.module.scss'
import { ThemeTypes } from "../../../../types";
import { RichTextEditor } from "../../../../components";

export function PostInfo({ post }: { post: any }) {
    const postRemoveAttr = {
        title: post.attributes.title,
        text: post.attributes.text,
        themes: post.attributes.themes.data.map((marker: any) => ({ id: marker.id, theme: marker.attributes.theme }))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <Title text={postRemoveAttr.title} />
                <div className={s.header__list}>
                    {
                        postRemoveAttr.themes.map((marker: ThemeTypes) =>
                            <Marker key={marker.id} text={marker.theme} />
                        )
                    }
                </div>
            </div>

            <RichTextEditor html={postRemoveAttr.text} />
        </div>
    );
}