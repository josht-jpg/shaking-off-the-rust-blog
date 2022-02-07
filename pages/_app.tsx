import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import "../styles/globals.scss";
import "../styles/fadeIn.scss";
import Footer from "../components/footer/Footer";
import { GraphAnalysisTypeProvider } from "../context/GraphAnalysisTypeProvider";
import Header from "../components/header/Header";
import { IsLightModeProvider } from "../context/IsLightModeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphAnalysisTypeProvider>
      <IsLightModeProvider>
        <Layout>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </IsLightModeProvider>
    </GraphAnalysisTypeProvider>
  );
}

export default MyApp;
