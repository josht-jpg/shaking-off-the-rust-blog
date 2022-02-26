import Head from "next/head";
import ArticlesPage from "../components/articlesPage/ArticlesPage";
import MainSection from "../components/mainSection/MainSection";
import SubscribeForm from "../components/subscribeForm/SubscribeForm";
import getArticleData from "../utils/getArticleData";

export const articles = [
  "naive-bayes",
  "dna-analysis",
  "complex-numbers",
  "breadth-first-search",
];

export default function Home() {
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
      </Head>
      <MainSection>
        <ArticlesPage
          articles={articles.map((article) => getArticleData(article, false))}
        />
        <SubscribeForm />
      </MainSection>
    </>
  );
}
