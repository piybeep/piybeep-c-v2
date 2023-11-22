import s from './AboutUs.module.scss'
import { Slogan, Title } from './components';

export function AboutUs() {
    return (
        <div className={s.wrapper}>
            <Title text='Студия piybeep .' />
            <div className={s.info}>
                <Slogan text='Мы - команда программистов и дизайнеров из Москвы, и мы любим то, чем
                    занимаемся - разработку сайтов и решение бизнес-задач наших клиентов.'/>
                <Slogan text='Постоянное развитие, использование новых технологий для творчества и
                    стремление к решению проблем заказчиков - это основа нашей студии.'/>
            </div>
        </div>
    );
};