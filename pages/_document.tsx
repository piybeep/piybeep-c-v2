import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="ru">
            <Head />
            <body>
                <Main />
                <NextScript />

                <Script id="metrika-counter" strategy="afterInteractive">
                    {
                        `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        		m[i].l=1*new Date();
        		for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        		k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        	ym(89981393, "init", {
            defer: true,
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true});

				window.dataLayer = window.dataLayer || [];
				function gtag() {dataLayer.push(arguments); }
				gtag('js', new Date());
				gtag('config', 'G-X9R96DCG15');
				`
                    }
                </Script>

                <noscript>
                    <div style={{ position: 'fixed', left: '0px', top: '0px', height: '100vh', width: '100%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h2>
                            Включите JavaScript
                        </h2>
                        <img src="https://mc.yandex.ru/watch/89981393" style={{ position: 'absolute', left: '-999px' }} alt="" />
                    </div>
                </noscript>

                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X9R96DCG15"></Script>
            </body>
        </Html>
    )
}