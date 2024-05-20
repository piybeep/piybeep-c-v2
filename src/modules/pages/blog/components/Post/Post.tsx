import Image from 'next/image';
import Link from 'next/link';
import postImagePlug from '../../../../../../public/imgs/blog/postImagePlug.png';
import { PostType } from '../../../../../utils';
import { Marker } from '../Marker';
import { Slogan } from '../Slogan';
import s from './Post.module.scss';

export function Post({ post }: { post: PostType }) {
    return (
        <Link className={s.post} href={`/blog/${post.id}`}>
            <div className={s.post__markers}>
                {
                    post?.markers?.map(marker => <Marker key={marker} text={marker} />)
                }
            </div>
            <Slogan text={post.slogan} />
            <Image className={s.post__img} src={post?.img ?? postImagePlug} alt={''} width={520} height={346} />
        </Link>
    );
}