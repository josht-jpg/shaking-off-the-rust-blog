import { useContext } from "react";
import { IsDarkModeContext } from "../../context/IsDarkModeProvider";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const { isDarkMode } = useContext(IsDarkModeContext);

  return (
    <div
      className={styles.layout}
      style={{ color: isDarkMode ? "white" : "black" }}
    >
      {children}
    </div>
  );
};

export default Layout;
