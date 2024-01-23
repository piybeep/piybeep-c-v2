"use client";

import classNames from "classnames";
import { useRouter } from "next/router";

import s from "./Preview.module.scss";
import React from "react";
import { PAGES_LINK } from "../../../../constatnts";
import { useInView } from "react-intersection-observer";
import { useApp } from "../../../../store";

export function Preview() {
	const query = useRouter();
	const toggleIsPreviewHeaderInView = useApp(
		(state) => state.toggleIsPreviewHeaderInView,
	);
	const { ref } = useInView({
		onChange: (inView) => {
			toggleIsPreviewHeaderInView(inView);
		},
	});

	return (
		<header
			className={classNames(s.preview, {
				[s.preview__visible]:
					query.pathname === PAGES_LINK.MAIN ||
					query.pathname === PAGES_LINK.BUSINESS,
			})}
		>
			<div className={s.preview__info} ref={ref}>
				<h2 className={s.preview__title}>web-studio</h2>
				<p className={s.preview__subtitle}>
					PIYBEEP<span>.</span>
				</p>
			</div>
		</header>
	);
}
