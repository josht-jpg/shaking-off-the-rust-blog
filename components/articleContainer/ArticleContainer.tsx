import SubscribeForm from "../subscribeForm/SubscribeForm";
import Support from "../support/Support";
import styles from "./ArticleContainer.module.scss";

const ArticleContainer = ({ article }) => {
  return (
    <div className={styles.container}>
      {!!article && (
        <>
          <h3 className={styles.title}>{article.title}</h3>
          {<h3 className={styles.date}>{article.date}</h3>}
          <img
            className={styles.thumbnail}
            src={article.thumbnail}
            alt={`Thumbnail for ${article.title}`}
          />
          <div
            style={{
              marginTop: "1rem",
              fontWeight: "bold",
              opacity: "0.8",
              fontSize: "1.2rem",
            }}
          >{`Difficulty: ${article.difficulty}`}</div>
          <div className={`${styles.articleContent} content`}>
            {article.jsx}
          </div>
          <div style={{ width: "100%" }}>
            <hr />
            <Support />
            <SubscribeForm />
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleContainer;
