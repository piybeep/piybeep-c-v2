import Head from "next/head";
import React from "react";

import { Button } from "../src/components";
import { FULL_SCREEN_FORM, SUCCESSFUL_SENDING } from "../src/constatnts";
import { useModalWindow } from "../src/hooks";
import { SuccessModalWindow, FullScreenForm, FormRequest } from "../src/modules";

export default function Home() {
	const { isHas, add, remove } = useModalWindow();

	return (
		<main>
			<Head>
				<title>piybeep</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>
				Welcome to <samp>piybeep</samp>
			</h1>

			<Button onClick={() => add(SUCCESSFUL_SENDING)} value="Open window" />
			<Button onClick={() => add(FULL_SCREEN_FORM)} value="Open form" />

			<FormRequest/>

			<SuccessModalWindow
				isShow={isHas(SUCCESSFUL_SENDING)}
				close={() => remove(SUCCESSFUL_SENDING)}
			/>

			<FullScreenForm
				isShow={isHas(FULL_SCREEN_FORM)}
				close={() => remove(FULL_SCREEN_FORM)}
			/>
		</main>
	);
}

