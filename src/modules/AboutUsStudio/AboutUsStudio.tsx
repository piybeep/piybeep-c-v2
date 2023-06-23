import s from './AboutUsStudio.module.scss'

export function AboutUsStudio() {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Студия piybeep .</h2>
            <div className={s.info}>
                <p className={s.info__slogan}>Мы - команда программистов и дизайнеров из Москвы, и мы любим то, чем
                    занимаемся - разработку сайтов и решение бизнес-задач наших клиентов.</p>
                <p className={s.info__slogan}>Постоянное развитие, использование новых технологий для творчества и
                    стремление к решению проблем заказчиков - это основа нашей студии.</p>
            </div>
        </div>
    );
}
