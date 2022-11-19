import Head from "next/head";
import { Header, Footer } from "components";

export const Layout = ({ children, title = "Lulu Chen" }) => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh"}}>
      <Head>
        <title>{`${title}`}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Lulu Chen description" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content={`https://good-note.tcstock.com.tw`} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{flex: "1"}}>
        {children}
      </div>
      <Footer />
    </div>
  );
};