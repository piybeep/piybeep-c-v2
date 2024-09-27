"use client";

import { useRouterQuery, useWindowSizes } from "../../hooks";
import React from "react";
import s from "./ButtonOpenForm.module.scss";
import { useApp } from "../../store";
import classNames from "classnames";

export function ButtonOpenForm() {
    const { mutate } = useRouterQuery();
    const isFooterFormInView = useApp((state) => state.isFooterFormInView);
    const isFooterInView = useApp((state) => state.isFooterInView);

    const { width } = useWindowSizes()

    const handleOpenForm = () => {
        mutate({
            query: { form: "request" },
        });
    };

    return (
        <div
            onClick={() => handleOpenForm()}
            className={classNames(s.btn_wrapper, {
                [s.hide]: isFooterFormInView || isFooterInView,
            })}
        >
            <button type={"button"}>
                <span>Заказать сайт</span>
                <span className={s.arrow}>
                    {
                        width >= 460
                            ? <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                                <path d="M1 19C1 19 7.29002 13.5165 11 10.0029C7.29002 6.48706 1 0.999999 1 0.999999" stroke="#ECECEC" strokeLinecap="square" strokeLinejoin="round" />
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                <path d="M1 13C1 13 3.29002 10.5165 7 7.00292C3.29002 3.48706 1 0.999999 1 0.999999" stroke="#ECECEC" strokeLinecap="square" strokeLinejoin="round" />
                            </svg>
                    }
                </span>
            </button>
        </div>
    );
}
