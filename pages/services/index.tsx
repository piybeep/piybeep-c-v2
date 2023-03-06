import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "../../src/modules";

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
	<>
		<Head>
			<title>Piybeep - Услуги</title>
			<meta name="description" content="Наши услуги" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
		<Footer />
	</>
);
