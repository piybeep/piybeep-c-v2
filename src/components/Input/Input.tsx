import { useState } from 'react';
import { InputProps } from './Input.types';

// Style
import s from './Input.module.scss'
import classNames from 'classnames';

export function Input({ text, type }: InputProps) {
    const [placeholder, setPlaceholder] = useState(false)

    const changeInput = (e: any) => {
        e.target.value != '' ? setPlaceholder(true) : setPlaceholder(false)
    }

    return (
        <div className={s.input}>
            <input onChange={e => changeInput(e)} className={s.input__text} type={type}/>
            <span className={classNames(s.input__placeholder, {
                [s.input__placeholder__top]: placeholder,
            })}>
                {text}</span>
        </div >
    );
};