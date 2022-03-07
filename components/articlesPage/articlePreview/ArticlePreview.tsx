import Link from "next/link";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { MAIN_ORANGE } from "../../../constants/styleConstants";
import styles from "./ArticlePreview.module.scss";

const ArticlePreview = ({ article, width, marginBottom }) => {
  const [isHover, setIsHover] = useState(false);

  const getMarginBottom = () => (!!marginBottom ? marginBottom : "3.75rem");

  return (
    <Link href={`/articles/${article.extension}`}>
      <div
        className={styles.container}
        style={{
          marginBottom: getMarginBottom(),
          width,
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div style={{ marginLeft: "12px" }}>
          <h3
            className={styles.title}
            style={{
              color: isHover && MAIN_ORANGE,
            }}
          >
            {article.title}
          </h3>
          <p style={{ marginTop: "7px" }}>{article.description}</p>
          <p
            style={{ marginTop: "7px" }}
          >{`Difficulty: ${article.difficulty}`}</p>
          <p style={{ marginBottom: "0px" }}>
            Read{" "}
            <BsArrowRightShort
              className={styles.readMoreIcon}
              style={{ marginLeft: isHover && "1rem" }}
            />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticlePreview;
