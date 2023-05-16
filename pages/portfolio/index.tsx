import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { Form, OpenFormButton, OurProjectsPortfolio } from "../../src/modules";
export default function Portfolio() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				// rowGap: 100,
				// marginBottom: 90,
				// marginTop: 50,
			}}
		>
			<OpenFormButton />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					rowGap: 100,
					marginBottom: 150,
				}}
			>
				<OurProjectsPortfolio />
			</div>
			<Form />
		</main>
	);
}

Portfolio.getLayout = (page: ReactNode) => (
	<BaseLayout>
		<Head>
			<title>Piybeep - Портфолио</title>
			<meta name="description" content="Наше портфолио" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
	</BaseLayout>
);

