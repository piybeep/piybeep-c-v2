import classNames from "classnames";
import { useRouter } from "next/router";

import s from "./Header.module.scss";
import React from "react";
import { PAGES_LINK } from "../../constatnts";

export function PreviewHeader() {
	const query = useRouter();
	return (
		<header
			className={classNames(s.preview, {
				[s.preview__visible]:
					query.pathname === PAGES_LINK.MAIN ||
					query.pathname === PAGES_LINK.BUSINESS,
			})}
		>
			<div className={s.preview__info}>
				<h2 className={s.preview__title}>web-studio</h2>
				<p className={s.preview__subtitle}>
					PIYBEEP<span>.</span>
				</p>
			</div>
		</header>
	);
}
