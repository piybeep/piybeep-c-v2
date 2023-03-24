import { BlockLayout } from '../../layouts';
import { WeDoProps } from './WeDo.types';
import { WE_DO_LIST } from '../../constatnts/weDo';

import s from './WeDo.module.scss'

export function WeDo({ ...props }: WeDoProps) {
    return (
        <BlockLayout value="Мы делаем">
            <div className={s.list}>
                {WE_DO_LIST.map((current, index) => {
                    return (
                        <div key={current.title} className={s.info} style={{marginLeft: (index * 8)+'%'}}>
                            <h2 className={s.info__title}>{current.title}</h2>
                            <h3 className={s.info__subtitle}>{current.text}</h3>
                        </div>
                    )
                })}
            </div>
        </BlockLayout>
    );
};
