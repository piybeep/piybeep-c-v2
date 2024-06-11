import Image from 'next/image';
import Link from 'next/link';
import { Marker } from '../Marker';
import { Slogan } from '../Slogan';
import s from './Post.module.scss';
import { BlogsTypes } from '../../../../../types';

export function Post({ post }: { post: BlogsTypes }) {
    return (
        <Link className={s.post} href={`/blog/${post.id}`}>
            <div className={s.post__markers}>
                {
                    post.themes.map(marker => <Marker key={marker} text={marker} />)
                }
            </div>
            <Slogan text={post.title} />
            <Image className={s.post__img} src={process.env.NEXT_PUBLIC_STRAPI_URL + post?.previewImage} alt={''} width={520} height={346} />
        </Link>
    );
}