import {useRouterQuery} from "../../hooks";

import React from "react";

import s from "./OpenFormButton.module.scss";

export function OpenFormButton() {
    const {mutate} = useRouterQuery()

    const handleOpenForm = () => {
        mutate({
            query: {form: 'request'}
        })
    }

    return (
        <div className={s.btn_wrapper}>
            <button onClick={() => handleOpenForm()}>
                <span>Заказать сайт</span>
            </button>
        </div>
    );
}
