import React from "react";
import styles from "./MainSection.module.scss";

const MainSection = ({ children }) => {
  return <div className={styles.mainSection}>{children}</div>;
};

export default MainSection;
