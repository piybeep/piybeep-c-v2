import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "../../src/modules";

export default function Portfolio() {
	return (
		<main>
			<h1>
				Портфолио <samp>Piybeep</samp>
			</h1>
		</main>
	);
}

Portfolio.getLayout = (page: ReactNode) => (
	<>
		<Head>
			<title>Piybeep - Портфолио</title>
			<meta name="description" content="Наше портфолио" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
		<Footer />
	</>
);
