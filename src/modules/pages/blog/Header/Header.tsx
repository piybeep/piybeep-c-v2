import { useBlockSelect } from '../../../../hooks/useBlockSelect';
import { Button, Search, Title } from '../components';
import s from './Header.module.scss'

export function Header({ markers }: { markers: string[] }) {

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

    return (
        <div className={s.wrapper}>
            <Title text={'Поиск по блогу'} />
            <div className={s.wrapper__info}>
                <Search placeholder={'Хочу найти...'} />
                <div className={s.wrapper__list}>
                    {
                        markers?.map(i => <Button key={i} text={i} isActive={isHasBlockSelect(i)} onClick={() => handleFilterPost(i)} />)
                    }
                </div>
            </div>
        </div>
    );
}