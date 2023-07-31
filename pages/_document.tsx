import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="ru">
            <Head />
            <body>
                <Main />
                <NextScript />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(89981393, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
              `,
                    }}
                />
                <noscript>
                    <div>
                        <img src="https://mc.yandex.ru/watch/12345678" style={{ position: 'absolute', left: '-9999px' }} alt="" />
                    </div>
                </noscript>

                <Script src="https://www.googletagmanager.com/gtag/js?id=G-X9R96DCG15" />
                  <Script id="google-analytics">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-X9R96DCG15');
                    `}
                  </Script>
            </body>
        </Html>
    )
}
