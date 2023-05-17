import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

import "../src/styles/globals.scss";
import "swiper/css";

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
			<Toaster
                position="top-center"
                reverseOrder={false}
            />
			{getLayout(<Component {...pageProps} />)}
		</div>
	);
}

