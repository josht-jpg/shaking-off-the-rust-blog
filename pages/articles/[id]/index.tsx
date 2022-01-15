import MainSection from "../../../components/mainSection/MainSection";
import ArticleContainer from "../../../components/articleContainer/ArticleContainer";
import getArticleData from "../../../utils/getArticleData";

const articlePage = ({ article }) => {
  return (
    <MainSection>
      <ArticleContainer article={getArticleData(article)} />
    </MainSection>
  );
};

export default articlePage;

export async function getStaticPaths() {
  const paths = ["dna-analysis", "naive-bayes", "breadth-first-search"].map(
    (a) => ({
      params: { id: a },
    })
  );

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  return {
    props: { article: context.params.id },
  };
}
