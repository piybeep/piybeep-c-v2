import Head from "next/head";
import { ReactNode } from "react";

import { BaseLayout } from "../../src/layouts";
import { Form, ProductsList, SupportBlock } from "../../src/modules";
import { PRODUCTS } from "../../src/constatnts";

export default function Services() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div className="content-wrapper">
				<ProductsList list={PRODUCTS} />
				<SupportBlock />
			</div>
			<Form />
		</main>
	);
}

Services.getLayout = (page: ReactNode) => (
	<BaseLayout>
		<Head>
			<title>Услуги - piybeep.</title>
			<meta name="description" content="Наши услуги" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
	</BaseLayout>
);
