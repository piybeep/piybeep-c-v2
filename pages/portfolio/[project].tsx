import Head from "next/head";
import { useRouter } from "next/router";

export default function Portfolio() {
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
