import s from './ServicePreview.module.scss'

export function ServicePreview({ title, description, description_2, count_days }: { title: string, description: string, description_2: string, count_days: string }) {
    return (
        <div className={s.wrapper}>
            <h2 className={s.wrapper__title}>{title}</h2>
            <p className={s.wrapper__text}>{description}</p>
            <p className={s.wrapper__text}>{description_2}</p>
            <span className={s.wrapper__text}>{count_days}</span>
        </div>
    );
}
