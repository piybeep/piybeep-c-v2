"use client";

import { useRouterQuery } from "../../hooks";
import React from "react";
import s from "./ButtonOpenForm.module.scss";
import { useApp } from "../../store";
import classNames from "classnames";

export function ButtonOpenForm() {
    const { mutate } = useRouterQuery();
    const isFooterFormInView = useApp((state) => state.isFooterFormInView);
    const isPreviewHeaderInView = useApp((state) => state.isPreviewHeaderInView);

    const handleOpenForm = () => {
        mutate({
            query: { form: "request" },
        });
    };

    return (
        <div
            className={classNames(s.btn_wrapper, {
                [s.hide]: isFooterFormInView || isPreviewHeaderInView,
            })}
        >
            <button type={"button"} onClick={() => handleOpenForm()}>
                <span>Заказать сайт</span>
            </button>
        </div>
    );
}
