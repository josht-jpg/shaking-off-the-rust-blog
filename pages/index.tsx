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
    <MainSection>
      <ArticlesPage
        articles={articles.map((article) => getArticleData(article, false))}
      />
      <SubscribeForm />
    </MainSection>
  );
}
