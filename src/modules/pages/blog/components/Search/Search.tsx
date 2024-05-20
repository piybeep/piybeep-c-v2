import s from './Search.module.scss'

export function Search({ placeholder }: { placeholder: string }) {
    return (
        <input placeholder={placeholder} type='text' className={s.search} />
    );
};