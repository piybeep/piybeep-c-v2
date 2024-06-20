import { BlogsResTypes } from '../../../../types';
import { Post } from '../components';
import s from './List.module.scss'

export function List({ posts }: { posts: BlogsResTypes[] | null }) {
    return (
        <div className={s.list}>
            {
                posts?.map((post: BlogsResTypes) => <Post key={post.id} post={post} />)
            }
        </div>
    );
}