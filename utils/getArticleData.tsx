import BreadthFirstSearch from "../components/articles/BreadthFirstSearch";
import DnaSearch from "../components/articles/DnaSearch";
import NaiveBayes from "../components/articles/NaiveBayes";

const getArticleData = (articleExtension: string) => {
  switch (articleExtension) {
    case "dna-analysis":
      return {
        title: "DNA Analysis",
        thumbnail:
          "https://static.scientificamerican.com/sciam/cache/file/AC11C426-00F4-49B4-B68D2871D0F1BD65_source.jpg?w=590&h=800&394D501B-A280-4491-AF19797B0E4675FC",
        jsx: <DnaSearch />,
      };
    case "naive-bayes":
      return {
        title: "Naive Bayes Classifier",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bayes%27_Theorem_MMB_01.jpg/220px-Bayes%27_Theorem_MMB_01.jpg",
        jsx: <NaiveBayes />,
      };
    case "breadth-first-search":
      return {
        title: "Breadth First Search",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Breadth-first-tree.svg/300px-Breadth-first-tree.svg.png",
        jsx: <BreadthFirstSearch />,
      };
    default:
      console.log("here");
  }
};

export default getArticleData;
