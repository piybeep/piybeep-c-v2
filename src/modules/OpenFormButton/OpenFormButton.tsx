import React from "react";

import s from "./OpenFormButton.module.scss";

export function OpenFormButton() {
	return (
		<div className={s.btn_wrapper}>
			<button>
				<span>Заказать сайт</span>
			</button>
		</div>
	);
}
