import s from './Slogan.module.scss'

export function Slogan({ text }: { text: string }) {
    return (
        <div className={s.slogan}>
            <h2 className={s.slogan__text}>
                {text}
            </h2>
        </div>
    );
}