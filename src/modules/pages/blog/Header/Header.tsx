import { useRouter } from 'next/router';
import { useRouterQuery } from '../../../../hooks';
import { useBlockSelect } from '../../../../hooks/useBlockSelect';
import { Button, Search, Title } from '../components';
import s from './Header.module.scss'
import { useEffect } from 'react';

export function Header({ markers }: { markers: string[] | null }) {
    const router = useRouter()

    const {
        add: addUserSelect,
        remove: removeUserSelect,
        isHas: isHasBlockSelect,
    } = useBlockSelect();


    const handleFilterPost = (text: string) => {
        isHasBlockSelect(text)
            ? removeUserSelect(text)
            : addUserSelect(text);
    }

    const { mutate } = useRouterQuery()

    useEffect(() => {
        router.query.search !== undefined && router.query.search.toString().trim() === '' && mutate({ query: { search: null } })
    }, [router.query.search])

    return (
        <div className={s.wrapper}>
            <Title text={'Поиск по блогу'} />
            <div className={s.wrapper__info}>
                <Search
                    placeholder={'Хочу найти...'}
                    value={router.query.search === undefined ? '' : String(router.query.search)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => mutate({ query: { 'search': e.target.value }, method: 'push' })} />
                <div className={s.wrapper__list}>
                    {
                        markers?.map(i => <Button key={i} text={i} isActive={isHasBlockSelect(i)} onClick={() => handleFilterPost(i)} />)
                    }
                </div>
            </div>
        </div>
    );
}