import Head from 'next/head'

import GlobalStyles from '~/styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Boilerplate full</title>
        <link rel='shortcut icon' href='' />
        <link rel='apple-touch-icon' href='' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='description' content='description content' />
        <meta name='author' content='ldantas-s' />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
