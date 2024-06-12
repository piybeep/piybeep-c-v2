import { SelectItemProps } from "./SelectItem.types";

import classNames from "classnames";

import s from './SelectItem.module.scss'

export function SelectItem({ isActive, value, onClick, size = 'lg' }: SelectItemProps) {
    return (
        <p
            className={classNames(s.select, s[`select__${size}`], {
                [s.select_active]: isActive,
            })}
            onClick={() => onClick(value)}
        >
            {value}
        </p>
    );
};