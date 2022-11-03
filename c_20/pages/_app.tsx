import Head from 'next/head';
import { Header } from '../components/Header';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
