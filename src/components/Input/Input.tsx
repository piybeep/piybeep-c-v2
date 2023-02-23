import { InputProps } from './Input.types';

// Style
import s from './Input.module.scss'

export function Input({ text, ...props }: InputProps) {
    return (
        <div className={s.input}>
            <input {...props} className={s.input__text}/>
            <span className={s.input__placeholder}>{text}</span> 
        </div >
    );
};