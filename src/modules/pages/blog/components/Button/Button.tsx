import classNames from 'classnames';
import s from './Button.module.scss'

export function Button({ text, onClick, isActive }: { text: string, onClick: (value: string) => void, isActive?: boolean }) {
    return (
        <button
            className={classNames(s.button, {
                [s.button__active]: isActive
            })}
            onClick={() => onClick(text)}
        >
            {text}
        </button>
    );
};