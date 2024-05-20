import s from './Title.module.scss'

export function Title({ text }: { text: string }) {
    return (
        <h2 className={s.title}>
            {text}
        </h2>
    );
};