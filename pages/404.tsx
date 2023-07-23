import Head from "next/head";
import React from "react";

import { Montserrat } from "@next/font/google";
import { NotFound } from "../src/modules";
import classNames from "classnames";

const font = Montserrat({
	preload: true,
	subsets: ["cyrillic"],
	weight: ["500"],
});

export default function NotFoundPage() {
	return (
		<>
			<Head>
				<title>{"Страница не найдена - piybeep."}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={classNames("not_found", font.className)}>
				<NotFound />
			</main>
		</>
	);
}
