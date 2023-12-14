"use client";

import classNames from "classnames";
import { useRouter } from "next/router";

import s from "./Header.module.scss";
import React, { useEffect, useState } from "react";
import { PAGES_LINK } from "../../constatnts";
import { useInView } from "react-intersection-observer";
import { useApp } from "../../store";
import Snowfall from "react-snowfall";

export function PreviewHeader() {
	const query = useRouter();
	const toggleIsPreviewHeaderInView = useApp(
		(state) => state.toggleIsPreviewHeaderInView,
	);
	const { ref } = useInView({
		onChange: (inView) => {
			toggleIsPreviewHeaderInView(inView);
		},
	});

	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<header
			className={classNames(s.preview, {
				[s.preview__visible]:
					query.pathname === PAGES_LINK.MAIN ||
					query.pathname === PAGES_LINK.BUSINESS,
			})}
		>
			{isClient && (
				<Snowfall
					snowflakeCount={100}
					speed={[0.5, 2]}
					wind={[0, 4]}
					radius={[0.5, 3]}
					color={"#fffa"}
					rotationSpeed={[0, 2]}
				/>
			)}
			<div className={s.preview__info} ref={ref}>
				<h2 className={s.preview__title}>web-studio</h2>
				<p className={s.preview__subtitle}>
					PIYBEEP<span>.</span>
				</p>
			</div>
		</header>
	);
}
