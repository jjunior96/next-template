import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/globals';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>App Name</title>
        <link rel="shorcut icon" href="/img/bg.png" />
        <link rel="apple-touch-icon" href="/img/bg.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="App Name" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default App;
