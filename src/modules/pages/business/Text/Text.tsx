import { PLUSES_INFO } from '../../../../constatnts/pluses';

import s from './Text.module.scss'

export function Text() {
    return (
        <div className={s.text}>
            {PLUSES_INFO.map((current) => (
                <p key={current.id} className={s.text__slogan}>
                    {current.text}
                </p>
            ))}
        </div>
    );
};