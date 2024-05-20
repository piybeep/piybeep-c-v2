import { PostType } from '../../../../utils/types';
import { Post } from '../components';
import s from './List.module.scss'

export function List({ posts }: { posts: PostType[] }) {
    return (
        <div className={s.list}>
            {
                posts?.map((post: PostType) => <Post key={post.id} post={post} />)
            }
        </div>
    );
}