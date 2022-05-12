import { MAIN_ORANGE } from "../../constants/styleConstants";
import ArticlePreview from "./articlePreview/ArticlePreview";
import styles from "./ArticlesPage.module.scss";
import Image from "next/image";
import useIncrementViews from "../../hooks/useIncrementViews";

const ArticlesPage = ({ articles }) => {
  useIncrementViews("main");

  return (
    <div style={{ margin: "auto" }}>
      <div className={styles.articlesContainer}>
        <div style={{ margin: "auto" }}>
          <Image
            src={"/rustacean-orig-noshadow.png"}
            alt={"Rust Mascot"}
            height={60}
            width={100}
          />
        </div>
        <p style={{ fontSize: "1.11rem", fontWeight: "bold" }}>
          {`Hey, welcome to `}
          <i>{"Shaking off the Rust"}</i>
          {`. This blog is a series of exercises with the Rust programing language. The purpose of the series is to improve both my and my dear reader’s abilities with Rust by building things. Plus, by actually building stuff, we'll learn about an array of technological concepts in the process.`}
        </p>

        <h1>Posts</h1>

        {articles.map((article, index) => (
          <div
            key={`article-preview-${index}`}
            style={{
              marginTop: index === 0 ? "0.25rem" : "4rem",
              padding: "1rem",
              border: `2px solid ${MAIN_ORANGE}`,
              borderRadius: "7px",
            }}
          >
            <ArticlePreview article={article} width="35vw" marginBottom="8px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
