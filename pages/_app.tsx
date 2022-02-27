import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import "../styles/globals.scss";
import "../styles/fadeIn.scss";
import Footer from "../components/footer/Footer";
import { GraphAnalysisTypeProvider } from "../context/GraphAnalysisTypeProvider";
import Header from "../components/header/Header";
import { IsLightModeProvider } from "../context/IsLightModeProvider";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shaking off the Rust</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GraphAnalysisTypeProvider>
        <IsLightModeProvider>
          <Layout>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Layout>
        </IsLightModeProvider>
      </GraphAnalysisTypeProvider>
    </>
  );
}

export default MyApp;
