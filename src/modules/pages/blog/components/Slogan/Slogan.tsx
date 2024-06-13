import s from './Slogan.module.scss'

export function Slogan({ text }: { text: string }) {
    return (
        <div className={s.slogan}>
            <p className={s.slogan__text}>
                {text}
            </p>
        </div>
    );
}