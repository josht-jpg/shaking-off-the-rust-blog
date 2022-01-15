import { FaHourglassHalf } from "react-icons/fa";
import DnaSearch from "../articles/DnaSearch";
import SubscribeForm from "../subscribeForm/SubscribeForm";
import styles from "./ArticleContainer.module.scss";

const ArticleContainer = ({ article }) => {
  return (
    <div className={styles.container}>
      {article && (
        <>
          <h3 className={styles.title}>{article.title}</h3>
          {/* <h3 className={styles.description}>{article.description}</h3> */}
          <img
            className={styles.thumbnail}
            src={article.thumbnail}
            alt={`Thumbnail for ${article.title}`}
          />
          {/* <h3 className={styles.readTime}>
            <FaHourglassHalf className={styles.readTimeIcon} />
            {article.readTime}
      </h3>*/}
          <div className={`${styles.articleContent} content`}>
            {article.jsx}
          </div>
          <div style={{ width: "100%" }}>
            <hr />
            <SubscribeForm />
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleContainer;
