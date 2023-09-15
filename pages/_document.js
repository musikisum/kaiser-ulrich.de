import Footer from './components/footer';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
