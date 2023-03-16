import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";

export default function Services() {
	return (
		<main>
			<h1>
				Услуги <samp>Piybeep</samp>
			</h1>
		</main>
	);
}

Services.getLayout = (page: ReactNode) => (
	<BaseLayout>
		<Head>
			<title>Piybeep - Услуги</title>
			<meta name="description" content="Наши услуги" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
	</BaseLayout>
);

