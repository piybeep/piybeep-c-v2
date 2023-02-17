// Style
import classNames from 'classnames'
import style from './Title.module.scss'
import { TitleProps } from './Title.types'

export function Title({ value, size = 'default', position = 'center' }: TitleProps) {
    return (
        <div className={style.Title__wrapper}>
            <h2 className={classNames(style.Title, style[`Title__` + position], style[`Title__` + size])}>{value}</h2>
        </div>
    )
}