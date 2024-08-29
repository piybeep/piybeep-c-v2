import { Title } from '../../../../components';
import { ServiceStepList } from '../../../../utils';
import s from './Steps.module.scss'

export function Steps({ steps }: { steps?: ServiceStepList[] }) {
    if (!steps) {
        // Тут вывод заглушки
        return <></>
    }

    return (
        <div className={s.wrapper}>
            <Title value={'Этапы разработки'} size='md' />
            <div className={s.wrapper__content}>
                {
                    steps.map(step => (
                        <div key={step.id} className={s.step}>
                            <div className={s.step__header}>
                                <h2 className={s.step__title}>{step.title}</h2>
                                <p className={s.step__text}>{step.text}</p>
                            </div>

                            <div className={s.list}>
                                {
                                    step.step_items.map(item => (
                                        <div className={s.list__item} key={item.id}>
                                            <h2 className={s.list__title}>{item.title}</h2>
                                            <p className={s.list__text}>{item.text}</p>
                                            <span className={s.list__count}>{item.count}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
