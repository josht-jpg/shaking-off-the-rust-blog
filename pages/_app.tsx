import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import "../styles/globals.scss";
import "../styles/fadeIn.scss";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
