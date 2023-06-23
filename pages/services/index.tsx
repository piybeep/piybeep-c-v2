import Head from "next/head";
import {ReactNode} from "react";

import {BaseLayout} from "../../src/layouts";
import {Form, ProductsList, SupportBlock} from "../../src/modules";

export default function Services() {
    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                // rowGap: 100,
                // marginBottom: 90,
                // marginTop: 50,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 100,
                    marginBottom: 150,
                }}
            >
                <ProductsList/>
                <SupportBlock/>
            </div>
            <Form/>
        </main>
    );
}

Services.getLayout = (page: ReactNode) => (
    <BaseLayout>
        <Head>
            <title>Piybeep - Услуги</title>
            <meta name="description" content="Наши услуги"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        {page}
    </BaseLayout>
);
