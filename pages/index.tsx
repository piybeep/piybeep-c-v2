import Head from "next/head";
import React from "react";

import { Button, Title } from "../src/components";
import { Input } from "../src/components/Input";
import { SUCCESSFUL_SENDING } from "../src/constatnts";
import { useModalWindow } from "../src/hooks";
import { SuccessModalWindow } from "../src/modules";
import { FormModalWindow } from "../src/modules/FormModalWindow";

export default function Home() {
	const { isHas, add, remove, isLoading } = useModalWindow();
	const [isShow, setIsShow] = React.useState(false);
	const [isShowForm, setIsShowForm] = React.useState(false)

	React.useEffect(() => {
		if (!isLoading) {
			if (isHas(SUCCESSFUL_SENDING)) {
				setIsShow(true);
			} else {
				setIsShow(false);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, isHas(SUCCESSFUL_SENDING)]);

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
			<Button onClick={() => setIsShowForm(true)} value="Open form" />

			<SuccessModalWindow
				isShow={isShow}
				close={() => remove(SUCCESSFUL_SENDING)}
			/>

			<FormModalWindow
				isShow={isShowForm}
				close={() => setIsShowForm(false)}
			/>

		</main>
	);
}

