import Image from "next/image";
import { PostType } from "../../../../utils";
import { Marker, Title } from "../components";

import s from './PostInfo.module.scss'

export function PostInfo({ post }: { post: PostType }) {

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <Title text={post.slogan} />
                <div className={s.header__list}>
                    {
                        post.markers.map(marker =>
                            <Marker key={marker} text={marker} />
                        )
                    }
                </div>
            </div>

            <div className={s.info}>
                {
                    post.info.map(i => i.type === 'text'
                        ? <p className={s.info__text} >{i.content}</p>
                        : <Image className={s.info__img} src={i.content} alt={""} width={834} height={346} />
                    )
                }
            </div>
        </div>
    );
}