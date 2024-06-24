import s from './Title.module.scss'

export function Title({ text }: { text: string }) {
    return (
        <h1 className={s.title}>
            {text}
        </h1>
    );
};