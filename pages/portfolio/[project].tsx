import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Footer } from "../../src/modules";

export default function PortfolioCase() {
	const router = useRouter();
	const { project } = router.query;
	return (
		<main>
			<h1>
				Проект &quot;{project}&quot; <samp>Piybeep</samp>
			</h1>
		</main>
	);
}

PortfolioCase.getLayout = (page: ReactNode) => (
	<>
		{page}
		<Footer />
	</>
);
