import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>next portal</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
