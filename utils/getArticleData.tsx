import BreadthFirstSearch from "../components/articles/BreadthFirstSearch";
import ComplexNumbers from "../components/articles/ComplexNumbers";
import DnaSearch from "../components/articles/DnaSearch";
import NaiveBayes from "../components/articles/NaiveBayes";
import Mandelbrot from "../components/articles/Mandelbrot";
import PiDaySpecial from "../components/articles/PiDaySpecial";
import KNN from "../components/articles/knn/KNN";
import { ArticleExtensions } from "../pages/articles/[id]";

enum DIFFICULTY_LEVELS {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
  BEGINNER_INTERMEDIATE = "Somewhere between beginner and intermediate",
}

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
        date: "Febuary 12th, 2022",
        jsx: includeJsx && <DnaSearch />,
        extension: ArticleExtensions.DNA,
        description: `Use Rust to count nucleotide frequencies, search DNA for codons, and much more. Real cool stuff. 🤙`,
        difficulty: DIFFICULTY_LEVELS.INTERMEDIATE,
      };
    case ArticleExtensions.NAIVE_BAYES:
      return {
        title: "Naive Bayes Classifier",
        thumbnail:
          "https://images.pexels.com/photos/878167/pexels-photo-878167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "January 1st, 2022",
        jsx: includeJsx && <NaiveBayes />,
        extension: ArticleExtensions.NAIVE_BAYES,
        description: `Using Rust and machine learning, we'll prevent our inbox from getting clogged with spam such as "Free Bitcoin viagra XXX christmas deals". 🎄`,
        difficulty: DIFFICULTY_LEVELS.ADVANCED,
      };
    case ArticleExtensions.BFS:
      return {
        title: "Breadth First Search",
        thumbnail:
          "https://cdn-images-1.medium.com/max/800/1*nyziGfeh2hk2cOa3FEl5xQ.png",
        date: "Febuary 19th, 2022",
        jsx: includeJsx && <BreadthFirstSearch />,
        extension: ArticleExtensions.BFS,
        description: `You raise alpacas, and you want to find your closest LinkedIn connection that's in the market for a handsome young alpaca. We'll use Rust and Breadth First Search to figure it out. 🦙`,
        difficulty: DIFFICULTY_LEVELS.INTERMEDIATE,
      };
    case ArticleExtensions.COMPLEX_NUMBERS:
      return {
        title: "Complex Numbers",
        thumbnail:
          "https://images.pexels.com/photos/4931375/pexels-photo-4931375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "Febuary 27th, 2022",
        extension: ArticleExtensions.COMPLEX_NUMBERS,
        jsx: includeJsx && <ComplexNumbers />,
        description: `Complex numbers are simple. Let's explore them with Rust. 🌌`,
        difficulty: DIFFICULTY_LEVELS.BEGINNER,
      };
    case ArticleExtensions.MANDELBROT:
      return {
        title: "The Mandelbrot Set",
        thumbnail:
          "https://cdn-images-1.medium.com/max/800/1*kmcOTJCwZZ2QrjFnl-WhJw.jpeg",
        date: "March 6th, 2022",
        extension: ArticleExtensions.MANDELBROT,
        jsx: includeJsx && <Mandelbrot />,
        description: `Cheaper than acid. 🔮`,
        difficulty: DIFFICULTY_LEVELS.BEGINNER,
      };
    case ArticleExtensions.PI_DAY:
      return {
        title: "Pi Day Quickie: Estimating Digits of Pi",
        thumbnail:
          "https://images.pexels.com/photos/2035729/pexels-photo-2035729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        date: "March 14th, 2022",
        extension: ArticleExtensions.PI_DAY,
        jsx: includeJsx && <PiDaySpecial />,
        description: `Celebrate Pi day like a true Rustacean! 🥧`,
        difficulty: DIFFICULTY_LEVELS.BEGINNER_INTERMEDIATE,
      };
    case ArticleExtensions.KNN:
      return {
        title: "K Nearust Neighbors",
        thumbnail:
          "https://www.helloneighbor.io/assets/img/won-t-you-be-my-neighbor.jpg",
        date: "May 1st, 2022",
        extension: ArticleExtensions.KNN,
        jsx: includeJsx && <KNN />,
        description: `Won't you be my neighbor? 🏘️`,
        difficulty: DIFFICULTY_LEVELS.INTERMEDIATE,
      };
    default:
  }
};

export default getArticleData;
