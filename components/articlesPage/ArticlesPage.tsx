import { MAIN_ORANGE } from "../../constants/styleConstants";
import ArticlePreview from "./articlePreview/ArticlePreview";
import styles from "./ArticlesPage.module.scss";

const ArticlesPage = ({ articles }) => (
  <div style={{ margin: "auto" }}>
    <div className={styles.articlesContainer}>
      <p
        style={{ fontSize: "1.11rem", fontWeight: "bold" }}
      >{`Shaking off the Rust is a series of exercises with the Rust programing language. The purpose of the series is to improve both my and my dear reader’s abilities with Rust by building things. Plus, by actually building stuff, we'll learn about an array of technological concepts in the process.`}</p>
      {articles.map((article) => (
        <div
          style={{
            marginTop: "4rem",
            // boxShadow: `${MAIN_ORANGE} 0 0 2px`,
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

export default ArticlesPage;
