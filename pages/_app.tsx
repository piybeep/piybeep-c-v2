import "../src/styles/globals.scss";
import type { AppProps } from "next/app";
import { Source_Code_Pro, PT_Mono } from "@next/font/google";
import classNames from "classnames";

export const SourceCodePro = Source_Code_Pro({
	preload: true,
	subsets: ["cyrillic", "latin"],
	variable: "--font-SourceCodePro",
	fallback: ["sans-serif"],
});

export const PTMono = PT_Mono({
	preload: true,
	weight: ["400"],
	subsets: ["cyrillic", "latin"],
	variable: "--font-PTMono",
	fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={classNames(SourceCodePro.variable, PTMono.variable)}>
			<Component {...pageProps} />
		</div>
	);
}

