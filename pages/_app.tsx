import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import "../styles/globals.scss";
import "../styles/fadeIn.scss";
import Footer from "../components/footer/Footer";
import { GraphAnalysisTypeProvider } from "../context/GraphAnalysisTypeProvider";
import Header from "../components/header/Header";
import {
  IsDarkModeContext,
  IsDarkModeProvider,
} from "../context/IsDarkModeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphAnalysisTypeProvider>
      <IsDarkModeProvider>
        <Layout>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </IsDarkModeProvider>
    </GraphAnalysisTypeProvider>
  );
}

export default MyApp;
