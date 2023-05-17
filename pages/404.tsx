import Head from "next/head";
import Image from "next/image";
import React from "react";

import { Montserrat } from "@next/font/google";

import SleepingCat from "../public/imgs/sleeping-cat.png";
import { NotFound } from "../src/modules";

const font = Montserrat({
	preload: true,
	subsets: ["cyrillic"],
	weight: ["500"],
});

export default function Home() {
	const [imageWidth, setImageWidth] = React.useState(530);

	React.useEffect(() => {
		resizeImage();
		window.addEventListener("resize", () => {
			resizeImage();
		});
		return () => {
			window.removeEventListener("resize", () => {
				resizeImage();
			});
		};
	}, []);

	const resizeImage = () => {
		if (window.innerWidth > 1550) {
			setImageWidth(530);
		} else if (window.innerWidth <= 1550 && window.innerWidth > 430) {
			setImageWidth(410);
		} else {
			setImageWidth(328);
		}
	};

	return (
		<main className={["not_found", font.className].join(" ")}>
			<Head>
				<title>Page not found - piybeep</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NotFound/>
		</main>
	);
}

