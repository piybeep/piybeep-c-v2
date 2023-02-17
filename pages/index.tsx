import Head from "next/head";
import { useState } from "react";
import { Button } from "../src/components/Button";
import { SuccessModalWindow } from "../src/modules/SuccessModalWindow/SuccessModalWindow";

export default function Home() {
	const [show, setShow] = useState(false)
	return (
		<main>
			<Head>
				<title>Piybeep</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>
				Welcome to <samp>Piybeep</samp>
				<Button onClick={() => setShow(!show)} value="hello" />
			</h1>

			<SuccessModalWindow isShow={show}/>
		</main>
	);
}

