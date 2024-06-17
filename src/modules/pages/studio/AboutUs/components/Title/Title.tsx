import s from './Title.module.scss'

export function Title({ text }: { text: string }) {
    return (
        <h1 className={s.title}>{text} <h2 className={s.subtitle}>(читается как пиубип)</h2></h1>
    );
};