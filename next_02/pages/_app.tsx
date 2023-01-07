import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="pageWrapper">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
