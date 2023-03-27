import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { AboutUsStudio, Spa } from "../../src/modules";

export default function Studio() {
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
			<AboutUsStudio />
			<Spa />
		</main>
	);
}

Studio.getLayout = (page: ReactNode) => (
	<BaseLayout>
		<Head>
			<title>Piybeep - Студия</title>
			<meta name="description" content="Наша студия" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
	</BaseLayout>
);

