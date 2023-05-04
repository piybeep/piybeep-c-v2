import Head from "next/head";
import { ReactNode } from "react";

import { BaseLayout } from "../../src/layouts";
import { ProductsList, SupportBlock } from "../../src/modules";

export default function Services() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				rowGap: 100,
				marginBottom: 90,
				marginTop: 50,
			}}
		>
			<ProductsList />
			<SupportBlock />
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

