import "../src/styles/globals.scss";
import type { AppProps } from "next/app";
import classNames from "classnames";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={classNames("wrapper")}>
			<Component {...pageProps} />
		</div>
	);
}

