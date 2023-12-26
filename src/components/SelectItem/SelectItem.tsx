import { SelectItemProps } from "./SelectItem.types";

import classNames from "classnames";

import s from './SelectItem.module.scss'

export function SelectItem({ active, value, onClick, size = 'lg' }: SelectItemProps) {
    return (
        <h2
            className={classNames(s.select, s[`select__${size}`], {
                [s.select_active]: active,
            })}
            onClick={() => onClick(value)}
        >
            {value}
        </h2>
    );
};