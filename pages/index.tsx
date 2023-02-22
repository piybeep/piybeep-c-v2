import Head from "next/head";
import React from "react";

import { Button } from "../src/components";
import { FULL_SCREEN_FORM, SUCCESSFUL_SENDING } from "../src/constatnts";
import { useModalWindow } from "../src/hooks";
import { SuccessModalWindow } from "../src/modules";
import { FormModalWindow } from "../src/modules/FormModalWindow";

export default function Home() {
	const { isHas, add, remove, isLoading, windowQuery } = useModalWindow();
	const [modalOpen, setModalOpen] = React.useState<string | null>();

	React.useEffect(() => {
		if (!isLoading && !!windowQuery) {
			if (isHas(SUCCESSFUL_SENDING)) {
				setModalOpen(SUCCESSFUL_SENDING);
			}
			if (isHas(FULL_SCREEN_FORM)) {
				setModalOpen(FULL_SCREEN_FORM);
			}
		} else {
			setModalOpen(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, windowQuery]);

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

			<SuccessModalWindow
				isShow={modalOpen === SUCCESSFUL_SENDING}
				close={() => remove(SUCCESSFUL_SENDING)}
			/>

			<FormModalWindow
				isShow={modalOpen === FULL_SCREEN_FORM}
				close={() => remove(FULL_SCREEN_FORM)}
			/>
		</main>
	);
}

