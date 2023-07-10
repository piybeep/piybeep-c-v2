import Head from "next/head";
import React from "react";

import { Montserrat } from "@next/font/google";
import { NotFound } from "../src/modules";

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
			<main className={["not_found", font.className].join(" ")}>
				<NotFound />
			</main>
		</>
	);
}
