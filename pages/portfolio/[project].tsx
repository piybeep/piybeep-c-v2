import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";

export default function PortfolioCase() {
	const router = useRouter();
	const { project } = router.query;
	return (
		<main>
			<Head>
				<title>Piybeep - {project}</title>
				<meta
					name="description"
					content={project ? `${project}` : "Наш проект"}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>
				Проект &quot;{project}&quot; <samp>Piybeep</samp>
			</h1>
		</main>
	);
}

PortfolioCase.getLayout = (page: ReactNode) => <BaseLayout>{page}</BaseLayout>;

