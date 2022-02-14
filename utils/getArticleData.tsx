import BreadthFirstSearch from "../components/articles/BreadthFirstSearch";
import ComplexNumbers from "../components/articles/ComplexNumbers";
import DnaSearch from "../components/articles/DnaSearch";
import NaiveBayes from "../components/articles/NaiveBayes";
import { ArticleExtensions } from "../pages/articles/[id]";

const getArticleData = (
  articleExtension: string,
  includeJsx: boolean = true
) => {
  switch (articleExtension) {
    case ArticleExtensions.DNA:
      return {
        title: "DNA Analysis",
        thumbnail:
          "https://images.pexels.com/photos/5721679/pexels-photo-5721679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        date: "Febuary 2nd, 2022",
        jsx: includeJsx && <DnaSearch />,
        extension: ArticleExtensions.DNA,
        description: `Shaking off the Rust is a series of exercises with the Rust programing language. The purpose of the series is to improve both my and my dear reader’s abilities with Rust by building things. Plus, by actually building stuff, we'll learn about an array of technological concepts in the process. In this installment, we’re going to dig into complex numbers.`,
      };
    case ArticleExtensions.NAIVE_BAYES:
      return {
        title: "Naive Bayes Classifier",
        thumbnail:
          "https://images.pexels.com/photos/878167/pexels-photo-878167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "January 1st, 2022",
        jsx: includeJsx && <NaiveBayes />,
        extension: ArticleExtensions.NAIVE_BAYES,
        description: `Shaking off the Rust is a series of exercises with the Rust programing language.`,
      };
    case ArticleExtensions.BFS:
      return {
        title: "Breadth First Search",
        thumbnail:
          "https://cdn-images-1.medium.com/max/800/1*nyziGfeh2hk2cOa3FEl5xQ.png",
        date: "Febuary 2nd, 2022",
        jsx: includeJsx && <BreadthFirstSearch />,
        extension: ArticleExtensions.BFS,
        description: `Shaking off the Rust is a series of exercises with the Rust programing language. The purpose of the series is to improve both my and my dear reader’s abilities with Rust by building things.`,
      };
    case ArticleExtensions.COMPLEX_NUMBERS:
      return {
        title: "Complex Numbers",
        thumbnail:
          "https://images.pexels.com/photos/4931375/pexels-photo-4931375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Febuary 2nd, 2022",
        extension: ArticleExtensions.COMPLEX_NUMBERS,
        jsx: includeJsx && <ComplexNumbers />,
        description: `Shaking off the Rust is a series of exercises with the Rust programing language. The purpose of the series is to improve both my and my dear reader’s abilities with Rust by building things. Plus, by actually building stuff, we'll learn about an array of technological concepts in the process. In this installment, we’re going to dig into complex numbers.`,
      };
    case "mandelbrot":
      return {
        title: "Mandelbrot Set",
        thumbnail:
          "https://images.pexels.com/photos/5278835/pexels-photo-5278835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Febuary 2nd, 2022",
        jsx: includeJsx && <DnaSearch />,
        description: `Shaking off the Rust is a series of exercises with the Rust programing language. The purpose of the series is to improve both my and my dear reader’s abilities with Rust by building things. Plus, by actually building stuff, we'll learn about an array of technological concepts in the process. In this installment, we’re going to dig into complex numbers.`,
      };

    default:
      //TODO: lol c'mon
      console.log("here");
  }
};

export default getArticleData;
