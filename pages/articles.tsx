import ArticlesPage from "../components/articlesPage/ArticlesPage";
import MainSection from "../components/mainSection/MainSection";
import SubscribeForm from "../components/subscribeForm/SubscribeForm";
import Support from "../components/support/Support";
import getArticleData from "../utils/getArticleData";

export const articles = [
  "breadth-first-search",
  "knn",
  "cli-game",
  "pi-day",
  "dna-analysis",
  "mandelbrot",
  "complex-numbers",
  "naive-bayes",
];

export default function Articles() {
  return (
    <>
      <MainSection>
        <ArticlesPage
          articles={articles.map((article) => getArticleData(article, false))}
        />
        <Support />
        <SubscribeForm />
      </MainSection>
    </>
  );
}
