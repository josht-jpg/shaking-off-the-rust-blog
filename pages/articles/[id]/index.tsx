import MainSection from "../../../components/mainSection/MainSection";
import ArticleContainer from "../../../components/articleContainer/ArticleContainer";
import getArticleData from "../../../utils/getArticleData";
import { useContext } from "react";
import {
  GraphAnalysisTypeContext,
  GraphAnalysisTypes,
} from "../../../context/GraphAnalysisTypeProvider";

enum Articles {
  DNA = "dna-analysis",
  NAIVE_BAYES = "naive-bayes",
  BFS = "breadth-first-search",
  COMPLEX_NUMBERS = "complex-numbers",
}

interface IProps {
  article: string;
}

const articlePage: React.FC<IProps> = ({ article }) => {
  const { setGraphAnalysisType } = useContext(GraphAnalysisTypeContext);

  switch (article) {
    case Articles.BFS:
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

export default articlePage;

export async function getStaticPaths() {
  const paths = [
    Articles.DNA,
    Articles.NAIVE_BAYES,
    Articles.COMPLEX_NUMBERS,
    Articles.BFS,
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
