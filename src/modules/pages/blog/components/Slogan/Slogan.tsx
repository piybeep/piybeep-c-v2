import s from './Slogan.module.scss'

export function Slogan({ text }: { text: string }) {
    return (
        <h3 className={s.slogan}>
            {text}
        </h3>
    );
}