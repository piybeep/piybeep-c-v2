import s from './Search.module.scss'

interface SearchTypes {
    placeholder: string
    onChange: any
    value: string
}

export function Search({ placeholder, onChange, value }: SearchTypes) {
    return (
        <input onChange={onChange} value={value} placeholder={placeholder} type='text' className={s.search} />
    );
};