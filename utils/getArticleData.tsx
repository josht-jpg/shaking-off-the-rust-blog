import BreadthFirstSearch from "../components/articles/BreadthFirstSearch";
import DnaSearch from "../components/articles/DnaSearch";
import NaiveBayes from "../components/articles/NaiveBayes";

const getArticleData = (articleExtension: string) => {
  switch (articleExtension) {
    case "dna-analysis":
      return {
        title: "DNA Analysis",
        thumbnail:
          "https://images.pexels.com/photos/5721679/pexels-photo-5721679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        jsx: <DnaSearch />,
      };
    case "naive-bayes":
      return {
        title: "Naive Bayes Classifier",
        thumbnail:
          "https://images.pexels.com/photos/878167/pexels-photo-878167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        jsx: <NaiveBayes />,
      };
    case "breadth-first-search":
      return {
        title: "Breadth First Search",
        thumbnail:
          "https://cdn-images-1.medium.com/max/800/1*nyziGfeh2hk2cOa3FEl5xQ.png",
        jsx: <BreadthFirstSearch />,
      };
    default:
      //TODO: lol c'mon
      console.log("here");
  }
};

export default getArticleData;
