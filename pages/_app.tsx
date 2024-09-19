import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

import "../src/styles/globals.scss";
import "swiper/css";
import { YandexMetricaProvider } from "next-yandex-metrica";
import { GoogleAnalytics } from "nextjs-google-analytics";
// import { AptabaseProvider } from "@aptabase/react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement, props: any) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	if (process.env.NODE_ENV != 'production') {
		return (
			<div className={classNames("wrapper")}>
				{/* <AptabaseProvider appKey={process.env.NEXT_PUBLIC_APTABASE_KEY!} options={{ host: process.env.NEXT_PUBLIC_APTABASE_HOST, isDebug: true }}> */}
				<Toaster position="top-center" reverseOrder={false} />
				{getLayout(<Component {...pageProps} />, pageProps)}
				{/* </AptabaseProvider> */}
			</div>
		)
	}
	return (
		<YandexMetricaProvider
			initParameters={{
				clickmap: true,
				trackLinks: true,
				trackHash: true,
				webvisor: true,
				accurateTrackBounce: true,
				triggerEvent: true,
			}}
			tagID={89981393}
		>
			<GoogleAnalytics gaMeasurementId={"G-X9R96DCG15"} trackPageViews />
			{/* <AptabaseProvider appKey={process.env.NEXT_PUBLIC_APTABASE_KEY!} options={{ host: process.env.NEXT_PUBLIC_APTABASE_HOST }}> */}
			<div className={classNames("wrapper")}>
				<Toaster position="top-center" reverseOrder={false} />
				{getLayout(<Component {...pageProps} />, pageProps)}
			</div>
			{/* </AptabaseProvider> */}
		</YandexMetricaProvider>
	);
}
