import MainSection from "../../../components/mainSection/MainSection";
import ArticleContainer from "../../../components/articleContainer/ArticleContainer";
import getArticleData from "../../../utils/getArticleData";
import { useContext } from "react";
import {
  GraphAnalysisTypeContext,
  GraphAnalysisTypes,
} from "../../../context/GraphAnalysisTypeProvider";

export enum ArticleExtensions {
  DNA = "dna-analysis",
  NAIVE_BAYES = "naive-bayes",
  BFS = "breadth-first-search",
  COMPLEX_NUMBERS = "complex-numbers",
  MANDELBROT = "mandelbrot",
}

interface IProps {
  article: string;
}

const ArticlePage: React.FC<IProps> = ({ article }) => {
  const { setGraphAnalysisType } = useContext(GraphAnalysisTypeContext);

  switch (article) {
    case ArticleExtensions.BFS:
      setGraphAnalysisType(GraphAnalysisTypes.BFS);
      break;
    default:
      break;
  }

  return (
    <MainSection>
      <ArticleContainer article={getArticleData(article)} />
    </MainSection>
  );
};

export default ArticlePage;

export async function getStaticPaths() {
  const paths = [
    ArticleExtensions.DNA,
    ArticleExtensions.NAIVE_BAYES,
    ArticleExtensions.COMPLEX_NUMBERS,
    ArticleExtensions.BFS,
    ArticleExtensions.MANDELBROT,
  ].map((a) => ({
    params: { id: a },
  }));

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
