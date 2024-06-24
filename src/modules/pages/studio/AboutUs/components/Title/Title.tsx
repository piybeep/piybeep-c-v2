import s from './Title.module.scss'

export function Title({ text }: { text: string }) {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>{text}</h1>
            <h2 className={s.subtitle}>(читается как пиубип)</h2>
        </div>
    );
};