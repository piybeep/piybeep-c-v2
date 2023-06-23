import classNames from 'classnames';

import {InputProps} from './Input.types';

// Style
import s from './Input.module.scss'

export function Input({text, position = 'top', sizeInput = 'default', ...props}: InputProps) {
    return (
        <div className={classNames(s.input, s['input_' + position])}>
            <input {...props} placeholder={text} className={classNames(s.input__text, s['input__text_' + sizeInput])}/>
            <span
                className={classNames(s.input__placeholder, s['input__placeholder_' + position], s['input__placeholder_' + sizeInput])}>{text}</span>
        </div>
    );
}
