import { ButtonEye } from './ButtonEye.types';

// syle
import style from './ButtonEye.module.scss'

export function ButtonEye(props: ButtonEye) {
    return <button className={style.button}>{props.value}</button>
};