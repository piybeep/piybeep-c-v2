import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "../../src/modules";

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
	<>
		<Head>
			<title>Piybeep - Студия</title>
			<meta name="description" content="Наша студия" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
		<Footer />
	</>
);
