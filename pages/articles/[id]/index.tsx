import MainSection from "../../../components/mainSection/MainSection";
import ArticleContainer from "../../../components/articleContainer/ArticleContainer";
import getArticleData from "../../../utils/getArticleData";
import { useContext } from "react";
import {
  GraphAnalysisTypeContext,
  GraphAnalysisTypes,
} from "../../../context/GraphAnalysisTypeProvider";
import useIncrementViews from "../../../hooks/useIncrementViews";

export enum ArticleExtensions {
  DNA = "dna-analysis",
  NAIVE_BAYES = "naive-bayes",
  BFS = "breadth-first-search",
  COMPLEX_NUMBERS = "complex-numbers",
  MANDELBROT = "mandelbrot",
  PI_DAY = "pi-day",
  KNN = "knn",
  CLI_GAME = "cli-game",
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

  useIncrementViews(article);
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
    ArticleExtensions.PI_DAY,
  ].map((extension) => ({
    params: { id: extension },
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
