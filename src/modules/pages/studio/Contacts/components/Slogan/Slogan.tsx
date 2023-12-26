import s from './Slogan.module.scss'

export function Slogan({ text }: { text: string }) {
    return (
        <span className={s.slogan}>
            {text}
        </span>
    );
};