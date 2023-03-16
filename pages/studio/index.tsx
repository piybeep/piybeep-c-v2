import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";

export default function Studio() {
	return (
		<main>
			<h1>
				Студия <samp>Piybeep</samp>
			</h1>
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

