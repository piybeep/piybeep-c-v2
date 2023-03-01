import "../src/styles/globals.scss";
import type { AppProps } from "next/app";
import { Inter, PT_Mono, Montserrat } from "@next/font/google";
import classNames from "classnames";

export const inter = Inter({
	preload: true,
	subsets: ["cyrillic", "latin"],
	variable: "--font-Inter",
	fallback: ["sans-serif"],
});

export const ptmono = PT_Mono({
	preload: true,
	weight: ["400"],
	subsets: ["cyrillic", "latin"],
	variable: "--font-PTMono",
	fallback: ["sans-serif"],
});

export const montserrat = Montserrat({
	preload: true,
	weight: ["400"],
	subsets: ["cyrillic", "latin"],
	variable: "--font-Montserrat",
	fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div
			className={classNames(
				"wrapper",
				inter.variable,
				ptmono.variable,
				montserrat.variable
			)}
		>
			<Component {...pageProps} />
		</div>
	);
}

