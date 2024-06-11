import { BlogsTypes } from '../../../../types';
import { Post } from '../components';
import s from './List.module.scss'

export function List({ posts }: { posts: BlogsTypes[] }) {
    return (
        <div className={s.list}>
            {
                posts?.map((post: BlogsTypes) => <Post key={post.id} post={post} />)
            }
        </div>
    );
}