import Head from "next/head";
import { useRouter } from "next/router";

export default function Portfolio() {
	const router = useRouter();
	const { projectName } = router.query;
	return (
		<main>
			<Head>
				<title>Piybeep - {projectName}</title>
				<meta
					name="description"
					content={projectName ? `${projectName}` : "Наш проект"}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>
				Проект "{projectName}" <samp>Piybeep</samp>
			</h1>
		</main>
	);
}
