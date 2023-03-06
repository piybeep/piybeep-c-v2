import "../src/styles/globals.scss";
import type { AppProps } from "next/app";
import classNames from "classnames";
import { BaseLayout } from "../src/layouts";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<div className={classNames("wrapper")}>
			{getLayout(<Component {...pageProps} />)}
		</div>
	);
}

