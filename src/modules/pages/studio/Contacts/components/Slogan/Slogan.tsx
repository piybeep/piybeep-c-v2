import s from './Slogan.module.scss'

export function Slogan({ text }: { text: string }) {
    return (
        <p className={s.slogan}>
            {text}
        </p>
    );
};