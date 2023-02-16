import Head from "next/head";
import { Button } from "../src/components/Button";

export default function Home() {
	return (
		<main>
			<Head>
				<title>Piybeep</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>
				Welcome to <samp>Piybeep</samp>
				<Button value="hello" />
			</h1>
		</main>
	);
}

