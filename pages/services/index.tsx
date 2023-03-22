import Head from "next/head";
import { ReactNode } from "react";

import { BaseLayout } from "../../src/layouts";
import { ProductsList } from "../../src/modules";

export default function Services() {
	return (
		<main>
			<ProductsList />
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

