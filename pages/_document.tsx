import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
    return (
        <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/lui7cew.css"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}